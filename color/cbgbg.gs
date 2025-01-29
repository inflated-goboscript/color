proc CBGBG_stamp cCBGBG c {
    if $c.g1 < 100 {
        set_color_effect $c.c;
        set_brightness_effect $c.b1;
        set_ghost_effect $c.g1;
        stamp;
    }
    if $c.g2 < 100 {
        set_brightness_effect $c.b2;
        set_ghost_effect $c.g2;
        stamp;
    }
}
