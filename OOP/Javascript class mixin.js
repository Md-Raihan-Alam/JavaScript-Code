function mixin(sourceObj,targetObj){
    for(var key in sourceObj){
        if(!(key in targetObj)){
            targetObj[key]=sourceObj[key];
        }
    }
    return targetObj;
}
var Vehicle={
    engines:1,
    ignition(){
        console.log("Turning on my engine");
    },
    drive(){
        this.ignition();
        console.log("Steering and movig forward!");
    }
};
var Car=mixin(Vehicle,{
    wheels:4,
    drive(){
        Vehicle.drive.call(this);
        console.log("Rolling on all "+this.wheels+" wheels");
    }
});
Car.ignition();