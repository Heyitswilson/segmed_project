# Segmed Photos

[Live Demo](https://segmed.herokuapp.com/)

Welcome to Segmed's image presentation coding project!

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

## Implementations

### O(1) Time Complexity
To maintain O(1) access to data, I used jBuilder to return a user's list of favorite photos as: 
```javascript
  { 
    photo_id: favorite_information, 
    photo_id: favorite_information 
  } 
```
rather than the typical: 
```javascript
  {
    favorite_association_id: favorite_information, 
    favorite_association_id: favorite_information 
  }
```
This allows me to check whether a photo is among a user's favorites with O(1) time complexity.

### Database Space Efficiency 
To account for app scaling, I stored images in AWS S3 and saved the image URL as a property in the Photo model. This helps with keeping database costs low, since images take up lots of space compared to a URL string. 

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
