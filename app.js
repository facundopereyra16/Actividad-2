const readlineSync = require("readline-sync");

const { studentsList } = require("./studentsList");

const registerStudent = () => {
  const numberOfStudents = readlineSync.question(
    "Ingrese la cantidad de estudiantes a registrar: "
  );
  const students = [];

  for (let i = 0; i < numberOfStudents; i++) {
    const firstName = readlineSync.question(
      `Ingrese el nombre del estudiante ${i + 1}: `
    );
    const age = readlineSync.question(
      `Ingrese la edad del estudiante ${firstName}: `
    );

    const newStudent = {
      firstName,
      age,
    };

    students.push(newStudent);
  }

  studentsList(students);
};

registerStudent();
