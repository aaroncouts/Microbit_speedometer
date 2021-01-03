/**
 * This program requires a microbit wired with the following:
 * 
 * 1. An external button that, when pressed, routes VCC to pin 0.
 * 
 * 2. A distance sensor with trigger on pin 1 and echo on pin 2.
 */
/**
 * Speed variables
 */
let brightness = 0
let prevMillis = 0
let currentMillis = 0
let mps = 0
let distance2 = 0
let distance1 = 0
let mph = 0
let kph = 0
let button_released = 1
let textSpeed = 150
// Blink variables
let high = 30
let interval = 150
basic.forever(function () {
    if (button_released == 0 && pins.digitalReadPin(DigitalPin.P0) == 0) {
        // Button must be released before taking another reading
        button_released = 1
    }
    if (button_released == 1 && pins.digitalReadPin(DigitalPin.P0) == 1) {
        // Main button pushed.
        button_released = 0
        // Take two distance readings.
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
        // Calculate speed and display it.
        mph = Math.round(mps * 22.37) / 10
        kph = Math.round(mps * 36) / 10
        basic.showString("" + convertToText(mph) + "mph", textSpeed)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showString("" + convertToText(kph) + "kph", textSpeed)
    }
    if (input.buttonIsPressed(Button.B)) {
        // Button B shows miles per hour again
        basic.clearScreen()
        basic.showString("" + convertToText(mph) + "mph", textSpeed)
    }
    // Blink. Just to show that the device is on,
    // so we don't run down the battery.
    currentMillis = control.millis()
    if (currentMillis - prevMillis > interval) {
        let low = 0
        prevMillis = currentMillis
        if (brightness == low) {
            brightness = high
        } else {
            brightness = low
        }
        led.plotBrightness(0, 0, brightness)
    }
})
