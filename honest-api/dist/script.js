const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.honestburgers.io/location', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(store => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = store.name;

      const p = document.createElement('p');

      p.textContent = `${store.address} Tel
      ${store.tel} tfl Zone
      ${store.tfl_zone} Local Authority
      ${store.local_authority} Type
      ${store.type}`;


      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `nope`;
    app.appendChild(errorMessage);
  }
};

request.send();