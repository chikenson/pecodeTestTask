class Helpers {

    normalizePrice = (strPrice) => {
      let price = '';
        for (let i = 0;i < strPrice.length;i++) {
          if (strPrice[i].match(/[0-9]/)) {
            price = price + strPrice[i];
          }
        }
      return Number(price);
    };
  
    randomValue = (max, min) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

  }
  
  module.exports = new Helpers();