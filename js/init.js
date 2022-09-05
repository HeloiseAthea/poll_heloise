
// Select the model
const modelSelector = document.getElementsByClassName("model-selector")[0];

// Input in category 1
const category1 = document.getElementsByClassName("category1");
// Polls in category 2
const poll2 = document.getElementsByClassName("poll2");
// Polls added in other category 2 counter
poll2_counter = 0;
// Polls in category 3
const category3 = document.getElementsByClassName("category3");

// Chart results
const chart = document.getElementById("first-pie-chart")

//const test = document.getElementsByClassName("inputcontainer")
var submitButton = document.querySelector("#action-button")

// Color dictionary
const value2color = {'-3': 'rgb(172, 51, 51)',
                     '-2': 'rgb(170, 77, 31)',
                     '-1': 'rgb(160, 100, 13)',
                     '0': 'rgb(145, 122, 12)',
                     '1': 'rgb(125, 141, 36)',
                     '2': 'rgb(98, 158, 69)',
                     '3': 'rgb(59, 173, 107)'}

var chartHasBeenCreated = false;
const ctx_1 = document.getElementById('chartCategory2').getContext('2d');
const ctx_2 = document.getElementById('chartCategory3').getContext('2d');

var chart_1 = new Chart(ctx_1, {})
var chart_2 = new Chart(ctx_2, {})
