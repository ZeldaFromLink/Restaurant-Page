function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '555 555 5555';

  const address = document.createElement('p');
  address.textContent = '123 Main';

  contact.appendChild(phoneNumber);
  contact.appendChild(address);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;
