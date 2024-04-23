function solve(year, month, day) {
    let date = new Date(year, month - 1, day);
    let tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`);
}
