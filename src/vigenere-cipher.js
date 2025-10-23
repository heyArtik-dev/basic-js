const { NotImplementedError } = require("../lib");
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  }

  convertStr(msg, str) {
    msg = msg.toLowerCase();
    str = str.toLowerCase();

    if (str.length < msg.length) {
      while (str.length < msg.length) {
        str += str;
      }

      str = str.substr(0, msg.length);

      for (let i = 0; i < msg.length; i++) {
        if (!this.alphabet.includes(msg[i])) {
          let edit = str.split("");
          edit.splice(i, 0, msg[i]);
          str = edit.join("");
        }
      }
    }

    return [msg, str];
  }

  reverseResult(str) {
    return str.split("").reverse().join("").toUpperCase();
  }

  encrypt(msg, str) {
    return this.createResult(msg, str, "encrypt");
  }

  decrypt(msg, str) {
    return this.createResult(msg, str, "decrypt");
  }

  createResult(msg, str, nameFunc) {
    if (!msg || !str) throw new Error("Incorrect arguments!");

    let result = "";
    [msg, str] = this.convertStr(msg, str);

    for (let i = 0; i < msg.length; i++) {
      if (!this.alphabet.includes(msg[i])) {
        result += msg[i];
      } else {
        let index;
        switch (nameFunc) {
          case "encrypt":
            index =
              this.alphabet.indexOf(msg[i]) + this.alphabet.indexOf(str[i]);
            if (index > this.alphabet.length) index -= this.alphabet.length;
            if (index === this.alphabet.length) index = 0;
            break;
          case "decrypt":
            index =
              this.alphabet.length -
              this.alphabet.indexOf(str[i]) +
              this.alphabet.indexOf(msg[i]);
            if (index > this.alphabet.length) index -= this.alphabet.length;
            if (index === this.alphabet.length) index = 0;
            break;
        }

        result += this.alphabet[index];
      }
    }

    return this.bool === true
      ? result.toUpperCase()
      : this.reverseResult(result);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
