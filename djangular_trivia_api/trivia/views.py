from urllib import response
from django.shortcuts import render
import requests
from trivia.models import Question, Answer
from rest_framework import viewsets

from .serializers import QuestionSerializer


class QuestionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


def home(request):
    return render(request,'index.html',{})

def triv(request):
    #respo=requests.get('https://opentdb.com/api.php?amount=10')
    
    #trivia_questions = respo.json()['results']

    #for question in trivia_questions:
        #q = Question.objects.create(category=question['category'], question=question['question'])
        #Answer.objects.create(question=q, answer=question['correct_answer'], is_correct=True)
        #for answer in question['incorrect_answers']:
            #Answer.objects.create(question=q, answer=answer, is_correct=False)

    questions = [q.question for q in Question.objects.all()]

    return render(request,'triv.html',{questions:'q'})


