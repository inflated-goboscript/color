# test script. import works, but code isnt actually tested here
%include backpack/color/color

costumes "blank.svg", "circle.svg";
hide;

onflag {
    switch_costume "circle";
    set_ps_color_RGB cRGB{r:139,g:26,b:59};
    cstamp;

    # set_pen_color_HEX("FF0000");
    # set_pen_size 100;
    # pen_down;
    # pen_up;
}
