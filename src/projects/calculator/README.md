
## Use
replace index with the name and/or location pf this project.
```jsx
import Calculator, { Display, ErrorMessage, Buttons } from './index';
```
All components can handle a className and standard attributes.
i.e:
```jsx
<Display tabIndex="0" />
```

## Elements and classNames added to the top element in the component this.following structure can be used to access the children elements.

```scss
// Display
div > input,
// ErrorMessage
div > button,
// Buttons
table > tbody > tr > td > button {
  .number,
 .ans,
 .equals,
 .minus,
 .plus,
 .point,
 .times,
 .divide,
 .ac,
 .cd,
 .mod,
}
```
