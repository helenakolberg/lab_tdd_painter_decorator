const Decorator = function () {
    this.stock = [];
}

Decorator.prototype.numberOfPaints = function () {
    return this.stock.length;
}

Decorator.prototype.addPaint = function (paint) {
    return this.stock.push(paint)
}

module.exports = Decorator;