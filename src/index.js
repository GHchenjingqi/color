import colorHandle from "./core/fn";
import colors from "./core/colors";

class Color extends colorHandle {
  constructor() {
    super();
    this.children = colors;
  }
}
export default Color;