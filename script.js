$(document).ready(function() {
  //get list of buttons from DOM
  buttons = document.getElementsByClassName("save-button");
  tableRows = document.getElementsByTagName("tr");
  tableRows = Array.from(tableRows);

  tableRows.forEach(function(tableRow, i) {
    $(tableRows[i]).attr("id", `table-row${i - 1}`);
  });

  // buttons is a HTML collection, must convert to array first,
  //then can use forEach
  Array.from(buttons).forEach(function(button, i) {
    //Add ID to each button
    $(buttons[i]).attr("id", `button${i}`);

    //add click event to each button
    $(buttons[i]).on("click", function() {
      const btnTxt = $(`#text${[i]}`);
      if ($(btnTxt).val() !== "") {
        console.log($(btnTxt).val());
      }
    });
  });

  const today = moment().format("dddd, MMMM Do");
  $("#today").text(today);

  let hour = moment().format("HH");

  if (parseInt(hour) >= 9 && parseInt(hour) < 18) {
    // change style of current hour

    $(tableRows[hour - 8]).attr("style", `background-color: green`);

    console.log(hour);
  }
});
