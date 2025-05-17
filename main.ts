pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    time = pins.pulseDuration()
})
let time = 0
time = 0
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
basic.forever(function () {
    if (time != 0) {
        basic.clearScreen()
        basic.showNumber(time)
        basic.pause(200)
    } else {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            images.iconImage(IconNames.Square).showImage(0, 0)
        } else {
            images.iconImage(IconNames.SmallSquare).showImage(0, 0)
        }
    }
})
