<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Smarty V3</title>
		<meta name="description" content="...">

        <meta name="viewport" content="width=device-width, maximum-scale=5, initial-scale=1, user-scalable=0">
        <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->

        <!-- up to 10% speed up for external res -->
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/">
        <link rel="dns-prefetch" href="https://fonts.gstatic.com/">
        <link rel="preconnect" href="https://fonts.googleapis.com/">
        <link rel="preconnect" href="https://fonts.gstatic.com/">
        <!-- preloading icon font is helping to speed up a little bit -->
        <link rel="preload" href="${pageContext.request.contextPath }/resources/assets/fonts/flaticon/Flaticon.woff2" as="font" type="font/woff2" crossorigin>

        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/assets/css/core.min.css">
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/assets/css/vendor_bundle.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap">

		<!-- favicon -->
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="apple-touch-icon" href="${pageContext.request.contextPath }/resources/demo.files/logo/icon_512x512.png">

		<link rel="manifest" href="${pageContext.request.contextPath }/resources/assets/images/manifest/manifest.json">
		<meta name="theme-color" content="#377dff">

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
				<div id="top_bar" class="bg-light fs--14"> <!-- optional if body.header-sticky is present: add .js-ignore class to ignore autohide and stay visible all the time -->
					<div class="container">

						<div class="text-nowrap"><!-- change with .scrollable-horizontal to horizontally scroll, if -only- no dropdown is present -->
							<div class="d-flex justify-content-between">

								<div class="d-inline-block float-start">
									<ul class="list-inline m-0">

										<!-- LANGUAGE -->
										<li class="dropdown list-inline-item m-0">

											<a id="topDDLanguage" href="#!" class="py-2 d-inline-block" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
												<i class="flag flag-kr"></i> 
												<span class="text-muted pl-2 pr-2">한국어</span>
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


										<!-- CURRENCY -->
										<li class="dropdown list-inline-item m-0">

											<span class="text-muted">/</span><!-- optional separator -->

											<a id="topDDCurrency" href="#" class="py-2 d-inline-block" data-toggle="dropdown" aria-expanded="false">
												<span class="text-muted pl-2 pr-2">KRW</span>
											</a>

											<div aria-labelledby="topDDCurrency" class="dropdown-menu dropdown-menu-hover text-uppercase text-center fs--13 px-1 pt-1 pb-0 m-0 max-h-50vh w-auto scrollable-vertical">
												<a href="#!" class="active dropdown-item text-muted text-truncate line-height-1 rounded pt--12 pb--12 mb-1">
													USD
												</a>
												<a href="#!" class="dropdown-item text-muted text-truncate line-height-1 rounded pt--12 pb--12 mb-1">
													KRW
												</a>
											</div>

										</li>
										<!-- /CURRENCY -->

									</ul>
								</div>


								<div class="d-inline-block float-end">

									<ul class="list-inline m-0">

										<li class="dropdown list-inline-item">

											<a href="tel:+01-555-5555" class="p-2 d-inline-block font-weight-medium">
												<i class="float-start fi fi-phone"></i> (+01) 555-5555
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
								<img src="${pageContext.request.contextPath }/resources/assets/images/logo/logo_dark.svg" width="110" height="70" alt="...">
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
								data-related-url="_ajax/search_suggest_related.json" 
								data-suggest-url="_ajax/search_suggest_input.json" 
								data-related-action="related_get" 
								data-suggest-action="suggest_get" 
								class="js-ajax-search sow-search sow-search-mobile-float d-flex-1-1-auto mx-5 m-0-xs">
							<div class="sow-search-input w-100">

								<!-- rounded: form-control-pill -->
								<div class="input-group-over d-flex align-items-center w-100 h-100 rounded form-control-pill">

									<input placeholder="what are you looking today?" aria-label="what are you looking today?" name="s" type="text" class="form-control-sow-search form-control form-control-lg" value="" autocomplete="off">

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
									<span class="d-block font-weight-light fs--14">search</span>
								</a>

							</li>

							<!-- my account -->
							<li class="list-inline-item mx-1 dropdown">

								<a href="#" aria-label="My Account" id="dropdownAccountOptions" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" class="d-inline-block text-center text-dark">
									<i class="fi fi-users fs--20"></i>
									<span class="d-block font-weight-light fs--14">account</span>
								</a>


								<!-- dropdown -->
								<div aria-labelledby="dropdownAccountOptions" class="prefix-link-icon prefix-icon-dot dropdown-menu dropdown-menu-clean dropdown-menu-invert dropdown-click-ignore p-0 mt--18 fs--15">
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

							</li>


							<!-- favourites button : visible : desktop only -->
							<li class="list-inline-item mx-1 dropdown d-none d-sm-block">

								<a href="account-favourites.html" aria-label="My Favourites" class="d-inline-block text-center text-dark">
									<span class="badge badge-light position-absolute end-0 mt--n5">2</span>
									<i class="fi fi-heart-empty fs--20"></i>
									<span class="d-block font-weight-light fs--14">favourites</span>
								</a>

							</li>


							<!-- cart -->
							<li class="list-inline-item mx-1 dropdown">
								
								<a href="#" aria-label="My Cart" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" class="d-inline-block text-center text-dark">
									<span class="badge badge-light position-absolute end-0 mt--n5">0</span>
									<i class="fi fi-cart-1 fs--20"></i>
									<span class="d-block font-weight-light fs--14">my cart</span>
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
												<img width="40" src="${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/thumb_330/barrett-ward-fYYUgvHYgpU-unsplash-min.jpg" alt="...">
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
												<img width="40" src="${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/thumb_330/hardik-sharma-CrPAvN29Nhs-unsplash-min.jpg" alt="...">
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
										<img src="${pageContext.request.contextPath }/resources/assets/images/logo/logo_dark.svg" width="110" height="70" alt="...">
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
										Home
									</a>

									<div aria-labelledby="mainNavHome" class="dropdown-menu dropdown-menu-clean dropdown-menu-hover">
									    <ul class="list-unstyled m-0 p-0">
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Home Landing</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="landing-1.html" class="dropdown-link">Landing 1</a></li>
									                <li class="dropdown-item"><a href="landing-2.html" class="dropdown-link">Landing 2</a></li>
									                <li class="dropdown-item"><a href="landing-3.html" class="dropdown-link">Landing 3</a></li>
									                <li class="dropdown-item"><a href="landing-4.html" class="dropdown-link">Landing 4</a></li>
									                <li class="dropdown-item"><a href="landing-5.html" class="dropdown-link">Landing 5</a></li>
									                <li class="dropdown-item"><a href="landing-6.html" class="dropdown-link">Landing 6</a></li>
									                <li class="dropdown-item">
									                	<a href="landing-7.html" class="dropdown-link">
									                		<span class="badge badge-secondary float-end">new</span>
									                		Landing 7 (SAAS)
									                	</a>
									                </li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Niche</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="niche.classifieds.html" class="dropdown-link">Classifieds</a></li>
									                <li class="dropdown-item"><a href="niche.realestate.html" class="dropdown-link">Real Estate</a></li>
									                <li class="dropdown-item"><a href="niche.restaurant.html" class="dropdown-link">Restaurant</a></li>
									                <li class="dropdown-item"><a href="niche.caffe.html" class="dropdown-link">Caffe</a></li>
									                <li class="dropdown-item"><a href="niche.lawyer.html" class="dropdown-link">Lawyer</a></li>
									                <li class="dropdown-item"><a href="niche.tattoo.html" class="dropdown-link">Tattoo</a></li>
									                <li class="dropdown-item"><a href="niche.hosting.html" class="dropdown-link">Hosting</a></li>
									                <li class="dropdown-item"><a href="#" class="dropdown-link disabled">More : Soon</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item"><a href="help-center-1-index.html" class="dropdown-link">Help Center 1</a></li>
									        <li class="dropdown-item"><a href="help-center-2-index.html" class="dropdown-link">Help Center 2</a></li>
									        <li class="dropdown-item"><a href="fullajax-index.html" class="dropdown-link" target="_blank">
									        	<span class="badge badge-secondary float-end">new</span>
									        	Full Ajax
									        </a></li>
									        <li class="dropdown-divider"></li>
									        <li class="dropdown-item"><a href="https://theme.stepofweb.com/Smarty/v2.3.1/HTML_BS4/start_v4.html" class="dropdown-link" target="_blank">Smarty v2.x <i class="fi fi-emoji-smile text-muted"></i> <span class="d-block text-muted pt--6 fs--13 font-weight-light">You also get previous <br> Smarty version. Eh?</span></a></li>
									    </ul>
									</div>

								</li>


								<!-- pages -->
								<li class="nav-item dropdown">

									<a href="#" id="mainNavPages" class="nav-link dropdown-toggle" 
										data-toggle="dropdown" 
										aria-haspopup="true" 
										aria-expanded="false">
										Pages
									</a>

									<div aria-labelledby="mainNavPages" class="dropdown-menu dropdown-menu-clean dropdown-menu-hover">
									    <ul class="list-unstyled m-0 p-0">
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">About</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="about-us-1.html" class="dropdown-link">About Us 1</a></li>
									                <li class="dropdown-item"><a href="about-us-2.html" class="dropdown-link">About Us 2</a></li>
									                <li class="dropdown-item"><a href="about-us-3.html" class="dropdown-link">About Us 3</a></li>
									                <li class="dropdown-item"><a href="about-us-4.html" class="dropdown-link">About Us 4</a></li>
									                <li class="dropdown-item"><a href="about-us-5.html" class="dropdown-link">About Us 5</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="about-me-1.html" class="dropdown-link">About Me 1</a></li>
									                <li class="dropdown-item"><a href="about-me-2.html" class="dropdown-link">About Me 2</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Services</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="services-1.html" class="dropdown-link">Services 1</a></li>
									                <li class="dropdown-item"><a href="services-2.html" class="dropdown-link">Services 2</a></li>
									                <li class="dropdown-item"><a href="services-3.html" class="dropdown-link">Services 3</a></li>
									                <li class="dropdown-item"><a href="services-4.html" class="dropdown-link">Services 4</a></li>
									                <li class="dropdown-item"><a href="services-5.html" class="dropdown-link">Services 5</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Contact</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="contact-1.html" class="dropdown-link">Contact 1</a></li>
									                <li class="dropdown-item"><a href="contact-2.html" class="dropdown-link">Contact 2</a></li>
									                <li class="dropdown-item"><a href="contact-3.html" class="dropdown-link">Contact 3</a></li>
									                <li class="dropdown-item"><a href="contact-4.html" class="dropdown-link">Contact 4</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Pricing</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="pricing-1.html" class="dropdown-link">Pricing 1</a></li>
									                <li class="dropdown-item"><a href="pricing-2.html" class="dropdown-link">Pricing 2</a></li>
									                <li class="dropdown-item"><a href="pricing-3.html" class="dropdown-link">Pricing 3</a></li>
									                <li class="dropdown-item"><a href="pricing-4.html" class="dropdown-link">Pricing 4</a></li>
									                <li class="dropdown-item"><a href="pricing-5.html" class="dropdown-link">Pricing 5</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">FAQ</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="faq-1.html" class="dropdown-link">FAQ 1</a></li>
									                <li class="dropdown-item"><a href="faq-2.html" class="dropdown-link">FAQ 2</a></li>
									                <li class="dropdown-item"><a href="faq-3.html" class="dropdown-link">FAQ 3</a></li>
									                <li class="dropdown-item"><a href="faq-4.html" class="dropdown-link">FAQ 4</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Team</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="team-1.html" class="dropdown-link">Team 1</a></li>
									                <li class="dropdown-item"><a href="team-2.html" class="dropdown-link">Team 2</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Account</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="account-full-signin-1.html" class="dropdown-link">Sign In/Up : Full 1</a></li>
									                <li class="dropdown-item"><a href="account-full-signin-2.html" class="dropdown-link">Sign In/Up : Full 2</a></li>
									                <li class="dropdown-item"><a href="account-onepage-signin.html" class="dropdown-link">Sign In/Up : Onepage</a></li>
									                <li class="dropdown-item"><a href="account-simple-signin.html" class="dropdown-link">Sign In/Up : Simple</a></li>
									                <li class="dropdown-item"><a href="account-modal-signin.html" class="dropdown-link">Sign In/Up : Modal</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="account-orders.html" class="dropdown-link">Account : Orders</a></li>
									                <li class="dropdown-item"><a href="account-favourites.html" class="dropdown-link">Account : Favourites</a></li>
									                <li class="dropdown-item"><a href="account-settings.html" class="dropdown-link">Account : Settings</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Clients / Career</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="clients.html" class="dropdown-link">Clients</a></li>
									                <li class="dropdown-item"><a href="career.html" class="dropdown-link">Career</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Portfolio</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="portfolio-columns-2.html" class="dropdown-link">2 Columns</a></li>
									                <li class="dropdown-item"><a href="portfolio-columns-3.html" class="dropdown-link">3 Columns</a></li>
									                <li class="dropdown-item"><a href="portfolio-columns-4.html" class="dropdown-link">4 Columns</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="portfolio-single-1.html" class="dropdown-link">Single Item 1</a></li>
									                <li class="dropdown-item"><a href="portfolio-single-2.html" class="dropdown-link">Single Item 2</a></li>
									                <li class="dropdown-item"><a href="portfolio-single-3.html" class="dropdown-link">Single Item 3</a></li>
									                <li class="dropdown-item"><a href="portfolio-single-4.html" class="dropdown-link">Single Item 4</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Search Result</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="search-result-1.html" class="dropdown-link">Search Result 1</a></li>
									                <li class="dropdown-item"><a href="search-result-2.html" class="dropdown-link">Search Result 2</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item">
									        	<a href="forum-index.html" class="dropdown-link">Forum / Comunity</a>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Utility</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-up dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="404-1.html" class="dropdown-link">Error 1</a></li>
									                <li class="dropdown-item"><a href="404-2.html" class="dropdown-link">Error 2</a></li>
									                <li class="dropdown-item"><a href="404-3.html" class="dropdown-link">Error 3</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="maintenance-1.html" class="dropdown-link">Maintenance 1</a></li>
									                <li class="dropdown-item"><a href="maintenance-2.html" class="dropdown-link">Maintenance 2</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="comingsoon-1.html" class="dropdown-link">Coming Soon 1</a></li>
									                <li class="dropdown-item"><a href="comingsoon-2.html" class="dropdown-link">Coming Soon 2</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="page-cookie.html" class="dropdown-link">GDPR Page &amp; Cookie Window</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-divider"></li>
									        <li class="dropdown-item"><a href="__junkyard.html" class="dropdown-link text-gray-500" target="smarty">Smarty Junkyard</a></li>
									    </ul>
									</div>

								</li>


								<!-- features -->
								<li class="nav-item dropdown">

									<a href="#" id="mainNavFeatures" class="nav-link dropdown-toggle" 
										data-toggle="dropdown" 
										aria-haspopup="true" 
										aria-expanded="false">
										Features
									</a>

									<div aria-labelledby="mainNavFeatures" class="dropdown-menu dropdown-menu-clean dropdown-menu-hover">
									    <ul class="list-unstyled m-0 p-0">
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Header</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item dropdown"><a href="#" class="dropdown-link font-weight-bold" data-toggle="dropdown">Variants</a>
									                    <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                        <li class="dropdown-item"><a href="header-variant-1.html" class="dropdown-link">Header : Variant : 1</a></li>
									                        <li class="dropdown-item"><a href="header-variant-2.html" class="dropdown-link">Header : Variant : 2</a></li>
									                        <li class="dropdown-item"><a href="header-variant-3.html" class="dropdown-link">Header : Variant : 3</a></li>
									                    </ul>
									                </li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="header-option-light.html" class="dropdown-link">Header : Light <small class="text-muted">(default)</small></a></li>
									                <li class="dropdown-item"><a href="header-option-dark.html" class="dropdown-link">Header : Dark</a></li>
									                <li class="dropdown-item"><a href="header-option-color.html" class="dropdown-link">Header : Color</a></li>
									                <li class="dropdown-item"><a href="header-option-transparent.html" class="dropdown-link">Header : Transparent</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="header-option-centered.html" class="dropdown-link">Header : Centered</a></li>
									                <li class="dropdown-item"><a href="header-option-bottom.html" class="dropdown-link">Header : Bottom</a></li>
									                <li class="dropdown-item"><a href="header-option-floating.html" class="dropdown-link">Header : Floating</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="header-option-fixed.html" class="dropdown-link">Header : Fixed</a></li>
									                <li class="dropdown-item"><a href="header-option-reveal.html" class="dropdown-link">Header : Reveal on Scroll</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="header-option-ajax-search-json.html" class="dropdown-link">Ajax Search : Json</a></li>
									                <li class="dropdown-item"><a href="header-option-ajax-search-html.html" class="dropdown-link">Ajax Search : Html</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Footer</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item dropdown"><a href="#" class="dropdown-link font-weight-bold" data-toggle="dropdown">Variants</a>
									                    <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                        <li class="dropdown-item"><a href="footer-variant-1.html#footer" class="dropdown-link">Footer : Variant : 1</a></li>
									                        <li class="dropdown-item"><a href="footer-variant-2.html#footer" class="dropdown-link">Footer : Variant : 2</a></li>
									                        <li class="dropdown-item"><a href="footer-variant-3.html#footer" class="dropdown-link">Footer : Variant : 3</a></li>
									                        <li class="dropdown-item"><a href="footer-variant-4.html#footer" class="dropdown-link">Footer : Variant : 4</a></li>
									                        <li class="dropdown-item"><a href="footer-variant-5.html#footer" class="dropdown-link">Footer : Variant : 5</a></li>
									                        <li class="dropdown-item"><a href="footer-variant-6.html#footer" class="dropdown-link">Footer : Variant : 6</a></li>
									                    </ul>
									                </li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="footer-option-light.html" class="dropdown-link">Footer : Light</a></li>
									                <li class="dropdown-item"><a href="footer-option-dark.html" class="dropdown-link">Footer : Dark <small class="text-muted">(default)</small></a></li>
									                <li class="dropdown-item"><a href="footer-option-image.html" class="dropdown-link">Footer : Image</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Sliders</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="slider-swiper.html" class="dropdown-link">Swiper Slider</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Page Title</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="page-title-classic.html" class="dropdown-link">Page Title : Classic</a></li>
									                <li class="dropdown-item"><a href="page-title-alternate.html" class="dropdown-link">Page Title : Alternate</a></li>
									                <li class="dropdown-item"><a href="page-title-color.html" class="dropdown-link">Page Title : Color + Nav</a></li>
									                <li class="dropdown-item"><a href="page-title-clean.html" class="dropdown-link">Page Title : Clean</a></li>
									                <li class="dropdown-item"><a href="page-title-parallax-1.html" class="dropdown-link">Page Title : Parallax 1</a></li>
									                <li class="dropdown-item"><a href="page-title-parallax-2.html" class="dropdown-link">Page Title : Parallax 2</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">Sidebar</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="sidebar-float-dark.html" class="dropdown-link">Sidebar : Float : Dark</a></li>
									                <li class="dropdown-item"><a href="sidebar-float-light.html" class="dropdown-link">Sidebar : Float : Light</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><a href="sidebar-static-dark.html" class="dropdown-link">Sidebar : Static : Dark</a></li>
									                <li class="dropdown-item"><a href="sidebar-static-light.html" class="dropdown-link">Sidebar : Static : Light</a></li>
									                <li class="dropdown-divider"></li>
									                <li class="dropdown-item"><span class="d-block text-muted py-2 px-4 fs--13 font-weight-bold">Same as admin</span></li>
									                <li class="dropdown-item"><a href="sidebar-float-admin-color.html" class="dropdown-link">Sidebar : Float</a></li>
									                <li class="dropdown-item"><a href="sidebar-static-admin-color.html" class="dropdown-link">Sidebar : Static</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-divider"></li>
									        <li class="dropdown-item"><a href="layout-boxed-1.html" class="dropdown-link">Boxed Layout</a></li>
									        <li class="dropdown-item"><a href="layout-boxed-0.html" class="dropdown-link">Boxed + Header Over</a></li>
									        <li class="dropdown-item"><a href="layout-boxed-2.html" class="dropdown-link">Boxed + Background</a></li>
									    </ul>
									</div>

								</li>


								<!-- shop + blog -->
								<li class="nav-item dropdown dropdown-mega">

									<a href="#" id="mainNavShop" class="nav-link dropdown-toggle" 
										data-toggle="dropdown" 
										aria-haspopup="true" 
										aria-expanded="false">
										Shop &amp; Blog
									</a>

									<div aria-labelledby="mainNavShop" class="dropdown-menu dropdown-menu-hover dropdown-menu-clean">
									    <!-- Blog and Shop : Megamenu -->
									    <ul class="list-unstyled m-0 p-0">
									        <li class="dropdown-item bg-transparent">

									            <div class="row col-border-md">

									                <div class="col-12 col-md-3">

									                    <h3 class="h6 text-muted text-uppercase fs--14 mb-3">Shop Homepage</h3>
									                    <ul class="prefix-link-icon prefix-icon-dot">

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-index-1.html">Shop Home 1</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-index-2.html">Shop Home 2</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-index-3.html">Shop Home 3</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-index-4.html">Shop Home 4</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-index-christmas.html">
									                            	<span class="badge badge-secondary float-end">new</span>
									                            	Shop : Christmas
									                            </a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link disabled" href="#!">More : Soon</a>
									                        </li>

									                    </ul>

									                </div>

									                <div class="col-12 col-md-3">

									                    <h3 class="h6 text-muted text-uppercase fs--14 mb-3">Shop Category</h3>
									                    <ul class="prefix-link-icon prefix-icon-dot">

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-category-1.html">Category 1</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-category-2.html">Category 2</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-category-3.html">Category 3</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-category-4.html">Category 4</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-category-lazyload.html">Using Lazyload</a>
									                        </li>

									                    </ul>

									                </div>

									                <div class="col-12 col-md-3">

									                    <h3 class="h6 text-muted text-uppercase fs--14 mb-3">Shop Cart</h3>
									                    <ul class="prefix-link-icon prefix-icon-dot">

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-cart-1.html">Cart</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-cart-2.html">Cart Empty</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-checkout-success.html">Checkout Success</a>
									                        </li>

									                    </ul>

									                    <h3 class="h6 text-muted text-uppercase fs--14 mb-3 mt-5">Shop Product</h3>
									                    <ul class="prefix-link-icon prefix-icon-dot">

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-product-1.html">Product Page 1</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-product-2.html">Product Page 2</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-product-3.html">Product Page 3</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-product-4.html">Product Page 4</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="shop-page-product-5.html">Product Page 5</a>
									                        </li>

									                    </ul>

									                </div>

									                <div class="col-12 col-md-3">

									                    <h3 class="h6 text-muted text-uppercase fs--14 mb-3">Blog Pages</h3>
									                    <ul class="prefix-link-icon prefix-icon-line">

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="blog-page-sidebar.html">With Sidebar</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="blog-page-sidebar-no.html">Without Sidebar</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="blog-page-single-sidebar.html">Single With Sidebar</a>
									                        </li>

									                        <li class="dropdown-item">
									                            <a class="dropdown-link" href="blog-page-single-sidebar-no.html">Single Without Sidebar</a>
									                        </li>

									                    </ul>

									                    <div class="mt-4">
									                        <img width="600" height="600" class="img-fluid" src="demo.files/svg/artworks/undraw_wireframing_nxyi.svg" alt="...">
									                    </div>

									                </div>

									            </div>

									        </li>
									    </ul>
									</div>

								</li>


								<!-- documentation -->
								<li class="nav-item dropdown">

									<a href="#" id="mainNavDocumentation" class="nav-link dropdown-toggle nav-link-caret-hide" 
										data-toggle="dropdown" 
										aria-haspopup="true" 
										aria-expanded="false">
										<span>Documentation</span>
									</a>

									<div aria-labelledby="mainNavDocumentation" class="dropdown-menu dropdown-menu-clean dropdown-menu-hover w--300">										
										<!-- Documentation : no container, direct links! -->
										<a href="documentation/index.html" class="dropdown-item transition-hover-left clearfix text-primary pt-4 pb-4 fs--14">

											<span class="float-start w--50 mr--20">
												<img width="50" height="50" class="img-fluid" src="demo.files/svg/icons/menu_doc_1.svg" alt="...">
											</span>

											DOCUMENTATION
											<span class="d-block text-muted text-truncate fs--14">
												Don't get stuck!
											</span>
										</a>

										<div class="dropdown-divider"></div>
										
										<a href="documentation/changelog.html" class="dropdown-item transition-hover-left clearfix text-primary pt-4 pb-4 fs--14">
											
											<span class="badge badge-secondary badge-soft position-absolute absolute-top right-0 ml-2 mr-2">v3.x</span>

											<span class="float-start w--50 mr--20">
												<img width="50" height="50" class="img-fluid" src="demo.files/svg/icons/menu_doc_2.svg" alt="...">
											</span>

											CHANGELOG
											<span class="d-block text-muted text-truncate fs--14">
												Smarty Reborn Changes
											</span>
										</a>
									</div>

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
						<div class="h-100 swiper-slide d-middle overlay-dark overlay-opacity-5 bg-cover text-decoration-none text-white" style="background-image:url('${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/erik-mclean-cngWBRj6bfw-unsplash.jpg')">
							<div class="position-absolute container z-index-10 text-white text-center" data-aos="fade-in" data-aos-delay="150" data-aos-offset="0">

								<h1 class="display-3 h1-xs mb-4 font-weight-medium" data-swiper-parallax="-300">
									Waiting for <span class="text-danger">You</span>!
								</h1>

								<div data-swiper-parallax="-100"><!-- parallax directly on button will cancel hover fade -->
									<a href="#!" class="btn btn-lg btn-outline-light shadow-none transition-hover-top">
										Take a peek
									</a>
								</div>

							</div>
						</div>
						<!-- /slide 1 -->


						<!-- slide 2 -->
						<a href="#!" class="h-100 swiper-slide d-middle overlay-dark overlay-opacity-5 bg-cover text-decoration-none text-white lazy" style="background-image:url('${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/matias-ilizarbe-HRYENP2Hfyc-unsplash-min.jpg')">
							<div class="position-relative container z-index-10 text-white text-center" data-aos="fade-in" data-aos-delay="150" data-aos-offset="0">

								<h2 class="display-3 h1-xs mb-4 font-weight-medium" data-swiper-parallax="-300">
									Ready to explore?
								</h2>

								<div data-swiper-parallax="-100"><!-- parallax directly on button will cancel hover fade -->
									<span class="btn btn-lg btn-outline-light shadow-none transition-hover-top">
										Click to start
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
								<img width="60" height="60" src="demo.files/svg/ecommerce/money_bag.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									Money Back
								</h2>

								<p class="m-0">
									30-days money back
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bt-0 br-0 bb-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="demo.files/svg/ecommerce/free-delivery-truck.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									Free Shipping
								</h2>

								<p class="m-0">
									Shipping is on us
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bl-0 br-0 bb-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="demo.files/svg/ecommerce/24-hours-phone-service.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									Free Support
								</h2>

								<p class="m-0">
									24/24 available
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bb-0 br-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="demo.files/svg/ecommerce/handshake.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									Best Deal
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
							<b>30% OFF</b> this week
						</h2>
						
						<p class="lead max-w-600 mx-auto">
							Explore our fresh and new arrivals, up to 30% for the entire week
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
									style="background-image:url('demo.files/images/unsplash/products/sneakers/joshua-hanson-FCcNHcylc9o-unsplash.jpg')">

									<div class="card-body p-4">

										<!-- 
											typed plugin 
											/documentation/plugins-vendor-typed.html
										-->
										<span class="typed text-warning h5" 
												data-typed-string="Just Arrived|Special Edition|Limited Edition"
												data-typed-speed-forward="40" 
												data-typed-speed-back="30" 
												data-typed-back-delay="700" 
												data-typed-loop-times="infinite" 
												data-typed-smart-backspace="true" 
												data-typed-shuffle="false" 
												data-typed-cursor="|">&nbsp;</span>


										<h2 class="d-block">
											Max Air Championship
										</h2>

										<hr class="border-light opacity-2">

										<!-- price -->
										<span class="h5 d-block text-white font-weight-medium">
											<del class="text-white">$220<sup>00</sup></del> 
											$173<sup>00</sup>
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
											data-timer-countdown-from="09/25/2024 16:00:00">

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
										<img class="img-fluid bg-suprime opacity-9" src="${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/sneakers/thumb_330/gregorius-maximillian-CtTBJ2ew4sw-unsplash-min.jpg" alt="..."> 
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
										<img class="img-fluid bg-suprime opacity-9" src="${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/sneakers/thumb_330/mutzii-fmDCrqPQKog-unsplash-min.jpg" alt="..."> 
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
										<img class="img-fluid bg-suprime opacity-9" src="${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/sneakers/thumb_330/nikita-kachanovsky-ad_0wMHtvlU-unsplash-min.jpg" alt="..."> 
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
										<img class="img-fluid bg-suprime opacity-9" src="${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/sneakers/thumb_330/irene-kredenets-dwKiHoqqxk8-unsplash-min.jpg" alt="..."> 
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
										<img class="img-fluid bg-suprime opacity-9" src="${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/sneakers/thumb_330/masaaki-komori-1GiUkfbcXis-unsplash-min.jpg" alt="..."> 
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
										<img class="img-fluid bg-suprime opacity-9" src="${pageContext.request.contextPath }/resources/demo.files/images/unsplash/products/sneakers/thumb_330/sarah-dorweiler-gUPiTDBdRe4-unsplash-min.jpg" alt="..."> 
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
							<h3 class="m-0">Subscribe and follow the <span class="text-danger">best deals</span>!</h3>
							<p class="m-0">Never miss a best deal, get 'em all into your own email address!</p>
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
							Explore our <b>top brands</b>
						</h2>

						<p class="lead max-w-600 mx-auto">
							Search your favourites by brand, everything one click away
						</p>
					</div>

					<!-- BRANDS : GRID : LAZYLOAD -->
					<div class="clearfix mb-3 mt-5 p-3 bg-white shadow-md rounded overflow-hidden">
						<div class="bg-white overflow-hidden"><!-- negative classes - hide bordered edges -->
							
							<div class="row row-grid mt--n1 mb--n1">

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/adidas.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/xing.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/chanel.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/jordan.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/levis.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/lacoste.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/hm.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/american-apparel.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/nike-4.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

								<div class="h--150 col-6 col-md-5th d-flex align-items-center text-center">
									<a href="#!" class="w-100">
										<img class="max-h-60 img-fluid mx-3 max-w-180 lazy" data-src="demo.files/svg/brands/bike.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="...">
									</a>
								</div>

							</div>

						</div>
					</div>
					<!-- BRANDS : GRID : LAZYLOAD -->


					<div class="text-center pt-5">

						<!-- view all button -->
						<a href="#!" class="btn btn-sm btn-secondary btn-soft btn-soft">your favourite brands</a>

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
								<img width="60" height="60" src="demo.files/svg/ecommerce/money_bag.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									Money Back
								</h2>

								<p class="m-0">
									30-days money back
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bt-0 br-0 bb-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="demo.files/svg/ecommerce/free-delivery-truck.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									Free Shipping
								</h2>

								<p class="m-0">
									Shipping is on us
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bl-0 br-0 bb-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="demo.files/svg/ecommerce/24-hours-phone-service.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									Free Support
								</h2>

								<p class="m-0">
									24/24 available
								</p>

							</div>

						</div>

						<div class="col-6 col-lg-3 p--15 d-flex d-block-xs text-center-xs border-dashed border-light bw--1 bb-0 br-0 b--0-lg">

							<div class="pl--10 pr--20 fs--50 line-height-1 pt--6">
								<img width="60" height="60" src="demo.files/svg/ecommerce/handshake.svg" alt="...">
							</div>

							<div class="my-2">
								
								<h2 class="font-weight-medium fs--20 mb-0">
									Best Deal
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
											Orders
										</span>
									</button>

									<!-- desktop only -->
									<h3 class="h5 py-3 m-0 d-none d-lg-block">
										Orders
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
											Explore
										</span>
									</button>

									<!-- desktop only -->
									<h3 class="h5 py-3 m-0 d-none d-lg-block">
										Explore
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
											Support
										</span>
										
									</button>

									<!-- desktop only -->
									<h3 class="h5 py-3 m-0 d-none d-lg-block">
										Support
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
								Follow us
							</h5>

							<form novalidate class="bs-validate" method="post" action="#">

								<div class="input-group mb-3">

									<input required type="email" name="subscribe_email" value="" class="form-control" placeholder="email address" aria-label="email address">
									
									<div class="input-group-append">
										<button class="btn btn-danger btn-soft">Subscribe</button>
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
							<img src="${pageContext.request.contextPath }/resources/assets/images/logo/logo_dark.svg" width="110" height="70" alt="...">
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
									<img width="38" height="24" class="lazy" data-src="${pageContext.request.contextPath }/resources/assets/images/credit_card/visa.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="visa credit card icon">
								</li> 

								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${pageContext.request.contextPath }/resources/assets/images/credit_card/mastercard.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="mastercard credit card icon">
								</li> 

								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${pageContext.request.contextPath }/resources/assets/images/credit_card/discover.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="discover credit card icon">
								</li>

								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${pageContext.request.contextPath }/resources/assets/images/credit_card/amazon.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="amazon credit card icon">
								</li>
								
								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${pageContext.request.contextPath }/resources/assets/images/credit_card/paypal.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="paypal credit card icon">
								</li>

								<li class="list-inline-item m-0"> 
									<img width="38" height="24" class="lazy" data-src="${pageContext.request.contextPath }/resources/assets/images/credit_card/skrill.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="skrill credit card icon">
								</li>

								<!-- more vendors on assets/images/credit_card/ -->

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
		    data-href="${pageContext.request.contextPath }/resources/_ajax/modal_shop.html" 
		    data-ajax-modal-delay="3000" 
		    data-ajax-modal-size="modal-lg" 
		    data-ajax-modal-centered="true" 
		    data-ajax-modal-backdrop=""></div>


		<script src="<c:url value="/resources/assets/js/core.min.js"/>"></script>
		
	</body>
</html>