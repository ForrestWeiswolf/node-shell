var fs = require('fs')

module.exports.pwd = function() {
  process.stdout.write(process.cwd())
}

module.exports.date = function() {
  process.stdout.write(new Date().toString())
}

module.exports.ls = function() {
  fs.readdir('.', function(err, files){
    if(err) throw err
    files.forEach(function(file){
      process.stdout.write(file.toString() + "\n")
    })
  })
}
