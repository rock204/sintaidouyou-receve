radio.onReceivedNumber(function (receivedNumber) {
    serial.writeLine("" + (receivedNumber / 1023))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "End") {
        serial.writeLine("receive start")
    } else {
        serial.writeLine("data end")
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
serial.writeLine("----sintai douyou-----")
