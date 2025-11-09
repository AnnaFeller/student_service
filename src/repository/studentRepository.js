import {Student} from "../model/student.js";

const student = new Map();

export const addStudent = ({id,name,password}) => {
    if(student.has(id)){
        return false;
    }
    student.set(+id,new Student(+id,password,name));
    return true
}

export const findStudent = id => student.get(id)