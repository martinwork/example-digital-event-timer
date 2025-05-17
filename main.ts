pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    if (go) {
        time = pins.pulseDuration()
    }
})
let go = false
let time = 0
time = 0
go = false
images.iconImage(IconNames.No).showImage(0, 0)
while (pins.digitalReadPin(DigitalPin.P0) == 0) {
	
}
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
basic.pause(10)
go = true
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
