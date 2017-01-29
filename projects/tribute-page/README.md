# Usage
Re-usable and configurable tribute page written in response to an assignment from [FreeCodeCamp](https://www.freecodecamp.com). Most component accept a config object to set or pass attributes to children elements, attribute Props set each component are passed on to the parent element and will superseed similar parameters set in the config object.

# Exports
## Non-Components
+ task *Description of and links to the original user story*
+ config *This file is used to set default config props which are mostly used to pass classNames to children*

## Components
## Tribute
Top level component, when used and passed a config object similar to the config object will reture a minimall implementation of the tribute.


### Title
More of a detailed list with a term, description and superscript "src" placeholder link to the source of the info.
#### Props
```jsx
Title.propTypes = {
  config: shape({
    TEXT: shape({
      TERM: string,
      DESC: string,
      SRC: string,
    }),
    TERM: shape({ className: string }),
    DESC: shape({ className: string }),
    SRC: shape({ className: string }),
  })
};
```
### Image
Plain image tag, pass config and props as required.
```jsx
const Image = ({ config, ...props}) =>(<img {...config} {...props} />);

Image.propTypes = {
  config: PropTypes.shape({
    className: PropTypes.string,
    src: PropTypes.string,
  }),
};
```
### Quotes
Takes an array of strings (usually quotes) and returns a bullet point for each.
##### Props
```jsx
Quotes.propTypes = {
  config: PropTypes.shape({
    list: PropTypes.array,
    className: PropTypes.string,
    QUOTE: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};
```
