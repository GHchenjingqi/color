import colorHandle from "./core/fn";
import colors from "./core/colors";

class Color extends colorHandle {
  constructor() {
    super();
    this.children = colors;
  }
  randomChinaColor() { 
    let indx = Math.floor(Math.random() * this.children.length);
    return this.children[indx].hex;
  }
}
export default Color;