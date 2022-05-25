let counter = 1
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#next').addEventListener('click', () => getImg(++counter))
    document.querySelector('#prev').addEventListener('click', () => getImg(--counter))
    document.querySelector('#random').addEventListener('click', () => randomNumber())
})
window.onload = getImg(1)

async function getImg(x) {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos' + '?id=' + x)
        let objects = await response.json()
        let url = objects[0].url
        document.querySelector('#img').src = url
    }
    catch (error) {
        if (x < 1 || x > 5000) {
            x = 1
            getImg(x)
        }
        else {
            alert(`Произошла ошибка: ${error.message}. Проверьте подключение к сети интернет. При наличии исправного подключения попробуйте отправить запрос чуть позже.`)
        }
    }
    finally {
        checkDisabledBtn(x)
    }
}

function checkDisabledBtn(x) {
    let btn1 = document.querySelector('#prev')
    let btn2 = document.querySelector('#next')
    if (x == 1) {
        btn1.className = 'disabled'
    }
    else if (x == 5000) {
        btn2.className = 'disabled'
    }
    else {
        btn1.className = 'btn'
        btn2.className = 'btn'
    }
}

function randomNumber() {
    let random = Math.floor(Math.random() * 5000)
    ++counter
    return getImg(random)
}