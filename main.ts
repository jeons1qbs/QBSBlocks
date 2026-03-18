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
let b = 0
let a = 0
namespace CustomLEDs {

    /**
     * Lights up a specific number of LEDs in order.
     * @param num the number of LEDs to turn on, eg: 5
     */
    //% block="show number LED $num"
    export function showNumberLED(num: number): void {
        basic.clearScreen()
        for (let index2 = 0; index2 < num; index2++) {
            led.plot(index2 % 5, Math.floor(index2 / 5))
        }
    }

}
basic.forever(function () {
	
})
