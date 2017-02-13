# Exports
## Non-Components
+ task *Description of and links to the original user story*
+ Constants *This file is used to set default config props which are mostly used to pass classNames to children*
+ src/styles/waves.scss *Can be used to style the wave-shape button*

## Components
All Components accept standard props like className, some also take a config prop (object) to pass classNames on to children. Keys on the config object should be as shown below.
### Simon
The store and container (div) if given props will be set on that div.
### KeyBoard
The container for the audioContext and keys accepts a classnames object containing the className to apply to the children along with a function to change the className when the ai play's the key.
#### Props
+ classnames **object** *used to pass a className to the child buttons { key: 'button class-name'}*
+ ctKeys **array** *used to set control keys that the musical keys will listen to, defaults to ['h', 'j', 'k' ,'l']*

### Wave
Button for changing the oscillator's wave-shape, with the buttons value being current wave-shape.
```scss
.simon__wave {
  &[value*='sine'] {
    background-image:  url('assets/sine.svg');
  }
  &[value*="triangle"] {
    background-image: url('assets/triangle.svg');
  }
  &[value*="square"] {
    background-image: url('assets/square.svg');
  }
  &[value*="sawtooth"] {
    background-image: url('assets/saw-tooth.svg');
  }
}
```
Generic wave shapes are provided in the src/assets directory, along with a waves.scss in the src/styles

### Mode
Toggle Button for changing the difficulty setting of the game, all props are passed to the button element.
### Round
Span element that displays the current round.
### StartButton
Generic button to start the game
## ResetButton
Generic button to reset the game
## Volume
Volume controller
