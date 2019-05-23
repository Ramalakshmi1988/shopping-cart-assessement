//cart class
var Item = require('./Item');

class Cart {
    constructor() {
        this.shoppingCart = [];
    }

    createItemAndAdd(name, price, onSale, qty){
        let newItem = new Item(name, price, onSale);
        let arrayItem = []
        arrayItem.push(newItem)
        arrayItem.push(qty)
        this.shoppingCart.push(arrayItem);
        
    }
      
   
    totalPrice(){
        let array = [];
        this.shoppingCart.map((item) => { 
            array.push(item[0].price * item[1])
        })

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return array.reduce(reducer)

        
    }

     
    onSaleItems(){
        let array = [];
        this.shoppingCart.map((item) => {
            if (item[0].onSale) {
                array.push(item)
            }
        })
        return array.length;
    }

    getCart(){    
        return this.shoppingCart;
    }

}

module.exports = Cart;
