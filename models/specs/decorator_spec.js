const assert = require('assert')
const Decorator = require('../decorator')

describe('decorator', function() {
    
    let decorator;

    beforeEach(function(){
        decorator = new Decorator()
    })

    it('should start with empty stock', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });
});