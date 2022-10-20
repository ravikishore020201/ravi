let a=100;
function outest(){
    function outer(){
        let a=10;
        function inner(){
            console.log(a);
        }
        return inner;
    }
   return outer;
    
}
outest()()();