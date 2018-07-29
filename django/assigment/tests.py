from django.test import TestCase
from rest_framework.test import APITestCase, APIClient
import json
# Create your tests here.



class QuestionAPITestCase(APITestCase):

    
    def setUp(self):
        self.client = APIClient()
        self.url = '/v1/questions/'
        self.data = {
            "title": "This is a question",
            "description": "Some question description",
            "reviewed": False,
            "library": "Ahmedu Bello University",
            "type": "Multi Choice",
            "visibility":"Published",
            "options": [
                {
                    "answer": "The answer for the question",
                    "feedback": "Some feedback",
                    "is_correct": False
                },
                {
                    "answer": "The answer for the question",
                    "feedback": "Some feedback",
                    "is_correct": False
                },
                {
                    "answer": "The answer for the question",
                    "feedback": "Some feedback",
                    "is_correct": False
                },
                {
                    "answer": "The answer for the question",
                    "feedback": "Some feedback",
                    "is_correct": True
                }
            ]
        }
    def test_http_1_post(self):
        response = self.client.post(path=self.url, data=self.data, format='json')
        self.assertEqual(response.status_code, 201)


        
