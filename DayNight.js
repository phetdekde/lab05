const btn = document.querySelector('button')
btn.addEventListener('click', swap)

function swap() {
    const time = document.querySelector('body')
    if (time.classList.contains('day')) {
        time.classList.add('night')
        time.classList.remove('day')
    } else {
        time.classList.add('day')
        time.classList.remove('night')
    }

}