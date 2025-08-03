# color.gs

> color conversion 

This is a color management library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/faretek1/inflator).

It also comes with a special color format called CBGBG, which stands for color, brightness1, ghost1, brightness2, ghost2.
This can be used to **stamp** in any color, using 2 stamps.

## Credits

- https://www.rapidtables.com/convert/color/index.html
- https://scratch.mit.edu/projects/623945749/
- https://scratch.mit.edu/projects/488774611/

## Installation

Make sure you have inflator installed

`inflate install https://github.com/FAReTek1/color`

add color to your `inflator.toml` config:
```toml
[dependencies]
# ...
color = "https://github.com/FAReTek1/color"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/FAReTek1/color`
2. `cd color`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
