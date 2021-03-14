class RemovePhotoUrlFavorite < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :photoUrl
    remove_column :photos, :favorite
  end
end
