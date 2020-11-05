document.addEventListener('DOMContentLoaded', () => {

  let dogImageContainer = document.getElementById('dog-image-container')
  let dogBreeds = document.getElementById('dog-breeds')
  let dropDown = document.getElementById('breed-dropdown')

  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(breeds => {
      dogImageContainer.innerHTML = ' '
      breeds.message.forEach(breed => {
      dogImageContainer.innerHTML += breedIndex(breed)
      })
  })

  const breedIndex = (breed) => {
    return ` <div> <img src='${breed}'></img></div>`
  }

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(allBreeds => {
      Object.keys(allBreeds.message).forEach(breed => {    //Object.keys is what is used to pull all keys as an array that you can then iterate through
        dogBreeds.innerHTML += allBreedIndex(breed)
      })
  })

  const allBreedIndex = (breed) => {
    return `<li class ='${breed[0]}'>${breed}</li>`
  }

  dogBreeds.addEventListener('click', (event) => {
    if (event.target.className === 'li') {
      event.target.style.color = "blue"
    }
  })

  dropDown.addEventListener('change', (event) => {
   const breeds =  dogBreeds.querySelectorAll('li')
    breeds.forEach(breed => {
    breed.style.removeProperty('display')})
  
    breeds.forEach(breed => {
      if (breed.className != event.target.value) {
        breed.style.display = 'none'}
      })
    if (event.target.value === 'all') {
      breeds.forEach(breed => {
        breed.style.removeProperty('display')
      })
    }
   })
})