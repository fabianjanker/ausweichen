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
