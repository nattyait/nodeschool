var path = require('path')
var fs = require('fs')
var arr=[]
module.exports = function (dir, fileStr, callback) {
   fs.readdir(dir, function doneReading(err, data){
        if(err){
          return callback(err)
        }
        for(var i=0; i<data.length; i++){
          if(path.extname(data[i]).split('.')[1] == process.argv[3]){
            arr.push(data[i])
          }
        }
        console.log(arr)
        callback(null, arr)
})
}
