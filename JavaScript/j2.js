function palin(num){
        for(let i=1;i<=num;i++){
        let z=Rev(i);
        if(i==z){
            console.log(i);
        }
    }

}
function Rev(n){
    let rev=0;
    while(n!=0){
        rev=rev*10+n%10;
        n=parseInt(n/10);
    }
    return rev;
}
palin(50);