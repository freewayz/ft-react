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
        assert response.status_code == 201


    def test_http_2_get_all(self):
        # create many
        for i in range(5):
            self.client.post(path=self.url, data=self.data, format='json')
        response = self.client.get(path=self.url, format='json')
        data = json.loads(response.content)
        assert len(data) == 5


    def test_http_3_update(self):
        response = self.client.post(path=self.url, data=self.data, format='json')
        assert response.status_code == 201
        response_data = json.loads(response.content)
        pk = response_data['id']
        # perform update 
        self.data['title'] = 'This should update'
        response = self.client.put(
            path='{}{}/'.format(self.url, pk),
            data=self.data,
            format='json'
        )
        assert response.status_code == 200
        # get the updated data

        response = self.client.get(path='{}{}/'.format(self.url, pk))
        assert response.status_code == 200
        data = json.loads(response.content)
        assert data['title'] == 'This should update'


    def test_http_4_remove(self):
        response = self.client.post(path=self.url, data=self.data, format='json')
        assert response.status_code == 201
        pk = json.loads(response.content)['id']
        response = self.client.delete(path='{}{}/'.format(self.url, pk))
        assert response.status_code == 204
        response = self.client.get(path='{}{}/'.format(self.url, pk))
        assert response.status_code == 404
    
    
    def test_http_5_wrong_data_returns_400(self):
        bad_options = [{'is_no_crect': True, 'answer': 'HThhte'}]
        self.data['options'] = bad_options
        response = self.client.post(path=self.url, data=self.data, format='json')
        assert response.status_code == 400





        
