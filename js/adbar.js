$("#adbar-bookmark").click(function(){
    $("#collapseAdBar").collapse('show')
    $("#adbar-bookmark").hide()
})
$("#adbar-toggler").click(function(){
    $("#collapseAdBar").collapse('hide')
})

$("#collapseAdBar").on('hidden.bs.collapse', function () {
    $("#adbar-bookmark").show()
})