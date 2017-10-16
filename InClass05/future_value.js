"use strict";
/*
var $ = function (id) {
    return document.getElementById(id);
}
*/
var calculateInterest = function (amount, rate) {
    var interest = amount * rate / 100;
    console.log("Interest Calculated: " + interest);
    return interest;
}
var calculateFV = function(investment,rate,years) {
    var futureValue = investment;
    var futureValueWithBonus = investment;
    var bonusAmount = 0;
    var justInterest;
    for (var i = 1; i <= years; i++) {
        //futureValue += futureValue * rate / 100
        if (i % 5 == 0) {
            bonusAmount += calculateInterest(futureValueWithBonus, rate);
            futureValueWithBonus += calculateInterest(futureValueWithBonus, rate * 2);
        }
        else {
            futureValueWithBonus += calculateInterest(futureValueWithBonus, rate);
        }
        futureValue += calculateInterest(futureValue, rate);

		console.log("Year " + i + " Value = $" + futureValue.toFixed(2));
    }
    $("#future_value_without_bonus").value = futureValue.toFixed(2);
    $("#bonus_value").value = bonusAmount.toFixed(2);
    futureValue = futureValue.toFixed(2);
	console.log("Rounded Value = " + futureValue);
	return futureValueWithBonus;
}
var processEntries = function () {
    //$("h3").toggleClass("red");
    //$("input").hide(20000);

    var investment = parseFloat( $("#investment").value );
    var rate = parseFloat( $("#annual_rate").value );
    var years = parseInt( $("#years").value );
	
	if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
		//alert("One or more entries is invalid");
	}
	else {
		$("#future_value").value = calculateFV(investment,rate,years);
	}
}
//window.onload = function () {



$(document).ready(function() {
    $("#investment").val(1000);
    $("#annual_rate").attr("placeholder", 3);
    
    var htmlBody = $("body");
    htmlBody.css("width", "450px");
    htmlBody.css("font-family", "Arial, Helvetica, sans-serif");
    htmlBody.css("margin", "0 auto");
    htmlBody.css("padding", "0 2em 1em");

    $("label").css("float", "left");
    $("label").css("width", "11em");
    $("label").css("text-align", "right");

    $("input").css("margin-left", "1em");
    $("input").css("margin-bottom", ".5em");
    $("input").css("margin-right", ".5em");
    $("input").css("width", "11em");


    console.log("Investment program started.");
    /*
    Method examples
    $("#calculate").onclick = processEntries;
    $("#calculate").off("click");
    $("#calculate").trigger("click");
    */
    $("#calculate").on("click", processEntries);
    $("#investment").focus();


    $("h3").dblclick(function () {
        $("h3").css("color", "blue");
    });
    
    $("h3 span").hover(function () {
        $("h3 span").css("color", "orange");
    });
});
