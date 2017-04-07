// Get the modal
var modal = document.getElementById('saveReportModal');

// Get the button that opens the modal
var btn = document.getElementById("saveReportButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var folders = document.getElementById("folders");

var btnSaveTo = document.getElementById("chooseDifferentFolder");

var newFolder = document.getElementById("newFolderSection");

var folderList = document.getElementById("foldersList");

var newFolderText = document.getElementById("newFolderText");

var newFolderSpan = document.getElementById("newFolderSpan");

var btnNewFolder = document.getElementById("newFolderButton");

var addDateToFielName = document.getElementById("includeDateInFileName");

var fileNameUser = document.getElementById("fileNameTextUser");

var newFolderWarning = document.getElementById("newFolderWarningMsg");


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
    console.log(document.getElementsByClassName("modal-content")[0]);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        console.log(document.getElementsByClassName("modal-content")[0]);
    }
}

btnNewFolder.onclick = function () {

    btnNewFolder.value = 'Save New Folder';

    newFolderSpan.style.display = "block";

    var newFolderValue = newFolderText.value.toUpperCase();

    if (newFolderValue.length >= 3) {
        newFolderWarning.innerHTML = '';
        var test = Array.from(document.getElementsByClassName('newFolderLabel'));
        var existingValues = [];

        test.forEach(function (element) {
            existingValues.push(element.innerText.toUpperCase());
        });

        var alreadyPresent = existingValues.indexOf(newFolderValue);

        if (alreadyPresent == -1) {
            var new_id = "folder_" + newFolderValue.toLocaleLowerCase();
            btnNewFolder.value = 'Add New Folder';
            newFolderText.value = "";
            folderList.innerHTML += "<input type='radio' id=" + new_id + " name='folders' checked>  <label class='newFolderLabel' for=" + new_id + "> " + newFolderValue + "</label>";
        } else {
            newFolderWarning.innerHTML = 'Folder already present!';
        }
    } else {
        newFolderWarning.innerHTML = 'Minimum 3 characters';
    }


}