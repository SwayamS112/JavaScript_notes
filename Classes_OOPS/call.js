function setUserName(userName){
this.userName = userName
console.log("called"); // this is called when i call it normally but it doesnot send the content
}

function createUser(userName,email,password){
    //setUserName(userName)
    setUserName.call(this,userName)

    this.email = email 
    this.password = password
}

const chai = new createUser("chai","chai.com","123")
console.log(chai);
