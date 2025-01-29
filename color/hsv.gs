func HSVA_to_CBGBG (cHSVA c) cCBGBG {
    if $c.a == 0 {
        return cCBGBG{
            # other values are irrelevant
            g1: 100,
            g2: 100
        };

    } elif $c.s == 100 and $c.v == 100 {
        return cCBGBG{
            c: 2 * $c.h,
            b1: 0,
            g1: 100 - $c.a,
            g2: 100
        };

    } else {
        local x = (100.0 / 3.0) * floor($c.h / (100.0 / 6.0));
        if ($c.h * 0.06) % 2 > 1 {
            local cCBGBG ret = cCBGBG{
                c: (x + (100.0 / 3.0) + ($c.s / 50) * ($c.h - (x / 2 + (100.0 / 6.0))))
            };
            
        } else {
            local cCBGBG ret = cCBGBG{
                c: x + ($c.s / 50) * ($c.h - x / 2)
            };
        }

        ret.b1 = 100 - $c.s;
        x = 1 - (($c.a * (100 - $c.v)) / 10000);
        ret.g1 = (100 - $c.a) / x;
        ret.b2 = -100;
        ret.g2 = 100 * x;

        return ret;
    }
    
}

# https://www.rapidtables.com/convert/color/hsv-to-rgb.html
func HSVA_to_RGBA (cHSVA c) cRGBA {
    local h = ($c.h * 3.6) % 360;
    local s = $c.s * 0.01;
    local v = $c.v * 0.01;
    local a = $c.a * 2.55;

    local C = v * s;
    local X = C * (1 - abs(((h  / 60) % 2) - 1));
    local m = v - C;

    if h < 180 {
        if h < 120 {
            if h < 60 {
                return cRGBA{
                    r: (C + m) * 255,
                    g: (X + m) * 255,
                    b: m * 255,
                    a: a
                };
            } else {
                return cRGBA{
                    r: (X + m) * 255,
                    g: (C + m) * 255,
                    b: m * 255,
                    a: a
                };
            }
        } else {
            return cRGBA{
                r: m * 255,
                g: (C + m) * 255,
                b: (X + m) * 255,
                a: a
            };
        }
    } else {
        if h < 300 {
            if h < 240 {
                return cRGBA{
                    r: m * 255,
                    g: (X + m) * 255,
                    b: (C + m) * 255,
                    a: a
                };
            } else {
                return cRGBA{
                    r: (X + m) * 255,
                    g: m * 255,
                    b: (C + m) * 255,
                    a: a
                };
            }
        } else {
            return cRGBA{
                r: (C + m) * 255,
                g: m * 255,
                b: (X + m) * 255,
                a: a
            };
        }

    }
}
