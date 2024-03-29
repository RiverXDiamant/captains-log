# Captains Log

Full CRUD app with a mongo database

Practice What You Learned


The Captain's Log


Prerequisites

    JavaScript
    Express / Node
    Mongo / Mongoose

Multi-part/Multi-day Lab

Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:

    to align with the content of lecture
    to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part

If you finish lab early consider:

    adding some CSS and practice styling your app
    try working with the date object! Try to make it look human readable in HTML. It's tricky! A Hint 


    try working through the next section of the lab before it is covered in lecture - see what you can figure out
    SUPER BONUS - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' the the post, the data should be related in some way. Do your own research on how to set up a one-to-manyrelationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documents, Google.

Set up

Let's keep track of our Restful Routes as we build out our app. Copy/paste this table into a fresh file, open an excel/sheets spreadsheet or draw on a piece of paper. Feel free to add more columns and notes to help you put it all together.

Index, New and Create has been completed for you.

Restful Routes
# 	Action |	URL |	HTTP Verb 	jsx |view filename |	mongoose method
1 	Index 	/logs/ 	GET 	Index.jsx 	Log.find()
<br />
2 	Show 
<br />
3 	New 	/logs/new 	GET 	New.jsx 	none
<br />
4 	Create 	/logs/ 	POST 	none 	Log.create(req.body)
<br />
5 	Edit 	
<br />
6 	Update 	
<br />
7 	Destroy 	
<br />

    In your student_labs folder
    mkdir captains_log
    cd captains_log
    create a new express app
    
New

    create a new route in your server.js - be sure to follow the Restful convention
    just have it res.send('new') as the response for now
    make a views directory
    install express-react-views react react-dom
    touch views/New.jsx
    Create the view, it should contain a form with the following:
    form with action="/logs"and method="POST"
    input type text for a title
    input type textarea for an entry
    input type checkbox for shipIsBroken
    input type submit
    change your res.send to res.render this view
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to

Create

    create a create route in your server.js- be sure to follow the Restful convention
    just have it res.send('received') as the response for now
    use and configure body-parser in your server.js (note, this package was once separate, but has been added back in to express more details 


    check to make sure it works by changing the res.send from a string to sending the req.body- it should send the data you inputted to your newform
    upgrade your data
    change the input of your checkbox to be true/false rather than on
    now when you check your res.send(req.body) you should see true/false rather than 'on/off' - the rest of your data should stay the same
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to

Mongo

    install mongoose and configure it in your server.js

Logs Model

    mkdir models
    touch models/logs.js
    Create the logs schema
    title: string
    entry: string

    shipIsBroken: Boolean (bonus: set a default to true)

        Super bonus:
            as a second argument to mongoose.Schema(), add { timestamps: true }

Upgrade your Create Route

    upgrade your code to create your log in MongoDB
    have your route redirect to the show page after create
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
    Stretch: make a seed file and seed it
    
Index Route

    In server.js make an index route, be sure to follow the Restful convention
    first, just test it by having it res.send('index')
    Don't forget to fill out your Restful table!
    create Index.jsx and change your res.send to res.render this page
    upgrade your route and jsx to render all the logs in your database, just make an unordered list of the titles for now
    Add a link to the create page
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to

Show Route

    Fill out your Restful table
    In server.js make a show route, be sure to follow the Restful convention
    create a mongo query and res.send your data as a string
    upgrade your Index.jsx so that each title links to its show page
    Create a Show.jsx and add HTML
    show the title
    show the entry
    show whether the ship is broken or not
    add a link back to the index page
    
    bonus:
    if you had added time stamps to your model, display the date the entry was created
    upgrade your res.send to a res.render of your Show.jsx
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
    
Delete Route

    Fill out your Restful table
    in your Index.jsx, add a delete form
    install and configure method-override
    upgrade your delete form to have the appropriate action and method
    make your delete route in your server.js
    make your delete route delete your log and redirect back to your index route
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to

Edit Route

    Fill out your Restful table
    in your Index.jsx, add a link to your edit route
    create your edit route in your server.js
    create your Edit.jsx
    test it to make sure it works as expected (be sure to populate your form with your log's data)
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
    
Update Route

    Fill out your Restful table
    upgrade your Edit.jsx form to have the appropriate action and method
    create your PUT route
    First, just have it res.send the updated log and check it is as expected
    change the res.send to a res.redirect to your index page
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to

Router

    mkdir controllers
    touch controllers/logs.js
    work on refactoring your code so your logs routes are in your controller file, rather than in server.js

Bonus

    The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called food logs
    build out the 7 restful routes for food logs, include a new model with whatever properties make sense
    make a seed file and seed it
    have your update route redirect to the show page of the log that was edited
    research res.redirect('back')
    create a seed file and seed your database
    work on your css, make this Captain's Log look awesome!
    if you have timestamps, figure out how to edit/display the edited date
