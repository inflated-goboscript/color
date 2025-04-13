func HEX_to_RGB (hex) cRGB {
    return cRGB{
        r: HEX($hex[1] & $hex[2]),
        g: HEX($hex[3] & $hex[4]),
        b: HEX($hex[5] & $hex[6])
    };
}
func HEX_to_RGBA (hex) cRGBA {
    local a = $hex[7] & $hex[8];
    if length a < 2 { # if it's a 6-char hex code, make it 100% opaque
        a = "FF";
    }

    return cRGBA{
        r: HEX($hex[1] & $hex[2]),
        g: HEX($hex[3] & $hex[4]),
        b: HEX($hex[5] & $hex[6]),
        a: HEX(a)
    };
}

func HEX_to_CBGBG(hex) cCBGBG {
    return RGBA_to_CBGBG(HEX_to_RGBA($hex));
}

%define set_pen_color_HEX(hex) set_pen_color "#" & hex
