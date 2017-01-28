# Exports
## Non-Components
+ task *Description of and links to the original user story*
+ Constants *This file is used to set default config props which are mostly used to pass classNames to children*
## Components
All Components accept standard props like className, some also take a config prop (object) to pass classNames on to children. Keys on the config object should be as shown below.
### Simon
The store and container (div) if given props will be set on that div.
### KeyBoard
The container for the audioContext and keys accepts a config object containing the className to apply to the children along with a function to change the className when the ai play's the key.
####### config example from Constants
```jsx
const conf = {
  KEY: 'key',
  KEY_ACTIVE: (key, color, bool) => ((bool) ? `${key} ${color}--active` : `${key} ${color}`),
};
<KeyBoard config={conf} />
```
### Wave
Button for changing the oscillator's wave-shape, the wave shap is displayed as an svg with the className of 'wave' which can be changed by passing a config object.
```jsx
const conf = { WAVE: 'wave' };
<Wave config={conf} />
```
### Mode
Toggle Button for changing the difficulty setting of the game, all props are passed to the button element.
### Round
Span element that displays the current round, props go on the span element no-config object required.
### StartStop
Play and reset button, props are set on the button element, the svg icons can be have a className applied by passing config object.
```jsx
const conf = { PLAY: 'play' STOP: 'stop'};
<StartStop config={conf} />
```
## Volume,
Volume controller
```jsx
const conf = { INC: 'up', DEV: 'down' };
<Volume config={conf} />
```
