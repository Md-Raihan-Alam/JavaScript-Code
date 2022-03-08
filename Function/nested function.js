function fu1(){
    let a=3;
    function fu2(){
        let b=2;
        function fu3(){
            let c=1;
            console.log('third function='+a+b+c);
        }
        fu3();
        console.log('second function='+a+b);
    }
    fu2();
    console.log('first function='+a);
}
fu1();