// Write a function named `updateStudentGradeByCity` that returns an array of students for a
// specific city with their new grade. It should accept a list of students (from `getListStudents`),
// a `city` (string), and `newGrades` (array of grades) as parameters
// You must use `filter` and `map` combined.

export default function updateStudentGradeByCity(array, city, newGrades) {
  return array.filter((item) => (item.location === city ? item : '')).map((item) => {
    const gradeScore = newGrades.filter((element) => (element.studentId === item.id ? element : '')).map((grade) => grade.grade);
    return { ...item, grade: gradeScore[0] || 'N/A' };
  });
}
