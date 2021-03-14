# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Favorite.delete_all
Photo.delete_all
User.delete_all

link4 = open("https://segmed-dev.s3-us-west-1.amazonaws.com/p4.jpg")
link3 = open("https://segmed-dev.s3-us-west-1.amazonaws.com/p3.jpg")
link2 = open("https://segmed-dev.s3-us-west-1.amazonaws.com/p2.jpg")
link1 - open("https://segmed-dev.s3-us-west-1.amazonaws.com/p1.jpg")

user1 = User.create({name: 'Wilson', email: 'wilson@gmail.com', password: 'password'})

photo4 = Photo.create()
photo3 = Photo.create()
photo2 = Photo.create()
photo1 = Photo.create()

favorite1 = Favorite.create({photo_id: 1, user_id: 1})
favorite3 = Favorite.create({photo_id: 3, user_id: 1})


photo4.photo.attach(io: link4, filename: 'p4.jpg')
photo3.photo.attach(io: link3, filename: 'p3.jpg')
photo2.photo.attach(io: link2, filename: 'p2.jpg')
photo1.photo.attach(io: link1, filename: 'p1.jpg')