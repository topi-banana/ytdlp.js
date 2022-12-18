const ytdl = require('./main.js')


// Get JSON
// console.log( ytdl.info('https://youtu.be/5XcRbKUKSdY') )



const option = {
    core: 10,
    output: './list/%(id)s.%(ext)s',
//    audio: true,
    format: 'mp4',
}

// Download
console.log( ytdl.dl('https://youtu.be/5XcRbKUKSdY', option) )