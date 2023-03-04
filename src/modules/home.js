function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const chefImg = document.createElement('img');
  chefImg.src = 'assets/chef.png';
  chefImg.alt = 'Chef';

  home.appendChild(
    createParagraph('Locally owned and operated for over 3 decades!')
  );
  home.appendChild(createParagraph("Home of Ichiraku's famous Ramen!"));
  home.appendChild(chefImg);
}

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;
