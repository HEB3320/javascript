class Credentials{

username = "Cybertek";
password = "cybertek123";

get getUSerName (){
    return this.username
}


set setUserName(username){
this.username=username;
}


}

var obj =new Credentials();
console.log(obj.getUSerName);

obj.setUserName = "Syntax";
console.log(obj.getUSerName);