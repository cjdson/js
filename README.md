js
==

[![NPM](https://nodei.co/npm/cjdson.png)](https://nodei.co/npm/cjdson/)

cjdson is json with C style line and block comments

## What does it look like?

```cjdson
{
  /*  JSON.parse won't be able to make sense of this
      but for extensive configs it's nice to have comments
      and lots of people use json for configs   */

  // everything else functions as you might expect
  "twentyThree":23 // numbers

  ,"aString":"pewpewpew" // strings
  ,"nesting":{ // it's basically just JSON
    "arrays":["pew","pew","pew"]
    ,"objects":{ // nothing really special
      "a":1
      ,"b":2
      ,"c":3
    }
  }
}
```

## How do we use this library?


```Javascript
var CJDSON=require("./CJDSON.js");

var example=
  '{ \// lel\n'+
  '  "key":"val" // as per usual\n'+
  '  ,"pew":"pew" // throw in whatever valid JSON you want\n'+
  '  \/*  multiline comments!\n'+
  '      FTW   *\/\n'+
  '}';

var CJDSON=new CJDSON(example);

console.log(CJDSON.toString());
console.log(CJDSON.parse());
```
