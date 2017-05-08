var fs = require('fs')
var number = undefined
var content_split;

fs.readFile(process.argv[2], function doneReading(err, data){
	number = data.toString().split('\n').length - 1
        console.log(number) 
})
