import json
import tornado.web
class ToDo(tornado.web.RequestHandler):
	def initialize(self):
		self.ToDo = {
			1: {
				'id': 1,
				'title': "Primeira tarefa",
				'description': "Desrição da tarefa"
			}
		}
		self.data = None
		if bool(self.request.body):
			self.data = json.loads(self.request.body.decode('utf-8'))
		self.set_header('Content-Type', 'application/json; charset=utf-8')
		self.set_header('Access-Control-Allow-Origin', '*')
		self.set_header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,PATCH,DELETE')
		self.set_header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')		

	def get(self, item_id=None, edit=False):
		self.write(self.ToDo.get(int(item_id)))
	def put(self, item_id):
		self.write(self.ToDo.get(item_id))

	def post(self,item_id):
		data = self.get_argument('item_data')
		self.ToDo.update({data.get('id'): data})
		self.write(item_id)
	def delete(self, item_id):
		del self.ToDo[item_id]
		self.write(str(item_id))
	def options(self,item_id):
		pass