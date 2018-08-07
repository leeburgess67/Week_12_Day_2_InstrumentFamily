const PubSub = require('../helpers/pub_sub.js');


const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instrument-families', (evt) => {
    const allInstrumentFamilies = evt.detail;
    this.populate(allInstrumentFamilies);
  });

  SelectView.prototype.populate = function(instrumentFamiliesData){
    instrumentFamiliesData.forEach((instrumentFamily, index) => {
      const option = document.createElement('option');
      option.textContent = instrumentFamilies.name;
      option.value = index;
      this.element.appendChild(option);
    })
  }
















};
