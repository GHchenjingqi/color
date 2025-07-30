# ChinaColor

提供500+中国传统颜色，以及HSL/RGB/HEX等色彩模式转换函数。


## 快速开始
`npm install chinacolor`

```javascript
const chinaColor from 'chinacolor';
// 随机传统颜色
chinaColor.randomChinaColor()
// 随机颜色
chinaColor.randomColor()
// 获取随机HEX色值
chinaColor.randomHEX()
// 获取随机RGB色值
chinaColor.randomRGB()
// 获取随机HWB色值
chinaColor.randomHWB()
// 获取随机HLS色值
chinaColor.randomHSL()
// Rgb转Hex
chinaColor.rgbToHex(r, g, b)
// Hex转Rgb
chinaColor.hexToRgb(hex)