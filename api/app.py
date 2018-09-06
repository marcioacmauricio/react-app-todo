import sys
import tornado.ioloop
import tornado.web
from ToDo import ToDo
if __name__ == "__main__":
	application = tornado.web.Application([
		(r'/ToDo/(\d+$)', ToDo),
		(r'/ToDo$', ToDo)
	], debug=True)    
	application.listen(8081)
	tornado.ioloop.IOLoop.instance().start()