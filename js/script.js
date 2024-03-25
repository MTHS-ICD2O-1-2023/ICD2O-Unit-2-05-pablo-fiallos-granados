// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"


function enterClicked() {
  // input
  const hours = parseFloat(document.getElementById("hoursWorked").value)
  const rate = parseFloat(document.getElementById("hourlyIncome").value)
  const pay = ((hours * rate) * (1.00 - 0.18))
  const deductions = ((hours * rate) *  0.18)
  // output
  document.getElementById("user-info").innerHTML =
    "After tax deductions, you make: $" + pay.toFixed(2)
    + "<br/>"
    + "Tax deductions = $" + deductions.toFixed(2)
}
