// we need express 
const express = require("express");
// we need to create an app where everything will run from 
const app = express();
//we are going to set up a port 
const port = 8000; 

// YOU NEED TO HAVE THESE LINES OF CODE FOR POST REQUESTS TO WORK
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//this is going to be my example database
const users =[
    {
        name: "Tim",
        favFood: "Sushi"
    },
    {
        name: "Nia",
        favFood: "Cheese"
    }
    
]


app.get("/", (req, res) => {
    res.json({
        message:"Hello backend"
    });
})

app.get("/example", (req, res) => {
    res.json({
        message:"example"
    })
})

app.get("/users", (req, res) => {
    res.json({
        users
    })
})

//Let's make a POST request 
app.post("/post", (req, res) => {
    console.log(req.body);
    users.push(req.body) // adds postman input to const users 
    // this must be here or postman hangs forever
    // res.json(req.body) <-- just info from post man 
    res.json(users); // <-- all users includes added in postman 
})

app.get("/users/:id", (req, res) => {
    res.json(users[req.params.id])
})


// we need to start our server 
app.listen(port, () => console.log(`Running on port ${port}`));
//to have app restart with changes and not have to manually start and stop every change 
// use --> nodemon server.js