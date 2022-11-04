# src Info

A description of each component

## App.js

Here is where the application runs (nothing awesome, right?). An important thing: you can add more matches if you want, adding
another `Board` component inside the class `boards-container`. The property `scoreBoard` could be _anything_, number; char;
name; whatever.

## Board.js

The **Board** is where the teams are playing. It contains the logic info and handle the components **Team**, **ConfigPanel**, **Timer** and **Winner**.

### Team.js

This component shows _name_ and _buttons_ for handling the score _points_, and also the _points_.

### ConfigBoard.js

Here you can change the team names and the maximal score of the match. Down there are two buttons, one to save the changes and the other to retore them.

### Timer.js

Time handler, useful for practice time. By default are 5 minutes for practice, and down you'll find the buttons _play_, _pause_ and _stop_ to take
control of the practice time.

### ShowWinner.js

When one the teams gets the maximal score the **Winner** appears, with a reset button to restore the game and start a new match.
