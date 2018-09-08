import sys
import tornado.ioloop
import tornado.web
from ToDo import ToDo
from ErrorRandrle404 import ErrorRandrle404
if __name__ == "__main__":
	application = tornado.web.Application([
		(r'/ToDo$', ToDo),
		(r'/ToDo/(\d+$)', ToDo),
		(r"(.*)", ErrorRandrle404),
	], debug=True)    
	application.listen(8081)
	tornado.ioloop.IOLoop.instance().start()