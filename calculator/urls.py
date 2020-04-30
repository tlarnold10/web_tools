
from django.conf.urls import url

from .views import EmotionList

urlpatterns = [
	url(r'^$',
		EmotionList.as_view(),
		name='emotion_list'),
]