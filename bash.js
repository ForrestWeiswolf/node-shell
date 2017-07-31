var commands = require('./commands');

process.stdout.write('prompt > ')

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  commands[cmd]();
  process.stdout.write('\nprompt > ')
  // switch(cmd){
  //   case 'pwd':
  //     commands.pwd()
  //     process.stdout.write('\nprompt > ')
  //     break
  //   case 'date':
  //     commands.date()
  //     process.stdout.write('\nprompt > ')
  //     break
  //   default:
  //     throw "Invalid command"
  // }

});
