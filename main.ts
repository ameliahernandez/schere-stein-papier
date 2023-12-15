radio.onReceivedNumber(function (receivedNumber) {
    if (Werkzeug == 1) {
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.Asleep)
        } else if (receivedNumber == 2) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    } else if (Werkzeug == 2) {
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.Happy)
        } else if (receivedNumber == 2) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else if (Werkzeug == 3) {
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.Sad)
        } else if (receivedNumber == 2) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Werkzeug = randint(1, 3)
    if (Werkzeug == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (Werkzeug == 2) {
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    basic.pause(2000)
    radio.sendNumber(Werkzeug)
})
// Kinder können sich eine Funkgruppe aussuchen
let Werkzeug = 0
radio.setGroup(2)
