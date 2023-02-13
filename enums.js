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
//we can assign strings  // add const if you don't want to polude your JS with extra code as above
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));

ArrowKeys.DOWN; //(enum member) ArrowKeys.DOWN = "down"




var order = {
    orderNumber: 45446546,
    status: 0 /* OrderStatus2.PENDING */
};
