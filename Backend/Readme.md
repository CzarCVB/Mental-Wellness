# Getting Started with Project Sakura (Back-End Part)

This project was created using Express.js server and used MongoDB Atlas as our database for the backend part of the application.

In the project directory, you can run:

### `npm install`

to install all the dependencies and then,

### `npm start`

to run the server!!

It runs the app in the development mode.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

Used nodemon to reload the page if you make edits.
You will also see any lint errors in the console.

### How backend is working?

After starting the server the user can send GET request and POST to the server which includes:

- /signup - SignUp as a new user
- /login - login to an existing user
- /logout - log a user out
- /blog - show the user various blogs about mental-illness stored in the database
- /blog/:id - view a particular blog post
- /payment - complete the payment for the item/items selected

A particular user can login or signup if he/she doesn't have an account. After creating an account the user session data is stored in our database for about 7 days if he/she does not logout.

When a payment is made, it gets the stripe token from the frontend and sends it to the stripe server for successful payments.

### Technologies Used

- Express.js - Create our backend framework
- MongoDB - Database
- cors - to request and receive more cross-origin permissions
- nodemon - to restart the server automatically
- passport - Authentication
- stripe - Payments
