function solve(data) {
    let user = data[0];
    let count = 1;
    for (let i = 1; i < data.length; i++) {
        let pass = data[i];
        if (pass === user.split("").reverse().join("")) {
            console.log(`User ${user} logged in.`);
            return;
        } else {
            if (count === 4) {
                console.log(`User ${user} blocked!`);
                return;
            }
            console.log("Incorrect password. Try again.");
            count++;
        }


    }
}
