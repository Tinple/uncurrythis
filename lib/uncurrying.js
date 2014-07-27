;(function (name, definition) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = definition();
    } else if (typeof window !== 'undefined') {
        // browser
        this[name] = definition();
    }
})('uncurry', function () {
    /**
     * uncurryThis: Given a method with the signature
     * obj.foo(arg1, arg2) => foo(obj, arg1, arg2)
     * @param  {[Function]} f [description]
     * @return {[Function]}   [description]
     */
    function uncurryThis(f) {
        return function () {
            return Function.call.apply(f, arguments);
        };
    }

    // Constructor
    function Uncurry() {
        if (!(this instanceof Uncurry)) {
            return new Uncurry;
        }
    }

    /**
     * uncurry_slice
     * usage:
     *     [1,2,3].slice(0, 2) => slice([1,2,3], 0, 2)
     * @type {[Array]}
     */
    Uncurry.prototype.slice = uncurryThis(Array.prototype.slice);

    /**
     * uncurry_reduce
     * usage:
     *     reduce([1,2,3], function (a,b) {return a+b})
     * @type {[Array]}
     */
    Uncurry.prototype.reduce = uncurryThis(
        Array.prototype.reduce || function (callback, basis) {
            var index = 0,
                length = this.length;
            // concerning the initial value, if one is not provided
            if (arguments.length === 1) {
                // seek to the first value in the array, accounting
                // for the possibility that is is a sparse array
                do {
                    if (index in this) {
                        basis = this[index++];
                        break;
                    }
                    if (++index >= length) {
                        throw new TypeError();
                    }
                } while (1);
            }
            // reduce
            for (; index < length; index++) {
                // account for the possibility that the array is sparse
                if (index in this) {
                    basis = callback(basis, this[index], index);
                }
            }
            return basis;
        }
    );

    /**
     * uncurry_indexOf
     * usage:
     *     indexOf([1,2,3], 3)
     * @type {[Array]}
     */
    Uncurry.prototype.indexOf = uncurryThis(
        Array.prototype.indexOf || function (value) {
            // not a very good shim, but good enough for our one use of it
            for (var i = 0; i < this.length; i++) {
                if (this[i] === value) {
                    return i;
                }
            }
            return -1;
        }
    );

    /**
     * uncurry_map
     * usage:
     *     map([1,2,3], function (a) {return a*2})
     * @type {[Array]}
     */
    Uncurry.prototype.map = uncurryThis(
        Array.prototype.map || function (callback, thisp) {
            var self = this;
            var collect = [];
            reduce(self, function (undefined, value, index) {
                collect.push(callback.call(thisp, value, index, self));
            }, void 0);
            return collect;
        }
    );

    return new Uncurry;
});