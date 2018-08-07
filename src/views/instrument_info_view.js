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
  const infoParagraph = document.createElement('p');
  console.log(instrumentFamily);
  infoParagraph.textContent = `${instrumentFamily.description}`
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);

};

module.exports = InstrumentInfoView;
