let fruits = ['🍒','🥭','🍌'];

function findFruit(fruit) {
    for(let i = 0; i<fruits.length; i++) {
        if(fruit == fruits[i]) {
            return i;
        }
    }
    return -1;
}

while(true) {
    if(fruits.length == 0) {
        alert("Sorry, we are out of stock :) ");
        break;
    }
    alert("Available Fruits are:");
    alert(fruits);

    let requestedFruit = prompt("Which fruit do you want to buy?").split(",");
    
    if(requestedFruit[0] == 'exit') {
        break;
    }
    else if(requestedFruit.length!=0){
        for(let i=0;i<=requestedFruit.length-1;i++){
        let index = findFruit(requestedFruit[i]);
        if(index==-1){
            alert("item not found")
        }
        
        else{
        fruits.splice(index,1);
        alert(" HURRAY !! ITEM Purchase completed");
        }
     }
    }
     
    

    

    alert('Please type "exit" to exit, or enter fruit from available items below');
}