from rest_framework import viewsets,serializers
from rest_framework.response import Response
from .models import Question, Option


class OptionSerializer(serializers.Serializer):
    answer = serializers.CharField()
    feedback = serializers.CharField()
    is_correct = serializers.BooleanField()


class QuestionSerializer(serializers.ModelSerializer):
    options = serializers.ListField(child=OptionSerializer())

    class Meta:
        model =Question
        fields = '__all__'


    def validate_options(self, value):
        if not value:
            return []

        options = []
        for opt in value:
            options.append(
                Option(**opt)
            )

        return options





class QuestionResource(viewsets.ModelViewSet):

    queryset=Question.objects.all()
    serializer_class = QuestionSerializer


    def createdd(self, request):
        s_data = self.serializer_class(data=request.data)
        if s_data.is_valid():
            s_data.save()

            return Response(data={'message': 'New Question created '}, status=200)
        return Response(data=s_data.errors, status=400)


