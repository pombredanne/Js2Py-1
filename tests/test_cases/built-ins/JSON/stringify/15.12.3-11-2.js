// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.12.3-11-2
description: >
    A JSON.stringify replacer function works is applied to a top level
    undefined value.
includes: [runTestCase.js]
---*/

function testcase() {
  return JSON.stringify(undefined, function(k, v) { return "replacement" }) === '"replacement"';
  }
runTestCase(testcase);
