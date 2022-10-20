function sel(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let smallest = i;
        for (let j = i; j < arr.length; j++){
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        
        }
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        
    }
    return arr;
}
let arr = ['india','america','china','brazil','aa','ab'];
console.log(sel(arr));