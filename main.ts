input.onButtonPressed(Button.A, function () {
    basic.showNumber(kph)
    basic.showString("kph")
})
input.onButtonPressed(Button.B, function () {
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
        button_released = 1
    }
    if (button_released == 1 && pins.digitalReadPin(DigitalPin.P0) == 1) {
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
        mps = Math.abs((distance2 - distance1) / 100 * 2)
        // basic.showString("mps:")
        // basic.showNumber(mps)
        mph = mps * 2.237
        kph = mps * 3.6
        basic.showNumber(mph)
        basic.showString("mph")
    }
})
