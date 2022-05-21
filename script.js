window.onload = getImg()
document.querySelector('#next').addEventListener('click', () => getImg(++counter))
document.querySelector('#prev').addEventListener('click', () => getImg(--counter))
let counter = 0

async function getImg() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos')
        let objects = await response.json()
        let url = objects[counter].url
        document.querySelector('#img').src = url
        if (counter < 0) { counter = 0 }
    }
    catch {
        alert('Error!')
    }
}
