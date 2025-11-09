import * as repo from "../repository/studentRepository.js"

export const addStudent = (req, res) => {
    const success = repo.addStudent(req.body)
    if(success){
        res.status(204).send()
    }else {
        res.status(409).send()
    }
}
export const findStudent = (req, res) => {
    const student = repo.findStudent(+req.params.id)
    console.log(student)
    if(student){
        const{password, ...studentWithoutPassword}=student;
    res.json(studentWithoutPassword)
    }else {
        res.status(404).send()
    }
}

export const updateStudent = (req, res) => {
    //TODO UPDATE STUDENTS NAME OR PASSWORD
}

export const deleteStudent = (req, res) => {
    //TODO delete students
}
export const addScore = (req, res) => {
    //todo add score
}
export const findByName = (req, res) => {
    //todo find by name
}
export const countByNames = (req, res) => {
    //todo
}

export const findByMinScore = (req, res) => {
    //TODO
}