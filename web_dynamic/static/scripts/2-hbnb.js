$("document").ready(function () {
  let selected = {};
  $('div.amenities input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
      selected[$(this).data("id")] = $(this).data("name");
    } else {
      delete selected[$(this).data("id")];
    }
    $("div.amenities h4").html(function () {
      let amenities = [];
      Object.keys(selected).forEach(function (key) {
        amenities.push(selected[key]);
      });
      if (amenities.length === 0) {
        return "&nbsp";
      }
      return amenities.join(", ");
    });
  });

  const api='div#api_status'
  $.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
    if (data.status === "OK") {
      $(api).addClass("available");
    } else {
      $(api).removeClass("available");
    }
  });
});
