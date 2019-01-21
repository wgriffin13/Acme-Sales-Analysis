const salesAnalysis = require('./acme-sales-analysis');

// describe what we are testing
describe('Sales Analysis functions', () => {

    const products = [
        {
          id: 1,
          name: 'foo',
          price: 7
        },
        {
          id: 2,
          name: 'bar',
          price: 2
        },
        {
          id: 5,
          name: 'bazz',
          price: 1
        },
    ];
      
    const users = [
        {
            id: 1,
            name: 'moe'
        },
        {
            id: 2,
            name: 'larry'
        },
        {
            id: 3,
            name: 'curly'
        }
    ];

    // productId matches up with product in products
    // userId matches up with user in users
    const orders = [
        {
            id: 1,
            productId: 1,
            quantity: 3,
            userId: 1
        },
        {
            id: 2,
            productId: 1,
            quantity: 7,
            userId: 1
        },
        {
            id: 3,
            productId: 5,
            quantity: 70,
            userId: 3
        },
        {
            id: 4,
            productId: 5,
            quantity: 1,
            userId: 3
        }
    ];

    it('productsPurchased returns empty array', () => {
        expect(salesAnalysis.productsPurchased()).toEqual([]);
    });

    // make our assertion and what we expect to happen
    it('returns object of the products that were purchased', () => {
        expect(salesAnalysis.productsPurchased(orders, products)).toEqual([
            {
              id: 1,
              name: 'foo',
              price: 7
            },
            {
              id: 5,
              name: 'bazz',
              price: 1
            },
        ])
    });

    it('topSellingProductByQuantity returns empty array if called no variables', () => {
        expect(salesAnalysis.topSellingProductByQuantity()).toEqual([]);
    });

    it('returns top selling product', () => {
        expect(salesAnalysis.topSellingProductByQuantity(orders, products)).toEqual([
            {
                id: 5,
                name: 'bazz',
                price: 1
            },
        ])
    });

    it('userWithOrders returns empty array if called no variables', () => {
        expect(salesAnalysis.usersWithOrders()).toEqual([]);
    });

    it('returns users with orders', () => {
        expect(salesAnalysis.usersWithOrders(users, orders)).toEqual([
            {
                id: 1,
                name: 'moe'
            },
            {
                id: 3,
                name: 'curly'
            }
        ])
    });
})
