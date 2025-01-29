# Prefixed with a c to avoid naming conflicts with math.gs's RGB macro
struct cHSV {
    # Hue, saturation, value
    h, s, v
}
struct cHSVA {
    # Hue, saturation, value, alpha
    h, s, v, a
}
struct cRGB {
    # Red, Green, Blue
    # No alpha - would add this if there is a way to do struct value defaulting
    r, g, b
}
struct cRGBA {
    # Red, Green, Blue & Alpha
    r, g, b, a
}
struct cCBGBG {
    # Color brightness1 ghost1 brightness2 ghost2
    # The format that allows setting a sprite to any color
    c, b1, g1, b2, g2 
}
# HEX is just a string
