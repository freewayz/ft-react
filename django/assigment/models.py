from djongo import models
import uuid
# Create your models here

class Option(models.Model):
    answer = models.CharField(max_length=200)
    feedback = models.CharField(max_length=200, null=True)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.answer


    class Meta:
        abstract = True


class Question(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    options = models.ArrayModelField(
        model_container=Option
    )
    library = models.CharField(max_length=120)
    reviewed = models.BooleanField(default=False)
    visibility = models.CharField(max_length=30, null=True, default='Draft')
    type = models.CharField(max_length=20, default='Text')

    objects = models.DjongoManager()


    class Meta:
        #auto_field = 'uid'
        db_table = 'questions'


