class Basket {
    constructor (maxCapacity) {
        this._capacity = 0;
        this._maxCapacity = maxCapacity;
        this._itemList = [];
    }

    get capacity() {
        return this._capacity;
    }

    get maxCapacity () {
        return this._maxCapacity;
    }

    get itemList () {
        return this._itemList;
    }

    isFull () {
        if (this._capacity === this._maxCapacity) {
            return true;
        }
        else {
            return false;
        }
    }

    addItem(item) {
        if (this._capacity < this._maxCapacity){
            this._itemList.push(item);
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

let myBasket = new Basket(10);

module.exports = Basket;