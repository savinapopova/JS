function createPerson(firstName, lastName) {

    let person = {firstName, lastName};

    Object.defineProperty(person, 'fullName', {
        get: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function(value) {
             [this.firstName, this.lastName] = value.split(" ");
        }
    });

    return person;
}
