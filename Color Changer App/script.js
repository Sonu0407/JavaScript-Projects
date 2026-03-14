const buttons = document.querySelectorAll('#button');
const body = document.querySelector('body')


const randomColor = () => {
    let choose = "0123456789ABCDEF"
    let color = '#';
    
    for (let index = 0; index < 6; index++) {
        color += choose[Math.floor(Math.random() * 16)] 
    }
    return color;
}

buttons.forEach( (button) => {
    button.addEventListener('click', function(e) {
        console.log(this.className);

        if(this.className === 'red') {
            body.style.backgroundColor = this.className;
        } else if(this.className === 'green') {
            body.style.backgroundColor = this.className;
        } else if(this.className === 'blue') {
            body.style.backgroundColor = this.className;
        } else {
            body.style.backgroundColor = randomColor();
        }  
    })
})


