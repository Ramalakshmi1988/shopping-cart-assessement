const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');
const assert = require('chai').assert;

describe('Cart', () => {

    it('should initialize as empty', () => {
        const cart = new Cart()
        console.log("empty cart", cart)
        // expect(cart.getCart()).to.deep.equal([])
        // expect(cart.totalPrice).to.be.equal(0)
    })

    it('add an item to the cart', () => {
        const cart = new Cart();
        cart.createItemAndAdd('watch', 3, false, 3);
        cart.createItemAndAdd('handbag', 6, true, 2);
        cart.createItemAndAdd('sandles', 10, false, 5);
        cart.createItemAndAdd('jacket', 3, false, 6);
        console.log(cart.totalPrice());
        
        // expect(cart[0].).to.deep.equal("apple")
        // expect(item.getPrice).to.be.equal(3)
    })

    it('get total price of the cart', () => {
        const cart = new Cart();
        cart.createItemAndAdd('watch', 3, false, 3);
        cart.createItemAndAdd('handbag', 6, true, 2);
        cart.createItemAndAdd('jacket', 10, false, 5);

        console.log(cart.totalPrice());
        
        assert.equal(71, cart.totalPrice());
    })

    it('get only on sale items', () => {
        const cart = new Cart();
        cart.createItemAndAdd('sandles', 3, false, 3);
        cart.createItemAndAdd('handbag', 6, true, 2);
        cart.createItemAndAdd('watch', 10, false, 5);
        
        assert.equal(1, cart.onSaleItems());
    })


})
