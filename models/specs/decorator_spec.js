const assert = require('assert')
const Decorator = require('../decorator')
const Paint = require('../paint.js')

describe('decorator', function() {
    
    let decorator;
    let paint;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(7);
    })

    it('should start with empty stock', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add paint to paint stock', function() {
        decorator.addPaint(paint);
        const actual = decorator.numberOfPaints();
        assert.strictEqual(actual, 1);
    })

    it('should be able to calculate how much total paint it has in stock', function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        const actual = decorator.numberOfLitres();
        assert.strictEqual(actual, 14);
    })
});