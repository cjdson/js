var CJDSON={};

/*
  CJDSON refers to a format popularized in the projectmeshnet community
  by the author of cjdns: Caleb James Delisle.

  It's just JSON, but with C style comments (line and block style).

  It's customary to call such a file .CJDSON, since it isn't valid JSON.
  Your text editor likely won't recognize that file extension, though..
  By calling any such file *.json, your editor will likely
  highlight comments as errors. A true BUG||FEATURE situation.

*/

var CJDSON=function(cjdobj){
  this.source=cjdobj;

  this.toString=function(){
    return this.source;
  };

  this.parse=parse=function(){ // cjdO is text, not an object
    return JSON.parse(this.source // Parse the results of this expression
    .split("\n") // split by newlines to deal with line comments
    .map(function(line,index){ // iterate over line in the resulting array
      return line.replace(/\/\/.*$/g,""); // replace comments with empty strings
    })
    .join("") // join to produce a monolithic string again
    .replace(/\/\*([\s\S]*?)\*\//g,"") // split multiline comments
    ); // parse the results
  }; // Enjoy your cool and refreshing JSON.

  // pretty printing...
  this.print=function(){
    console.log(this.parse());
  };

  // stringify...

  // ???

  // profit
};

module.exports=CJDSON; // return this object
// Expect more to be added to this script
