## Euphoria!

#### Ruby v2.3.3
#### Rails v5.1.4

Featured Gems:
* slim-rails
* bootstrap-sass
* jquery-rails
* devise
* omniauth-facebook
* omniauth-google-oauth2
* mysql2

Featured Libraries:
* [Phaser.js](http://phaser.io/)

## Setup

Create `/config/local_env.yml` and add Facebook/Google API keys
```javascript
google_api_id: {API_ID}
google_secret: {API_SECRET}
facebook_api_id: {API_ID}
facebook_secret: {API_SECRET}
```

Then add this to `application.rb`
```javascript
config.before_configuration do
    env_file = File.join(Rails.root, 'config', 'local_env.yml')
		YAML.load(File.open(env_file)).each do |key, value|
			ENV[key.to_s] = value.to_s
	end if File.exists?(env_file)
end
```
All done. :+1:
