function counter(){
    let count=0;
    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}
let x=counter();
x();
x();
x();
let y=counter();
y();