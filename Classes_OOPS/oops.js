const user = {
    userName :"Swayam",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
// console.log("Get user details from userName");
// console.log(`username ${userName}`);
// console.log(this);

    }
}
// console.log(user.userName); //swayam
// console.log(user.getUserDetails()); //Get user details from userName
// console.log(this);

function User(userName,loginCount,isLoggedIn) {
    this.Name = userName
    this.Count = loginCount
    this.Logged = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.Name}`);
        
    }
    return this
}

const user1 = new User("swayam",12,true); // NEW KEYwORD MAKE A NEW OTHER INSTENCE 
const user2 = new User("sood",23,false) // new is a constructor
console.log(user1); 
 console.log(user2);
 

