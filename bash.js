var commands = require('./commands');

process.stdout.write('prompt > ')

process.stdin.on('data', function (data) {
  var input = data.toString().trim().split(' '); // remove the newline and split
  var args = input.slice(1)
  var cmd = input[0]

  commands[cmd](args);
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
