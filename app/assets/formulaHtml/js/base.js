$(document).ready(function(){
			var clickEventType=((document.ontouchstart!==null)?'click':'touchstart');
			$(".nav_inc").on(clickEventType,function(e){
			     e.stopPropagation();
			     e.preventDefault();
			    $(".nav_3g").slideToggle("fast");
			  })

			$(".top_m_a").hover(function(){
				$(this).find('.top_n_div').stop().slideDown('fast');
			},function(){
				$(this).find('.top_n_div').stop().slideUp('fast');
			})


				

		})

