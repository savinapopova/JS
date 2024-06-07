function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     let data = JSON.parse(document
         .querySelector("#inputs textarea").value);

     let restaurants = {};


       for (let element of data) {
           let tokens = element.split(" - ");
           let restaurant = tokens[0];

           if (!restaurants.hasOwnProperty(restaurant)) {
               restaurants[restaurant] = {
                   workers: []
               };
           }

           let entries = tokens[1].split(", ");

           for (let entry of entries) {
               let [name, salary] = entry.split(" ");
               salary = Number(salary);
               let worker = {name, salary};
               restaurants[restaurant]
                   .workers
                   .push(worker);

           }

       }


       for (let restaurant in restaurants) {
           let workers =  restaurants[restaurant].workers;
           let averageSalary = Object
               .values(workers)
               .map(v => v.salary)
               .reduce((a, b) => a + b, 0) /
            workers.length;
           let bestSalary = Math.max(...Object.values(workers)
               .map(v => v.salary))
               .toFixed(2);

           restaurants[restaurant].averageSalary = averageSalary.toFixed(2);
           restaurants[restaurant].bestSalary = bestSalary;

       }

       let bestRestaurant = Object.entries(restaurants)
           .sort((a, b) => b[1].averageSalary - a[1].averageSalary)[0];


       let output = [];

       output.push(`Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].averageSalary} Best Salary: ${bestRestaurant[1].bestSalary}`)

       bestRestaurant[1].workers
           .sort((a, b) => b.salary - a.salary)

           .forEach(w => output.push(`Name: ${w.name} With Salary: ${w.salary}`));

       let bestRestaurantOutput = document
           .querySelector("#bestRestaurant p");
       bestRestaurantOutput.textContent = output.shift();

       let workersOutput = document
           .querySelector("#workers p");
       workersOutput.textContent = output.join(" ");




   }
}


