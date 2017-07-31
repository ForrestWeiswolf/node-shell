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
      if(err) throw err
      files.forEach(function(file){
        process.stdout.write(file.toString() + "\n")
      })
    })
  },

  echo: function(args) {
    args = args.join(' ')
    if(process.env[args]){
      process.stdout.write(process.env[args])
    } else {
      process.stdout.write(args)
    }
  }

}
