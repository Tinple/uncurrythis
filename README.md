## uncurrythis ![npm](https://badge.fury.io/js/uncurrythis.png)

Make safe to use in the presence of untrusted code.

### Installation
````
$ [sudo] npm install uncurrythis
````

Or

```
$ component install Tinple/uncurrythis
```

### Node
````javascript
var uncurryThis = require('uncurrythis');
````

### Browser
```javascript
<script src="./uncurry.js">
```

### Uncurrying this
Uncurring this means: Given a method with the signature

`obj.foo(arg1, arg2)`

transform it into a function with the signature

`foo(obj, arg1, arg2)`

### API

####slice
```
slice([1, 2, 3], 0, 2); // [1, 2]
```
####reduce
```
reduce([1, 2, 3], function (a, b) {
	return a + b;  // 6
})
```
####map
```
map([1, 2, 3], function (a) {
	return a * 2; // [2, 4, 6]
})
```
####indexOf
```
indexOf([1, 2, 3], 3); // 2
```

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 Tinple

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.3