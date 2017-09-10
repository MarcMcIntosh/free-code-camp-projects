
Generic Wikipedia Search application built with react / redux in response to user-stories from [FreeCodeCamp](https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer).

# Usage

## Components
Exported components are
default export is a element for the redux store and children
other exported components are RandomWiki, List, ListItem and SearchBar.

### RandomWiki
Href to a random wiki page
#### props
+ children **node** *children should inform the user of the components function defaults to "Random Wikipedia Article"*

### List
Container for the results of the search.
#### props
+ children **element** *The child element will be cloned and be given title, extract and pageid props. The exported ListItem can be used or an alternative child can be made but must accept the same props*

### ListItem
Generic Container for items returned by the search, this can be replaced with an alternative but must accept the same props.
#### props
+ title **string** *title of the returned article*
+ extract **string** *short extract from the article*
+ pageid **string or number** *used to link to the external article*

### SearchBar
User Input for the search
accpets a classnames props to pass classnames to children.
#### props
+ classnames **object** *classnames object of the following shape*
```jsx
const classnames = {
  button: '',
  label: '',
  input: '',
};
```
