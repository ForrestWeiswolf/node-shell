process.stdout.write('prompt > ')

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  switch(cmd){
    case 'pwd':
      process.stdout.write(process.cwd())
      process.stdout.write('\nprompt > ')
      break
    case 'date':
      process.stdout.write(new Date().toString())
      process.stdout.write('\nprompt > ')
      break
    default:
      throw "Invalid command"
  }

});
