// $(".p").change(function () {
//   $(".c").prop("checked", $(this).prop("checked"));
// });

// $(".c").change(function () {
//   let checked = $(".c").length === $(".c:checked").length;
//   console.log(checked);
// });

// ! optimizing code writing a single function
function checkboxSeter(parent, child) {
  console.log("function is working");
  $(parent).change(function () {
    $(child).prop("checked", $(this).prop("checked"));
  });

  $(child).change(function () {
    let checked = $(`${child}:checked`).length === $(child).length;
    $(parent).prop("checked", checked);
    console.log(checked);
  });
}

checkboxSeter(".parent-checkbox-1", ".child-checkbox-1");
checkboxSeter(".parent-checkbox-2", ".child-checkbox-2");
checkboxSeter(".parent-checkbox-3", ".child-checkbox-3");
checkboxSeter(".parent-checkbox-4", ".child-checkbox-4");
