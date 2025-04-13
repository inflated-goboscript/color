# set pen colour only

proc set_pen_color_RGBA cRGBA c {
    set_pen_color RGBA($c.r, $c.g, $c.b, $c.a);
}
proc set_pen_color_HSVA cHSVA c {
    set_pen_hue $c.h;
    set_pen_saturation $c.s;
    set_pen_brightness $c.v;
    set_pen_transparency 100 - $c.a;
}
# for hex, u just use the normal pen color block
# no cbgbg set color, i dont want to reverse the process

onflag {
    cCBGBG _stamp_colour = cCBGBG{
        c: 0, b1: 0, g1: 0, b2: -100, g2: 100
    };
}

# don't even call the function which does the same thing
proc cstamp {
    if _stamp_colour.g1 < 100 {
        set_color_effect _stamp_colour.c;
        set_brightness_effect _stamp_colour.b1;
        set_ghost_effect _stamp_colour.g1;
        stamp;
    }
    if _stamp_colour.g2 < 100 {
        set_brightness_effect _stamp_colour.b2;
        set_ghost_effect _stamp_colour.g2;
        stamp;
    }
}

%define set_stamp_color_CBGBG(c) _stamp_colour = c; # this really should be in fullcaps...

proc set_stamp_color_HSVA cHSVA c {
    _stamp_colour = HSVA_to_CBGBG($c);
}

proc set_stamp_color_RGBA cRGBA c {
    _stamp_colour = RGBA_to_CBGBG($c);
}
proc set_stamp_color_RGB cRGB c {
    _stamp_colour = RGBA_to_CBGBG(cRGBA{r: $c.r, g: $c.g, b: $c.b, a: 255});
}
proc set_stamp_color_HEX c {
    _stamp_colour = HEX_to_CBGBG($c);
}

###
# ps = pen & stamp
proc set_ps_color_HEX c {
    set_pen_color $c;
    _stamp_colour = HEX_to_CBGBG($c);
}

proc set_ps_color_RGB cRGB c {
    set_pen_color RGB($c.r, $c.g, $c.b);
    _stamp_colour = RGBA_to_CBGBG(cRGBA{r: $c.r, g: $c.g, b: $c.b, a: 255});
}

proc set_ps_color_RGBA cRGBA c {
    set_pen_color RGBA($c.r, $c.g, $c.b, $c.a);
    _stamp_colour = RGBA_to_CBGBG($c);
}

proc set_ps_color_HSVA cHSVA c {
    set_pen_hue $c.h;
    set_pen_saturation $c.s;
    set_pen_brightness $c.v;
    set_pen_transparency 100 - $c.a;
    _stamp_colour = HSVA_to_CBGBG($c);
}
