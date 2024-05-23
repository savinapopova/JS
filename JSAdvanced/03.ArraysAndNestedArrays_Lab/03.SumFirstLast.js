function solve(arr) {
    if (arr.length === 0) {
        return;
    }
   if (arr.length === 1) {
       return arr[0];
   }
   return Number(arr.shift()) + Number(arr.pop());
}
