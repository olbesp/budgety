// BUDGET CONTROLLER
var budgetController = (function() {
  //---
})();


// UI CONTROLLER
var UIController = (function() {
  // Contains all input selectors
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  }

  return {
    // Makes public methods
    getinput: function() {
      // Gets all input data
      return {
        type: document.querySelector(DOMstrings.inputType).value, // inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    // Makes DOMstrings selectors public
    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  // Import Domstrings selectors by public method
  var DOM = UICtrl.getDOMstrings();


  var ctrlAddItem = function() {
    // 1. Get the field input data
    var input = UICtrl.getinput();
    console.log(input);
    // 2. Add the item to the budget CONTROLLER

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget
  }

  // Listens for add button events
  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
  // Listens for 'Enter' key events
  document.addEventListener("keypress", function(event) {
    // Checks if key === 'Enter'
    if (event.keyCode === 13 || event.which === 13) {

      ctrlAddItem();
    }
  });

})(budgetController, UIController);
