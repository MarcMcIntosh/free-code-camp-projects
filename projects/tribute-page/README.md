# Usage
Re-usable and configurable tribute page written in response to an assignment from [FreeCodeCamp](https://www.freecodecamp.com). Most component accept a config object to set or pass attributes to children elements, attribute Props set each component are passed on to the parent element and will superseed similar parameters set in the config object.

# Exports
## Non-Components
+ task *Description of and links to the original user story*
+ Constants *This file is used to set default config props which are mostly used to pass classNames to children*

## Components
### Title
More of a detailed list with a term, description and superscript src link to the source of the info.
#### Props
```jsx
Title.propTypes = {
  term: PropTypes.string,
  desc: PropTypes.string,
  src: PropTypes.string,
  config: PropTypes.shape({
    TERM: PropTypes.shape({
      className: PropTypes.string,
    }),
    DESC: PropTypes.shape({
      className: PropTypes.string,
    }),
    SRC: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};
```
### Image
Plain image tag, pass props as required.
```jsx
<img {...props} />
```
### Quotes
Takes an array of strings (usually quotes) and returns a bullet point for each.
##### Props
```jsx
Quotes.propTypes = {
  list: PropTypes.array,
  config: PropTypes.shape({
    className: PropTypes.string,
    QUOTE: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};
```
