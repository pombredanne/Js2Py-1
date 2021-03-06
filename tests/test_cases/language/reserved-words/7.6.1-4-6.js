// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6.1-4-6
description: >
    Allow reserved words as property names by set function within an
    object, verified with hasOwnProperty: continue, for, switch
includes: [runTestCase.js]
---*/

function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set continue(value){
                test0 = value;
            },
            get continue(){
                return test0;
            },
            set for(value){
                test1 = value;
            },
            get for(){
                return test1;
            },
            set switch(value){
                test2 = value;
            },
            get switch(){
                return test2;
            }
        };      
        var arr = [
            'continue', 
            'for',
            'switch'
            ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    if(!tokenCodes.hasOwnProperty(arr[p1])) {
                        return false;
                    };
                }
            }
        }
        return true;
    }
runTestCase(testcase);
