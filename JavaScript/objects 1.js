let sum=a=>b=>{return b?sum(a+b):a}
console.log(sum(1)(2)(3)(4)(6)());
let mul=function (n){
    return (y)=>{
        return n*y;
    }
}
let mul1=mul(1);
let mul2=mul(2);
console.log(mul1(10));
console.log(mul2(10));