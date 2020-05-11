$(function(){
    // 配置banner图
    let bannerSwiper = new Swiper('.banner .swiper-container',{
        loop : true,
        autoplay: true,
        speed: 1000,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
          },
    });

    $(function() {	
		$( ".datepicker" ).datepicker({
			inline: true,
			showOtherMonths: true
		});
	});
})