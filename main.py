def on_button_a():
    global Position
    if Position != 0:
        led.unplot(Position, 4)
        Position += -1
        led.plot(Position, 4)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    global Position
    if Position != 4:
        led.unplot(Position, 4)
        Position += 1
        led.plot(Position, 4)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Position = 0
Position = 2
led.plot(Position, 4)