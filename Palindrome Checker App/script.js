const button = document.querySelector('#check');

button.addEventListener('click', function(e) {
    const inputValue = document.querySelector('#input').value;
    const returned_value = reverseString(inputValue);

    if (returned_value === inputValue) {
        alert("This is a Palindrome")
    } else {
        alert("This is not a Palindrome")
    }
    document.querySelector('#input').value = "";
})

function reverseString(str) {
    let storage = '';
    for (let i = str.length-1; i >= 0; i--) {
        storage += str[i];
    }
    return storage;
}



