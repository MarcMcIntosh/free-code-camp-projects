# Markdown Previewer
A simple react based markdown previewer writen as a (freecodecamp) [https://www.freecodecamp.com/challenges/build-a-markdown-previewer'] project.
# Non-component exports
+ task *description of the project*
# Components

## default export
Is a container element for the redux store, any props are applied to directly to the element.

## UserInput
Textarea, standard props can be applied here although onChange is already occupied by a redux action.


## Output
Iframe standard props can be apllied as required. stylesheets can be passed inorder to change the default css applied in the iframe, which will default to (https://highlightjs.org/)[https://highlightjs.org/]
### props
+ stylesheets **string||array** *array of stylesheets to inlcude in the iframe*
