class Basket {
    constructor (maxCapacity) {
        this._maxCapacity = maxCapacity;
        this._itemList = [];
    }

    get maxCapacity () {
        return this._maxCapacity;
    }

    get itemList () {
        return this._itemList;
    }

    isFull () {
        if (this._itemList.length === this._maxCapacity) {
            return true;
        }
        else {
            return false;
        }
    }

    addItem(item) {
        if (this._itemList.length < this.maxCapacity){
            this._itemList.push(item);
            console.log('Here');

        }
        else {
            console.log('Basket is Full');
        }
    }

    removeItem(item) {
        let index = this._itemList.indexOf(item);
        if (index > -1) {
            this._itemList.splice(index, 1)
        }
    }

    

}

module.exports = Basket;