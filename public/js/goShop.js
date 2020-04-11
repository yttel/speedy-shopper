$(document).ready(function() {

  //click events for the added, next time, done shop buttons
  $(document).on("click", "button.delete-listitem", handleItemObtained);
  $(document).on("click", "button.next-time", handleNextTime);
  $(document).on("click", "button.done-shop", handleDoneShop);
  $(document).on("click", "button.readd-listitem", UndoItemObtained);
  $(document).on("click", "button.undo-nexttime", UndoNextTime);

  //changes obtained to true for this item
  function handleItemObtained() {
    const thisItem = $(this).attr("data-id");
    console.log(`THIS ITEM: ${thisItem}`);
    $.ajax({
      method: "POST",
      url: "/api/obtained",
      data: { id: thisItem }
    }).then(() => {
      return location.reload();
    });
  }

  //changes nextTime to true for this item
  function handleNextTime() {
    const thisItem = $(this).attr("data-id");
    console.log(`THIS ITEM: ${thisItem}`);
    $.ajax({
      method: "POST",
      url: "/api/nextTime",
      data: { id: thisItem }
    }).then(() => {
      return location.reload();
    });
  }

  function UndoItemObtained() {
    const thisItem = $(this).attr("data-id");
    console.log(`THIS ITEM: ${thisItem}`);
    $.ajax({
      method: "POST",
      url: "/api/unobtained",
      data: { id: thisItem }
    }).then(() => {
      return location.reload();
    });
  }

  function UndoNextTime() {
    const thisItem = $(this).attr("data-id");
    console.log(`THIS ITEM: ${thisItem}`);
    $.ajax({
      method: "POST",
      url: "/api/undonexttime",
      data: { id: thisItem }
    }).then(() => {
      return location.reload();
    });
  }

  //"ends" the shop
  function handleDoneShop() {
    $.ajax({
      method: "POST",
      url: "/api/allDone"
    }).then(() => {
      return location.replace("/edit");
    });
  }
});
