import json
import tornado.web
ToDoItems = {}
class ToDo(tornado.web.RequestHandler):
	def initialize(self):
		self.ToDo = {}
		self.data = None
		if bool(self.request.body):
			self.data = json.loads(self.request.body.decode('utf-8'))
		self.set_header('Content-Type', 'application/json; charset=utf-8')
		self.set_header('Access-Control-Allow-Origin', '*')
		self.set_header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,PATCH,DELETE')
		self.set_header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')		
	# view item/ itens
	def get(self, item_id=None, edit=False):
		self.write(ToDoItems.get(int(item_id)))
	# create item
	def put(self, item_id = None):
		if bool(item_id):
			newId = int(item_id)
		else:
			newId = len(ToDoItems) 
			if len(ToDoItems) == 0:
				newId = 1
			else:
				newId = list(ToDoItems.items())[-1][0] + 1

		print(newId)
		ToDoItems[newId] = self.data
		ToDoItems[newId]['id'] = newId
		self.write(ToDoItems)
	# upate item
	def post(self):
		self.write(ToDoItems)
	# delete item
	def delete(self):
		id = int(self.data.get('id'))
		Item = ToDoItems[id]
		del ToDoItems[id]
		self.write(Item)
	def options(self,item_id = None):
		pass