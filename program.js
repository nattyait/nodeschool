var mymodule = require('./mymodule.js')
mymodule(process.argv[2], process.argv[3], function(err, arr){
  if(err){
    return console.error('Error: ', err)
  }
  arr.forEach(function (file){
    console.log(file)
   })
})
