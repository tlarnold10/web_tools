
from django.conf.urls import url

from .views import CalculatorApp, ProgressBar, covidData

urlpatterns = [
	url(r'^calculator$',
		CalculatorApp.as_view(),
		name='calculator'),
	url(r'^progress$',
		ProgressBar.as_view(),
		name='prgress_bar'),
	url(r'^covid$',
		covidData.as_view(),
		name='covid'),
]