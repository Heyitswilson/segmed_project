class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login!(@user)
            # for testing
            # render json: current_user
            
            # for production
            render "/api/users/show"
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy 
        @user = current_user

        if @user
            logout!
            render json: ["Logout"]
        else
            render json: ["Not signed in"], status: 404
        end
    end
end
