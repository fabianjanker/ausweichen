input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Position != 0) {
        led.unplot(Position, 4)
        Position += -1
        led.plot(Position, 4)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Position != 4) {
        led.unplot(Position, 4)
        Position += 1
        led.plot(Position, 4)
    }
})
let Position = 0
Position = 2
led.plot(Position, 4)
let HindernissZeile0 = 6
let HindernissZeile1 = 6
let HindernissZeile2 = 6
let HindernissZeile3 = 6
let HindernissZeile4 = 6
let Kollision = 0
let Punkte = 0
let Geschwindigkeit = 500
loops.everyInterval(100, function () {
    if (Kollision == 0) {
        led.unplot(HindernissZeile0, 0)
        led.unplot(HindernissZeile1, 1)
        led.unplot(HindernissZeile2, 2)
        led.unplot(HindernissZeile3, 3)
        led.unplot(HindernissZeile4, 4)
        HindernissZeile4 = HindernissZeile3
        HindernissZeile3 = HindernissZeile2
        HindernissZeile2 = HindernissZeile1
        HindernissZeile1 = HindernissZeile0
        HindernissZeile0 = randint(0, 8)
        led.plot(HindernissZeile0, 0)
        led.plot(HindernissZeile1, 1)
        led.plot(HindernissZeile2, 2)
        led.plot(HindernissZeile3, 3)
        led.plot(HindernissZeile4, 4)
        if (Position == HindernissZeile4) {
            Kollision = 1
            music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
            basic.showString("Punkte: ")
            basic.showNumber(Punkte)
        }
    }
    basic.pause(Geschwindigkeit)
    Punkte += 1
    Geschwindigkeit += -10
})
