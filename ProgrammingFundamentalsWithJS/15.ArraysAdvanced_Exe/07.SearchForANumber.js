function solve(arr1, arr2) {
    let elementsCount = arr2.shift();
    let deleteCount = arr2.shift();
    let numberToSearch = arr2.shift();
    let newArr = arr1.slice(0, elementsCount);
    newArr.splice(0, deleteCount);
    let occurrences = newArr
        .filter(x => x === numberToSearch)
        .length;
    console.log(`Number ${numberToSearch} occurs ${occurrences} times.`);
}
