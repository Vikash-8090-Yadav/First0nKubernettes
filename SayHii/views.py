from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

def Hello(request):
    return HttpResponse("<h1>Hello  ,Sucessfully deployed to k8 cluster!</h1>")
