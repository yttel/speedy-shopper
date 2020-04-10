$(document).ready(function() {

  //click events for the added, next time, done shop buttons
  $(document).on("click", "button.delete-listitem", handleItemObtained);
  $(document).on("click", "button.next-time", handleNextTime);
  $(document).on("click", "button.done-shop", handleDoneShop);

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

  //"ends" the shop
  function handleDoneShop() {
    $.ajax({
      method: "POST",
      url: "/api/allDone"
    }).then(() => {
      return location.reload();
    });
    groceryController.shopDone();
  }
});
