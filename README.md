# React-Auth
An authentication and authorization - (MongoDB, Express, JWT, React, Node)



**This project is an example of most of the Auth systems out there. 
It include validation to a simple registeration via the client side together with the the server side to check any kind of bad requests.
It also offer a protective route (protected both via client and server sides ) that only a register user can access and even check there own token (to see if it valid or not).**

## Set-up
First we need to define a database to store all the users.
this project design to run with a local mondoDB comprass database so the easyest way is to use mongoDB,
but every other document oriented database that use schema is an eligible choice.

make sure you create a database and register it in the right place in the `.env` file.

you can change the JWT's secret key in `.env` too if you want (it can be anything).

## dependencies
`axios`
`concurrently`
`cors`
`nodemon`
`express`
`react-router-dom`
`dotenv`
`bcryptjs`
`jsonwebtoken`
`mongoose`
`bootstrap`
`font-awesome`
`react-router-dom`
`react-toastify`

## Available Scripts (from server directory)
**use npm i in both the client and server directory to intsall all the dependecies**

### `npm install`
install all the dependencies to run this project

### `npm start` 
defualt run of the server without save changing 

### `npm server`
run the api server and can modify and save it 
The page will reload if you make edits
You will also see any lint errors in the console.

### `npm run dev`
launch both the react and express using concurrently
this will let you explore the full app and make changes online
