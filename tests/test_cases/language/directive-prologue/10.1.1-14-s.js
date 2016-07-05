// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.1.1-14-s
description: >
    Strict Mode - The call to eval function is contained in a Strict
    Mode block
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        'use strict';
        try {
            eval("var public = 1;");
            return false;
        } catch (e) {
            return true;
        }
    }
runTestCase(testcase);
