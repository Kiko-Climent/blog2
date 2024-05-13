from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model=Post
        fields=[
            'id',
            'name',
            'slug',
            'thumbnail',
            'description',
            'content',
            'time_read',
            'published',
            'views',
        ]

