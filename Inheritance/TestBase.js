class TestBase {
    static username ="Cybertek";
    static password ="School";

static LogIn(){
console.log("LogIn");
         }

}

class Test extends TestBase{


}
Test.LogIn();
console.log(TestBase.username);

module.exports =TestBase;