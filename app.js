// JavaScript code
(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function() {
        if (screen.value === '') {
            screen.value = "Please Enter";
        } else {
            try {
                let answer = math.evaluate(screen.value);
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
            }
        }
    });

    clear.addEventListener('click', function() {
        screen.value = "";
    });

})
();