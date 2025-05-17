input.onButtonPressed(Button.A, function () {
    go = true
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    if (go) {
        go = false
        time = pins.pulseDuration()
    }
})
let go = false
let time = 0
time = 0
go = false
images.iconImage(IconNames.SmallSquare).showImage(0, 0)
while (pins.digitalReadPin(DigitalPin.P0) == 0) {
	
}
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
basic.pause(10)
go = true
basic.forever(function () {
    if (go) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            images.iconImage(IconNames.Square).showImage(0, 0)
        } else {
            images.iconImage(IconNames.SmallSquare).showImage(0, 0)
        }
    } else {
        basic.clearScreen()
        basic.showNumber(time)
        basic.pause(200)
    }
})
