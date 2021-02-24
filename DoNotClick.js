const txt = document.querySelectorAll('h1')
txt.forEach(element => {
    element.addEventListener('click', textClick)
});

const btn = document.querySelectorAll('button')
btn.forEach(element => {
    element.addEventListener('click', btnClick)
});

function textClick() {
    txt[0].innerHTML = "WHY CLICK ME"
    txt[1].innerHTML = ":("
}

function btnClick() {
    var word = ""
    if (this.id == 1) word = "man!"
    else if (this.id == 2) word = "bro!"
    else if (this.id == 3) word = "O_O"
    else word = "please!"
    alert(this.textContent + " said " + word)
    this.style.color = "White"
    this.style.backgroundColor = "Blue"
}
