// Enums allow us to define a set of named constants. We can give these constants numeric or string values
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELEVERD"] = 2] = "DELEVERD";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELEVERD;
function isDelivered(status) {
    return status === OrderStatus.DELEVERD;
}
isDelivered(OrderStatus.RETURNED);



"down" /* ArrowKeys.DOWN */; //(enum member) ArrowKeys.DOWN = "down"


var order = {
    orderNumber: 45446546,
    status: OrderStatus.PENDING
};
