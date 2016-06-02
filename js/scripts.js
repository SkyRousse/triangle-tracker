/*This file is for your custom js.  All yours*/
$(function () {
  $("form#triangle-form").submit(function(event) {
  event.preventDefault();
  var side1 = parseInt($("input#side1").val());
  var side2 = parseInt($("input#side2").val());
  var side3 = parseInt($("input#side3").val());

if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    $(".output").html("<p>This is not a triangle</p>")
  }
  else if (side1 === side2 && side2 === side3) {
    $(".output").html("<p>This is a triangle and it is equilateral</p>")
    }
  else if (side1 === side2 || side2 === side3 || side1 === side3) {
    $(".output").html("<p>This is a triangle and it is isosceles</p>")
    }
  else {
    $(".output").html("<p>This is a triangle and it is scalene</p>")
    }
  });
});
