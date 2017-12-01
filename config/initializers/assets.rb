# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Main
Rails.application.config.assets.precompile += %w( phaserjs/Main.js )

# Game assets
Rails.application.config.assets.precompile += %w( phaserjs/World.js )
Rails.application.config.assets.precompile += %w( phaserjs/UI.js )
Rails.application.config.assets.precompile += %w( phaserjs/Interaction.js )
Rails.application.config.assets.precompile += %w( phaserjs/Player.js )
Rails.application.config.assets.precompile += %w( phaserjs/Dino.js )

# States
Rails.application.config.assets.precompile += %w( phaserjs/states/Boot.js )
Rails.application.config.assets.precompile += %w( phaserjs/states/Preloader.js )
Rails.application.config.assets.precompile += %w( phaserjs/states/MainMenu.js )

# Helpers
Rails.application.config.assets.precompile += %w( phaserjs/helpers/GlobalHelper.js )
Rails.application.config.assets.precompile += %w( phaserjs/helpers/WorldChooserHelper.js )

# Worlds
Rails.application.config.assets.precompile += %w( phaserjs/worlds/WorldChooser.js )
Rails.application.config.assets.precompile += %w( phaserjs/worlds/World1.js )
Rails.application.config.assets.precompile += %w( phaserjs/worlds/World2.js )
Rails.application.config.assets.precompile += %w( phaserjs/worlds/World3.js )
Rails.application.config.assets.precompile += %w( phaserjs/states/Game.js )

# Home page
Rails.application.config.assets.precompile += %w( home/home.js )

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
