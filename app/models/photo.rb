class Photo < ApplicationRecord
    has_many(
        :favorites,
        class_name: "Favorite",
        foreign_key: :photo_id,
        primary_key: :id
    )
    has_many :fans, through: :favorites, source: :user

    # active storage association
    has_one_attached :image
end
