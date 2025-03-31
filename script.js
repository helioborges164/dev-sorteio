const sortButton = document.getElementById("sort-button")

function generateNumber() {
    const min = Math.ceil(document.getElementById("min-number").value)
    const max = Math.floor(document.getElementById("max-number").value)

    if (min >= max) {
        alert("O valor mínimo não pode ser menor e nem igual ao valor máximo")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1) + min)

    alert(result)
    }
}

sortButton.addEventListener("click", generateNumber)

