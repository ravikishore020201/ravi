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

    let requestedFruit = prompt("Which fruit do you want to buy?");
    
    if(requestedFruit == 'exit') {
        break;
    }
    else if(requestedFruit.length!=0){
        let index = findFruit(requestedFruit);
        if(index==-1){
            alert("item not found")
        }
        
        else{
        fruits.splice(index,1);
        alert(" HURRAY !! ITEM Purchase completed")
        }
    }
     
    

    

    alert('Please type "exit" to exit, or enter fruit from available items below');
}