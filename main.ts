radio.onReceivedNumber(function (receivedNumber) {
    if (Werkzeug == 0) {
        if (receivedNumber == 1) {
            GewinnerR += 1
        }
        if (receivedNumber == 2) {
            Gewinner += 1
        }
    } else {
        if (Werkzeug == 1) {
            if (receivedNumber == 0) {
                Gewinner += 1
            }
            if (receivedNumber == 2) {
                GewinnerR += 1
            }
        } else {
            if (Werkzeug == 2) {
                if (receivedNumber == 0) {
                    GewinnerR += 1
                }
                if (receivedNumber == 1) {
                	
                }
            }
        }
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (Gewinner > GewinnerR) {
        basic.showNumber(Gewinner)
        basic.showString(control.deviceName())
    } else {
        basic.showString("Anderer Gewinner")
    }
})
input.onButtonPressed(Button.A, function () {
    Funkgruppe += 1
})
input.onGesture(Gesture.Shake, function () {
    Werkzeug = randint(0, 2)
    radio.sendNumber(Werkzeug)
    if (Werkzeug == 0) {
        basic.showIcon(IconNames.No)
    } else if (Werkzeug == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Funkgruppe)
})
input.onButtonPressed(Button.B, function () {
    Funkgruppe += -1
})
// Kinder können sich eine Funkgruppe aussuchen
let Werkzeug = 0
let GewinnerR = 0
let Gewinner = 0
let Funkgruppe = 0
Funkgruppe = 1
Gewinner = 0
GewinnerR = 0
