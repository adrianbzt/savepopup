// Get the modal
var modal = document.getElementById('myModal');

// Get Folders
var folders = document.getElementById("folders_div");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the save to button; allows you to select a folder
var btnSaveTo = document.getElementById("save_to");

// Get the new folder id
var newFolder = document.getElementById("new_folder_div");

var folderList = document.getElementById("folders_list");

var newFolderText = document.getElementById("new_folder_text");

var newFolderSpan = document.getElementById("new_folder_span");

var btnNewFolder = document.getElementById("new_folder_btn");

// Get the ad date to file name
var addDateToFielName = document.getElementById("include_date_save_report");

// Get the file name id field
var fileNameUser = document.getElementById("file_name_text_user");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

addDateToFielName.onclick = function () {

    var currentDay = checkIfLowerThan10(new Date().getUTCDate());
    var currentMonth = checkIfLowerThan10(new Date().getUTCMonth() + 1); // starts from 0
    var currentYear = new Date().getUTCFullYear();
    var formatedDate = currentDay + "." + currentMonth + "." + currentYear;

    if (fileNameUser.value.indexOf(formatedDate) == -1) {
        fileNameUser.value += "_" + formatedDate;
    } else {
        var updatedText = fileNameUser.value.replace(("_" + formatedDate), '');
        fileNameUser.value = updatedText;
    }

}

fileNameUser.onclick = function () {
    if (addDateToFielName.checked) {
        this.setSelectionRange(0, this.value.length - 11);
    } else {
        this.setSelectionRange(0, this.value.length);
    }

}

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

function checkIfLowerThan10(value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return value;
    }
}

// When the user clicks on the button, open the modal
btnSaveTo.onclick = function () {
    var elementDisplayStyle = folders.style.display;
    if (elementDisplayStyle === "") {
        folders.style.display = "block";
        newFolder.style.display = "block";
    } else {
        folders.style.display = "";
        newFolder.style.display = "";
    }

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";


    document.getElementsByClassName('modal-content').innerHTML("");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btnNewFolder.onclick = function () {

    btnNewFolder.value = 'Save New Folder';

    newFolderSpan.style.display = "block";

    var newFolderValue = newFolderText.value.toUpperCase();

    if (newFolderValue.length >= 3) {
        var test = Array.from(document.getElementsByClassName('new_folder_label'));
        var existingValues = [];

        test.forEach(function (element) {
            existingValues.push(element.innerText.toUpperCase());
        });

        var alreadyPresent = existingValues.indexOf(newFolderValue);

        if (newFolderValue.length >= 3 && alreadyPresent == -1) {
            var new_id = "folder_" + newFolderValue.toLocaleLowerCase();
            btnNewFolder.value = 'Add New Folder';
            newFolderText.value = "";
            folderList.innerHTML += "<input type='radio' id=" + new_id + " name='folders' checked>  <label class='new_folder_label' for=" + new_id + "> " + newFolderValue + "</label>";
        } else {
            console.log('fail; you cannot add it');
        }
    }


}