const form = document.getElementById('contactForm');
const queryList = document.getElementById('queryList');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (form.checkValidity()) {
    const query = {
      name,
      email,
      message,
      date: new Date().toLocaleDateString()
    };
    
    displayQuery(query);
    
    form.reset();
    form.classList.remove('was-validated');
  } else {
    form.classList.add('was-validated');
  }
});

function displayQuery(query) {
  const queryItem = document.createElement('li');
  queryItem.classList.add('list-group-item');
  queryItem.textContent = `Name: ${query.name} | Email: ${query.email} | Message: ${query.message} | Date: ${query.date}`;
  queryList.appendChild(queryItem);
}