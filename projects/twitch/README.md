Generic fulfilment of the user-stories from [FreeCodeCamp Twitch-TV](https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api). Basically takes a predefined list of user accounts and checks their status.

# Usage
Container is an element that takes standard attributes.
Header and UserList can take and additional props to pass classNames to internal children. See below for more info.
```jsx
const app = () => (<Container>
  <Header />
  <UserList />
</Container>);
```
## Components
### Header
#### props
+ className **string** *class applied to the header*
+ classnames **object** *object containing the classnames to be used on children elements*
+ classnames.button **string** classname applied to each button
```jsx
<Header className="mdc-card__actions mdc-card__actions--vertical" classnames={{
  button: 'mdc-button mdc-button--raised mdc-button--compact twitch-tv__button',
}} />
```
### UserList
+ className **string** *class applied to the top level element*
+ classnames **object** *classnames to apply to child components*
```jsx
const cnames = {
  item: 'mdc-card twitch-tv__users--item',
  main: 'mdc-card__horizontal-block',
  header: 'mdc-card__primary',
  name: 'mdc-card__title mdc-card__title--large',
  game: 'mdc-card__subtitle',
  status: 'mdc-card__supporting-text',
  image: 'mdc-card__media-item',
};
const UL = () => (<UserList
    className="twitch-tv__users"
    classnames={cnames}
/>
```
