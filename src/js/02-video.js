import Player from '@vimeo/player/dist/player.js';

// console.log(Player);
const throttle = require('lodash.throttle')

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

window.addEventListener('load', function() {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime !== null) {
        player.setCurrentTime(currentTime).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    console.log('The time was less than 0 or greater than the video’s duration');
                    break;
                default:
                    console.log('Some other error occurred');
                    break;
            }
        });
    }
});



// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// player.on('eventName', function(data) {
//     // data is an object containing properties specific to that event
// });

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });