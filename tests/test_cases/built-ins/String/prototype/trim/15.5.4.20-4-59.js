// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.5.4.20-4-59
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u2029abc as a multiline string)
includes: [runTestCase.js]
---*/

function testcase() {
  var s = "\u2029\
           abc";
  if (s.trim() === "abc") {
    return true;
  }
 }
runTestCase(testcase);
