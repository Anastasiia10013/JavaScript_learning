let testUserNames = ["Bret", "Antonette", "Patricia Lebsack"];
//testUserNames.forEach((element) => {
//  userNameLog(element);
//});

userNameLog();
// "Patricia Lebsack"
function userNameLog() {
  $.get("https://jsonplaceholder.typicode.com/users", (data, status) => {
    //const obj = JSON.parse(data);
    for (let index = 0; index < data.length; index++) {
      if (data[index].phone.includes("3")) {
        console.log(`${index} - ${data[index].name} - ${data[index].phone}`);
      } else {
        console.log("phone doesn't contain number 3");
      }
    }
    console.log(data.length);
    console.log("completed");
  });
}


