$(function(){
    $(".bind_hover_card").popover({
		html: true,
		placement: 'top',
		trigger: 'manual',
		animation: true
		
	}).on("mouseenter", function(){
		var _this = this;
		$(this).popover("show");
		$(this).siblings(".popover").on("mouseleave", function(){
			$(_this).popover("hide");
		});
	}).on("mouseleave", function(){
		var _this = this;
		setTimeout(function () {
			if(!$(".popover:hover").length){
				$(_this).popover("hide")
			}
		},100);
	});
	
});
