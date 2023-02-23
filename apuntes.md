const square = function(number) {
    return number * number;
}

const square = (number) => number * number;
const square = number => number * number; //si hay un parámetro no hacen falta los paréntesis
const square = () => number * number; //si la función no pasa ningún parámetro

---

const activeJobs = jobs.filter(function(job) {return job.isActive;})
const activeJobs = jobs.filter(job => job.isActive)

---
const adress {
    street: '',
    city: '',
    country: ''
}

const street = address.street
const city = address.city
const country = address.country

const {street, city, country} = address //así equivale a lo mismo de arriba

-

class Person {
    constructor(name) {
        this.name = name
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name)
        this.degree = degree
    }
}

const teacher = new Teacher("Mosh", "MSc")