@favorites.each do |favorite|
    json.set! favorite.photo_id do
        json.partial! 'favorites', favorite: favorite
    end
end