@photos.each do |photo|
    json.set! photo.id do
        json.partial! 'photos', photo: photo
    end
end