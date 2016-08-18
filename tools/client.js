import webpack from 'webpack'
import config from '../webpack.config.js'

module.exports = function(cb) {

  const compiler = webpack(config)

  compiler.run((err, stats) => {
    if(err) console.log(err)
    console.log(stats.toString({
      colors: true,
      chunks: false
    }))
    cb(err, "all done")
  })

}

