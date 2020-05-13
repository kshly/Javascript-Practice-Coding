const form = document.querySelector('form')
const loadingImage = document.querySelector('#loadingImage')

loadingImage.style.display = 'none'

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const formData = new FormData('form')
    const searchTerm = formData.get('searchTerm')
    loadingImage.style.display = ''
    console.log(searchTerm)
})