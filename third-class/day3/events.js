const events = require("events");
class MyEvent extends events{};

const e = new MyEvent();

e.on("myevent", function(){
	console.log("MyEvent");
});

e.once("e2", function(){
	console.log("once");
})

e.emit("e2");
e.emit("e2");
e.emit("e2");
e.emit("e2");
e.emit("e2");

// e.emit("myevent");
// e.emit("myevent");
// e.emit("myevent");
// e.emit("myevent");
// e.emit("myevent");
// e.emit("myevent");