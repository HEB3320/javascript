class Employee {

setEmpDetails(name,id,phono){
this.name=name;
this.id= id;
this.phono=phono;
}
getEmpName(){
  return this.name;  
}
getEmpId(){
    return this.id;  
  }
  getEmpPhono(){
    return this.phono;  
  }



}

let emp1 =new Employee();
emp1.setEmpDetails('Eng','009','99939382');
console.log(emp1.getEmpId());