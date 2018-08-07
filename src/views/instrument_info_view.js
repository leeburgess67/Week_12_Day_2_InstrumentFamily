const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-families', (evt) => {
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  });
};

InstrumentInfoView.prototype.render = function (instrumentFamily) {
  const header = document.createElement('h1');
  const info = document.createElement('p');
  const list = document.createElement('ol')
  const listItem = document.createElement('li')


  header.textContent = `${instrumentFamily.name}`;
  info.textContent = `Description: ${instrumentFamily.description};`
  for (const instrument of instrumentFamily.instruments){
    listItem.textContent = `${instrument}`
  };

  this.container.innerHTML = '';
  this.container.appendChild(header);
  this.container.appendChild(info);
  this.container.appendChild(listItem);
  // this.list.appendChild(listItem);

};

module.exports = InstrumentInfoView;
