$(document).ready(function () {
  // Add functionality
  $(".add-another").click(function () {
    const div = document.createElement("div");
    div.classList = "d-flex";
    div.innerHTML = `
            <div class="left">
                <img src="" alt="no image is selected" height="100px" width="165px">
            </div>
            <div class="right">
                <input type="file" class="file-input">
                <select>
                    <option value="secondary">secondary</option>
                    <option value="primary">primary</option>
                </select>
                <button type="button" class="remove btn btn-danger">Remove</button>
            </div>`;
    $(".main").append(div);
  });

  // Remove functionality
  $(".main").on("click", ".remove", function () {
    // $(this).parent().parent().remove();
    if ($(this).attr("id") === "dont") {
      console.log("nothing");
      alert("you have to give atleast one image");
    } else {
      $(this).closest(".d-flex").remove();
    }
  });

  let initialValue = "primary";

  // primary secondary functionality
  $(document).on("change", ".main select", function () {
    const currentValue = $(this).val();
    if (currentValue === "primary" && initialValue === "primary") {
      $(this).val("secondary");
      alert("you have already selected a primary image 🥺🥺🥺");
    } else {
      initialValue = currentValue;
    }
  });

  // add image
  $(document).on("change", ".file-input", function () {
    const fileInput = this;
    const preview = $(fileInput).closest(".d-flex").find(".left img")[0];

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  });
});
