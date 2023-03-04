function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(createMenuItem('', ''));
}

function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const dishName = document.createElement('h2');
  dishName.textContent = name;

  const dishDescription = document.createElement('p');
  dishDescription.textContent = description;

  const dishImage = document.createElement('img');
  dishImage.src = `assets/${name}.png`;
  dishImage.alt = `${name}`;

  menuItem.appendChild(dishName);
  menuItem.appendChild(dishImage);
  menuItem.appendChild(dishDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
