const InstrumentFamilies = require('./models/instrument_families.js')

const SelectView = require('./views/select_view.js')

const InstrumentInfoView =
require('./views/instrument_info_view.js')


document.addEventListener('DOMContentLoaded', function(){
  const selectElement = document.querySelector('');
  const animalDropdown = new SelectView(selectElement);
  animalDropdown.bindEvents();

  const infoDiv = document.querySelector('instrument-families')
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instumentInfoDisplay.bindEvents();

  const instrumentDataSource = new InstrumentFamilies();
  instrumentDataSource.bindEvents();
});
