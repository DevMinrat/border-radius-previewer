"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var result = document.querySelector("#result"),
      box = document.querySelector(".box"),
      wrapper = document.querySelector(".box-wrapper"),
      unitCheckbox = document.querySelector("#value"),
      topLeftAngle = document.querySelector("#top-left-angle"),
      topRightAngle = document.querySelector("#top-right-angle"),
      bottomRightAngle = document.querySelector("#bottom-right-angle"),
      bottomLeftAngle = document.querySelector("#bottom-left-angle"),
      resultCopyBtn = document.querySelector(".result-copy-btn");
  var btlr,
      btrr,
      bblr,
      bbrr,
      unit = "px";

  function changeInputValues() {
    btlr = topLeftAngle.value ? topLeftAngle.value + unit : "0px";
    btrr = topRightAngle.value ? topRightAngle.value + unit : "0px";
    bbrr = bottomRightAngle.value ? bottomRightAngle.value + unit : "0px";
    bblr = bottomLeftAngle.value ? bottomLeftAngle.value + unit : "0px";
    box.style.borderRadius = "".concat(btlr, " ").concat(btrr, " ").concat(bbrr, " ").concat(bblr);
    result.value = "border-radius: ".concat(btlr, " ").concat(btrr, " ").concat(bbrr, " ").concat(bblr);
  }

  wrapper.addEventListener("input", changeInputValues);
  unitCheckbox.addEventListener("change", function () {
    unit = unitCheckbox.checked ? "px" : "%";
    changeInputValues();
  });

  function copyResult() {
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Скопировал текст: " + result.value);
  }

  resultCopyBtn.addEventListener("click", copyResult);
});