require("babel-register");
var argv = require('optimist').argv

const task = require(`./${argv._[0]}`)

task((err, msg) => {
  if (err) console.log(err)
  if (msg) console.log(msg)
  process.exit(0)
})
