//init Github
const github = new Github();
//init ui
const ui = new UI();

//search input

const SearchUser = document.getElementById("searchUser");
//search input eventlistener
SearchUser.addEventListener("keyup", (e) => {
  //get input text
  const userText = e.target.value;

  if (userText !== "") {
    //Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
