                        /* ***** Data Entry Form for Quiz Application ***** */
var userName = document.getElementById('Name');
var userRollNo = document.getElementById('RollNo');
var userSection = document.getElementById('Section');
var userLanguage = document.getElementById('Language');
var userInstitute = document.getElementById('Institute');


function submit() {
    var userObject = {
        Name: userName.value,
        RollNo: userRollNo.value,
        Section: userSection.value,
        Language: userLanguage.value,
        Institute: userInstitute.value
    }

    if (userObject.Name === '' || userObject.RollNo === '' || userObject.Section === '' || userObject.Language === '' || userObject.Institute === '') {
        alert('You must fill the required form!');
    }

    else {
        localStorage.setItem('UserData', JSON.stringify(userObject));
        alert('Your Data has saved in Local Storage!');
        location = ('Detail Folder/index.html');
        userName.value = '';
        userRollNo.value = '';
        userSection.value = '';
        userLanguage.value = '';
        userInstitute.value = '';
    }
}
                                        /* ***** Form Completed ***** */