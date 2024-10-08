var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var fatherElement = document.getElementById('FatherName');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var qualificationElement = document.getElementById('qualification');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('Skills');
    if (nameElement && fatherElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var fathername = fatherElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var qualification = qualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var dynamicResume = "\n                <h2>Resume</h2>\n                <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span></p>\n                <p><strong>Father's Name:</strong> <span id=\"edit-FatherName\" class=\"editable\">").concat(fathername, "</span></p>\n                <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n                <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n    \n                <h3>Qualification:</h3>\n                <p id=\"edit-qualification\" class=\"editable\">").concat(qualification, "</p>\n    \n                <h3>Experience:</h3>\n                <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    \n                <h3>Skills:</h3>\n                <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n            ");
        var dynamicResumeElement = document.getElementById('dynamicResume');
        if (dynamicResumeElement) {
            dynamicResumeElement.innerHTML = dynamicResume;
        }
        else {
            console.log('Dynamic Resume element is missing');
        }
    }
    else {
        console.log('One or more form elements are missing');
    }
});
