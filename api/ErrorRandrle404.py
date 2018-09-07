import json
import tornado.web
class ErrorRandrle404(tornado.web.RequestHandler):
	"""docstring for ErrorRandrle404"""
	def prepare(self):
		self.set_status(404)
		self.write({'status': "Requisição não compreendida!"})
	def get(self,arg):
		print(arg)
		