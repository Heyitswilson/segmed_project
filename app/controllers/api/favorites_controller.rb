class Api::FavoritesController < ApplicationController
    def create
        @favorite = Favorite.new(favorite_params)

        if @favorite.save
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def show
        @favorites = Favorite.where({user_id: params[:id]})

        if @favorites
            render :index
        else
            render json: @favorites.errors.full_messages, status: 422
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])

        if @favorite.destroy
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    private
    def favorite_params
        params.require(:favorite).permit(:photo_id, :user_id)
    end
end
