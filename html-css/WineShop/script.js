//$(selector).on(event, childSelector, data, function, map)

// $('.dec-btn').click(function () {
//   console.log($(this).attr('id'));
// });

$('.dec-btn').on('click', function () {
  let btnName = $(this).attr('id');
  let spnAmountName = 'amt' + btnName.slice(3);
  let amnt = $(`#${spnAmountName}`).text();
  if (amnt === '0') return;
  $(`#${spnAmountName}`).text(parseInt(amnt) - 1);
});

$('.inc-btn').on('click', function () {
  let btnName = $(this).attr('id');
  let spnAmountName = 'amt' + btnName.slice(3);
  let amnt = $(`#${spnAmountName}`).text();
  if (amnt === '9') return;
  $(`#${spnAmountName}`).text(parseInt(amnt) + 1);
});
