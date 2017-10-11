# Usage

## Components
See app.jsx for an example.
### Clock
Time Display, standard props can be applied.
### PlayButton, StopButton ResetButton
Control Buttons
### ShortBreak, LongBreak, SetSession, SetRounds
Container from a ranged input, accepts a classnames prop to pass a class name to the child component. ie
```jsx
<ShortBreak className="pomodoro__slider" classnames={{ input: 'mdc-range-slider mdc-range-slider--primary' }} />
```
