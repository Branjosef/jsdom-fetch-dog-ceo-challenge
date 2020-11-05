console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () => {
  main();
});

function main(){
  dogImages();
  dogBreeds();
};


function dogImages(){fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => dogImgIndex(json.message))
};

function dogImgIndex(imagesURL){
const dogImgContainer = document.getElementById('dog-image-container')
imagesURL.forEach(imageURL => {
  const div = document.createElement('div')
  const img = document.createElement('img')
  img.src = imageURL
  dogImgContainer.appendChild(div)
  div.appendChild(img)
 })
}

function dogBreeds(){fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => Object.keys(json.message).forEach(breed => {
    modBreed(breed)
  }))
};

function modBreed(breed) {
  let ul = document.querySelector('#dog-breeds')
  let li = document.createElement('li')
  li.addEventListener('click', changeColor)
  li.innerText = breed
  let dropDown = document.querySelector('#breed-dropdown')
  ul.appendChild(li)
  dropDown.addEventListener('change', () => {
    if (li.innerText[0] === dropDown.value) {
      ul.appendChild(li)
    } else {
      li.remove
    }
  })
}

function changeColor(event) {
  event.target.style.color = "blue"
}


