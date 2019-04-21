const {spawn} = require('child_process');

const pwd = spawn('pwd');
pwd.stdout.pipe(process.stdout);

const {HOME} =  process.env;
const cat = spawn('cat', [`${HOME}/.bash_profile`]);
cat.stdout.pipe(process.stdout);

const ls = spawn('ls', ['-l', '.']);
ls.stdout.pipe(process.stdout);

const shell = spawn('ls -al ~ | wc -l', {shell: true});
shell.stdout.pipe(process.stdout);