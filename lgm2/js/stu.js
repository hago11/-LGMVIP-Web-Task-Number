var addBtn = document.getElementById('add-btn');
var deleteBtn = document.getElementById('delete-btn');
var table = document.getElementById('display');
var row = 1;

addBtn.onclick = function () {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var age = document.getElementById('age').value;
  var addr = document.getElementById('addr').value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var skills = document.querySelectorAll('input[name="skills"]:checked');

  if (name !== '' && email !== '' && age !== '' && addr !== '' && gender && skills.length > 0) {
    var newRow = table.insertRow(row);
    var nameCell = newRow.insertCell(0);
    var emailCell = newRow.insertCell(1);
    var ageCell = newRow.insertCell(2);
    var addrCell = newRow.insertCell(3);
    var genderCell = newRow.insertCell(4);
    var skillsCell = newRow.insertCell(5);
    var profileCell = newRow.insertCell(6);

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    ageCell.innerHTML = age;
    addrCell.innerHTML = addr;
    genderCell.innerHTML = gender.value;
    skillsCell.innerHTML = '';

    skills.forEach(function (skill) {
      skillsCell.innerHTML += skill.value + ', ';
    });

    skillsCell.innerHTML = skillsCell.innerHTML.slice(0, -2); // Remove the last comma

    var img = document.createElement('img');
    img.setAttribute('src', (gender.value === 'Male') ? 'https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' : 'https://d29fhpw069ctt2.cloudfront.net/clipart/92161/preview/dagobert83_female_user_icon_preview_d35c.png');
    img.setAttribute('alt', gender.value);
    img.style.width = '50px';
    img.style.height = '50px';
    profileCell.appendChild(img);

    row++;
    document.getElementById('input-form').reset();
  } else {
    alert('Please fill all the fields and select at least one skill');
  }
};

deleteBtn.onclick = function () {
  if (row > 1) {
    table.deleteRow(row - 1);
    row--;
  }
};
