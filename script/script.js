// function zoomImage(){
//   const images = document.querySelectorAll('.projects__item-active')
//   images.forEach(element => element.addEventListener('click', ()=> {
//     element = event.target.parentElement.parentElement
//     const imgSrc = event.target.nextSibling.src
//     openModal(imgSrc,element)
//   }))
// }

const form = document.querySelector('.contact__form')
const input = document.querySelectorAll('.contact__input')
const error = document.querySelector('.errors')
let  errors = []
form.addEventListener('submit',async (e) =>  {
  // e.preventDefault()
  if(input[0].value.length === 0 || input[1].value.length === 0 || input[3].value.length === 0 ){
    errors.push("If you want to sent message to me, please fill all field with *")
  }else{
    errors.length = 0
  }
  const data = {
    name: input[0].value,
    email: input[1].value,
    number: input[2].value,
    message: input[3].value
  }
  errors = [...new Set(errors)]
  if (errors.length > 0){
    errors = errors.map(err => `<p>${err}</p>`)
    console.log(errors);
    error.classList.add('errors-alert')
    error.innerHTML = `${errors}`
  }else{
    error.classList.remove('errors-alert')
    let response = await fetch('sendmail.php', {
      method: POST,
      body: data
    })
    if (response.ok) {
      let result = await response.json()
      console.log(result);
      form.reset()
    }else{
      console.log("Error");
    }
  }
  console.log(errors);
  // for (let i= 0;  i<input.length; i++){
  //   console.log(input[i].value);
  // }
})



let burger = document.querySelector('.burger__menu')
let menu = document.querySelector('.menu__list')
let menu_items = document.querySelectorAll('.menu__item');

console.log(menu_items);

burger.addEventListener('click', () => {
    menu.classList.toggle('active__menu')
    burger.classList.toggle('active__burger')
})

menu_items.forEach(item => item.addEventListener('click', () => {
    menu.classList.remove('active__menu');
    burger.classList.remove('active__burger');
}))