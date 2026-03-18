let a = 0
let b = 0
function showNumberLED (num: number) {
    basic.clearScreen()
    for (let index = 0; index <= num; index++) {
        led.plot((index - 1) % 5, Math.floor(index - 1) / 5)
    }
}
input.onButtonPressed(Button.A, function () {
    a += 1
    showNumberLED(a)
})
input.onButtonPressed(Button.B, function () {
    b += 1
    showNumberLED(b)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showString("" + convertToText(a) + "x" + convertToText(b) + "=" + a * b)
    a = 0
    b = 0
})
basic.forever(function () {
	
})
