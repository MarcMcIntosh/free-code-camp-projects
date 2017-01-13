
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

## Elements and classNames added to children of the componets are
```scss
// Display
div {
  input,
}
// ErrorMessage
div {
  button,
}
// Buttons
div {
 button.number,
 button.ans,
 button.equals,
 button.minus,
 button.plus,
 button.point,
 button.times,
 button.divide,
 button.ac,
 button.cd,
 button.mod,
}
```
