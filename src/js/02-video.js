import Player from '@vimeo/player/dist/player.js';
import throttle from 'lodash.throttle';

const LOCAL_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = Number(localStorage.getItem(LOCAL_TIME)) || 0;

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LOCAL_TIME, data.seconds);
  }, 1000)
);

player.setCurrentTime(currentTime);
