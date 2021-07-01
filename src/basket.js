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
        if (this._itemList.length >= this._maxCapacity) {
            return true;
        }
        else {
            return false;
        }
    }

    addItem(item) {
        if (this._itemList.includes(item) === true){
            this._itemList.push(item)
            return"A bagel already in basket";
        }  
        /*if (this._itemList.includes(item) === false){
            return "no more bagels"
        }*/
        
        if (this._itemList.length < this.maxCapacity){
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
        else {
            return 'Sorry, you haven\'t added this item yet';
        }
    }
    increaseCap(newCap) {
        
        if (this.isFull() === true){            //&& newCap > this.maxCapacity
            this._maxCapacity = newCap;
        }

    }
    

}

module.exports = Basket;