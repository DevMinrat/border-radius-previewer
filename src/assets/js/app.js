"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector("#result"),
    box = document.querySelector(".box"),
    wrapper = document.querySelector(".box-wrapper"),
    unitCheckbox = document.querySelector("#value"),
    independCheckbox = document.querySelector("#independ"),
    topLeftAngle = document.querySelector("#top-left-angle"),
    topRightAngle = document.querySelector("#top-right-angle"),
    bottomRightAngle = document.querySelector("#bottom-right-angle"),
    bottomLeftAngle = document.querySelector("#bottom-left-angle"),
    resultCopyBtn = document.querySelector(".result-copy-btn"),
    tooltip = document.querySelector("#tooltip");

  let btlr,
    btrr,
    bblr,
    bbrr,
    unit = "px";

  function changeInputValues() {
    if (independCheckbox.checked) {
      topRightAngle.removeAttribute("readonly", "");
      bottomRightAngle.removeAttribute("readonly", "");
      bottomLeftAngle.removeAttribute("readonly", "");

      btlr = topLeftAngle.value ? topLeftAngle.value + unit : "0" + unit;
      btrr = topRightAngle.value ? topRightAngle.value + unit : "0" + unit;
      bbrr = bottomRightAngle.value
        ? bottomRightAngle.value + unit
        : "0" + unit;
      bblr = bottomLeftAngle.value ? bottomLeftAngle.value + unit : "0" + unit;

      box.style.borderRadius = `${btlr} ${btrr} ${bbrr} ${bblr}`;
      result.value = `border-radius: ${btlr} ${btrr} ${bbrr} ${bblr}`;
    } else {
      btlr = topLeftAngle.value ? topLeftAngle.value + unit : "0" + unit;
      topRightAngle.setAttribute("readonly", "");
      bottomRightAngle.setAttribute("readonly", "");
      bottomLeftAngle.setAttribute("readonly", "");

      box.style.borderRadius = btlr;
      result.value = `border-radius: ${btlr}`;
    }
  }

  changeInputValues();

  wrapper.addEventListener("input", changeInputValues);

  unitCheckbox.addEventListener("change", () => {
    unit = unitCheckbox.checked ? "px" : "%";
    changeInputValues();
  });

  independCheckbox.addEventListener("change", changeInputValues);

  function copyResult() {
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    tooltip.innerHTML = "Copied: <br> " + result.value;
  }

  resultCopyBtn.addEventListener("click", copyResult);
});
