radio.onReceivedNumber(function (receivedNumber) {
    bf = receivedNumber / 1023
    serial.writeLine("" + (bf))
    配列2.push(bf)
})
function print_data () {
    let 変数: number[] = []
    serial.writeLine("-----result-----")
    serial.writeValue("mean", BasicStat.calculateMean(配列2))
    serial.writeValue("std", BasicStat.calculateES(配列2))
    serial.writeValue("min", BasicStat.calculateMin(配列2))
    serial.writeValue("max", BasicStat.calculateMax(変数))
    serial.writeValue("range", BasicStat.calculateRange(変数))
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "End") {
        serial.writeLine("receive start")
        配列2 = []
    } else {
        serial.writeLine("data end")
        print_data()
    }
})
let 配列2: number[] = []
let bf = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
serial.writeLine("----sintai douyou-----")
