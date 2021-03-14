# Segmed Photos

[Live Demo](https://segmed.herokuapp.com/)

Welcome to Segmed's image presentation coding project! The live demo, hosted on Heroku, is posted above, so feel free to use that instead of cloning the project.


## Tech stack

* Ruby on Rails
* React/JavaScript
* PostgreSQL
* BootStrap
* AWS S3

## Version details

* Ruby version: 2.5.1
* Rails version: 5.2.4.1
* Node version: 15.3.0
* Npm version: 7.0.14


## Set up

1. Run "bundle install" and "npm install" to install dependencies.
2. Run "rails db:setup" to set up database and seed data.
3. Run "rails s" in one terminal to start server.
4. Run "npm start" in another server to run webpack.
5. Navigate to [local host](http://localhost:3000/#/) (http://localhost:3000/#/).

## Features

* User accounts for customers (including a demo account for convenience)
* Image favoriting that saves to a DB and persists after page refresh
* Debouncing to limit button clicks (prevents creating of duplicate entries in DB, prevents extra strain on backend and frontend)
