# Color effects

func clamp_RGB (cRGB c) cRGB {
    # Floor an RGB and clamp it
    return cRGB {
        r: floor(CLAMP($c.r, 0, 255)),
        g: floor(CLAMP($c.g, 0, 255)),
        b: floor(CLAMP($c.b, 0, 255))
    };
}

# The functions starting with an underscore are inner functions
func _posterise_value(i) {
    if $i < 128 {
        if $i < 64 {
            return 31;
        } else {
            return 95;
        }
    } else {
        if $i < 192 {
            return 159;
        } else {
            return 223;
        }
    }
}

func posterise_RGB (cRGB c) cRGB {
    return cRGB {
        r: _posterise_value($c.r),
        g: _posterise_value($c.g),
        b: _posterise_value($c.b)
    };
}

func sepia_RGB (cRGB c) cRGB {
    return clamp_RGB(cRGB{
        r: (0.393 * $c.r + 0.769 * $c.g + 0.189 * $c.b),
        g: (0.349 * $c.r + 0.686 * $c.g + 0.168 * $c.b),
        b: (0.272 * $c.r + 0.534 * $c.g + 0.131 * $c.b)
    });
}

func invert_RGB (cRGB c) cRGB {
    return clamp_RGB(cRGB{
        r: 255-$c.r,
        g: 255-$c.g,
        b: 255-$c.b
    });
}

func NTSC_gray_RGB (cRGB c) cRGB {
    # Convert an RGB to grayscale using the NTSC formula
    local val = round(0.299 * $c.r + 0.587 * $c.g + 0.114 * $c.b);
    return cRGB{r: val, g: val, b: val};
}

func gray_RGB (cRGB c) cRGB {
    # Convert an RGB to grayscale by taking an average
    local val = round(($c.r + $c.g + $c.b) / 3);
    return cRGB{r: val, g: val, b: val};
}

func _solarise_value(v, threshold) {
    if $v < $threshold {
        return 255 - $v;
    } else {
        return $v;
    }
}

func solarize (cRGB c, threshold) cRGB {
    return cRGB{
        r: _solarise_value($c.r, $threshold),
        g: _solarise_value($c.g, $threshold),
        b: _solarise_value($c.b, $threshold)
    };
}
