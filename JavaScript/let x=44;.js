let student={
    name:"ravi",
    marks:[10,20,30]

}
function calc(s){
    s.marks=s.marks.map(mark => mark +100);
    console.log(s.marks);
}
calc(student);
console.log(student)
calc(student);
console.log(student)