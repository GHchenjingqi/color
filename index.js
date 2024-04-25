class color {
    constructor() {
        this.vistion = "1.0.0"
    }
}

/**
 * 随机返回一个颜色值
 * @param {*} type: 0-HEX  1-RGB 2-HSL 3-HWB
 * @returns HEX颜色值
 */
color.prototype.RandomColor = function (type = 0) {
    return type == 1 ? this.RandomRGB() : type == 2 ? this.RandomHSL() : type == 3 ? this.RandomHWB() : this.RandomHEX()
}

/**
 * 获取随机HEX色值
 * HEX色值是指采用16进制表示颜色的方法，使用3个或6个数字来表示颜色的红、绿、蓝三个通道的数值。
 * @returns HEX色值
 */
color.prototype.RandomHEX = function () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * 随机返回RGB色值
 * @param {*} R 0-255  
 * @param {*} G 0-255  
 * @param {*} B 0-255  
 * @param {*} A 0-1
 * @returns RGB色值
 */
color.prototype.RandomRGB = function (R, G, B, A) {
    let param = [...arguments]
    if (param.length == 1) {
        A = param[0]
    }
    if (param.length == 3) {
        R = param[0]
        G = param[1]
        B = param[2]
    }
    let r = R ? R : Math.floor(Math.random() * 256);
    let g = G ? R : Math.floor(Math.random() * 256); // 0-255  
    let b = B ? R : Math.floor(Math.random() * 256); // 0-255  
    if (A) {
        return `rgba(${r},${g},${b},${A})`;
    }
    return `rgb(${r},${g},${b})`;
}
/**
 * 返回一个RGBA的色值
 * @param {*} A 0-1 透明度
 * @returns RGBA色值
 */
color.prototype.RandomRGBA = function (A) {
    return this.RandomRGB(A)
}

/**
 * 随机返回HWB色值
 * HWB是色调（Hue）、白度（White）和黑度（Black）三个参数组成
 * @returns HWB色值
 */
color.prototype.RandomHWB = function () {
    let h = Math.floor(Math.random() * 360); // 0-359  
    let w = Math.floor(Math.random() * 100); // 0-99  
    let b = Math.floor(Math.random() * 100); // 0-99  
    return `hwb(${h},${w}%,${b}%)`;
}

/**
 * 随机返回HSL色值
 * HSL是色调（Hue）、饱和度（Saturation）和亮度（Lightness）三个参数组成
 * @returns HSL色值
 */
color.prototype.RandomHSL = function () {
    let h = Math.floor(Math.random() * 360); // 0-359  
    let s = Math.floor(Math.random() * 100); // 0-99  
    let l = Math.floor(Math.random() * 100); // 0-99  
    return `hsl(${h},${s}%,${l}%)`;
}

/**
 * RGB色值 => HEX色值
 * @returns 返回HEX色值
 */
color.prototype.RGB2HEX = function () {
    let r1 = r.toString(16).toUpperCase();
    let g1 = g.toString(16).toUpperCase();
    let b1 = b.toString(16).toUpperCase();
    if (r1.length == 1) r1 = "0" + r1;
    if (g1.length == 1) g1 = "0" + g1;
    if (b1.length == 1) b1 = "0" + b1;
    return "#" + r1 + g1 + b1;
}

/**
 * HEX色值 => RGB色值
 * @returns 返回RGB色值
 */
color.prototype.HEX2RGB = function () {
    // 将输入的字符串进行校验，如果不是6位或者3位十六进制颜色代码，则返回false  
    let pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!pattern.test(hex)) {
        return false;
    }
    // 如果是3位十六进制颜色代码，则将其转换为6位  
    if (hex.length == 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    // 将16进制数转换为十进制数  
    var r = parseInt(hex.substring(1, 3), 16);
    var g = parseInt(hex.substring(3, 5), 16);
    var b = parseInt(hex.substring(5, 7), 16);
    return "rgb(" + r + "," + g + "," + b + ")";
}

export default color
