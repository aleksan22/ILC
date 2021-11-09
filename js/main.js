$('.tarif__btn-month').click(function(){
    $('.tarif__btn-year').removeClass(' click')
    $('.tarif__btn-month').addClass(' click')
    $('.year').hide(1000)
    $('.month').show(1000)
})
$('.tarif__btn-year').click(function(){
    $('.tarif__btn-month').removeClass(' click')
    $('.tarif__btn-year').addClass(' click')
    $('.month').hide(1000)
    $('.year').show(1000)
});
