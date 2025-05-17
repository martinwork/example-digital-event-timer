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
images.iconImage(IconNames.No).showImage(0, 0)
while (pins.digitalReadPin(DigitalPin.P0) == 0) {
	
}
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
// This pause is to let the sensor settle
// 
// Use a longer pause if it keeps triggering
basic.pause(50)
go = true
/**
 * To measure low pulse events
 * 
 * Wait for high
 * 
 * Wait for a pulse event
 * 
 * Display the pulse duration in milliseconds
 * 
 * A second pin can be used to monitor the signal state for long pulses
 * 
 * Press RESET to time another pulse
 */
basic.forever(function () {
    if (go) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            images.iconImage(IconNames.Square).showImage(0, 0)
        } else {
            images.iconImage(IconNames.SmallSquare).showImage(0, 0)
        }
    } else {
        basic.clearScreen()
        basic.showNumber(time / 1000)
        basic.pause(200)
    }
})
