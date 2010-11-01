/**

NAME
====

Joose.Manual.Installation - The installation procedure for Joose.


DESCRIPTION
===========

You can install Joose from the following sources:

 
INSTALLING FROM TARBALL
=======================

The complete list of the released tarballs is available for download here: <http://openjsan.org/go?d=Joose>


Source files to include
-----------------------

To use Joose include the following source file in your project (from the root of the tarball)

    lib/Task/Joose/Core.js

It contains all the individual source files concatenated into one.



INSTALLING FROM `npm`
=====================

If you are on Linux box and planning to use Joose only for server-side code, then the most straightforward way will be to use `npm` package manager.

1. Installing `npm`

Please refer to : <http://github.com/isaacs/npm/>

2. Installing `Joose`

        > npm install joose

You probably will need to `sudo` the command above.

After this you can use Joose as follows:

        require('joose')
        
        Class('My.Class', {
        
            methods : {
                ...
            }
        })
        
        // or 
        
        var Class = require('joose').Class
        
        
        var MyClass = Class({
        
            methods : {
                ...
            }
        })

Please note, that Joose aims to be client/server neutral, and behaves a bit differently than usual CommonJS module.  

`require('joose')` will *modify the global scope* - will add the `Joose`, `Class`, `Role` and `Module` symbols to it.
`Class`, `Role` and `Module` are also being exported from `require`. 


INSTALLING FROM JSAN
====================

One more distrubution channel of `Joose` is JSAN - [JavaScript Archive Network][jsan]. Use this channel, if you are
on Windows or planning to share Joose code unchanged between the browser/server.

To install `Joose` you'll need to install JSAN shell first - a small, cross-platform, unix-shell-like program. 
It communicate directly with closest JSAN mirror and can download and install any JSAN module for you.

JSAN shell is written in perl, so the 1st step is to obtain Perl.


1. Obtaining perl
-----------------

Linux
-----

If you are on any Linux distribution, you may skip this step, since you already have perl and all required perl modules. 


Windows
-------

Windows users should install [Strawberry perl][straberry]. Straberry perl is preferable than ActiveState perl, because it comes with the compiler included.

*NOTE:* After installation, you may need to relogin (or reboot) to see the updates in the PATH environment variable.


2. Installing shell
-------------------

Launch a console (`cmd` on Windows). Then type (you may need to `sudo` this command):

       > cpan JSAN::Shell
    
Thats all, now wait until shell will be installed. You may be asked about installing its pre-requisites - answer 'yes'. 


3. Installing `Joose`
---------------------

Launch a console (`cmd` on Windows). Then type:
    
        > jsan
    
This should launch a JSAN shell and display a prompt, similar to this:
    
        Checking for Internet access...
        Locating closest JSAN mirror...
        
        jsan shell -- JSAN repository explorer and package installer (v2.03)
                   -- Copyright 2005 - 2009 Adam Kennedy.
                   -- Type 'help' for a summary of available commands.
        
        jsan>
    
If this is the first time you installing the JSAN module, setup the installation path ('prefix' setting can be saved, so you won't need to enter again):
        
        jsan> set prefix /your/installation/path/

Then, type:
        
        jsan> install Joose

Thats all, shell will download and install `Joose` for you. 

For the list of available commands, try `help`. Also refer to [JSAN::Shell documentation](http://search.cpan.org/dist/JSAN-Shell/lib/JSAN/Shell.pm) for details. 


4. Configuring your system
--------------------------

After successful completion of the procedure above, `Joose` will be installed in your local JavaScript library (you've specified its location with 'prefix').

For example, the path to the library can be:

    /usr/local/lib/jsan

on Linux systems, or

    c:\JSAN

on Windows systems.


### 4.1 Accessing JSAN modules from browser

As a convention, configure you local web server that way, that the url `http://localhost/jsan` 
will point at the `lib` subdirectory of JSAN library: `/usr/local/lib/jsan/lib` for example.

This way you can load any installed JSAN module via url like: `http://localhost/jsan/Useful/Module/Name.js`


### 4.2 Accessing JSAN modules from NodeJS

You may want to include the path to JSAN library to the `NODE_PATH` enviroment variable:

    export NODE_PATH=/usr/local/lib/jsan/lib

After this, you can load any installed JSAN module from the NodeJS, like:
    
    require('Useful/Module')


AUTHOR
======

Nickolay Platonov [nickolay8@gmail.com](mailto:nickolay8@gmail.com)


COPYRIGHT AND LICENSE
=====================

Copyright (c) 2008-2009, Malte Ubl, Nickolay Platonov

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Malte Ubl nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 


[jsan]: http://openjsan.org
[straberry]: http://strawberryperl.com/


*/