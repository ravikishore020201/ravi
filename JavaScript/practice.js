let a=[1,2,3,4,5,6];
let b=a.reduce(
    function(n,sum){
        return n=n+sum;
    },
    0
);
console.log(b);