function isEquivalent(a,b){
	//array of property names
	let aProps=Object.getOwnPropertyNames(a);
	let bProps=Object.getOwnPropertyNames(b);
	//if their property lengths are different, they're different objects
	if(aProps.length!=bProps.length){
		return false;
	}
	for(var i=0;i<aProps.length;i++){
		let propName=aProps[i];
		//if the valuse of property are different,not equal
		if(a[propName]!==b[propName]){
			return false;
		}
	}
	//if everything matched,correct
	return true;
}
console.log(isEquivalent({'h1':12},{'h1':12}));