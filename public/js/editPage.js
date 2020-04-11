$(document).ready(() => {
  $(".goShopNow").on("click", function () {
    location.href = "list";
  });

  $(".addTo").on("click", function () {
    let newAdd = $(this).data("added");
    let id = $(this).data("id");

    let newAddItem = {
      added: newAdd,
    };

    $.ajax(`/api/edit/${id}`, {
      type: "PUT",
      data: newAddItem,
    }).then(() => {
      console.log("This item was added", newAddItem);
      location.reload;
    });
  });
});
