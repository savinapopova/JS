function solve(data) {
    class Student {
        name;
        grade;
        averageScore;


        constructor(name, grade, averageScore) {
            this.name = name;
            this.grade = grade;
            this.averageScore = averageScore;
        }

    }

    let students = {};

    for (let datum of data) {
        datum = datum.split(", ");
        let name = datum[0].split(": ")[1];
        let grade = Number(datum[1].split(": ")[1]);
        let averageScore = Number(datum[2].split(": ")[1]);

        if (averageScore < 3) {
            continue;
        }

        grade++;

        if (!students.hasOwnProperty(grade)) {
            students[grade] = [];
        }
        students[grade].push(new Student(name, grade, averageScore));

    }

    Object.keys(students)
        .sort((a, b) => a - b)
        .forEach(g => print(g));

    function getAverageScore(grade) {
       return students[grade]
            .map(s => s.averageScore)
            .reduce((a,b) => a + b, 0) / students[grade].length;
    }

    function print(grade) {
        console.log(`${grade} Grade
List of students: ${students[grade].map(s => s.name).join(", ")}
Average annual score from last year: ${getAverageScore(grade).toFixed(2)}`);
        console.log();
    }
}
