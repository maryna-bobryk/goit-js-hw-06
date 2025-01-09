class StringBuilder{
#value
    constructor(initialValue) { 
      this.#value = initialValue;
  }
  getValue() { 
    return this.#value
  }
  padEnd(str) {
    if (typeof str === 'string') {
      this.#value += str
    } else {
     return  'This argument is not a string'
    }
  }

  padStart(str) {
     if (typeof str === 'string') {
       this.#value= str + this.#value
    } else {
     return 'This argument is not a string'
    }
  }

  padBoth(str) {
    if (typeof str === 'string') {
       this.#value = str + this.#value + str
    } else {
     return 'This argument is not a string'
    }
  }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="