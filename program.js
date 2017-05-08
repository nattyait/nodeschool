var path = require('path')
var fs = require('fs')
var number = undefined
var content_split;

fs.readdir(process.argv[2], function doneReading(err, data){
        for(var i=0; i<data.length; i++){
          if(path.extname(data[i]).split('.')[1] == process.argv[3]){
            console.log(data[i])
          }
        }
})
