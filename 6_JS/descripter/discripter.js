let obj = {}
Object.defineProperty(obj, "name", {
    value: "vihan kr",
    Writable: true ,
    configurable: true,
    enumerable: true
});
obj.name = "amit";
console.log(obj.name)


