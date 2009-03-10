(function () {
var testobj = new Test.TAP.Class();
testobj.plan(1)

testobj.testSanity = function() {
    //==================================================================================================================================================================================
    this.diag("Sanity");
    
    this.ok(Joose.Proto.Class, "Joose.Proto.Class is here");
    this.ok(Joose.Managed.Class, "Joose.Managed.Class is here");
    
    
    //==================================================================================================================================================================================
    this.diag("Inherited from class with Joose.Proto.Class meta");
    
    var TestClass3 = new Joose.Proto.Class('TestClass3', null, null, {
        res1 : false,
        
        met1 : function(){},
        
        
        inc : function (a) { return a + 'T3' }
    }).c;
    
    
    var TestClass4 = new Joose.Proto.Class('TestClass4', null, TestClass3, {
        res2 : 'res2',
        testMeta : TestClass3,
        
        met2 : function(){},
        
        inc : function (a) { return this.SUPER(a) + '|T4' }
    }).c;
    
    
    var TestClass5 = new Joose.Managed.Class('TestClass5', {
        isa : TestClass4,
        
        have : {
            res3 : null
        },
        
        methods : {
            met3 : function(){},
            inc : function (a) { return this.SUPERARG(arguments) + '|T5' }
        }
    }).c;
    
    
    this.ok(TestClass5.meta.hasAttribute('res1') && !TestClass5.meta.hasOwnAttribute('res1'), "TestClass has inherited 'res1' attribute");
    this.ok(TestClass5.meta.hasAttribute('res2') && !TestClass5.meta.hasOwnAttribute('res2'), "TestClass has inherited 'res2' attribute");
    this.ok(TestClass5.meta.hasAttribute('res3') && TestClass5.meta.hasOwnAttribute('res3'), "TestClass has own 'res3' attribute");
    
    this.ok(TestClass5.meta.hasAttribute('testMeta') && !TestClass5.meta.hasOwnAttribute('testMeta'), "TestClass has inherited 'testMeta' attribute");

    this.ok(TestClass5.meta.hasMethod('met1') && !TestClass5.meta.hasOwnMethod('met1'), "TestClass has inherited 'met1' method");
    this.ok(TestClass5.meta.hasMethod('met2') && !TestClass5.meta.hasOwnMethod('met2'), "TestClass has inherited 'met2' method");
    this.ok(TestClass5.meta.hasMethod('met3') && TestClass5.meta.hasOwnMethod('met3'), "TestClass has own 'met3' method");
    
    var testClass5 = new TestClass5();
    
    this.is(testClass5.inc(''), 'T3|T4|T5', "'inc' was inherited, overriden and works correctly");

    
    //==================================================================================================================================================================================
    this.diag("Inherited from class with Joose.Proto.Class meta & method modifiers");

    
    var TestClass6 = new Joose.Managed.Class('TestClass6', {
        isa : TestClass4,
        
        after : {
            inc : function (a) { this.res2 += '|T6after' }
        },
        
        override : {
            inc : function (a) { 
                this.res2 += '|T6override';
                
                return this.SUPER(a) + '|T6override';
            }
        },
        
        before : {
            inc : function (a) { this.res2 += '|T6before' }
        }
        
    }).c;
    
    var testClass6 = new TestClass6();
    
    this.is(testClass6.inc(''), 'T3|T4|T6override', "inherited 'inc' works correctly");
    this.is(testClass6.res2, 'res2|T6before|T6override|T6after', "after&before for inherited 'inc' works correctly");
    
};

return testobj;
})()