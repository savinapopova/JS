async function solve() {

    let url = 'http://localhost:3030/jsonstore/collections/students';
    let table = document.querySelector('tbody');

   await loadStudents();

   let form = document.getElementById('form');

    form.addEventListener('submit', createStudent);

    async function createStudent(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        if (formData.entries() < 4) {
            alert("All fields should be filled!")
            return;
        }
       let {
           firstName,
           lastName,
           facultyNumber,
           grade
       } = Object.fromEntries(formData.entries());

        let body = {
            firstName,
            lastName,
            facultyNumber,
            grade
        };

        try {
            let request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!request.ok) {
                throw new Error("No data sent!");
            }
        } catch (error) {
            alert(error.message);
        }
        form.reset();

       await loadStudents();

    }




    async function loadStudents() {
        table.innerHTML = '';

        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error("No data");
            }
            let data = await response.json();
            let students = Object.values(data);
            console.log(students);
            students.forEach(s => table.appendChild(createRow(s)));
        } catch (error) {
            alert(error.message);
        }

    }

    function createRow(student) {
        let row = document.createElement('tr');
        row.appendChild(createField(student.firstName));
        row.appendChild(createField(student.lastName));
        row.appendChild(createField(student.facultyNumber));
        row.appendChild(createField(student.grade));

        return row;
    }

    function createField(property) {
        let field = document.createElement('td');
        field.textContent = property;
        return field
    }


}
solve();
