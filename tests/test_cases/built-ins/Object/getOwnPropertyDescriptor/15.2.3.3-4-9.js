// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.3-4-9
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Global.decodeURI)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
  var global = fnGlobalObject();
  var desc = Object.getOwnPropertyDescriptor(global, "decodeURI");
  if (desc.value === global.decodeURI &&
      desc.writable === true &&
      desc.enumerable === false &&
      desc.configurable === true) {
    return true;
  }
 }
runTestCase(testcase);
