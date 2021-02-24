const text = document.querySelector('input')
text.addEventListener('keypress', add)

function add(e) {
    if(e.keyCode == 13) {
        document.querySelector('ul').appendChild(document.createElement('li')).innerHTML = "<span><i class='fas fa-trash-alt'></i></span> " + text.value

        const li = document.querySelectorAll('li')
        li.forEach(element => {
            element.addEventListener('click', completed)
        });

        const span = document.querySelectorAll('span')
        span.forEach(element => {
            element.addEventListener('click', remove)
        });
    }
}

function completed() {
    if (this.classList.contains('completed')) {
        this.classList.remove('completed')
    }
    else {
        this.classList.add('completed')
    }
}

function remove() {
    this.parentNode.remove()
}