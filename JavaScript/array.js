function divide(arr) {
    if (arr.length == 1) {
        console.log(arr);
        return;
    }
    let  mid = Math.floor(arr.length / 2);
    divide(arr.slice(0, mid));
    divide(arr.slice(mid, arr.length));
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
divide(arr);