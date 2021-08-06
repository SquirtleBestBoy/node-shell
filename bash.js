const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const args = cmd.split(' ');
  if(cmd == 'pwd') pwd();
  else if(cmd == 'ls') ls();
  else if (args[0] == 'cat') cat(args[1])
  else if(args[0] == 'curl') curl(args[1]);
  else {
    process.stdout.write('You typed: ' + cmd + '\nprompt >');
  }
});
