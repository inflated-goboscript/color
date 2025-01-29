func HEX_to_RGB (hex) cRGB {
    return cRGB{
        r: HEX(slice($hex, 1, 2)),
        g: HEX(slice($hex, 3, 4)),
        b: HEX(slice($hex, 5, 6))
    };
}
