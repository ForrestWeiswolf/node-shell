process.stdin.write('prompt > ')

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  switch(cmd){
    case 'pwd':
      process.stdin.write(process.cwd())
      break
    case 'date':
      process.stdin.write(new Date().toString())
      break
    default:
      throw "Invalid command"
  }

});
