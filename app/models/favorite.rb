class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :photo
    # will have user_id and photo_id columns

end
