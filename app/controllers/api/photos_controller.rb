class Api::PhotosController < ApplicationController
    def index
        if Photo.all
            @photos = Photo.all
            render :index
        else
            render json: @photos.errors.full_messages, status: 422
        end
    end
end
