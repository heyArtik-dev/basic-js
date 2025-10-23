const { NotImplementedError } = require("../lib");
/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: "",
  countAddLink: 0,

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    if (this.result.length === 0) {
      value !== "" ? (this.result += `( ${value} )`) : (this.result += "(  )");
    } else {
      value !== ""
        ? (this.result += `~~( ${value} )`)
        : (this.result += "~~(  )");
    }
    this.countAddLink++;

    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.countAddLink
    ) {
      this.result = "";
      this.countAddLink = 0;
      throw new Error("You can't remove incorrect link!");
    }

    this.result = this.result.split("~~");
    this.result.splice(position - 1, 1);
    this.result = this.result.join("~~");
    this.countAddLink--;

    return this;
  },

  reverseChain() {
    this.result = this.result.split("~~").reverse().join("~~");
    return this;
  },

  finishChain() {
    const res = this.result;
    this.result = "";
    this.countAddLink = 0;
    return res;
  },
};

module.exports = {
  chainMaker,
};
