var fs = require('fs')
result = fs.readFileSync(process.argv[2])
console.log(result.toString().split('\n').length - 1)
