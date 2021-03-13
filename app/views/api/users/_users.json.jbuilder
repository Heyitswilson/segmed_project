json.extract! user, :id, :email, :name
json.set! :favorites do
    user.favorites.each do |favorite|
        json.set! favorite.photo_id do 
            json.extract! favorite, :id
        end
    end
end

# {
#     email: "test@gmail.com",
#     favorites: {
#         1: {id: 1}, # the key is the photo_id
#         2: {id: 2} # id is the favorite object's id
#     }, 
#     id: 1,
#     name: "test"
# }