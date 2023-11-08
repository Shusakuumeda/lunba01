let 前方センサー = 0
let 下右センサー = 0
let 下左センサー = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        下左センサー = 0
        led.plot(0, 0)
    } else {
        下左センサー = 1
        led.unplot(0, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        下右センサー = 0
        led.plot(4, 0)
    } else {
        下右センサー = 1
        led.unplot(4, 0)
    }
})
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 15) {
        前方センサー = 1
        led.plot(2, 0)
    } else {
        前方センサー = 0
        led.unplot(2, 0)
    }
})
