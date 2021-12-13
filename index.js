"use strict"

let interaction = {
   myLeads: [],

   saveInput: function() {
      const inputEl = document.querySelector('#input-el');
      const inputValue = inputEl.value;

      if (inputValue) {
         interaction.myLeads.push(inputValue);
      }
      localStorage.setItem('myLeads', JSON.stringify(interaction.myLeads));
      inputEl.value = '';
      view.parseLeads();
   },

   deleteLeads: function() {
      const ulEl = document.querySelector('#ul-el');
      interaction.myLeads = [];
      localStorage.clear();
      ulEl.innerHTML = '';
   }
};

let view = {
   parseLeads: function() {
      let restoredLeads = JSON.parse(localStorage.getItem('myLeads'));
      if (restoredLeads) {
         interaction.myLeads = restoredLeads;
      } else {
         interaction.myLeads = [];
      }
      this.renderLeads(interaction.myLeads);
   },

   renderLeads: function(value) {
      const ulEl = document.querySelector('#ul-el');
      let leadsList = '';
      for (let i = 0; i < value.length; i++) {
         leadsList += `<li> <a href="${value[i]}" target="_blank"> ${value[i]} </a> <li>`;
      }
      ulEl.innerHTML = leadsList;
   }
};

function saveCurrentTab() {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      interaction.myLeads.push(tabs[0].url);
      localStorage.setItem('myLeads', JSON.stringify(interaction.myLeads));
      view.parseLeads();
   })
}

function init() {
   document.querySelector('#input-btn').addEventListener('click', interaction.saveInput);
   document.querySelector('#delete-btn').addEventListener('dblclick', interaction.deleteLeads);
   document.querySelector('#tab-btn').addEventListener('click', saveCurrentTab);
   view.parseLeads();
}
window.onload = init;