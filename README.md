js
==

[![NPM](https://nodei.co/npm/cjdson.png)](https://nodei.co/npm/cjdson/)

cjdson is json with C style line and block comments

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
