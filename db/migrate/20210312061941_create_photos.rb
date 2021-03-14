class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :photoUrl
      t.boolean :favorite, default: false
      t.timestamps
    end
  end
end
