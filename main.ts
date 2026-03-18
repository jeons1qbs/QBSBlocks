namespace JBlocks {

    /**
     * Lights up a specific number of LEDs in order.
     * @param num the number of LEDs to turn on, eg: 5
     */
    //% block="show number LED $num"
    //% num.min=0 num.max=25
    export function showNumberLED(num: number): void {
        basic.clearScreen()
        for (let index2 = 0; index2 < num; index2++) {
            led.plot(index2 % 5, Math.floor(index2 / 5))
        }
    }

}
