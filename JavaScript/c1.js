function counter(){
     let count=0;
     this.increment=function(){
          count++;
          console.log(count);
     }
     this.decrement=function(){
          count--;
          console.log(count);
     }
}
let c1=new counter;
c1.increment();
c1.decrement();