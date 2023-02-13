// Enums allow us to define a set of named constants. We can give these constants numeric or string values

enum OrderStatus{
    PENDING, //if we don't assigne values then TS will: (enum member) OrderStatus.PENDING = 0
    SHIPPED,
    DELEVERD,
    RETURNED
}

const myStatus = OrderStatus.DELEVERD

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELEVERD
}

isDelivered(OrderStatus.RETURNED)



//we can assign strings  // add const if you don't want to polude your JS with extra code as above
enum ArrowKeys{ 
    UP='up',
    DOWN='down',
    LEFT='left',
    RIGHT='right'
}

ArrowKeys.DOWN //(enum member) ArrowKeys.DOWN = "down"


const enum OrderStatus2{
    PENDING, //if we don't assigne values then TS will: (enum member) OrderStatus.PENDING = 0
    SHIPPED,
    DELEVERD,
    RETURNED
}
const order={
    orderNumber:45446546,
    status:OrderStatus2.PENDING
}