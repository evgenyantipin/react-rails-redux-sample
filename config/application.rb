require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReactRailsReduxSample
  class Application < Rails::Application
    # Use the responders controller from the responders gem
    config.app_generators.scaffold_controller :responders_controller
    config.assets.paths << Rails.root.join("node_modules")
    config.react.addons = true
    config.browserify_rails.commandline_options = "-t [ babelify --presets [ es2015 react stage-0 ] ]"
  end
end
