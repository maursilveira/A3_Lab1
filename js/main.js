(function () {
  'use strict';

  var cars = document.querySelectorAll('.data-ref');
  const httpRequest = new XMLHttpRequest();

  function processRequest() {
   let reqIndicator = document.querySelector('.request-state');
   reqIndicator.textContent = httpRequest.readyState;

   if (httpRequest.readyState === XMLHttpRequest.DONE) {
     if (httpRequest.status === 200) { // 200 means everything is awesome
      //  debugger;
      let data = JSON.parse(httpRequest.responseText);
      processResult(data);
     }
     else {
       alert('There was a problem with the request.');
     }
    }
  }

  function processResult(data) {
    const {modelName, pricing, modelDetails} = data;

    let model = document.querySelector('.modelName').textContent = modelName;
    let price = document.querySelector('.priceInfo').textContent = pricing;
    let desc = document.querySelector('.modelDetails').textContent = modelDetails;

    cars.forEach(function(car, index) {
      car.classList.add('nonActive');
    });

    document.querySelector(`#${data.model}`).classList.remove('nonActive');
  }

  function getCarData() {
    if (!httpRequest) {
      alert('browser fail');
      return false;
    }

    httpRequest.onreadystatechange = processRequest;
    httpRequest.open('GET', './includes/functions.php?carModel='+this.id);
    httpRequest.send();
  }

  getCarData.call(document.querySelector('.data-ref'));

  cars.forEach(function(car, index) {
    car.addEventListener('click', getCarData, false);
  });

})();
