<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"	isELIgnored="false"
	%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="contextPath"  value="${pageContext.request.contextPath }"  />
<%
  request.setCharacterEncoding("UTF-8");
%>  

<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>이거사조</title>
		<meta name="description" content="...">

        <meta name="viewport" content="width=device-width, maximum-scale=5, initial-scale=1, user-scalable=0">
        <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->

        <!-- up to 10% speed up for external res -->
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/">
        <link rel="dns-prefetch" href="https://fonts.gstatic.com/">
        <link rel="preconnect" href="https://fonts.googleapis.com/">
        <link rel="preconnect" href="https://fonts.gstatic.com/">
        <!-- preloading icon font is helping to speed up a little bit -->
        <link rel="preload" href="${contextPath}/resources/assets/fonts/flaticon/Flaticon.woff2" as="font" type="font/woff2" crossorigin>

        <link rel="stylesheet" href="${contextPath}/resources/assets/css/core.css">
        <link rel="stylesheet" href="${contextPath}/resources/assets/css/vendor_bundle.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap">

		<!-- favicon -->
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="apple-touch-icon" href="${contextPath}/resources/demo.files/logo/icon_512x512.png">

		<link rel="manifest" href="${contextPath}/resources/assets/images/manifest/manifest.json">
		<meta name="theme-color" content="#377dff">

		<!--font-->
		<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet">
	</head>

	<!--
		 +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++
			USED PLUGINS:

				SOW : Countdown timer
				/documentation/plugins-sow-timer-countdown.html

				Vendor : Swiper Slider
				/documentation/plugins-vendor-swiper.html

				Vendor : Typed
				/documentation/plugins-vendor-typed.html

		 +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++
	-->
	<body>

		<div id="wrapper">


<!-- HEADER -->
			<header id="header" class="shadow-xs">

				<!-- TOP BAR -->
				<div id="top_bar" class="bg-purple-market fs--14"> <!-- optional if body.header-sticky is present: add .js-ignore class to ignore autohide and stay visible all the time -->
					<div class="container">

						<div class="text-nowrap"><!-- change with .scrollable-horizontal to horizontally scroll, if -only- no dropdown is present -->
							<div class="d-flex justify-content-between">

								<div class="d-inline-block float-start">
									<ul class="list-inline m-0">

										<!-- LANGUAGE -->
										<li class="dropdown list-inline-item m-0">

											<a id="topDDLanguage" href="#!" class="py-2 d-inline-block" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
												<i class="flag flag-kr"></i> 
												<span class="text-muted-white pl-2 pr-2">한국어</span>
											</a>

											<div aria-labelledby="topDDLanguage" class="dropdown-menu dropdown-menu-hover text-uppercase fs--13 px-1 pt-1 pb-0 m-0 max-h-50vh scrollable-vertical">
												<a href="#!" class="active dropdown-item text-muted text-truncate line-height-1 rounded p--12 mb-1">
													<i class="flag flag-kr"></i> 
													한국어
												</a>
												<a href="#!" class="dropdown-item text-muted text-truncate line-height-1 rounded p--12 mb-1">
													<i class="flag flag-us"></i> 
													영어
												</a>
											</div>

										</li>
										<!-- /LANGUAGE -->



									</ul>
								</div>


								<div class="d-inline-block float-end">

									<ul class="list-inline m-0">

										<li class="dropdown list-inline-item">

											<a href="tel:+01-555-5555" class="p-2 d-inline-block font-weight-medium" style="color: #fff;">
												<i class="float-start fi fi-phone"></i> 02-3486-9600
											</a>

										</li>

									</ul>

								</div>

							</div>
						</div>

					</div>
				</div>
				<!-- /TOP BAR -->




				<!-- NAVBAR -->
				<div class="container position-relative">


					<nav class="navbar navbar-expand-lg navbar-light justify-content-lg-between justify-content-md-inherit">

						<div class="align-items-start">

							<!-- mobile menu button : show -->
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainNav" aria-controls="navbarMainNav" aria-expanded="false" aria-label="Toggle navigation">
								<svg width="25" viewBox="0 0 20 20">
									<path d="M 19.9876 1.998 L -0.0108 1.998 L -0.0108 -0.0019 L 19.9876 -0.0019 L 19.9876 1.998 Z"></path>
									<path d="M 19.9876 7.9979 L -0.0108 7.9979 L -0.0108 5.9979 L 19.9876 5.9979 L 19.9876 7.9979 Z"></path>
									<path d="M 19.9876 13.9977 L -0.0108 13.9977 L -0.0108 11.9978 L 19.9876 11.9978 L 19.9876 13.9977 Z"></path>
									<path d="M 19.9876 19.9976 L -0.0108 19.9976 L -0.0108 17.9976 L 19.9876 17.9976 L 19.9876 19.9976 Z"></path>
								</svg>
							</button>

							<!-- 
								Logo : height: 70px max
							-->
							<a class="navbar-brand m-0" href="index.html">
								<img src="${contextPath}/resources/assets/images/logo/logo_dark.svg" width="110" height="70" alt="...">
							</a>

						</div>


						<!-- 

							[SOW] SEARCH SUGGEST PLUGIN
							++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++
							PLEASE READ DOCUMENTATION
							documentation/plugins-sow-search-suggest.html
							++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++

						-->
						<form 	action="search-result-2.html" 
								method="GET" 
								data-autosuggest="on" 

								data-mode="json" 
								data-json-max-results='10'
								data-json-related-title='Explore Smarty'
								data-json-related-item-icon='fi fi-star-empty'
								data-json-suggest-title='Suggestions for you'
								data-json-suggest-noresult='No results for'
								data-json-suggest-item-icon='fi fi-search'
								data-json-suggest-min-score='5'
								data-json-highlight-term='true'
								data-contentType='application/json; charset=utf-8'
								data-dataType='json'

								data-container="#sow-search-container" 
								data-input-min-length="2" 
								data-input-delay="250" 
								data-related-keywords="" 
								data-related-url="${contextPath}/resources/_ajax/search_suggest_related.json" 
								data-suggest-url="${contextPath}/resources/_ajax/search_suggest_input.json" 
								data-related-action="related_get" 
								data-suggest-action="suggest_get" 
								class="js-ajax-search sow-search sow-search-mobile-float d-flex-1-1-auto mx-5 m-0-xs">
							<div class="sow-search-input w-100">

								<!-- rounded: form-control-pill -->
								<div class="input-group-over d-flex align-items-center w-100 h-100 rounded form-control-pill">

									<input placeholder="오늘 뭐 먹지?" aria-label="what are you looking today?" name="s" type="text" class="form-control-sow-search form-control form-control-lg" value="" autocomplete="off">

									<span class="sow-search-buttons">

										<!-- search button -->
										<button aria-label="Global Search" type="submit" class="btn shadow-none m-0 px-3 py-2 bg-transparent text-muted">
											<i class="fi fi-search fs--20 m-0"></i>
										</button>

										<!-- close : mobile only (d-inline-block d-lg-none) -->
										<a href="javascript:;" class="btn-sow-search-toggler btn btn-light shadow-none m-0 p-2 d-inline-block d-lg-none">
											<i class="fi fi-close fs--20 m-0"></i>
										</a>

									</span>

								</div>

							</div>

							<!-- search suggestion container -->
							<div class="sow-search-container w-100 p-0 hide shadow-md" id="sow-search-container">
								<div class="sow-search-container-wrapper">

									<!-- main search container -->
									<div class="sow-search-loader p-3 text-center hide">
										<i class="fi fi-circle-spin fi-spin text-muted fs--30"></i>
									</div>

									<!-- 
										AJAX CONTENT CONTAINER 
										SHOULD ALWAYS BE AS IT IS : NO COMMENTS OR EVEN SPACES!
									--><div class="sow-search-content rounded w-100 scrollable-vertical"></div>

								</div>
							</div>
							<!-- /search suggestion container -->

							<!-- 

								overlay combinations:
									overlay-dark opacity-* [1-9]
									overlay-light opacity-* [1-9]

							-->
							<div class="sow-search-backdrop overlay-dark opacity-3 hide"></div>

						</form>
						<!-- /SEARCH -->




						<!-- OPTIONS -->
						<ul class="list-inline list-unstyled mb-0 d-flex align-items-end">

							<!-- mobile : search toggler -->
							<li class="list-inline-item mx-1 dropdown d-inline-block d-lg-none">

								<a href="#" aria-label="Search" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" class="btn-sow-search-toggler d-inline-block text-center text-dark">
									<i class="fi fi-search fs--20"></i>
									<span class="d-block font-weight-light fs--14">검색</span>
								</a>

							</li>

              <!-- my account -->
              <li class="list-inline-item mx-1 dropdown d-none d-sm-block">

								<a href="${contextPath}/member/login.do" aria-label="Login" class="d-inline-block text-center text-dark">
									<i class="fi fi-power fs--20"></i>
									<span class="d-block font-weight-light fs--14">로그인</span>
								</a>

							</li>
							<!-- <li class="list-inline-item mx-1 dropdown">

								<a href="signin.html" aria-label="My Account" id="dropdownAccountOptions" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" class="d-inline-block text-center text-dark">
                  <i class="fi fi-power fs--20"></i>
									<span class="d-block font-weight-light fs--14">login</span>
								</a> -->


								<!-- dropdown -->
								<!-- <div aria-labelledby="dropdownAccountOptions" class="prefix-link-icon prefix-icon-dot dropdown-menu dropdown-menu-clean dropdown-menu-invert dropdown-click-ignore p-0 mt--18 fs--15">
									<div class="dropdown-header">
										John Doe
									</div>

									<div class="dropdown-divider"></div>

									<a href="account-orders.html" title="My Orders" class="dropdown-item text-truncate font-weight-light">
										My Orders <small>(2)</small>
									</a>

									<a href="account-favourites.html" title="My Favourites" class="dropdown-item text-truncate font-weight-light">
										My Favourites <small>(3)</small>
									</a>

									<a href="account-settings.html" title="Account Settings" class="dropdown-item text-truncate font-weight-light">
										Account Settings
									</a>

									<div class="dropdown-divider mb-0"></div>

									<a href="#!" title="Log Out" class="prefix-icon-ignore dropdown-footer dropdown-custom-ignore">
										<i class="fi fi-power float-start"></i>
										Log Out
									</a>

								</div>

							</li> -->


							<!-- favourites button : visible : desktop only -->
							<li class="list-inline-item mx-1 dropdown d-none d-sm-block">

								<a href="signup.html" aria-label="My Favourites" class="d-inline-block text-center text-dark">
									<i class="fi fi-users fs--20"></i>
									<span class="d-block font-weight-light fs--14">회원가입</span>
								</a>

							</li>


							<!-- cart -->
							<li class="list-inline-item mx-1 dropdown">
								
								<a href="#" aria-label="My Cart" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" class="d-inline-block text-center text-dark">
									<span class="badge badge-light position-absolute end-0 mt--n5">0</span>
									<i class="fi fi-cart-1 fs--20"></i>
									<span class="d-block font-weight-light fs--14">장바구니</span>
								</a>

								<!-- dropdown -->
								<div aria-labelledby="dropdownAccount" id="dropdownAccount" class="dropdown-menu dropdown-menu-clean dropdown-menu-invert dropdown-click-ignore mt--18 w--300 p-0"> 
									<div class="p-3">Cart Products</div> 

									<!--
									<div class="pt-5 pb-5 text-center bg-light">
										Your cart is empty!
									</div>
									-->


									<!-- item list -->
									<div class="max-h-50vh scrollable-vertical">

										<!-- item -->
										<div class="clearfix d-block px-3 py-3 border-top">

											<div class="h--50 overflow-hidden float-start mt-1"> 
												<img width="40" src="${contextPath}/resources/demo.files/images/unsplash/products/thumb_330/barrett-ward-fYYUgvHYgpU-unsplash-min.jpg" alt="...">
											</div> 

											<a href="#!" class="fs--15 d-block position-relative">
												<span class="d-block text-truncate">
													1 &times; Product title comes here
												</span>
											</a>

											<span class="d-block fs--12 mt-1">$196.00</span>
										</div>
										<!-- /item -->


										<!-- item -->
										<div class="clearfix d-block px-3 py-3 border-top">

											<div class="h--50 overflow-hidden float-start mt-1"> 
												<img width="40" src="${contextPath}/resources/demo.files/images/unsplash/products/thumb_330/hardik-sharma-CrPAvN29Nhs-unsplash-min.jpg" alt="...">
											</div> 

											<a href="#!" class="fs--15 d-block position-relative">
												<span class="d-block text-truncate">
													1 &times; Product title comes here
												</span>
											</a>

											<span class="d-block fs--12 mt-1">$196.00</span>
										</div>
										<!-- /item -->


									</div>
									<!-- /item list -->


									<!-- subtotal -->
									<div class="fs--14 text-align-start border-top px-3 py-2">
										Subtotal: <span class="float-end">$196.00</span>
									</div>


									<!-- go to cart button -->
									<div class="clearfix border-top p-3">
										
										<a href="#!" class="btn btn-primary btn-sm btn-block">
											<span>Go to Cart</span>
											<i class="fi fi-arrow-end fs--12"></i>
										</a>

									</div>


								</div>


							</li>

						</ul>
						<!-- /OPTIONS -->


					</nav>

				</div>
				<!-- /NAVBAR -->




				<div class="clearfix">
					
					<!-- line -->
					<hr class="m-0 opacity-5">
					
					<div class="container">

						<nav class="navbar h-auto navbar-expand-lg navbar-light justify-content-lg-between justify-content-md-inherit">


							<!-- Menu -->
							<!--

								Dropdown Classes (should be added to primary .dropdown-menu only, dropdown childs are also affected)
									.dropdown-menu-dark 		- dark dropdown (desktop only, will be white on mobile)
									.dropdown-menu-hover 		- open on hover
									.dropdown-menu-clean 		- no background color on hover
									.dropdown-menu-invert 		- open dropdown in oposite direction (left|right, according to RTL|LTR)
									.dropdown-menu-uppercase 	- uppercase text (font-size is scalled down to 13px)
									.dropdown-click-ignore 		- keep dropdown open on inside click (useful on forms inside dropdown)

									Repositioning long dropdown childs (Example: Pages->Account)
										.dropdown-menu-up-n100 		- open up with top: -100px
										.dropdown-menu-up-n100 		- open up with top: -150px
										.dropdown-menu-up-n180 		- open up with top: -180px
										.dropdown-menu-up-n220 		- open up with top: -220px
										.dropdown-menu-up-n250 		- open up with top: -250px
										.dropdown-menu-up 			- open up without negative class


									Dropdown prefix icon (optional, if enabled in variables.scss)
										.prefix-link-icon .prefix-icon-dot 		- link prefix
										.prefix-link-icon .prefix-icon-line 	- link prefix
										.prefix-link-icon .prefix-icon-ico 		- link prefix
										.prefix-link-icon .prefix-icon-arrow 	- link prefix

									.nav-link.nav-link-caret-hide 	- no dropdown icon indicator on main link
									.nav-item.dropdown-mega 		- required ONLY on fullwidth mega menu

									Mobile animation - add to .navbar-collapse:
									.navbar-animate-fadein
									.navbar-animate-bouncein

							-->
							<div class="collapse navbar-collapse navbar-animate-fadein" id="navbarMainNav">


								<!-- MOBILE MENU NAVBAR -->
								<div class="navbar-xs d-none"><!-- .sticky-top -->

									<!-- mobile menu button : close -->
									<button class="navbar-toggler pt-0" type="button" data-toggle="collapse" data-target="#navbarMainNav" aria-controls="navbarMainNav" aria-expanded="false" aria-label="Toggle navigation">
										<svg width="20" viewBox="0 0 20 20">
											<path d="M 20.7895 0.977 L 19.3752 -0.4364 L 10.081 8.8522 L 0.7869 -0.4364 L -0.6274 0.977 L 8.6668 10.2656 L -0.6274 19.5542 L 0.7869 20.9676 L 10.081 11.679 L 19.3752 20.9676 L 20.7895 19.5542 L 11.4953 10.2656 L 20.7895 0.977 Z"></path>
										</svg>
									</button>

									<!-- 
										Mobile Menu Logo 
										Logo : height: 70px max
									-->
									<a class="navbar-brand" href="index.html">
										<img src="${contextPath}/resources/assets/images/logo/logo_dark.svg" width="110" height="70" alt="...">
									</a>

								</div>
								<!-- /MOBILE MENU NAVBAR -->



								<!-- NAVIGATION -->
								<ul class="navbar-nav navbar-sm">
																<!-- Menu -->
								<!--

									Dropdown Classes (should be added to primary .dropdown-menu only, dropdown childs are also affected)
										.dropdown-menu-dark 		- dark dropdown (desktop only, will be white on mobile)
										.dropdown-menu-hover 		- open on hover
										.dropdown-menu-clean 		- no background color on hover
										.dropdown-menu-invert 		- open dropdown in oposite direction (left|right, according to RTL|LTR)
										.dropdown-menu-uppercase 	- uppercase text (font-size is scalled down to 13px)
										.dropdown-click-ignore 		- keep dropdown open on inside click (useful on forms inside dropdown)

										Repositioning long dropdown childs (Example: Pages->Account)
											.dropdown-menu-up-n100 		- open up with top: -100px
											.dropdown-menu-up-n100 		- open up with top: -150px
											.dropdown-menu-up-n180 		- open up with top: -180px
											.dropdown-menu-up-n220 		- open up with top: -220px
											.dropdown-menu-up-n250 		- open up with top: -250px
											.dropdown-menu-up 			- open up without negative class


										Dropdown prefix icon (optional, if enabled in variables.scss)
											.prefix-link-icon .prefix-icon-dot 		- link prefix
											.prefix-link-icon .prefix-icon-line 	- link prefix
											.prefix-link-icon .prefix-icon-ico 		- link prefix
											.prefix-link-icon .prefix-icon-arrow 	- link prefix

										.nav-link.nav-link-caret-hide 	- no dropdown icon indicator on main link
										.nav-item.dropdown-mega 		- required ONLY on fullwidth mega menu

								-->
								<!-- home -->
								<li class="nav-item dropdown active">

									<a href="#" id="mainNavHome" class="nav-link dropdown-toggle" 

										data-toggle="dropdown" 
										aria-haspopup="true" 
										aria-expanded="false">
										<span class="fi fi-bars-2 fs--18" style="font-weight: 500;"/>
										
										&nbsp 전체 카테고리
									</a>

									<div aria-labelledby="mainNavHome" class="dropdown-menu dropdown-menu-clean dropdown-menu-hover">
									    <ul class="list-unstyled m-0 p-0">
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">채소</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="itemlist-1.html" class="dropdown-link">채소 1</a></li>
									                <li class="dropdown-item"><a href="itemlist-2.html" class="dropdown-link">채소 2</a></li>
									                <li class="dropdown-item"><a href="itemlist-3.html" class="dropdown-link">채소 3</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">육류</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="itemlist-1.html" class="dropdown-link">육류1</a></li>
									                <li class="dropdown-item"><a href="itemlist-2.html" class="dropdown-link">육류2</a></li>
									                <li class="dropdown-item"><a href="itemlist-3.html" class="dropdown-link">육류3</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">베이커리</a>
                            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
                                <li class="dropdown-item"><a href="itemlist-1.html" class="dropdown-link">베이커리1</a></li>
                                <li class="dropdown-item"><a href="itemlist-2.html" class="dropdown-link">베이커리2</a></li>
                                <li class="dropdown-item"><a href="itemlist-3.html" class="dropdown-link">베이커리3</a></li>
                            </ul>
                        </li>
                          </li>
									</div>

								</li>


								<!-- New Product -->
								<li class="nav-item dropdown">

									<a href="#" id="mainNavPages" class="nav-link" 
										aria-haspopup="true" 
										aria-expanded="false">
										신상품
									</a>

								</li>


								<!-- Best Product -->
								<li class="nav-item dropdown">

									<a href="#" id="mainNavPages" class="nav-link" 
										aria-haspopup="true" 
										aria-expanded="false">
										베스트
									</a>

								</li>


								<!-- Discount Product -->
								<li class="nav-item dropdown">

									<a href="#" id="mainNavPages" class="nav-link" 
										aria-haspopup="true" 
										aria-expanded="false">
										알뜰쇼핑
									</a>

								</li>





								<!-- social : mobile only (d-block d-sm-none)-->
								<li class="nav-item d-block d-sm-none text-center mb-4">

									<h3 class="h6 text-muted">Follow Us</h3>

									<a href="#!" class="btn btn-sm btn-facebook transition-hover-top mb-2 rounded-circle text-white" rel="noopener">
										<i class="fi fi-social-facebook"></i> 
									</a>

									<a href="#!" class="btn btn-sm btn-twitter transition-hover-top mb-2 rounded-circle text-white" rel="noopener">
										<i class="fi fi-social-twitter"></i> 
									</a>

									<a href="#!" class="btn btn-sm btn-linkedin transition-hover-top mb-2 rounded-circle text-white" rel="noopener">
										<i class="fi fi-social-linkedin"></i> 
									</a>

									<a href="#!" class="btn btn-sm btn-youtube transition-hover-top mb-2 rounded-circle text-white" rel="noopener">
										<i class="fi fi-social-youtube"></i> 
									</a>

								</li>



								<!-- buy now : mobile only (d-block d-sm-none)-->
								<li class="nav-item d-block d-sm-none">
									<a target="_blank" href="#buy_now" class="btn btn-block btn-primary shadow-none text-white m-0">
										Buy Now
									</a>
								</li>

								</ul>
								<!-- /NAVIGATION -->


							</div>

						</nav>

					</div>
				
			</header>
			<!-- /HEADER -->


		

			<!-- 
				SWIPER 
			-->
			<section class="p-0 position-relative overflow-hidden">

				<!--
					Height
						.h-50vh
						.h-75vh
						.h-100vh
				-->
				<div class="swiper-container swiper-btn-group swiper-btn-group-end text-white h-75vh overflow-hidden"
					data-swiper='{
						"slidesPerView": 1,
						"spaceBetween": 0,
						"autoplay": { "delay" : 6500, "disableOnInteraction": true },
						"loop": true,
						"effect": "fade",
						"pagination": { "type": "bullets" }
					}'>

					<div class="swiper-wrapper h-100">

						<!-- slide 1 -->
						<div class="h-100 swiper-slide d-middle overlay-dark overlay-opacity-5 bg-cover text-decoration-none text-white" style="background-image:url('${contextPath}/resources/images/bread1.jpg')">
							<div class="position-absolute container z-index-10 text-white text-center" data-aos="fade-in" data-aos-delay="150" data-aos-offset="0">

								<h1 class="display-3 h1-xs mb-4 font-weight-medium" data-swiper-parallax="-300">
									<span class="text-danger">점심시간</span> 언제 돼...
								</h1>

								<div data-swiper-parallax="-100"><!-- parallax directly on button will cancel hover fade -->
									<a href="#!" class="btn btn-lg btn-outline-light shadow-none transition-hover-top">
										점심 먹기
									</a>
								</div>

							</div>
						</div>
						<!-- /slide 1 -->


						<!-- slide 2 -->
						<a href="#!" class="h-100 swiper-slide d-middle overlay-dark overlay-opacity-5 bg-cover text-decoration-none text-white lazy" style="background-image:url('${contextPath}/resources/images/steak1.jpg')">
							<div class="position-relative container z-index-10 text-white text-center" data-aos="fade-in" data-aos-delay="150" data-aos-offset="0">

								<h2 class="display-3 h1-xs mb-4 font-weight-medium" data-swiper-parallax="-300">
									고기 <span class="text-danger">고기</span> 있소?
								</h2>

								<div data-swiper-parallax="-100"><!-- parallax directly on button will cancel hover fade -->
									<span class="btn btn-lg btn-outline-light shadow-none transition-hover-top">
										고기 먹기
									</span>
								</div>

							</div>
						</a>
						<!-- /slide 2 -->

					</div>

					<!-- Add Arrows -->
					<div class="swiper-button-next swiper-button-black"></div>
					<div class="swiper-button-prev swiper-button-black"></div>

					<!-- Add Pagination -->
					<div class="swiper-pagination top-0 h--30 mt-4"></div>

					<!-- v shape : .bg-light, .shape-xs (remove .shape-xs for .h-100vh container) -->
					<div class="shape-v shape-xs bottom-0"></div>

				</div>

			</section>
			<!-- /SWIPER -->





			<!-- INFO BOX -->
			<section class="py-0 border-bottom-xs">
				<div class="container py-3">

					<div class="row">

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="${contextPath}/resources/demo.files/svg/ecommerce/money_bag.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									최저가 보장
								</h2>

								<p class="m-0">
									30-days money back
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bt-0 br-0 bb-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="${contextPath}/resources/demo.files/svg/ecommerce/free-delivery-truck.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									무료 배송
								</h2>

								<p class="m-0">
									Shipping is on us
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bl-0 br-0 bb-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="${contextPath}/resources/demo.files/svg/ecommerce/24-hours-phone-service.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									고객센터
								</h2>

								<p class="m-0">
									24/24 available
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bb-0 br-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="${contextPath}/resources/demo.files/svg/ecommerce/handshake.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									품질 보장
								</h2>

								<p class="m-0">
									Quality guaranteed
								</p>

							</div>

						</div>

					</div>

				</div>
			</section>
			<!-- /INFO BOX -->




			<!-- OFFER BLOCK -->
			<section>
				<div class="container">


					<div class="mb-7 text-center px-3">
						<h2 class="h3-xs text-center-xs font-weight-normal text-danger">
							어떻게 먹어도 맛있는 <b>소고기 최대 30% 할인</b>
						</h2>
						
						<p class="lead max-w-600 mx-auto">
							~12월 7일(월) 11시 
						</p>
					</div>



					<!-- product list -->
					<div class="row gutters-xs--xs">


						<!-- 
							
							MAIN/FEATURED
							please pay attention to how order-* is set!
							See on mobile how looks like! Play to set as desired!

							You can also insert this "featured" anywhere
							between them as long .order-2 class is present!

						-->
						<div class="order-2 col-12 col-lg-6 mb-4 mb-2-xs">

							<div class="bg-white shadow-md shadow-danger-lg-hover transition-all-ease-250 transition-hover-top rounded show-hover-container p-2 h-100">

								<a href="#!" class="card position-relative h-100 b-0 rounded text-decoration-none overflow-hidden bg-cover text-white overlay-dark overlay-opacity-0" 
									style="background-image:url('${contextPath}/resources/images/gogi.JPG')">
									<!-- style="background-image:url('${contextPath}/resources/demo.files/images/unsplash/products/sneakers/joshua-hanson-FCcNHcylc9o-unsplash.jpg')"> -->

									<div class="card-body p-4">

										<!-- 
											typed plugin 
											/documentation/plugins-vendor-typed.html
										-->
										<span class="typed text-warning h5" 
												data-typed-string="Just Arrived|초특가|기간 한정세일"
												data-typed-speed-forward="40" 
												data-typed-speed-back="30" 
												data-typed-back-delay="700" 
												data-typed-loop-times="infinite" 
												data-typed-smart-backspace="true" 
												data-typed-shuffle="false" 
												data-typed-cursor="|">&nbsp;</span>


										<h2 class="d-block">
											[선물세트] 녹색한우 1+(냉동)
										</h2>

										<hr class="border-light opacity-2">

										<!-- price -->
										<span class="h5 d-block text-danger font-weight-medium">
											<del class="text-white">₩139,00</del> 
											₩67,300
										</span>

										<!-- rating -->
										<span class="d-block">
											<i class="rating-5 text-warning fs--14"></i>
											<span class="fs--12 text-muted">(4.7)</span>
										</span>

									</div>

									<!--
										
										SOW Countdown timer
										/documentation/plugins-sow-timer-countdown.html

									-->
									<div class="card-footer bg-transparent b-0">
										<hr class="border-light opacity-2">
										
										<span class="float-end fs--14 p-2">
											limited
										</span>

										<div class="hide timer-countdown timer-countdown-inline fs--13" 
											data-timer-countdown-from="12/25/2020 16:00:00">

											<span class="w--50 text-center shadow-xs d-inline-block">
												<span class="d d-block"></span>
												days
											</span>

											<span class="w--50 text-center shadow-xs d-inline-block">
												<span class="h d-block"></span>
												hrs
											</span>

											<span class="w--50 text-center shadow-xs d-inline-block">
												<span class="m d-block"></span>
												min
											</span>

											<span class="w--50 text-center shadow-xs d-inline-block">
												<span class="s d-block"></span>
												sec
											</span>

										</div>

									</div>


								</a>

							</div>

						</div>
						<!-- /SPECIAL PRODUCT -->


						<!-- item -->
						<div class="order-1 col-6 col-lg-3 mb-4 mb-2-xs">

							<div class="bg-white shadow-xs shadow-3d-hover transition-all-ease-250 transition-hover-top rounded show-hover-container p-2 h-100">

								<a href="shop-page-product-2.html" class="d-block text-decoration-none">

									<!-- 
										
										3 ways to set the image

									-->

									<!-- 1. without .bg-suprime - use image as it is -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden">
										<img class="img-fluid" src="image.jpg" alt="..."> 
									</figure>
									-->


									<!-- 2. squared, as background -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden bg-cover" style="background-image:url('image.jpg')">
										<img class="w-100" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="..."> 
									</figure>
									-->

									<!-- 3. with .bg-suprime (remove white bg and add a gray bg) -->
									<figure class="m-0 text-center bg-light-radial rounded-top overflow-hidden">
										<img class="img-fluid bg-suprime opacity-9" src="${contextPath}/resources/demo.files/images/unsplash/products/sneakers/thumb_330/gregorius-maximillian-CtTBJ2ew4sw-unsplash-min.jpg" alt="..."> 
									</figure>

									<span class="d-block text-center-xs text-gray-600 py-3">
										
										<!-- 
											.max-height-50  = limited to 2 rows of text 
											-or-
											.text-truncate
										-->
										<span class="d-block fs--16 max-h-50 overflow-hidden">
											Lorem ipsum dolor sit amet elit
										</span>

										<!-- price -->
										<span class="d-block text-danger font-weight-medium fs--16 mt-2">

											<del class="text-muted">$220<sup>00</sup></del> 

											$173<sup>00</sup>
										</span>

										<!-- rating -->
										<span class="d-block">
											<i class="rating-5 text-warning fs--14"></i>
											<span class="fs--12 text-muted">(4.7)</span>
										</span>

									</span>

								</a>

							</div>

						</div>
						<!-- /item -->


						<!-- item -->
						<div class="order-lg-2 col-6 col-lg-3 mb-4 mb-2-xs">

							<div class="bg-white shadow-xs shadow-3d-hover transition-all-ease-250 transition-hover-top rounded show-hover-container p-2 h-100">

								<a href="shop-page-product-2.html" class="d-block text-decoration-none">

									<!-- 
										
										3 ways to set the image

									-->

									<!-- 1. without .bg-suprime - use image as it is -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden">
										<img class="img-fluid" src="image.jpg" alt="..."> 
									</figure>
									-->


									<!-- 2. squared, as background -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden bg-cover" style="background-image:url('image.jpg')">
										<img class="w-100" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="..."> 
									</figure>
									-->

									<!-- 3. with .bg-suprime (remove white bg and add a gray bg) -->
									<figure class="m-0 text-center bg-light-radial rounded-top overflow-hidden">
										<img class="img-fluid bg-suprime opacity-9" src="${contextPath}/resources/demo.files/images/unsplash/products/sneakers/thumb_330/mutzii-fmDCrqPQKog-unsplash-min.jpg" alt="..."> 
									</figure>

									<span class="d-block text-center-xs text-gray-600 py-3">
										
										<!-- 
											.max-height-50  = limited to 2 rows of text 
											-or-
											.text-truncate
										-->
										<span class="d-block fs--16 max-h-50 overflow-hidden">
											Lorem ipsum dolor sit amet elit
										</span>

										<!-- price -->
										<span class="d-block text-danger font-weight-medium fs--16 mt-2">

											<del class="text-muted">$220<sup>00</sup></del> 

											$173<sup>00</sup>
										</span>

										<!-- rating -->
										<span class="d-block">
											<i class="rating-5 text-warning fs--14"></i>
											<span class="fs--12 text-muted">(4.7)</span>
										</span>

									</span>

								</a>

							</div>

						</div>
						<!-- /item -->















						<!-- item -->
						<div class="order-2 col-6 col-lg-3 mb-4 mb-2-xs">

							<div class="bg-white shadow-xs shadow-3d-hover transition-all-ease-250 transition-hover-top rounded show-hover-container p-2 h-100">

								<a href="shop-page-product-2.html" class="d-block text-decoration-none">

									<!-- 
										
										3 ways to set the image

									-->

									<!-- 1. without .bg-suprime - use image as it is -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden">
										<img class="img-fluid" src="image.jpg" alt="..."> 
									</figure>
									-->


									<!-- 2. squared, as background -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden bg-cover" style="background-image:url('image.jpg')">
										<img class="w-100" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="..."> 
									</figure>
									-->

									<!-- 3. with .bg-suprime (remove white bg and add a gray bg) -->
									<figure class="m-0 text-center bg-light-radial rounded-top overflow-hidden">
										<img class="img-fluid bg-suprime opacity-9" src="${contextPath}/resources/demo.files/images/unsplash/products/sneakers/thumb_330/nikita-kachanovsky-ad_0wMHtvlU-unsplash-min.jpg" alt="..."> 
									</figure>

									<span class="d-block text-center-xs text-gray-600 py-3">
										
										<!-- 
											.max-height-50  = limited to 2 rows of text 
											-or-
											.text-truncate
										-->
										<span class="d-block fs--16 max-h-50 overflow-hidden">
											Lorem ipsum dolor sit amet elit
										</span>

										<!-- price -->
										<span class="d-block text-danger font-weight-medium fs--16 mt-2">

											<del class="text-muted">$220<sup>00</sup></del> 

											$173<sup>00</sup>
										</span>

										<!-- rating -->
										<span class="d-block">
											<i class="rating-5 text-warning fs--14"></i>
											<span class="fs--12 text-muted">(4.7)</span>
										</span>

									</span>

								</a>

							</div>

						</div>
						<!-- /item -->


						<!-- item -->
						<div class="order-2 col-6 col-lg-3 mb-4 mb-2-xs">

							<div class="bg-white shadow-xs shadow-3d-hover transition-all-ease-250 transition-hover-top rounded show-hover-container p-2 h-100">

								<a href="shop-page-product-2.html" class="d-block text-decoration-none">

									<!-- 
										
										3 ways to set the image

									-->

									<!-- 1. without .bg-suprime - use image as it is -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden">
										<img class="img-fluid" src="image.jpg" alt="..."> 
									</figure>
									-->


									<!-- 2. squared, as background -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden bg-cover" style="background-image:url('image.jpg')">
										<img class="w-100" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="..."> 
									</figure>
									-->

									<!-- 3. with .bg-suprime (remove white bg and add a gray bg) -->
									<figure class="m-0 text-center bg-light-radial rounded-top overflow-hidden">
										<img class="img-fluid bg-suprime opacity-9" src="${contextPath}/resources/demo.files/images/unsplash/products/sneakers/thumb_330/irene-kredenets-dwKiHoqqxk8-unsplash-min.jpg" alt="..."> 
									</figure>

									<span class="d-block text-center-xs text-gray-600 py-3">
										
										<!-- 
											.max-height-50  = limited to 2 rows of text 
											-or-
											.text-truncate
										-->
										<span class="d-block fs--16 max-h-50 overflow-hidden">
											Lorem ipsum dolor sit amet elit
										</span>

										<!-- price -->
										<span class="d-block text-danger font-weight-medium fs--16 mt-2">

											<del class="text-muted">$220<sup>00</sup></del> 

											$173<sup>00</sup>
										</span>

										<!-- rating -->
										<span class="d-block">
											<i class="rating-5 text-warning fs--14"></i>
											<span class="fs--12 text-muted">(4.7)</span>
										</span>

									</span>

								</a>

							</div>

						</div>
						<!-- /item -->


						<!-- item -->
						<div class="order-2 col-6 col-lg-3 mb-4 mb-2-xs">

							<div class="bg-white shadow-xs shadow-3d-hover transition-all-ease-250 transition-hover-top rounded show-hover-container p-2 h-100">

								<a href="shop-page-product-2.html" class="d-block text-decoration-none">

									<!-- 
										
										3 ways to set the image

									-->

									<!-- 1. without .bg-suprime - use image as it is -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden">
										<img class="img-fluid" src="image.jpg" alt="..."> 
									</figure>
									-->


									<!-- 2. squared, as background -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden bg-cover" style="background-image:url('image.jpg')">
										<img class="w-100" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="..."> 
									</figure>
									-->

									<!-- 3. with .bg-suprime (remove white bg and add a gray bg) -->
									<figure class="m-0 text-center bg-light-radial rounded-top overflow-hidden">
										<img class="img-fluid bg-suprime opacity-9" src="${contextPath}/resources/demo.files/images/unsplash/products/sneakers/thumb_330/masaaki-komori-1GiUkfbcXis-unsplash-min.jpg" alt="..."> 
									</figure>

									<span class="d-block text-center-xs text-gray-600 py-3">
										
										<!-- 
											.max-height-50  = limited to 2 rows of text 
											-or-
											.text-truncate
										-->
										<span class="d-block fs--16 max-h-50 overflow-hidden">
											Lorem ipsum dolor sit amet elit
										</span>

										<!-- price -->
										<span class="d-block text-danger font-weight-medium fs--16 mt-2">

											<del class="text-muted">$220<sup>00</sup></del> 

											$173<sup>00</sup>
										</span>

										<!-- rating -->
										<span class="d-block">
											<i class="rating-5 text-warning fs--14"></i>
											<span class="fs--12 text-muted">(4.7)</span>
										</span>

									</span>

								</a>

							</div>

						</div>
						<!-- /item -->


						<!-- item -->
						<div class="order-2 col-6 col-lg-3 mb-4 mb-2-xs">

							<div class="bg-white shadow-xs shadow-3d-hover transition-all-ease-250 transition-hover-top rounded show-hover-container p-2 h-100">

								<a href="shop-page-product-2.html" class="d-block text-decoration-none">

									<!-- 
										
										3 ways to set the image

									-->

									<!-- 1. without .bg-suprime - use image as it is -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden">
										<img class="img-fluid" src="image.jpg" alt="..."> 
									</figure>
									-->


									<!-- 2. squared, as background -->
									<!--
									<figure class="m-0 text-center rounded-top overflow-hidden bg-cover" style="background-image:url('image.jpg')">
										<img class="w-100" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="..."> 
									</figure>
									-->

									<!-- 3. with .bg-suprime (remove white bg and add a gray bg) -->
									<figure class="m-0 text-center bg-light-radial rounded-top overflow-hidden">
										<img class="img-fluid bg-suprime opacity-9" src="${contextPath}/resources/demo.files/images/unsplash/products/sneakers/thumb_330/sarah-dorweiler-gUPiTDBdRe4-unsplash-min.jpg" alt="..."> 
									</figure>

									<span class="d-block text-center-xs text-gray-600 py-3">
										
										<!-- 
											.max-height-50  = limited to 2 rows of text 
											-or-
											.text-truncate
										-->
										<span class="d-block fs--16 max-h-50 overflow-hidden">
											Lorem ipsum dolor sit amet elit
										</span>

										<!-- price -->
										<span class="d-block text-danger font-weight-medium fs--16 mt-2">

											<del class="text-muted">$220<sup>00</sup></del> 

											$173<sup>00</sup>
										</span>

										<!-- rating -->
										<span class="d-block">
											<i class="rating-5 text-warning fs--14"></i>
											<span class="fs--12 text-muted">(4.7)</span>
										</span>

									</span>

								</a>

							</div>

						</div>
						<!-- /item -->

					</div>
					<!-- /product list -->


				</div>
			</section>
			<!-- /OFFER BLOCK -->





			<!-- SUBSCRIBE -->
			<section class="bg-light py-2">
				<div class="container">

					<div class="row">

						<div class="col-10 mx-auto col-lg-8 py-5 pb-0-xs text-center-md text-center-xs">
							<h3 class="m-0">냠냠박사의 <span class="text-danger">맛있는 할인정보 </span>받아보기</h3>
							<p class="m-0">매주 달라지는 냠냠박사의 할인정보 놓치지 마지고 이메일로 받아보세요!</p>
						</div>

						<div class="col-10 mx-auto col-lg-4 py-4">

							<form novalidate method="post" action="#subscribe_url" class="bs-validate py-3 mt-1 input-group-over input-group-pill"> 
									
								<input required class="form-control form-control-lg font-weight-light text-center-md text-center-xs" name="subscriber_email" type="email" value="" placeholder="email address..." aria-label="email address...">

								<button aria-label="subscribe" type="submit" class="btn bg-transparent shadow-none"> 
									<i class="fi fi-send fs--18"></i> 
								</button>

							</form>

						</div>

					</div>

				</div>
			</section>
			<!-- /SUBSCRIBE -->




			<!-- BRANDS -->
			<section>
				<div class="container">


					<div class="mb-7 text-center px-3">
						<h2 class="h3 text-center-xs font-weight-normal text-danger">
							오늘의 <b>신상품</b>
						</h2>

						<p class="lead max-w-600 mx-auto">
							매일 정오, 냠냠박사의 새로운 상품을 만나보세요!
						</p>
					</div>

					<!-- BRANDS : GRID : LAZYLOAD -->
					<div class="clearfix mb-3 mt-5 p-3 bg-white shadow-md rounded overflow-hidden">
						<div class="bg-white overflow-hidden"><!-- negative classes - hide bordered edges -->
							
							<div class="row row-grid mt--n1 mb--n1">

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/adidas.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/xing.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/chanel.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/jordan.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/levis.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/lacoste.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/hm.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/american-apparel.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/nike-4.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="${contextPath}/resources/demo.files/svg/brands/bike.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

							</div>

						</div>
					</div>
					<!-- BRANDS : GRID : LAZYLOAD -->


					<div class="text-center pt-5">

						<!-- view all button -->
						<a href="#!" class="btn btn-sm btn-secondary btn-soft btn-soft">더 많은 상품 보러가기</a>

					</div>


				</div>
			</section>
			<!-- /BRANDS -->





			<!-- INFO BOX -->
			<section class="bg-light py-0">
				<div class="container py-3">

					<div class="row">

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="${contextPath}/resources/demo.files/svg/ecommerce/money_bag.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									최저가 보장
								</h2>

								<p class="m-0">
									30-days money back
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bt-0 br-0 bb-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="${contextPath}/resources/demo.files/svg/ecommerce/free-delivery-truck.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									무료배송
								</h2>

								<p class="m-0">
									Shipping is on us
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bl-0 br-0 bb-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="${contextPath}/resources/demo.files/svg/ecommerce/24-hours-phone-service.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									고객센터
								</h2>

								<p class="m-0">
									24/24 available
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bb-0 br-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="${contextPath}/resources/demo.files/svg/ecommerce/handshake.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									품질보장
								</h2>

								<p class="m-0">
									Quality guaranteed
								</p>

							</div>

						</div>

					</div>

				</div>
			</section>
			<!-- /INFO BOX -->




			<!-- Footer -->
			<footer id="footer" class="shadow-xs">
				
				<div class="container py-5">

					<div class="row">

						<div class="col-12 col-lg-8">

							<div class="row mb-3">

								<!-- Col 1 -->
								<div class="col-12 col-lg-4 mb-1">

									<!-- mobile only : SOW Toggle Button -->
									<button class="clearfix btn btn-toggle btn-sm btn-block text-align-left shadow-md border rounded mb-1 d-block d-lg-none" 
											data-target="#footer_c1" 
											data-toggle-container-class="d-none d-sm-block bg-white shadow-md border animate-fadein rounded p-3">
										
										<span class="group-icon p-2 float-start">
											<i class="fi fi-bars-2"></i>
											<i class="fi fi-close"></i>
										</span>

										<span class="h5 py-2 m-0 float-start">
											주문
										</span>
									</button>

									<!-- desktop only -->
									<h3 class="h5 py-3 m-0 d-none d-lg-block">
										주문
									</h3>


									<!-- navigation -->
									<ul id="footer_c1" class="nav flex-column d-none d-lg-block">
										<li class="list-item">
											<a class="d-block py-1" href="#!">My Account</a>
										</li>

										<li class="list-item">
											<a class="d-block py-1" href="#!">How do I order?</a>
										</li>

										<li class="list-item">
											<a class="d-block py-1" href="#!">Payment Methods</a>
										</li>
									</ul>

								</div>

								<!-- Col 2 -->
								<div class="col-12 col-lg-4 mb-1">

									<!-- mobile only : SOW Toggle Button -->
									<button class="clearfix btn btn-toggle btn-sm btn-block text-align-left shadow-md border rounded mb-1 d-block d-lg-none" 
											data-target="#footer_c2" 
											data-toggle-container-class="d-none d-sm-block bg-white shadow-md border animate-fadein rounded p-3">
										
										<span class="group-icon p-2 float-start">
											<i class="fi fi-bars-2"></i>
											<i class="fi fi-close"></i>
										</span>

										<span class="h5 py-2 m-0 float-start">
											살펴보기
										</span>
									</button>

									<!-- desktop only -->
									<h3 class="h5 py-3 m-0 d-none d-lg-block">
										살펴보기
									</h3>


									<!-- navigation -->
									<ul id="footer_c2" class="nav flex-column d-none d-lg-block">
										<li class="list-item">
											<a class="d-block py-1" href="blog-page-sidebar.html">Smarty Blog</a>
										</li>

										<li class="list-item">
											<a class="d-block py-1" href="#!">Shipping</a>
										</li>

										<li class="list-item">
											<a class="d-block py-1" href="#!">Cookies</a>
										</li>
									</ul>


								</div>

								<!-- Col 3 -->
								<div class="col-12 col-lg-4 mb-1">

									<!-- mobile only : SOW Toggle Button-->
									<button class="clearfix btn btn-toggle btn-sm btn-block text-align-left shadow-md border rounded mb-1 d-block d-lg-none" 
											data-target="#footer_c3" 
											data-toggle-container-class="d-none d-sm-block bg-white shadow-md border animate-fadein rounded p-3">
										
										<span class="group-icon p-2 float-start">
											<i class="fi fi-bars-2"></i>
											<i class="fi fi-close"></i>
										</span>

										<span class="h5 py-2 m-0 float-start">
											고객센터
										</span>
										
									</button>

									<!-- desktop only -->
									<h3 class="h5 py-3 m-0 d-none d-lg-block">
										고객센터
									</h3>


									<!-- navigation -->
									<ul id="footer_c3" class="nav flex-column d-none d-lg-block">
										<li class="list-item">
											<a class="d-block py-1" href="#!">Refund Policy</a>
										</li>

										<li class="list-item">
											<a class="d-block py-1" href="#!">Privacy Policy</a>
										</li>

										<li class="list-item">
											<a class="d-block py-1" href="#!">Terms &amp; Conditions</a>
										</li>
									</ul>

								</div>

							</div>

						</div>


						<div class="col">

							<h5 class="text-danger my-3">
								냠냠박사 구독하기
							</h5>

							<form novalidate class="bs-validate" method="post" action="#">

								<div class="input-group mb-3">

									<input required type="email" name="subscribe_email" value="" class="form-control" placeholder="email address" aria-label="email address">
									
									<div class="input-group-append">
										<button class="btn btn-danger btn-soft">구독</button>
									</div>

								</div>

							</form>

						</div>

					</div>

				</div>


				<div class="border-top">
					<div class="container text-center py-5">

						<!-- logo -->
						<span class="h--70 d-inline-flex align-items-center">
							<img src="${contextPath}/resources/assets/images/logo/logo_dark.svg" width="110" height="70" alt="...">
						</span>

						<p class="m-0 text-gray-500 fs--14">

							&copy; My Company Inc. 2015 – 2019. 

							<br>

							All Rights Reserved.
						
						</p>


						<div class="mt-5"> 

							<!-- social -->
							<a href="#!" class="btn btn-sm btn-light transition-hover-top mb-2 rounded-circle" rel="noopener" aria-label="facebook page">
								<i class="fi fi-social-facebook"></i> 
							</a>

							<a href="#!" class="btn btn-sm btn-light transition-hover-top mb-2 rounded-circle" rel="noopener" aria-label="twitter page">
								<i class="fi fi-social-twitter"></i> 
							</a>

							<a href="#!" class="btn btn-sm btn-light transition-hover-top mb-2 rounded-circle" rel="noopener" aria-label="linkedin page">
								<i class="fi fi-social-linkedin"></i> 
							</a>

							<a href="#!" class="btn btn-sm btn-light transition-hover-top mb-2 rounded-circle" rel="noopener" aria-label="youtube page">
								<i class="fi fi-social-youtube"></i> 
							</a>


							<!-- credit cards -->
							<ul class="list-inline mb-0 mt-2"> 

								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${contextPath}/resources/assets/images/credit_card/visa.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="visa credit card icon">
								</li> 

								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${contextPath}/resources/assets/images/credit_card/mastercard.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="mastercard credit card icon">
								</li> 

								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${contextPath}/resources/assets/images/credit_card/discover.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="discover credit card icon">
								</li>

								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${contextPath}/resources/assets/images/credit_card/amazon.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="amazon credit card icon">
								</li>
								
								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${contextPath}/resources/assets/images/credit_card/paypal.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="paypal credit card icon">
								</li>

								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${contextPath}/resources/assets/images/credit_card/skrill.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="skrill credit card icon">
								</li>

								<!-- more vendors on ${contextPath}/resources/assets/images/credit_card/ -->

							</ul>

						</div>


					</div>
				</div>

			</footer>
			<!-- /Footer -->


		</div><!-- /#wrapper -->


		<!-- 
			SHOP AJAX MODAL : ON LOAD 

			Note: #onload_modal_shop is also used inside the modal
			for the button "stop showing" to set a cookie!
		-->
		<div id="onload_modal_shop" class="hide js-onload js-ajax-modal" 
		    data-href="${contextPath}/resources/_ajax/modal_shop.html" 
		    data-ajax-modal-delay="3000" 
		    data-ajax-modal-size="modal-lg" 
		    data-ajax-modal-centered="true" 
		    data-ajax-modal-backdrop=""></div>


		<script src="${contextPath}/resources/assets/js/core.min.js"></script>
		
	</body>
</html>