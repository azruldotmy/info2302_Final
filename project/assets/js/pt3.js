$(document).ready(function(){
  $.getJSON(".vscode/upsr.json",function(data){
    $.each(data, function(i, upsr){
      $("#chooseSubject").append(
        <div class= "col-12 m-2">
        <a href="${upsr.path}" class= "btn btn-secondary">
        ${pt3.name}</a>
        </div>
      )
    })
  })
})
