from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Post, ViewCount
from apps.category.models import Category

from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

from django.db.models.query_utils import Q


class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.objects.all().exists():

            posts = Post.objects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)
            
            return paginator.get_paginated_response({'posts':serializer.data})
        else:

            return Response({'error':'no post found'}, status=status.HTTP_404_NOT_FOUND)


class ListPostByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.objects.all().exists():
            
            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)

            print(slug)

            posts = Post.objects.order_by('-published').all()

            
            #if category.parent:
            #    posts = posts.filter(category=category)

            #else:
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)

            else:
                sub_categories = Category.objects.filter(parent=category)

                filtered_categories = [category]
                
                for cat in sub_categories:
                    filtered_categories.append(cat)
                print(filtered_categories)
                    
                filtered_categories = tuple(filtered_categories)

                posts = posts.filter(category__in=filtered_categories)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)
            #return Response({'success':'success'}, status=status.HTTP_200_OK)
            return paginator.get_paginated_response({'posts':serializer.data})
        else:

            return Response({'error':'no post found'}, status=status.HTTP_404_NOT_FOUND)

class PostDetailView(APIView):
    def get(self, request, slug, format=None):
        if Post.objects.filter(slug=slug).exists():

            post = Post.objects.get(slug=slug)
            serializer = PostSerializer(post)

            address = request.META.get('HTTP_X_FORWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')
            
            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                post.views += 1
                post.save()

            return Response({'post':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'Post doesnt exists'}, status=status.HTTP_404_NOT_FOUND)

class SearchBlogView(APIView):
    def get(self, request, format=None):
        search_term = request.query_params.get('s')
        matches = Post.objects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(category__name__icontains=search_term)            
        )
        serializer = PostListSerializer(matches, many=True)
        return Response({'filtered_post':serializer.data}, status=status.HTTP_200_OK)
    