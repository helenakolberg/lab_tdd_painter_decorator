const assert = require('assert')
const Decorator = require('../decorator')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('decorator', function() {
    
    let decorator;
    let paint;
    let room;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(7);
        room = new Room(30);
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

    it('should be able to check if it has enough paint for room', function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        const actual = decorator.isEnoughPaint(room);
        assert.strictEqual(actual, false);
    })
});