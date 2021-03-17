# Segmed Photos

[Live Demo](https://segmed.herokuapp.com/)

Welcome to Segmed's image presentation coding project!

![Toasty Homepage](https://segmed-dev.s3-us-west-1.amazonaws.com/personal-site/display.png)


## Tech stack

* Ruby on Rails
* React/JavaScript
* PostgreSQL
* BootStrap
* AWS S3

## Features

* Session controllers to manage user accounts
* Favorite associations between photos and users to save a user's favorite photos
* Debouncing to limit button clicks (prevents creating of duplicate entries in DB, prevents extra strain on backend and frontend)

## Schemas

### Users
* Email: string
* Name: string
* Password_digest: string
* Session_token: string

### Photos
* Image: AWS S3's attached image

### Favorites
* Photo_id: integer
* User_id: integer
