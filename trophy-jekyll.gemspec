# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "trophy-jekyll"
  spec.version       = "0.1.0"
  spec.authors       = ["Karri Rasinmäki"]
  spec.email         = ["karri.rasinmaki@gmail.com"]

  spec.summary       = "Trophy is a blog theme for Jekyll built using HTML, Sass, and JavaScript (no jQuery). External stylesheets and libraries included are Google Fonts, Font Awesome, Normalize.CSS, Rellax, and WOW.js. Trophy is also available in Ghost."
  spec.homepage      = "https://github.com/thomasvaeth/trophy-jekyll"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
