/*
    Loading background particles
 */
particlesJS.load('particles-js', '../src/particlesjs-config.json', function() {});

/*
    Buttons hover all but me animation
 */

function hover() {
    var buttons = document.querySelectorAll('.button');
    for (let a = 0; a < buttons.length; a++) {
        buttons[a].addEventListener('mouseover', function() {
            for (var i = 0; i < buttons.length; i++) {
                if (i !== a) {
                    buttons[i].classList.add('button--hover');
                }
            }
        });
        buttons[a].addEventListener('mouseout', function() {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('button--hover');
            }
        });
    };
};

hover();



/*
    Sound activation
 */

var soundButton = document.querySelector('#sound-button');
var audio = document.querySelector('.audio');

soundButton.addEventListener('click', function() {
    if (soundButton.checked === true) {
        audio.play();
    } else {
        audio.pause()
    }
});

/*
    Content integration
 */


var buttonsChap4 = document.querySelectorAll('#button-chap4');
var sectionChap4 = document.querySelector('.section--chap4');
var titleChap4 = document.querySelector('#chap4-title');
var contentChap4 = document.querySelector('#chap4-content');
var buttonsContainer = document.querySelector('#buttons-container');

for (let i = 0; i < buttonsChap4.length; i++) {
    buttonsChap4[i].addEventListener('click', function() {

        var sectionChap5 = document.querySelector('.section--chap5');
        var footer = document.querySelector('.footer');

        if (!sectionChap5.classList.contains('section--hidden')) {
            sectionChap5.classList.add('section--hidden');
        }
        if (!footer.classList.contains('footer--hidden')) {
            footer.classList.add('footer--hidden');
        }

        sectionChap4.classList.remove('section--hidden');
        let planet = buttonsChap4[i].getAttribute('data-target');
        titleChap4.innerHTML = step1[planet].title;
        contentChap4.innerHTML = step1[planet].content;
        buttonsContainer.innerHTML = step1[planet].buttons;

        hover();

        var buttonsChap5 = document.querySelectorAll('#button-chap5');
        var sectionChap5 = document.querySelector('.section--chap5');
        var titleChap5 = document.querySelector('#chap5-title');
        var contentChap5 = document.querySelector('#chap5-content');

        for (let i = 0; i < buttonsChap5.length; i++) {
            buttonsChap5[i].addEventListener('click', function() {
                sectionChap5.classList.remove('section--hidden');
                let planet = buttonsChap5[i].getAttribute('data-target');
                titleChap5.innerHTML = step2[planet].title;
                contentChap5.innerHTML = step2[planet].content;
                footer.classList.remove('footer--hidden');
            });
        };
    });
};




