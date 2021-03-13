class User < ApplicationRecord
    attr_reader :password

    validates :name, :password_digest, :session_token, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    # allow nil because on login, password_digest is being validated, not password

    after_initialize :ensure_session_token

    has_many(
        :favorites,
        class_name: "Favorite",
        foreign_key: :user_id,
        primary_key: :id
    )

    has_many :favorite_photos, through: :favorites, source: :photo

    # find user on login
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user 
        user.is_password?(password) ? user : nil
    end

    # set user password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    # check password on login
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end 

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end
