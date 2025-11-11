import * as repo from "../repository/studentRepository.js";

export const addStudent = (req, res) => {
    const success = repo.addStudent(req.body);
    if (success) {
        res.status(204).send();
    } else {
        res.status(409).send();
    }
}

export const findStudent = (req, res) => {
    const student = repo.findStudent(+req.params.id);
    if (student) {
        const {password, ...studentWithoutPassword} = student;
        res.json(studentWithoutPassword);
    } else {
        res.status(404).send();
    }
}

export const updateStudent = (req, res) => {
    const update = repo.updateStudent(req.body)
    if(update){
        res.status(204).send(update)
    }else {
        res.status(404).send()
    }
}

export const deleteStudent = (req, res) => {
    const deleted = repo.deleteStudent(+req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
};

export const addScore = (req, res) => {
    const score = repo.addScore(req.body)
    if(score){
        res.status(204).send(score)
    }else {
        res.status(404).send()
    }
}
export const findByName = (req, res) => {
    const name = repo.findByName(req.params.name);
    if(name.length > 0){
        res.json(name)
    }else {
        res.status(404).send()
    }
}
export const countByNames = (req, res) => {
    const count = repo.countByNames()
    res.json(count);
}

export const findByMinScore = (req, res) => {
    const minScore = Number(req.params.score);
    if(isNaN(minScore)){
        res.status(400).send()}

    const allStudents = repo.findByMinScore(minScore);
    if(allStudents.length > 0){
        res.json(allStudents);
    }else {
        res.status(404).send()
    }

}