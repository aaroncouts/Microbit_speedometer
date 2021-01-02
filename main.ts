// This program requires a microbit wired with the following:
//  1. An external button that, when pressed, routes VCC to pin 0.
//  2. A distance sensor with trigger on pin 1 and echo on pin 2.

input.onButtonPressed(Button.A, function () {
    // Show kilometers/hour
    basic.showNumber(kph)
    basic.showString("kph")
})
input.onButtonPressed(Button.B, function () {
    // Show miles/hour again
    basic.showNumber(mph)
    basic.showString("mph")
})
let mps = 0
let distance2 = 0
let distance1 = 0
let mph = 0
let kph = 0
let button_released = 1
basic.forever(function () {
    if (button_released == 0 && pins.digitalReadPin(DigitalPin.P0) == 0) {
        // Button must be released before taking another reading
        button_released = 1
    }
    if (button_released == 1 && pins.digitalReadPin(DigitalPin.P0) == 1) {
        // Main button pushed.  Take two distance readings.
        distance1 = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
        )
        basic.pause(500)
        distance2 = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
        )
        // Using absolute value here so it will work with subject approaching or leaving
        mps = Math.abs((distance2 - distance1) / 100 * 2)
        // basic.showString("mps:")
        // basic.showNumber(mps)
        // Calculate speed and display it.
        mph = mps * 2.237
        kph = mps * 3.6
        basic.showNumber(mph)
        basic.showString("mph")
    }
})
