# Contributing

## Adding new UI modules
### Create a Story
In the ./stories/src/Stories folder you can create a new app to be able to view your UI functions. This is helpful both for development and for others to see a UI function in action. Use Base.story to format your story so it will include a heading with a type definition, an example and a code snippet.
### Document your module
Document your module [in line with the Elm documentation format](http://package.elm-lang.org/help/documentation-format) and preview your documentation using [elm docs preview](http://package.elm-lang.org/help/docs-preview)
### Expose your module
Add your module to the "exposed-modules" array in elm-package.json

## Style Guide
* Use elm format to keep consistent formatting
* Only use colors from the Isdc.Ui.Colors module
* Rather than setting properties like "font-weight", "font-size" and "letter-spacing" use typography from Isdc.Ui.Typography

## Versioning
When making a change or adding a feature to the Ui Library make sure to keep the version up to date in the elm-package.json file. To find out whether your changes are a a breaking change, minor change or a patch run the following
```
elm package diff
```
You can then run the following command for the elm-package.json file to be automatically updated.
```
elm package bump
```
## Publishing updates
An administrator can publish updates by pushing a new git tag based on the new version number and running ```elm package publish ``` as explained in [the elm package README](https://github.com/elm-lang/elm-package)