from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import View, CreateView, DetailView

class CalculatorApp(View):
	template_name = 'calculator/calc_app.html'

	def get(self, request):
		return render(request, self.template_name)