function sub(bag,i,arr){
    if(i==arr.length){
        if(bag.length>0){
        console.log(bag);
        }
        return;
    }
    bag.push(arr[i]);
    sub(bag,i+1,arr);
    bag.pop();
    sub(bag,i+1,arr);
}
let bag=[]
sub(bag,0,[1,2]);