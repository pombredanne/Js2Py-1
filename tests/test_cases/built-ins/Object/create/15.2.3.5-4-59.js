// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-59
description: >
    Object.create - one property in 'Properties' is a Function object
    which implements its own [[Get]] method to access the 'enumerable'
    property (8.10.5 step 3.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var descObj = function () { };

        descObj.enumerable = true;

        var newObj = Object.create({}, {
            prop: descObj 
        });
        for (var property in newObj) {
            if (property === "prop") {
                accessed = true;
            }
        }
        return accessed;
    }
runTestCase(testcase);
