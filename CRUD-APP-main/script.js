
//!initial values
var selectedRow = null;
//!form submit logic
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}
//!get method(Retriving the data)
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["number"] = document.getElementById("number").value;
   formData["city"] = document.getElementById("city").value;
  return formData;
}
//!insert the data (Post method)
function insertNewRecord(data) {
  debugger;
  var table = document
    .getElementById("studentList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.number;
   cell4 = newRow.insertCell(3);
   cell4.innerHTML = data.city;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick="onEdit(this)" class="btn btn-warning btn-sm">Edit</button> <button onClick = "onDelete(this)" class="btn btn-danger btn-sm">Delete</button>`;
}
//!edit and update the data (Update method)
//editing the data(get)
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("number").value = selectedRow.cells[2].innerHTML;
   document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
//updating the data
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.number;
   selectedRow.cells[3].innerHTML = formData.city;
}
//!deleting the data (delete method)
//delete the data
function onDelete(td) {
  if (confirm("Are you sure about deleting😒 the data ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
//!reseting the values in form
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
   document.getElementById("city").value = "";
  selectedRow = null;
}
function saveData() {

  debugger;
  var name = document.getElementById("name").value;
 var email= document.getElementById("email").value;
 var number = document.getElementById("number").value;
 var city = document.getElementById("city").value ;
  var comment = document.getElementById("comment").value;

  var data = {
    name: name,
    email: email,
    number: number,
    city: city,
    comment:comment
  };


  fetch('./connect.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
    
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));  
  debugger;

  // AJAX request to send data to PHP script
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "connect.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById("output").innerHTML = xhr.responseText;
          console.log("sec")
      }
      else{
        console.log("failed")
      }
  };
  body: JSON.stringify(data)
  xhr.send(body);
}
