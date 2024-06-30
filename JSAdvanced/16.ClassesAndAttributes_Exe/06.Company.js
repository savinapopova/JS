class Company {
    departments;

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let props = [name, salary, position, department];
        if (props.includes('') || props.includes(undefined) ||
        props.includes(null) || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        let employee = {name, salary, position};
        this.departments[department].push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let comparator = (a, b) => {
           return getAverage(b) - getAverage(a);
        };
        function getAverage(entry) {
            let total = entry[1]
                .map(x => x.salary)
                .reduce((a, b) => a + b, 0);

            return total / entry[1].length;
        }


      let best = Object.entries(this.departments)
            .sort(comparator)[0];
      let avgSalary = getAverage(best).toFixed(2);

      let output = [];
      output.push(`Best Department is: ${best[0]}`);
      output.push(`Average salary: ${avgSalary}`);

      let employees = best[1];
      employees
          .sort((a,b) => {
              let result = b.salary - a.salary;
              if (result === 0) {
                  result = a.name.localeCompare(b.name);
              }
              return result;
          })
          .forEach(e => output.push(`${e.name} ${e.salary} ${e.position}`));

      return output.join('\n');
    }

}
