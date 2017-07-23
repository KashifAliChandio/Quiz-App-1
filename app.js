                                                  /* ***** Log In Page ***** */

// Functionality of Login Page...!

function logIn() {
    var name = document.getElementById('userName');
    var pass = document.getElementById('password');

    var saveName = "Shahzada0807";
    var savePassword = "Ahmed1996";

    // If statements for if Username or Password is Match or Incorrect...!

    if (name.value === saveName && pass.value === savePassword) {
        window.alert('You have logged in succesfully!');
        location = ("Quiz Info Folder/index.html");

        document.getElementById('userName').value = '';
        document.getElementById('password').value = '';
    }

    else {
        window.alert('The Username or Password you entered is Incorrect!');

        document.getElementById('userName').value = '';
        document.getElementById('password').value = '';
    }
}

                                                 /* ***** Login Page for Quiz Application ***** */
                                             /* ***** Made by :- Programmer Shahzada Muhammad Ahmed ***** */