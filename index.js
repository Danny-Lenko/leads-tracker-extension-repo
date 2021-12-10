"use strict"

function init() {
   document.querySelector('#input-btn').addEventListener('click', interaction.saveInput);
}
window.onload = init;

let interaction = {
   
   myLeads: [],

   saveInput: function() {
      const inputEl = document.querySelector('#input-el');
      const inputValue = inputEl.value;
      if (inputValue) {
         interaction.myLeads.push(inputValue);
      }
      
      // this.leads.push(inputValue);

      localStorage.setItem('leads', interaction.myLeads);
      // view.renderLeads(inputValue);
      inputEl.value = '';
   }

};


// let view = {

//    renderLeads: function(value) {
//       const ulEl = document.querySelector('#ul-el');
//       ulEl.innerHTML += `<li> <a href="${value}"> ${value} </a> <li>`; 
//    }

// };

// document.querySelector('#delete-btn').addEventListener('dblclick', clearStorage);
// function clearStorage() {
//    localStorage.clear();
// }



