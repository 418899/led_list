let list = [
[
0,
1,
255,
1,
0
],
[
1,
255,
255,
255,
1
],
[
255,
255,
255,
255,
255
],
[
0,
1,
255,
1,
0
],
[
0,
0,
255,
0,
0
]
]
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        led.plotBrightness(x, y, list[y][x])
    }
}
basic.forever(function () {
	
})
