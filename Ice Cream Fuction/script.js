const yourflavorButton = document.querySelector('#yourflavor');
const customerList = document.querySelector('#customerItems');
const customers = [];
const img = document.createElement("img");
let clickCount =0;

document.addEventListener('DOMContentLoaded', () => {
yourflavorButton.addEventListener('click', () => {
  customerList.innerHTML = '';
  console.log ('Clicked!!')
  clickCount++;
if (clickCount === 5) {
  console.log ('SECRET MESSAGE DISPLAYED') 
  }
  const firstName = document.querySelector('#firstName').value.trim();
  const email = document.querySelector('#email').value.trim();
  const birthMonthElement = document.getElementById("birthmonthDropdown");
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
      message = `Your flavor is “Birthday Cake!” 🎂 Maybe you’re thinking that Birthday cake is your flavor because it’s the first month of the year. 
      If you are then you are totally right, but that’s not all! 
      You are the life of the party! You are vibrant and courageous but also like to keep a low profile. 
      You know how to light a room up even though you enjoy the dark. 
      You take pride in group interactions until your social battery is on 0%.`;
      break;
    case "February": //DANAH
      message = `Your flavor is “Red Velvet!” Has anyone ever called you suave before? If so believe it! 
      You like all aspects of your life to be smooth! 
      You are a disciplined workaholic who enjoys to reserve their time to themselves. 
      Just like our red velvet flavor, you’re very rich in life and we’re not talking about money wise! 
      You pride yourself in being stable, ambitious and practical.`;
      break;
    case "March": //SCOTT
      message = `Your flavor is "Strawberry Cheesecake!" Stay classy! Whe you walk into a room you turn everyone's head!
      They can't wait to know you and they can't wait to try this flavor! It is rich and decadent and leaves a lasting inpression!`;
      break;
    case "April": //PRICILLA
      message = `Your flavour is “Peanut Brittle!” 
      Your personality is rich, warm, and irresistibly intriguing just like the ice cream. 
      You are reliable and steady, offering a comforting presence, yet you have a sharp wit or bold edge, much like the satisfying crunch of brittle. 
      You are multi layered, sweet and approachable on the surface, but with a resilient, hard-earned strength underneath. 
      You are often seen as a balance of tradition and uniqueness, someone who appreciates timeless values while still being a little unexpected, making them unforgettable in the best way!`;
      break;
    case "May": //TIM 
      message = `Your flavor is "Cookie Craze!" 🍪 🎆 You’re as sweet and irresistible as freshly baked cookies! 
      This flavor captures your energy—warm, comforting, and undeniably delightful. 
      Just like a batch of cookies fresh out of the oven, you have a knack for bringing people together and brightening their day.
      May is your time to shine, and your flavor reflects your adventurous side. Whether you’re chasing dreams or savoring the small joys, you sprinkle a bit of magic wherever you go. 
      Embrace the May-Cookie Craze—it’s a reminder to enjoy life’s sweetness while staying true to your warm, grounded self.`;
      break;
    case "June": //DANAH
      message = `Your flavor is “Vanilla Pop Rock!” 
      You find enjoyment in the simple things. 
      As long as there is a remote in your hand and a television in front of you, there is nothing that can satisfy you more. 
      You may come off plain and boring, but behind that facade there is excitement within you!
      It takes the right group or right person to break that shell!`;
      break;
    case "July": //DANAH
      message = `Your flavor is “Guava swirl!” Life is a dream and you are living in it! 
      Unfortunately for you, you can be an emotional wreck. 
      It’s okay though! You just love others with your whole heart which causes you to spiral. 
      Don’t let nobody get the best of you! Although you’re moody you are truly a beauty and a treasure to have in one’s life!`;
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
      message = `Your flavor is "Banana Pudding!" This flavor is indulgent, complex, and unexpectedly comforting—just like their intense, mysterious personality. 
      The rich, creamy layers of banana pudding combined with velvety vanilla wafers and a hint of cinnamon bring depth and warmth, 
      reflecting your passionate, secretive nature.`;
      break;
    case "November": //EDDIE
      message = `Your flavor is "Frosted Peppermint!" 🍬
      This flavor is cool, refreshing, and full of zest! 
      The crisp, invigorating taste of peppermint paired with a smooth, creamy base is the perfect reflection of your adventurous spirit and love for new experiences. 
      It’s energizing, bold, and a little bit playful, much like the free-spirited Archer who is always on the move.`;
      break;
    case "December": //EDDIE
      message = `Your flavor is "Caramel Apple!" Maybe not what you're thinking for a holiday flavor,
      but more of a summer carnival! This flavor surprises you with rich apple and savory caramel swirl!
      Just like how you can be one with nature and be a little bit unexpected!`;
      break;
    default:
      message = `No Ice Cream for you :(`;
      break;

  }

  
  const messageItem = document.createElement('p');
  messageItem.textContent = message;
  messageItem.classList.add('fade-in'); 
  customerList.appendChild(messageItem);
  console.log (email);


  localStorage.setItem('email', email);
  localStorage.setItem('birthmonthDropdown',birthMonthElement.value)


//DOES NOT REFRESH ITEMS * ERASE TO REFRESH EACH TIME
  //document.querySelector('#firstName').value = '';
  //document.querySelector('#email').value = '';
  //birthMonthElement.value = '';

     const askedtoSubscribe = localStorage.getItem('Asked to subscribe');
  
     if (!askedtoSubscribe) {
      setTimeout(() => {
        console.log('Asked to subscribe!');
        const modal = document.querySelector('#subscribeBox');
        modal.style.display = 'block';
  
        
        localStorage.setItem('Asked to subscribe', 'yes');
  
        
        document.querySelector('#Yes').addEventListener('click', () => {
          modal.style.display = 'none';
        });
  
        document.querySelector('#No').addEventListener('click', () => {
          modal.style.display = 'none';
        });
      }, 5000); 
     
    } else {
      console.log('Already asked to subscribe.');
    }
  });
});
