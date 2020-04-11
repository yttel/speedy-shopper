$(document).ready(() => {
  $(".goShopNow").on("click", function () {
    location.href = "list";
  });

  $(".categories").on("click", function () {
    let catList = $(this).attr("value");
    console.log(catList);

    $.ajax({
      method: "GET",
      url: "/api/optionsList",
      data: { id: catList },
    }).then(() => {
      return location.reload();
    });
  });

  $(".addTo").on("click", function () {
    let chosenItem = $(this).attr("data-id");

    $.ajax({
      method: "POST",
      url: "/api/makeIt",
      data: { id: chosenItem },
    }).then(() => {
      return location.reload();
    });
  });
});
