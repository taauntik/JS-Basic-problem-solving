// ------------ KilometerToMeter() ------------- {start}
function kilometerToMeter(kilometer) {
  if (kilometer <= 0) {
    return "Invalid input";
  } else if (kilometer > 0) {
    // convert kilometer to meter
    return kilometer * 1000;
  }
}

// ------------ KilometerToMeter() ------------- {end}

// change the code below

/* kilometerToMeter(); */

// change the code above

// ------------ budgetCalculator() ------------- {start}

/**
 * parameter1 - (watch) --> means how many watch
 * parameter2 - (phone) --> means how many phones
 * parameter3 - (laptop) --> means how many laptop
 */

// note - only use numbers inside the parameter
function budgetCalculator(watch, phone, laptop) {
  if (watch <= 0 || phone <= 0 || laptop <= 0) {
    return "Invalid input. Please enter a valid input";
  } else {
    // watchPrice = 50$
    var totalWatchPrice = watch * 50;

    // phonePrice = 100$
    var totalPhonePrice = phone * 100;

    // laptopPrice = 500$
    var totalLaptopPrice = laptop * 500;

    // return total price
    return totalWatchPrice + totalPhonePrice + totalLaptopPrice;
  }
}
// ------------ budgetCalculator() ------------- {end}

// change the code below

/* budgetCalculator(); */

// change the code above

// ------------ hotelCost() ------------- {start}
function hotelCost(days) {
  var perNightPrice = 0;
  if (days <= 0) {
    return "Invalid input. Please enter a valid input";
  } else if (days <= 10) {
    // perNightPrice = 100$
    perNightPrice = 100 * days;
    return perNightPrice;
  } else if (days <= 20) {
    var firstPart = 10 * 100;
    var remaining = days - 10;

    // perNightPrice = 80$
    var secondPart = remaining * 80;
    perNightPrice = firstPart + secondPart;
    return perNightPrice;
  } else if (days > 20) {
    var firstPart = 100 * 10;
    var secondPart = 80 * 10;
    var remaining = days - 20;

    // perNightPrice = 50$
    var thirdPart = remaining * 50;
    perNightPrice = firstPart + secondPart + thirdPart;
    return perNightPrice;
  }
}
// ------------ hotelCost() ------------- {end}

// change the code below

/* hotelCost(); */

// change the code above

// ------------ megaFriend() ------------- {start}
function megaFriend(friendsNameArray) {
  var arrItemLength = 0;
  var largestName;

  for (var i = 0; i < friendsNameArray.length; i++) {
    var element = friendsNameArray[i];
    if (element.length > arrItemLength) {
      arrItemLength = element.length;
      largestName = element;
    }
  }
  return largestName;
}

// ------------ megaFriend() ------------- {end}

// change the code below

/* megaFriend(); */

// change the code above
