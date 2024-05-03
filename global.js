/**
 * @format
 */

const red = '#d00000';
const orange = '#f8961e';
const yellow = '#ffee32';
const green = '#4EF500';

const derelict = 'Derelict - Automatic Eviction';
const poor =
  'Poor - Plotter has 4 weeks until reinspection with eviction if score is not improved to 6 or above.';
const average = 'Average - No action required by plotter.';
const good = 'Good - No action required by plotter.';

global.scoreTitle = derelict;
global.scoreColor = green;
global.totalScore = '0';
global.cultScore = '0';
global.c21 = '-1';
global.c31 = '0';
global.c32 = '0';
global.c33 = '0';
global.c34 = '0';
global.comment = '';

export function ResetVariables() {
  global.scoreTitle = derelict;
  global.scoreColor = red;
  global.totalScore = '0';
  global.cultScore = '0';
  global.c21 = '-1';
  global.c31 = '0';
  global.c32 = '0';
  global.c33 = '0';
  global.c34 = '0';
  global.comment = '';
}

export function CalculateScore() {
  global.totalScore = 0;

  global.totalScore += parseInt(global.cultScore, 10);
  global.totalScore += parseInt(global.c21, 10);
  global.totalScore += parseInt(global.c31, 10);
  global.totalScore += parseInt(global.c32, 10);
  global.totalScore += parseInt(global.c33, 10);
  global.totalScore += parseInt(global.c34, 10);

  if (global.totalScore <= 0) {
    global.scoreTitle = derelict;
    global.scoreColor = red;
  } else if (global.totalScore > 0 && global.totalScore <= 5) {
    global.scoreTitle = poor;
    global.scoreColor = orange;
  } else if (global.totalScore > 5 && global.totalScore <= 10) {
    global.scoreTitle = average;
    global.scoreColor = yellow;
  } else {
    global.scoreTitle = good;
    global.scoreColor = green;
  }
}
