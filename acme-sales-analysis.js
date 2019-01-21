function productsPurchased(orders, products) {
    var fArr = [];
    if (products && orders){
        fArr = products.reduce( (acc, item) => {
            let found = orders.find(val => val.productId === item.id);
            //console.log(found)
            if (found){
                acc.push(item)
            }
            return acc
        }, [])
    }
    return fArr
}

function topSellingProductByQuantity(orders, products){
    var fArr = [];
    // nput variables exist
    if (orders && products){
        // reduce --> sum by productId
        const groupedProducts = orders.reduce( (acc, ord) => {
            let found = acc.find(fItem => ord.productId === fItem.productId)
            if (!found){
                found = {productId: ord.productId, total: 0}
                acc.push(found)
            }
            found.total += ord.quantity
            return acc
        }, [])
        // Sort array by total amount
        groupedProducts.sort( (a, b) => b.total - a.total)
        // find product data matches id
        let found = products.find( item => groupedProducts[0].productId === item.id)
        if (found){
            fArr.push(found)
        }
    }
    return fArr
}

function usersWithOrders(users, orders){
    var fArr = [];
    if (users && orders){
        fArr = users.reduce( (acc, item) => {
            let found = orders.find(ord => ord.userId === item.id);
            //console.log(found)
            if (found){
                acc.push(item)
            }
            return acc
        }, [])
    }
    return fArr
}

module.exports = {productsPurchased: productsPurchased, topSellingProductByQuantity: topSellingProductByQuantity, usersWithOrders: usersWithOrders} 
