class Bagel {
    constructor(name, price = 3) {
        this._name = name;
        this._price = price;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }
}

module.exports = Bagel;