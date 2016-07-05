// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.match (regexp)
es5id: 15.5.4.10_A1_T12
description: >
    Override toString and valueOf functions, valueOf throw exception,
    then call match (regexp) function with this object as argument
includes: [$FAIL.js]
---*/

var __obj = {toString:function(){return {};},valueOf:function(){throw "intostr";}}
var __str = new String("ABB\u0041BABAB");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    try {
      var x = match(__obj);
      $FAIL('#1: "var x = match(__obj)" lead to throwing exception');
    } catch (e) {
      if (e!=="intostr") {
        $ERROR('#1.1: Exception === "intostr". Actual: '+e);
      }
    }
}
//
//////////////////////////////////////////////////////////////////////////////
