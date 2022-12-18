const exec = require('child_process').execSync

const path = './yt-dlp'
const ytdl = {
dl: (url,option) => {
    try{
        exec(`${path} ${url} ${[
            `-N ${option.core || 1}`,                   // core
            `-o "${option.output || '%(id)s.%(ext)s'}"`,// output
            '--no-cache-dir',                           // no cache
            option.audio ? `-x --audio-format ${option.format || 'mp3'}` : `-f ${option.format}`,// audio only
        ].join(' ')}`)
        return true
    }catch(e){
        if(e.status != 0){
            throw e.stderr.toString()
        }
    }
},
info: url => {
    try{
        const result = exec(`${path} ${url} -j`).toString()
        return JSON.parse(result)
    }catch(e){
        if(e.status != 0){
            throw e.stderr.toString()
        }
    }
}
}

module.exports = ytdl