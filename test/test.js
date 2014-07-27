var should = require('should'),
	uncurry = require('../'),
	slice = uncurry.slice,
	indexOf = uncurry.indexOf,
	map = uncurry.map,
	reduce = uncurry.reduce;

describe('uncurry', function () {
	it('should behave slice correctly', function (done) {
		var pets = slice(['timi', 'lucy', 'geo'], 0, 2);
		pets.should.have.lengthOf(2);
		pets[1].should.equal('lucy');
		done();
	});

	it('should behave map correctly', function (done) {
		var numbers = map([1, 2, 3], function (num) {
			return num * 2;
		});
		numbers.should.have.lengthOf(3);
		numbers[2].should.equal(6);
		done();
	});

	it('should behave reduce correctly', function (done) {
		var numbers = reduce([1, 2, 3], function (a, b) {
			return a + b;
		});
		numbers.should.equal(6);
		done();
	});

	it('should behave indexOf correctly', function (done) {
		var pets = indexOf(['timi', 'lucy', 'geo'], 'geo');
		pets.should.equal(2);
		done();
	});
});