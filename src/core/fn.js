class ColorHandle {
    /**
     * 随机返回一个颜色值
     * @param {number} type - 0: HEX, 1: RGB, 2: HSL, 3: HWB
     * @returns {string} 颜色值
     */
    randomColor(type = 0) {
        return type === 1
            ? this.randomRGB()
            : type === 2
            ? this.randomHSL()
            : type === 3
            ? this.randomHWB()
            : this.randomHEX();
    }

    /**
     * 获取随机HEX色值
     * HEX色值是指采用16进制表示颜色的方法，使用3个或6个数字来表示颜色的红、绿、蓝三个通道的数值。
     * @returns {string} HEX色值
     */
    randomHEX() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /**
     * 随机返回RGB色值
     * @param {number} [R] - 红色分量 (0-255)
     * @param {number} [G] - 绿色分量 (0-255)
     * @param {number} [B] - 蓝色分量 (0-255)
     * @param {number} [A] - 透明度 (0-1)
     * @returns {string} RGB或RGBA色值
     */
    randomRGB(R, G, B, A) {
        const args = [...arguments];
        if (args.length === 1) {
            A = args[0];
        } else if (args.length === 3) {
            [R, G, B] = args;
        }

        let r = R !== undefined ? R : Math.floor(Math.random() * 256);
        let g = G !== undefined ? G : Math.floor(Math.random() * 256); // 修正：原来是 R
        let b = B !== undefined ? B : Math.floor(Math.random() * 256); // 修正：原来是 R

        if (A !== undefined) {
            return `rgba(${r},${g},${b},${A})`;
        }
        return `rgb(${r},${g},${b})`;
    }

    /**
     * 返回一个RGBA的色值（基于随机RGB，指定透明度）
     * @param {number} A - 透明度 (0-1)
     * @returns {string} RGBA色值
     */
    randomRGBA(A) {
        return this.randomRGB(undefined, undefined, undefined, A);
    }

    /**
     * 随机返回HWB色值
     * HWB是色调（Hue）、白度（White）和黑度（Black）三个参数组成
     * @returns {string} HWB色值
     */
    randomHWB() {
        const h = Math.floor(Math.random() * 360); // 0-359
        const w = Math.floor(Math.random() * 100); // 0-99
        const b = Math.floor(Math.random() * 100); // 0-99
        return `hwb(${h},${w}%,${b}%)`;
    }

    /**
     * 随机返回HSL色值
     * HSL是色调（Hue）、饱和度（Saturation）和亮度（Lightness）三个参数组成
     * @returns {string} HSL色值
     */
    randomHSL() {
        const h = Math.floor(Math.random() * 360); // 0-359
        const s = Math.floor(Math.random() * 100); // 0-99
        const l = Math.floor(Math.random() * 100); // 0-99
        return `hsl(${h},${s}%,${l}%)`;
    }

    /**
     * RGB色值 => HEX色值
     * @param {number} r - 红色分量 (0-255)
     * @param {number} g - 绿色分量 (0-255)
     * @param {number} b - 蓝色分量 (0-255)
     * @returns {string} HEX色值
     */
    rgbToHex(r, g, b) {
        const toHex = (n) => {
            const hex = n.toString(16).toUpperCase();
            return hex.length === 1 ? '0' + hex : hex;
        };
        return '#' + toHex(r) + toHex(g) + toHex(b);
    }

    /**
     * HEX色值 => RGB色值
     * @param {string} hex - HEX颜色字符串，如 "#FFF" 或 "#FFFFFF"
     * @returns {string|false} 返回RGB色值或 false（如果格式错误）
     */
    hexToRgb(hex) {
        // 校验 HEX 格式
        const pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (!pattern.test(hex)) {
            return false;
        }

        // 处理 3 位 HEX
        if (hex.length === 4) {
            const h = hex.slice(1);
            hex = '#' + h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
        }

        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgb(${r},${g},${b})`;
    }
}

export default ColorHandle;