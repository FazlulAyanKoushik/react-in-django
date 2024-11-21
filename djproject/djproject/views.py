from django.shortcuts import render
import json


# Create your views here.

def index(request):
    dummy_data = {
        "message": "Hello from Django!",
        "user": {"id": 1, "name": "John Doe"},
        "items": ["item1", "item2", "item3"],
    }
    return render(request, 'index.html', {"data": json.dumps(dummy_data)})