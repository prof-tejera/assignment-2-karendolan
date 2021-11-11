// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

export const STATUS = {
  RESET: 'reset',
  COUNTDOWN: 'countdown',
  WORKING: 'working',
  RESTING: 'resting',
  PAUSED: 'paused',
  ENDED: 'ended',
};

export const RUNNING_STATUS = [
  STATUS.COUNTDOWN,
  STATUS.WORKING,
  STATUS.RESTING,
];

export const STOPPED_STATUS = [
  STATUS.RESET,
  STATUS.PAUSED,
];