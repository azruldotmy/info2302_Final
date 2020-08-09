$(document).ready(function () {
  $("#paymentForm").on("submit", function (e) {
    e.preventDefault()

    const account = $("#account").val()
    const exp = $("#exp").val()
    const cvc = $("#cvc").val()

    let valid = false
    $.getJSON("assets/data/bank.json", function (data) {
      $.each(data, function (i, bank) {
        console.log(account == bank.account)
        console.log(exp == bank.exp)
        console.log(cvc == bank.cvc)
        console.log(
          account == bank.account && exp == bank.exp && cvc == bank.cvc
        )
        if (account == bank.account && exp == bank.exp && cvc == bank.cvc) {
          valid = true
        }
      })

      if (valid) {
        $("#paymentSuccessModal").modal("show")
      } else {
        alert("Your bank info not valid")
      }
    })
  })
})
