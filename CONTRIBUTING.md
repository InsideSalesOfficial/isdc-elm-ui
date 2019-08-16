# Contributing

## Adding new UI modules
### Document your module
Document your module [in line with the Elm documentation format](http://package.elm-lang.org/help/documentation-format) and preview your documentation using [elm docs preview](http://package.elm-lang.org/help/docs-preview)
### Expose your module
Add your module to the "exposed-modules" array in elm-package.json
### Create a build for GitHub pages
In the root directory of the project run ```make createDocs``` and commit ./docs/elm.min.js.

## Style Guide
* Use elm format to keep consistent formatting
* Only use colors from the Isdc.Ui.Colors module
* Rather than setting properties like "font-weight", "font-size" and "letter-spacing" use typography from Isdc.Ui.Typography
