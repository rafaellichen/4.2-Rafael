const fs = require('fs')
const path = require('path')

function search(fn, ext, func) {
    fs.readdir("./"+fn, (err, files) => {
        if(err) {
            console.error(err)
            return
        }
        files = files.filter((file) => {
            if (path.extname(file) === ext) {
                return file
            }
        })
        func(err, files)
    })
}

module.exports = {
    search
}

