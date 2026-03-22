const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Attach click event to the parent <ul>
document.getElementById('menu').addEventListener('click', function(event) {
  // Check if the clicked element is an <li>
  if (event.target.id === 'panda') {
    console.log('Clicked Panda', event.target.textContent);
    setCookie("favoritePet", "panda", 365);
    window.location.href="index.html";
  }
  if (event.target.id === 'cat') {
    console.log('Clicked Cat', event.target.textContent);
    setCookie("favoritePet", "cat", 365);
    window.location.href="index.html";
  }
  if (event.target.id === 'dog') {
    console.log('Clicked Dog', event.target.textContent);
    setCookie("favoritePet", "dog", 365);
    window.location.href="index.html";
  }
  if (event.target.id === 'horse') {
    console.log('Clicked Horse', event.target.textContent);
    setCookie("favoritePet", "horse", 365);
    window.location.href="index.html";
  }
  if (event.target.id === 'fish') {
    console.log('Clicked Fish', event.target.textContent);
    setCookie("favoritePet", "fish", 365);
    window.location.href="index.html";
  }
});

nextBtn.addEventListener("click", () => {
    const menu = document.querySelector('menu');
    const cards = document.querySelectorAll('li');
    menu.classList.add('move-left');
    setTimeout(() => {
      menu.appendChild(cards[0])
      menu.classList.remove('move-left');
    }, 300)
});

prevBtn.addEventListener("click", () => {
    const menu = document.querySelector('menu');
    const cards = document.querySelectorAll('li');
    menu.classList.add('move-right');
    setTimeout(() => {
      menu.appendChild(cards[0])
      menu.classList.remove('move-right');
    }, 300)
});