(() => {
    'use strict';
    //validation
    let validation_button = document.getElementById('valid_btn');
    let email = document.getElementById('input-email');
    let correct_data = document.getElementById('correct');
    let phone_number = document.getElementById('number');

    function emptyField() {
        correct_data.classList.add('show');
        correct_data.classList.add('size');
    }

    validation_button.addEventListener('click', () => {
        if (/^[a-z0-9_\.\-]+@[a-z0-9_\.\-]+\.[a-z]+$/i.test(email.value) === true && /^\+380[0-9]{9}$/.test(phone_number.value) === true) {
            correct_data.classList.add('show');
            correct_data.classList.remove('wrong');
            correct_data.classList.remove('size');
            correct_data.classList.add('correct');
            document.getElementById('note-text').innerHTML = "Your email and phone number are correct!";
        }
        else if (email.value === '' && phone_number.value === '') {
            emptyField();
            document.getElementById('note-text').innerHTML = "Fields are empty!";
        }
        else if (email.value === '') {
            emptyField();
            document.getElementById('note-text').innerHTML = "Enter your email!";
        }
        else if (phone_number.value === '') {
            emptyField();
            document.getElementById('note-text').innerHTML = "Enter the number!";
        }
        else if (/^[a-z0-9_\.\-]+@[a-z0-9_\.\-]+\.[a-z]+$/i.test(email.value) !== true || /^\+380[0-9]{9}$/.test(phone_number.value) !== true) {
            correct_data.classList.remove('correct');
            correct_data.classList.add('wrong');
            correct_data.classList.add('show');
            document.getElementById('note-text').innerHTML = "You can't use !#()[]/|\*&$%-+=?, and number should contain only numbers, +, () ";
        }
    });
    $('body').fadeIn(1000);
})();