(function () {
  'use strict';

  var cars = document.querySelectorAll('.data-ref');
  var model = document.querySelector('.modelName');
  var price = document.querySelector('.priceInfo');
  var details = document.querySelector('.modelDetails');

  function openFirst() {
    this.classList.add('selected');
    loadContent(0);
  }

  function showModelDetails(evt) {
    for (let i = 0; i < cars.length; i++) {
      cars[i].classList.remove('selected');
    }
    evt.currentTarget.classList.add('selected');
    let index = evt.currentTarget.dataset.roundaboutindex
    loadContent(index);
  }

  function loadContent(index) {
    model.innerHTML = carData.model[index];
    price.innerHTML = carData.price[index];
    details.innerHTML = carData.detail[index];
  }

  openFirst.call(document.querySelector('.data-ref'));

  for (let i = 0; i < cars.length; i++) {
    cars[i].addEventListener('click', showModelDetails, false);
  }

})();
