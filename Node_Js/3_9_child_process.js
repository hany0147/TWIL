/**
 * Child Process
 */
// const exec = require('child_process').exec;
// var process = exec('dir');

// process.stdout.on('data', function(data){
//   console.log(data.toString());
// })

// process.stderr.on('data', function (data) {
//   console.error(data.toString());
// })

const spawn = require('child_process').spawn;
const process = spawn('python', ['test.py'])

process.stdout.on('data', function(data){
  console.log(data.toString());
})

process.stderr.on('data', function (data) {
  console.error(data.toString());
})
// 실행해달라고 요청