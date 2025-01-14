const yourflavorButton = document.querySelector('#yourflavor');
const customerList = document.querySelector('#customerItems');
const customers = [];
const img = document.createElement("img");

yourflavorButton.addEventListener('click', () => {
  customerList.innerHTML = '';
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
    case "January":
      message = `blank`;
      break;
    case "February":
      message = `blank`;
      break;
    case "March":
      message = `blank`;
      break;
    case "April":
      message = `blank`;
      break;
    case "May":
      message = `blank`;
      break;
    case "June":
      message = `blank`;
      break;
    case "July":
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
    case "October":
      message = `blank`;
      break;
    case "November":
      message = `blank`;
      break;
    case "December":
      message = `blank`;
      break;
    default:
      message = `No Ice Cream for you :(`;
      break;
  }

  const messageItem = document.createElement('p');
  messageItem.textContent = message;
  messageItem.classList.add('fade-in'); 
  customerList.appendChild(messageItem);

//DOES NOT REFRESH ITEMS * ERASE TO REFRESH EACH TIME
  //document.querySelector('#firstName').value = '';
  //document.querySelector('#email').value = '';
  //birthMonthElement.value = '';
});