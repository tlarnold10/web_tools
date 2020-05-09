from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import View, CreateView, DetailView

import random
import requests
import pandas as pd
import pdb

class CalculatorApp(View):
	template_name = 'calculator/calc_app.html'

	def get(self, request):
		return render(request, self.template_name)

class ProgressBar(View):
	template_name = 'calculator/progress.html'
	progress = random.randint(1, 100)
	total = 100
	context = {'progress': progress, 'total':total}

	def get(self, request):
		return render(request, self.template_name, self.context)

class covidData(View):
	url = "https://covidtracking.com/api/v1/states/daily.json"
	response = requests.get(url)
	json_data = response.json()
	template_name = 'calculator/covid.html'
	covid_df = pd.DataFrame(json_data)
	pdb.set_trace()
	context = {'data':covid_df}
	
	def get(self, request):
		return render(request, self.template_name, self.context)