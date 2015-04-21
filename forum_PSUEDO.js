require fs
require express
require sqlite3
require mustache
require bodyParser
require morgan


var db = new sqlite3.Database
var app = express()


setup server and listening 

app.get("/") -> index page

app.get("/list") -> list topics it order of thier creation (primary key)

	app.get("/topic/:id") -> takes user to specified topic

		setup API for location gathering.
		setup API for html markdown formatter

		app.post("/topic/:id/createCom")  -> user posts a comment in specified topic which is accompanied by location thru API. The markdown formatter API formats the string into html markdown.
	
			app.get("/thnksCom") -> msgs user after creating comment and then redirects back to the topic.

		app.post("/topic/:id/vote") -> adds to the topics current vote count

			app.get("/thnksVote") -> displays the a "thank you" msg and displays the new vote count.


app.get("/popTops") -> get a list of the most commented topics.

app.post("/topic/createTop") -> create a new topic.
	
	app.get("/thnksTop") -> "thank you" msg for creating new topic and redirects to the app.get("/list").