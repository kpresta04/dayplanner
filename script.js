$(document).ready(function() {
  //get list of buttons from DOM
  buttons = document.getElementsByClassName("save-button");
  tableRows = document.getElementsByTagName("tr");
  tableRows = Array.from(tableRows);
  console.log(tableRows);

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
      console.log($(`#text${[i]}`).val());
    });
  });

  date = new Date();
  console.log(date);
});
