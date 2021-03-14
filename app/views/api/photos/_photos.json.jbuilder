json.extract! photo, :id
json.photoUrl url_for(photo.image)
json.favorite false
# "photoUrl" returns url_for(photo.image) as json
# "favorite" allows another function to set to true if the photo id is included in a user's favorite photos