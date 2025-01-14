const yourflavorButton = document.querySelector('#yourflavor');
const customerList = document.querySelector('#customerItems');
const customers = [];
const img = document.createElement("img");

yourflavorButton.addEventListener('click', () => {
  customerList.innerHTML = '';
  console.log ('Clicked!!')
  const firstName = document.querySelector('#firstName').value.trim();
  const email = document.querySelector('#email').value.trim();
  const birthMonthElement = document.getElementById("myDropdown");
  const birthMonth = birthMonthElement.value;


  if (!firstName || !email || !birthMonth) {
    alert("Ooops! Don't have all the info! :(.");
    return;
  }

  const customer = { firstName, email, birthMonth };
  customers.push(customer);

  let message = '';
  switch (birthMonth) {
    case "January": //DANAH
      message = `blank`;
      break;
    case "February": //DANAH
      message = `blank`;
      break;
    case "March": //TIM
      message = `blank`;
      break;
    case "April": //PRICILLA
      message = `blank`;
      break;
    case "May": //SCOTT 
      message = `blank`;
      break;
    case "June": //DANAH
      message = `blank`;
      break;
    case "July": //DANAH
      message = `blank`;
      break;
    case "August":
      message = `Your flavor is "Creamsicle!" 🍊
      You have a light to you that no one can dim! 
      Ready to have fun but does not mind a little R&R. 
      You are down to earth but can fizzle when overstimulated. 
      You are taking on the world regardless of your mood and you prefer to stay in good spirits. 
      Surround yourself with good energy and excuse yourself from negativity. `;
      break;
    case "September":
      message = `Your flavor is “Cookies and Cream!” 🍪 🥛 
      Well, look who the popular one is! 
      You’re always there when ice cream is found, 
      and you’re a go-to, reliable choice for anyone seeking a sweet treat. 
      You make people feel right at home. 
      You bring people together, just like Cookies and Cream! Or maybe peanut butter and jelly? 
      Wait, do we have that flavor too?`;
      break;
    case "October": //EDDIE
      message = `Your flavor is Banana Pudding`;
      break;
    case "November": //EDDIE
      message = `Frosted Peppermint`;
      break;
    case "December": //EDDIE
      message = `Caramel Apple`;
      break;
    default:
      message = `No Ice Cream for you :(`;
      break;
  }

  const messageItem = document.createElement('p');
  messageItem.textContent = message;
  messageItem.classList.add('fade-in'); 
  customerList.appendChild(messageItem);
  console.log (email)

  localStorage.setItem('email', email);
  localStorage.setItem('myDropdown',birthMonthElement.value)

  
//DOES NOT REFRESH ITEMS * ERASE TO REFRESH EACH TIME
  document.querySelector('#firstName').value = '';
  document.querySelector('#email').value = '';
  birthMonthElement.value = '';
});