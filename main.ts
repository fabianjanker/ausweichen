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
loops.everyInterval(500, function () {
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
})
