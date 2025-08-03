costumes "blank.svg";

%include inflator/assert
%include inflator/math
%include inflator/string
%include inflator/lazy

%include inflator/base

%include inflator/color

var h = 0;
var s = 0;
var b = 0;

onflag {main;}
nowarp proc main {
    forever {
        show h;
        show s;
        show b;

        set_pen_color_HSVA cHSV(h, s, b);

        erase_all;
        set_pen_size 20;
        pen_du;
    }
}
