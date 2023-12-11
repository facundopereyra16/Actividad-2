const studentsList = (students) => {
  console.log("Lista de estudiantes registrados:");
  students.forEach((student) => {
    console.log(`Nombre: ${student.firstName}, Edad: ${student.age}`);
  });
};

module.exports = { studentsList };
