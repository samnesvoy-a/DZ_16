function changeColor() {
    document.getElementById('color').style.color = "#fff"; // forecolor
    document.getElementById('color').style.background = "green"; // backcolor
}

changeColor();

function changePosition() {
    let main = document.querySelector("#main")
    let wrapper = document.querySelector("#wrapper")
    wrapper.append(main);
}

changePosition();



function confirm() {
    let imageSrc = prompt('Введите URL вашей картинки');
    console.log(imageSrc);

    let wrapper = document.querySelector('#wrapper');
    let image = document.createElement('img');
    image.src = imageSrc;

    wrapper.append(image);
}

confirm();



function addInput() {

    let userValue = +prompt('Сколько инпутов выплюнуть??');
    let myBlock;
    myBlock = document.createElement('div');
    myBlock.classList.add('form-group');
    document.querySelector('form').prepend(myBlock);

    for (let i = 1; i <= userValue; i++) {
        let input = document.createElement('input');
        let div = document.createElement('div');

        if ( i % 3 === 0 ) {
            input.placeholder="Some text";
        } else {
            input.value="Input " + i;
        }

        input.classList.add('input-item');
        if ( i % 2 === 0 ) {
            input.classList.add('background-color');
        }

        if ( i === userValue) {
            input.classList.add('zero-margin');
        }

        div.append(input)
        myBlock.append(div);
    }
}

addInput();