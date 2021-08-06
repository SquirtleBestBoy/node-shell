const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const args = cmd.split(' ');
  if(cmd == 'pwd') pwd(done);
  else if(cmd == 'ls') ls(done);
  else if (args[0] == 'cat') cat(args[1],done)
  else if(args[0] == 'curl') curl(args[1],done);
  else {
    process.stdout.write('You typed: ' + cmd + '\nprompt >');
  }
});

function done(data){
  process.stdout.write(data);
  process.stdout.write('\nprompt > ');
}