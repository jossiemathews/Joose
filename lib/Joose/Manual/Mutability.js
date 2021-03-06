/**

NAME
====

Joose.Manual.Mutability - Mutability and how to use it.


WHAT IS MUTABILITY?
===================

All Joose classes are dynamic or "mutable". Joose lets you add/remove attributes or methods, apply/unaplly roles, etc - right in the run-time.

Any change in the base class (or consumed role) will be correctly propagated through the whole inheritance hierarchy (or composition relationships).

Almost all class builders have their's inverse pair - for example : `has` - `hasnot`, `methods` - `removeMethods`, `does` - `doesnt` etc.
To change the class, use the `extend` method of its *metaclass instance*, which is available as `class.meta`. It accepts an object with the new set of builders, much the same
as during class declaration:


        Class('Woman', {
            isa : Human,
            
            does : Cry
        })
        
        
        Woman.meta.extend({
            doesnt : Cry,
            
            does : Laugh
        })

**Note:** Such changes will affect all instances of `Woman` class. If you need to only modify a particular instance, use [Traits][1]

**Note:** If you'll re-compose some other Roles to your class at run-time, there are chances it will raise a *composition conflict*. Currently,
in such case an exception will be thrown, and a class will be leaved in incosistent state. 

Some additional examples:

        Role('Laugh', {
            has : {
                loudLevel : 10,
                laughType : 'kind'
            },
            
            methods : {
                laugh : function () {
                },
                
                giggle : function () {
                }
            }
        })
        
        
        Laugh.meta.extend({
            hasnt : [ 'laughType' ],
            
            removeMethods : [ 'giggle' ]
        })


IMMUTABLE BUILDERS
==================

Currently, immutable things are constructor and parent class. There is no invers builders for `constructor` and `isa` 

AUTHOR
======

Nickolay Platonov [nickolay8@gmail.com](mailto:nickolay8@gmail.com)


COPYRIGHT AND LICENSE
=====================

Copyright (c) 2008-2011, Malte Ubl, Nickolay Platonov

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Malte Ubl nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 

[1]: Traits.html

*/
