// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.19-9-8
description: >
    Array.prototype.map - empty array to be returned if 'length' is 0
    (subclassed Array, length overridden to 0 (type conversion))
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val > 10;
        }

        var Foo = function () { };
        Foo.prototype = [1, 2, 3];
        var obj = new Foo();
        obj.length = 0;

        var testResult = Array.prototype.map.call(obj, callbackfn);
        return testResult.length === 0;

    }
runTestCase(testcase);
