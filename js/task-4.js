console.log("Task-4");
function getShippingCost(country) {
  let price;
  let messagge;

  switch (country) {
    case "China":
      price = 100;
      messagge = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Chile":
      price = 250;
      messagge = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Australia":
      price = 170;
      messagge = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Jamaica":
      price = 120;
      messagge = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      messagge = `Sorry, there is no delivery to your country`;
  }
  return messagge;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
