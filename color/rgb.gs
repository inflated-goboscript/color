func RGBA_to_HEX(cRGBA c) {
    return zfill(convert_base($c.r, B10_DIGITS, B16_DIGITS), 2) & 
           zfill(convert_base($c.g, B10_DIGITS, B16_DIGITS), 2) & 
           zfill(convert_base($c.b, B10_DIGITS, B16_DIGITS), 2) & 
           zfill(convert_base($c.a, B10_DIGITS, B16_DIGITS), 2);
}

# Adapted from https://scratch.mit.edu/projects/623945749/ by @-Rex- on scratch
func RGBA_to_CBGBG(cRGBA c) cCBGBG {
    local a = $c.a / 255;
    if $c.r < $c.g or $c.r < $c.b {
        if $c.g < $c.r or $c.g < $c.b {
            local temp1 = $c.b;
            local temp4 = 133.33333333333333;

            if $c.r > $c.g {
                local temp2 = $c.r;
                local temp3 = $c.g;
                local temp5 = 33.333333333333333;
            } else {
                local temp2 = $c.g;
                local temp3 = $c.r;
                local temp5 = -33.333333333333333;
            }

        } else {
            local temp1 = $c.g;
            local temp4 = 66.66666666666667;

            if $c.r > $c.b {
                local temp2 = $c.r;
                local temp3 = $c.b;
                local temp5 = -33.333333333333333;
            } else {
                local temp2 = $c.b;
                local temp3 = $c.r;
                local temp5 = 33.333333333333333;
            }
        }
    } else {
        local temp1 = $c.r;
        if $c.g > $c.b {
            local temp4 = 0;
            local temp2 = $c.g;
            local temp3 = $c.b;
            local temp5 = 33.333333333333333;
        } else {
            local temp4 = 200;
            local temp2 = $c.b;
            local temp3 = $c.g;
            local temp5 = -33.333333333333333;
        }
    }

    local cCBGBG ret = cCBGBG{};
    if temp1 < 128 {
        ret.b2 = 100;
        ret.b1 = (255 * (temp1 - temp3)) / (255 - temp3);
        ret.c = temp4 + temp5 * ((((255 * (temp2 - temp3)) / (255 - temp3)) + (255 - ret.b1)) / 255);
        ret.b1 = 0.39215686274509803 * ret.b1 - 100;
        ret.g2 = 100 - 0.39215686274509803 * temp3;
    } else {
        ret.b2 = -100;
        ret.b1 = 100 * (temp3 / temp1);
        ret.c = temp4 + temp5 * ((temp2 - temp3) / temp1);
        ret.g2 = 0.39215686274509803 * temp1;
    }

    if a >= 1 {
        ret.g1 = 0;
    } elif a > 0 {
        ret.g1 = 100 - 100 * ((a * ret.g2) / (100 - (a * (100 - ret.g2))));
        ret.g2 = 100 - a * (100 - ret.g2);
    } else {
        ret.g1 = 0;
        ret.g2 = 0;
    }

    if ret.g2 <= 0 {
        ret.g1 = 100;
    }

    return ret;
}

# https://www.rapidtables.com/convert/color/rgb-to-hsv.html
func RGBA_to_HSVA(cRGBA c) cHSVA {
    local r = $c.r / 255;
    local g = $c.g / 255;
    local b = $c.b / 255;

    if r > g and r > b {
        local cmax = r;
    } elif g > r and g > b {
        local cmax = g;
    } else {
        local cmax = b;
    }

    if r < g and r < b {
        local cmin = r;
    } elif g < r and g < b {
        local cmin = g;
    } else {
        local cmin = b;
    }

    local delta = cmax - cmin;

    if delta == 0 {
        local cHSVA ret = cHSVA{
            h: 0
        };
    } elif cmax == r {
        local cHSVA ret = cHSVA{
            h: (100.0 / 6.0) * (((g - b) / delta) % 6)
        };
    } elif cmax == g {
        local cHSVA ret = cHSVA{
            h: (100.0 / 6.0) * ((b - r) / delta + 2)
        };
    } else {
        local cHSVA ret = cHSVA{
            h: (100.0 / 6.0) * ((r - g) / delta + 4)
        };
    }
    ret.s = (delta / cmax) * 100;
    ret.v = cmax * 100;
    ret.a = $c.a / 2.55;

    return ret;    
}
