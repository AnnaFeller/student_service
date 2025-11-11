import {Student} from "../model/student.js";

const students = new Map();

export const addStudent = ({id, name, password}) => {
    if(students.has(+id)) {
        return false;
    }
    students.set(+id, new Student(+id, name, password));
    return true;
}

export const findStudent = id => students.get(+id);

export const updateStudent = ({id, name, password}) => {
    const student = students.get(+id)
    if (!student) return false
    if (name) student.name = name
    if (password) student.password = password;

    students.set(+id, student)
    return student
}

export const deleteStudent = id => students.delete(+id)

export const addScore = ({id, score}) => {
    const student = students.get(+id)
    if (!student) return false

    if(!Array.isArray(student.scores)) {
        student.scores = []
    }
    student.scores.push(+score)
    return true
}

export const findByName = (name) => {
    const allStudent = Array.from(students.values())
    return allStudent.filter(student => student.name === name)
}

export const countByNames = () => {
    const allStudents = Array.from(students.values());
    return allStudents.reduce((acc, student) => {
        if (!acc[student.name]) acc[student.name] = 0;
        acc[student.name]++;
        return acc;
    }, {});
}

export const findByMinScore = (minScore) => {
    const allStudents = Array.from(students.values());
    return allStudents.filter(student => {
        Array.isArray(student.scores) && student.scores.some(score => score >= minScore)
    })

}