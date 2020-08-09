$(document).ready(function () {
  $.getJSON("assets/data/level.json", function (data) {
    $.each(data, function (i, level) {
      $("#chooseLevel").append(`
        <div class="col-12 m-2">
          <a href="${level.path}" class="btn btn-secondary btn-block">${level.name}</a>
        </div>
      `)
    })
  })
})
