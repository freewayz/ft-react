from rest_framework.routers import DefaultRouter
from .apis import QuestionResource
router = DefaultRouter()

router.register(
    'questions',
    viewset=QuestionResource,
    base_name='questions'
)

urlpatterns = router.urls
