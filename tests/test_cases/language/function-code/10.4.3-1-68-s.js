// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.3-1-68-s
description: >
    Strict Mode - checking 'this' (strict function declaration called
    by Function.prototype.apply(undefined))
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
function f() { "use strict"; return this===undefined;};
return f.apply(undefined);
}
runTestCase(testcase);
