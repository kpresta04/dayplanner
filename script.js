$(document).ready(function() {
  //get list of buttons from DOM
  buttons = document.getElementsByClassName("save-button");
  tableRows = document.getElementsByTagName("tr");
  tableRows = Array.from(tableRows);

  tableRows.forEach(function(tableRow, i) {
    $(tableRows[i]).attr("id", `table-row${i - 1}`);
  });

  //array of empty textobjects
  let textArray = [];
  for (let i = 0; i < 9; i++) {
    let textObj = {
      val: "",
      text_id: `#text${[i]}`
    };
    textArray.push(textObj);
  }

  //load saved events
  let getObj = JSON.parse(localStorage.getItem("storeObj"));
  if (getObj !== null) {
    // console.log(getObj);
    textArray = getObj;
  }

  //add saved events to textareas

  textArray.forEach(function(text, i) {
    $(`#text${[i]}`).val(textArray[i].val);
  });

  // console.log(textArray);

  // buttons is a HTML collection, must convert to array first,
  //then can use forEach
  Array.from(buttons).forEach(function(button, i) {
    //Add ID to each button
    $(buttons[i]).attr("id", `button${i}`);

    //add click event to each button
    $(buttons[i]).on("click", function() {
      const btnTxt = $(`#text${[i]}`);
      if ($(btnTxt).val() !== "") {
        // console.log($(btnTxt));
        textArray[i].val = $(btnTxt).val();

        localStorage.setItem("storeObj", JSON.stringify(textArray));
        //DOM event to let user know that save was succesful
        // $(`#saved${i}`).text("Saved!");
        // setTimeout(function() {
        //   $(`#saved${i}`).empty();
        // }, 1000);
      }
    });
  });

  const today = moment().format("dddd, MMMM Do");
  $("#today").text(today);

  const hour = moment().format("HH");

  // console.log(hour);
  // console.log(today);

  if (parseInt(hour) >= 9 && parseInt(hour) < 18) {
    // change style of current hour
    // to highlight by changning background color

    $(tableRows[hour - 8]).attr("style", `background-color: #b19cd9`);
  }
});
