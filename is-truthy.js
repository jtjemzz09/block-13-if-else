
const truthy = "i am string"
//if the value is truthy, it will print true.
if (truthy === "i am string" ) {
    console.log(true);
//if the value is falsy, it will print the following result:
//it will print "The boolean value false is falsy" for false.
}else if (truthy === false) {console.log ("The boolean value false is falsy");
//it will print "The null value is falsy" for null.
}else if ( truthy === null) {console.log ("The null value is falsy");
//it will print "undefined is falsy" for undefined.
}else if (truthy === undefined) { console.log ("undefined is falsy");

//it will print "The number 0 is falsy (the only falsy number)" for 0.
}else if ( truthy === 0) {console.log ("The number 0 is falsy (the only falsy number)");
//it will print "The empty string is falsy (the only falsy string)" for "".
}else if ( truthy === "") {console.log ("The empty string is falsy (the only falsy string)");

}

