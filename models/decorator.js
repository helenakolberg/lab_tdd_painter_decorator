const Decorator = function () {
    this.stock = [];
}

Decorator.prototype.numberOfPaints = function () {
    return this.stock.length;
}

Decorator.prototype.addPaint = function (paint) {
    return this.stock.push(paint)
}

Decorator.prototype.numberOfLitres = function() {
    let total = 0;
    for (paint of this.stock) {
        total += paint.amount
    }
    return total;
}

Decorator.prototype.isEnoughPaint = function(room) {
    return (this.numberOfLitres() >= room.area)
}

module.exports = Decorator;