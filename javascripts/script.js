$(document).ready(function() {
	renderSection();
});

$(window).on('hashchange', function(e){
	renderSection();
});

$(document).on('click', '.navigation-link',function() {
	if($(this).hasClass('is-active')){
      return false;
    }
	$('.navigation-link.is-active').removeClass('is-active');
	$(this).addClass('is-active');
	renderSection();

    if ($(window).width() < 1024) {
    	$('.navigation.is-active').removeClass('is-active');
    }
    preventScroll();
});

$(document).on('click', '.spectrum-item',function() {
	$('.spactrum-item.is-active').removeClass('is-active');
	$(this).addClass('is-active');
});

$('.languages-button').on('click', function() {
	$('.languages-button.is-active').removeClass('is-active');
	$(this).addClass('is-active');
});
$('.navigation-button').on('click', function() {
	$('.navigation').toggleClass('is-active');
	preventScroll();
});

$(document).on('click', '.gallery-navigation-button', function () {
	button = $(this);
	if (animating) {
		return false;
	} else {
		animategalleryItem();
	}
});

function renderSection() {
	var newSection = $('.navigation-link.is-active').text();
	if ($('section').attr('class')) {
		var oldSection = $('section');
		oldSection.animate({
			opacity: 0
		}, 500, function() {
			oldSection.remove();
			switchSection();
		});
	} else {
		switchSection();
	}
}

function switchSection() {
	var newSection = $('.navigation-link.is-active').text();
	var hash = window.location.hash;
	switch(hash) {
		default :
			$('.navigation-link.is-active').removeClass('is-active');
			$(".navigation-link:contains('Home')").addClass('is-active');
			$('.container').append(`
				<section class="gallery">
					<ul class="gallery-list">
					  <li class="gallery-item is-active">
					    <div class="gallery-image" style="background-image: url(images/naturally-bizarre.jpg)"></div>
					    <div class="gallery-title">
					      <div class="gallery-text">
					        <span>Naturally</span>
					        <span>Bizarre</span>
					      </div>
					    </div>
					  </li>
					  <li class="gallery-item">
					    <div class="gallery-image" style="background-image: url(images/richard-rodrigues.jpg)"></div>
					    <div class="gallery-title">
					      <div class="gallery-text">
					      	<span>Richard</span>
					        <span>Rodrigues</span>
					      </div>
					    </div>
					  </li>
					  <li class="gallery-item">
					    <div class="gallery-image" style="background-image: url(images/triangles.jpg)"></div>
					    <div class="gallery-title">
					      <div class="gallery-text">
					        <span>Triangles</span>
					      </div>
					    </div>
					  </li>
					</ul>
					<div class="gallery-pagination">
					  <button class="gallery-pagination-button is-active"></button>
					  <button class="gallery-pagination-button"></button>
					  <button class="gallery-pagination-button"></button>
					</div>
					<div class="gallery-navigation">
					  <button class="gallery-navigation-button gallery-navigation-button-previous"></button>
					  <button class="gallery-navigation-button gallery-navigation-button-next"></button>
					</div>
				</section>
			`);
			$('.gallery-list').css({'width': 0});
			$('.gallery-list').animate({
				width: '100%'
			},1000,'easeInOutCubic');
			break;

		case '#/projects':
			$('.navigation-link.is-active').removeClass('is-active');
			$(".navigation-link:contains('Projects')").addClass('is-active');
			$('.container').append(`
				<section class="services">
					<div class="services-wrapper">
						<nav class="spectrum">
							<ul class="spectrum-list">
								<li><span class="spectrum-item is-active">All</span></li>
								<li><span class="spectrum-item">Web</span></li>
								<li><span class="spectrum-item">APP</span></li>
								<li><span class="spectrum-item">Visual</span></li>
								<li><span class="spectrum-item">Painting</span></li>
								<li><span class="spectrum-item">Hardware</span></li>
							</ul>
						</nav>
						<div class="services-column">
							<div class="services-columns">
								<ul class="services-list">
									<div class="services-images vertical" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/naturally-bizarre.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
						</div>
					</div>
				</section>
			`);
			$('.services-list').css({'opacity': 0});
			$('.services-text').css({'transform': 'translateY(100px)'});
			$('.services-text').animate({transform: 'translateY(0)'}, 1000);
			$('.services-list').animate({opacity: 1}, 500,'easeInOutCubic');
			break;

		case 'category':
			$('.container').append(`
				<section class="services">
					<div class="services-wrapper">
						<div class="services-column">
							<div class="services-columns">
								<div class="services-title"><span class="services-text">Painting</span></div>
								<ul class="services-list">
									<div class="services-images vertical" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/naturally-bizarre.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
							<div class="services-columns">
								<div class="services-title"><span class="services-text">Web</span></div>
								<ul class="services-list">
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
							<div class="services-columns">
								<div class="services-title"><span class="services-text">Application</span></div>
								<ul class="services-list">
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
						</div>
					</div>
				</section>
			`);
			$('.services-list').css({'opacity': 0});
			$('.services-text').css({'transform': 'translateY(100px)'})
			$('.services-text').animate({transform: 'translateY(0)'}, 1000);
			$('.services-list').animate({opacity: 1}, 500,'easeInOutCubic');
			break;

		case '#/contact':
			$('.navigation-link.is-active').removeClass('is-active');
			$(".navigation-link:contains('contact')").addClass('is-active');
			$('.container').append(`
				<section class="contact">
					<div class="contact-wrapper">
						<div class="contact-box">
							<div class="contact-section">
								<h1 class="contact-title">
									<span>Keep</span>
									<span>In</span>
									<span>Touch</span>
								</h1>
								<div class="contact-colums">
									<div class="contact-column">
										<p class="contact-description">
											<strong class="contact-description-highlight">Business Inquiries</strong>
											<strong class="contact-description-highlight">th3425xogm@gmail.com</strong>
										</p>
									</div>
									<div class="contact-column">
										<div class="contact-description">
											<strong>If you have interest in contracting any of my services,<br>please contact me! We love new challenges... ;)</strong>
									</div>
								</div>
							</div>
							<div class="contact-section a">
								<span class="contact-section-line" style="transform: matrix(1, 0, 0, 1, 0, 0);"></span>
								<ul class="contact-list">
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://www.facebook.com/profile.php?id=100004700710917" class="contact-link">
											<img src="images/facebook.svg" class="contact-icon">
											<span class="contact-text">Facebook</span>
										</a>
									</li>
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://twitter.com/th3425" class="contact-link">
											<img src="images/twitter.svg" class="contact-icon">
											<span class="contact-text">Twitter</span>
										</a>
									</li>
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://www.linkedin.com/in/r-nd-a95a39107/" class="contact-link">
											<img src="images/linkedin.svg" class="contact-icon">
											<span class="contact-text">LinkedIn</span>
										</a>
									</li>
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://vimeo.com/th3425" class="contact-link">
											<img src="images/vimeo.svg" class="contact-icon">
											<span class="contact-text">Vimeo</span>
										</a>
									</li>
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://www.instagram.com/99.04.l6/" class="contact-link">
											<img src="images/instagram.svg" class="contact-icon">
											<span class="contact-text">Instagram</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			`)
			$(".contact-title > span:contains('Keep')").css({'transform': 'translateY(50px)'});
			$(".contact-title > span:contains('In')").css({'transform': 'translateY(50px)'});
			$(".contact-title > span:contains('Touch')").css({'transform': 'translateY(50px)'});
			$('.contact-colums').css({'opacity': 0});
			$('.contact-section.a').css({'opacity': 0});
			$(".contact-title > span:contains('Keep')").animate({transform: 'translateY(0)'}, 500, function() {
				$(".contact-title > span:contains('In')").animate({transform: 'translateY(0)'}, 500, function() {
					$(".contact-title > span:contains('Touch')").animate({transform: 'translateY(0)'}, 500, function() {
						$('.contact-colums').animate({opacity: 1}, 500,'easeInOutCubic');
						$('.contact-section.a').animate({opacity: 1}, 500,'easeInOutCubic');
					});
				});
			});
			break;
	}
}


var animating = false;
function animategalleryItem() {
	animating = true;
	var oldItem = $('.gallery-item.is-active');
	var oldPagination = $('.gallery-pagination-button.is-active');
	if (button.hasClass('gallery-navigation-button-next')) {
		if (oldItem.is($('.gallery-item:last'))) {
			newItem = $('.gallery-item:first');
			newPagination = $('.gallery-pagination-button:first');
		} else {
			var newItem = oldItem.next();
			var newPagination = oldPagination.next();
		}

	} else {
		if (oldItem.is($('.gallery-item:first'))) {
			newItem = $('.gallery-item:last');
			newPagination = $('.gallery-pagination-button:last');
		} else {
			var newItem = oldItem.prev();
			var newPagination = oldPagination.prev();
		}
	}

	oldItem.removeClass('is-active');
	newItem.addClass('is-active');

	oldPagination.removeClass('is-active');
	newPagination.addClass('is-active');

	oldItem.css({
		'z-index': 1,
		'visibility': 'inherit',
		'opacity': 1
	});
	newItem.css({
		'z-index': 2,
		'visibility': 'inherit',
		'opacity': 1,
		'width': 0
	});
	newItem.animate({
		'width': '100%'
	},1000, 'easeInExpo', function() {
		oldItem.removeAttr('style');
		newItem.removeAttr('style');
		animating = false;
	});
}

function preventScroll() {
	if ($('.navigation').is('.is-active')) {
		$('.container').css({'overflow-y': 'hidden'});
	} else {
		$('.container').css({'overflow-y': 'scroll'});
	}
}
