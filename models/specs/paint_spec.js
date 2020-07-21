const assert = require('assert')
const Paint = require('../paint')

describe('Paint', function () {

    let paint;

    beforeEach(function () {
        paint = new Paint(10);
    })

    it('should have an amount of paint', function () {
        const actual = paint.amount;
        assert.strictEqual(actual, 10);
    })

    it('should be able to check if it is empty', function() {
        const actual = paint.isEmpty();
        assert.strictEqual(actual, false);
    });

});