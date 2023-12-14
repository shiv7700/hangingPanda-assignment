// Basic jQuery
// assignment 1
let element = $("h1");
console.log(element[0]);

$(".tester").ready(function () {
  console.log("working");
  console.log(this);
});

$(document).ready(
  $(".tester").ready(function () {
    console.log("tester working");
    $(".tester").hide();
  })
);

// assignment 2
$(".asg-2").submit(function (e) {
  e.preventDefault();
  //   console.log($(".email"));
  //   console.log($(".email").val());

  if ($(".email").val() === "") {
    error("email is empty");
  }

  if ($(".password").val() === "" || $(".confirm-password").val() === "") {
    error("password is empty");
  }

  if ($(".password").val() !== $(".confirm-password").val()) {
    error("password is not same");
  }

  //   console.log($(".termCondition").is(":checked"));
  //   console.log($(".termCondition").prop("checked"));

  if (!$(".termCondition").is(":checked")) {
    error("Please Agree To Terms and Conditions");
  }

  alert("form is submitted thank you");
});

function error(err) {
  alert(err);
  throw new Error("form is not submitted");
}

// assignment 3
$(".event-test").hover(function () {
  alert("hover event is triggered");
  console.log("hover event");
});

$(".event-test").click(function (e) {
  alert("clicked event is triggered");
  e.preventDefault();
});

$(".event-test").dblclick(function () {
  alert("double clicked is triggered");
});

$(".event-test").mouseenter(function () {
  alert("your mouse entered");
});

$(".event-test").mouseleave(function () {
  alert("your mouse leave");
});

$(".email").focus(function () {
  $(this).css({ "background-color": "#90EE90", color: "red" });
});

$(".email").blur(function () {
  $(this).css("background-color", "white");
});
