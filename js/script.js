//let addButton = document.getElementById("add-btn")

function countVowels() {
    let parameter = document.getElementById("word").value
    let count = 0
    let vowels = 'aeiouAEIOU'

    for (let i = 0; i < parameter.length; i++) {
        if (vowels.indexOf(parameter[i]) > -1) {
            count++
        }
    }
    alert(`A palavra ${parameter} contém ${count} vogais!`)

}