var fs = require('fs')

module.exports = {

  pwd: function(args) {
    process.stdout.write(process.cwd())
  },

  date: function(args) {
    process.stdout.write(new Date().toString())
  },

  ls: function(args) {
    fs.readdir('.', function(err, files){
      if (err) throw err
      files.forEach(function(file){
        process.stdout.write(file.toString() + '\n')
      })
    })
  },

  echo: function(args) {
    args = args.join(' ')
    if (process.env[args]){
      process.stdout.write(process.env[args])
    } else {
      process.stdout.write(args)
    }
  },

  cat: function(args){
    var filename = args[0];
    fs.readFile(filename, function(err, contents){
      if (err) throw err
      process.stdout.write(contents + '\n')
    })
  },

  head: function(args){
    var filename = args[0];
    var numLines = args[1] || 5;

    fs.readFile(filename, function(err, contents){
      if (err) throw err
      var lines = contents.toString().split('\n')

      for(var i = 0; i < numLines; i++){
        process.stdout.write(lines[i] + '\n')
      }
    })
  },

  tail: function(args){
    var filename = args[0];
    var numLines = args[1] || 5;

    fs.readFile(filename, function(err, contents){
      if (err) throw err
      var lines = contents.toString().split('\n')

      for(var i = lines.length - numLines; i < lines.length; i++){
        process.stdout.write(lines[i] + '\n')
      }
    })
  },


}
