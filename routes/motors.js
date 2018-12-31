const express = require('express')
const router = express.Router()

let gpio
const pins = [29, 32, 31, 33] // l-fwd, r-fwd, l-bwd, r-bwd

if (process.env.PI) {
  gpio = require('rpi-gpio')
  console.log('gpio active')
  pins.forEach(pin => gpio.setup(pin, gpio.DIR_OUT))
}

router.post('/', function (req, res, next) {
  gpio.write(pins[req.body.target], req.body.status)
  console.log(req.body)
  res.send('ok')
})

module.exports = router
