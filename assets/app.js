// ONLY ADDED THIS BECAUSE WHY NOT IT WORKS WITHOUT THIS TOO ! :) I JUST WANTED TO DO SOMETHING
const cards = document.querySelectorAll('.card')

openSomething(cards, "./article.html")

function openSomething(arr, url) {

    for( item of arr) {
        
        item.addEventListener('click', (e) => {
            const win = window.open(url, '_blank')
            win.focus()
        })
    }
}