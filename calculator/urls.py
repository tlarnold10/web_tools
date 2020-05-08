
from django.conf.urls import url

from .views import CalculatorApp

urlpatterns = [
	url(r'^$',
		CalculatorApp.as_view(),
		name='emotion_list'),
]