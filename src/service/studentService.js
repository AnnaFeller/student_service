import *as repo from "../repository/studentRepository.js"

export const addStudent = async ({id, name, password}) => {
    if(await repo.findStudentById(id)){
        return false
    }
    await  repo.createStudent({_id:id ,name, password})
    return true

}

export const findStudent = async id => {
const student = await repo.findStudentById(id)
    if(student){
        student.password = undefined
    }
    return student
}

export const deleteStudent = async id => {
const student = await repo.deleteStudentById(id)
    if(student){
        student.password = undefined
    }
    return student
}

export const updateStudent = async (id, data) => {
   const student = await repo.updateStudent(id,data)
    if(student){
        student.score = undefined
    }
    return student
}

export const addScore = async (id, exam, score) => {
    const student = await  repo.updateStudentScore(id, exam, score)
    if(student){
        student.password = undefined
    }
    return student
}

export const findByName = async (name) => {
const student = await repo.findStudentByName(name)
    if(student){
        student.password = undefined;
    }
    return student
 }

export const countByNames = async (names) => {
    return repo.countStudentByName(names);

}

export const findByMinScore = async (exam, minScore) => {
 const student = await repo.findStudentsByMinScore(exam,minScore)
if (student){
    student.password = undefined
}
    return student
}