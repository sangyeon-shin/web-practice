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
  <link rel="apple-touch-icon" href="demo.files/logo/icon_512x512.png">

  <link rel="manifest" href="${contextPath}/resources/assets/images/manifest/manifest.json">
  <meta name="theme-color" content="#377dff">

  <!--font-->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet">
</head>

	<!--

		Available Body Classes
			.layout-boxed 					- boxed layout (ignored if any .header-* class is present)

			.header-scroll-reveal  			- header : hide on scroll down and reveal on scroll up
			.header-sticky  				- header : always visible on top
			.header-over  					- header : over slider|parallax|image (next section must contain a large image, else will be indistinguishable)

				Possible header combinations:
					.header-over + .header-scroll-reveal
					.header-over + .header-sticky
						* NOTE: if .header-sticky + .header-scroll-reveal are both used, .header-scroll-reveal is ignored


			.bg-cover .bg-fixed 			- both classes used with .layout-boxed to set a background image via style="background-image:url(...)"
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
								data-related-url="_ajax/search_suggest_related.json" 
								data-suggest-url="_ajax/search_suggest_input.json" 
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

								<a href="signin.html" aria-label="My Favourites" class="d-inline-block text-center text-dark">
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
												<img width="40" src="demo.files/images/unsplash/products/thumb_330/barrett-ward-fYYUgvHYgpU-unsplash-min.jpg" alt="...">
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
												<img width="40" src="demo.files/images/unsplash/products/thumb_330/hardik-sharma-CrPAvN29Nhs-unsplash-min.jpg" alt="...">
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
									                <li class="dropdown-item"><a href="landing-1.html" class="dropdown-link">채소 1</a></li>
									                <li class="dropdown-item"><a href="landing-2.html" class="dropdown-link">채소 2</a></li>
									                <li class="dropdown-item"><a href="landing-3.html" class="dropdown-link">채소 3</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">육류</a>
									            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
									                <li class="dropdown-item"><a href="niche.classifieds.html" class="dropdown-link">육류1</a></li>
									                <li class="dropdown-item"><a href="niche.realestate.html" class="dropdown-link">육류2</a></li>
									                <li class="dropdown-item"><a href="niche.restaurant.html" class="dropdown-link">육류3</a></li>
									            </ul>
									        </li>
									        <li class="dropdown-item dropdown"><a href="#" class="dropdown-link" data-toggle="dropdown">베이커리</a>
                            <ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">
                                <li class="dropdown-item"><a href="niche.classifieds.html" class="dropdown-link">베이커리1</a></li>
                                <li class="dropdown-item"><a href="niche.realestate.html" class="dropdown-link">베이커리2</a></li>
                                <li class="dropdown-item"><a href="niche.restaurant.html" class="dropdown-link">베이커리3</a></li>
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


		

			<!-- PAGE TITLE -->
			<section class="bg-light p-0">
				<div class="container py-5">

					<h1 class="h3">
						로그인
					</h1>

					<nav aria-label="breadcrumb">
						<ol class="breadcrumb fs--14">
							<li class="breadcrumb-item"><a href="#!">Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">Account</li>
						</ol>
					</nav>

				</div>
			</section>
			<!-- /PAGE TITLE -->




			<!-- FORM -->
			<section>
				<div class="container">


					<div class="row">

						<div class="col-12 col-sm-8 col-md-8 col-lg-6 offset-sm-2 offset-md-2 offset-lg-3">


							<!-- optional class: .form-control-pill -->
							<form novalidate action="#" method="POST" class="bs-validate p-5 rounded shadow-xs">


								<!--
								<p class="text-danger">
									Ups! Please check again
								</p>
								-->


								<div class="form-label-group mb-3">
									<input required placeholder="id" id="account_id" name="account_id" type="text" class="form-control">
									<label for="account_email">아이디</label>
								</div>

								<div class="input-group-over">
									<div class="form-label-group mb-3">
										<input required placeholder="Password" id="account_password" name="account_password" type="password" class="form-control">
										<label for="account_password">비밀번호</label>
									</div>
                  
                  <a href="signin-password.html" class="btn fs--12">
                    비밀번호 찾기
                  </a>
                </div>



								<div class="row">

									<div class="col-12 col-md-6 mt-4">
										<button type="submit" class="btn btn-primary btn-block">
											로그인
										</button>
                  </div>
                  
                  <!-- <div class="col-12 col-md-6 mt-4">
										<button type="button" class="btn btn-block">
											회원가입
										</button>
                  </div> -->
                  
                  <div class="col-12 col-md-6 mt-4">
                    <a href="signup.html" class="btn btn-block">
                      회원가입
                    </a>
                  </div>

									<!-- <div class="col-12 col-md-6 mt-4 text-align-end text-center-xs">
										<a href="signup.html" class="btn px-0">
											Don't have an account yet?
										</a>
									</div> -->

								</div>

							</form>

						</div>

					</div>

				</div>
			</section>
			<!-- /FORM -->




			<!-- CONNECT WITH -->
			<section class="py-5 border-top">
				<div class="container">
					<div class="row text-center-xs">

						<div class="col">
							<h3 class="m-0 font-weight-light">다른 방법으로 로그인하기</h3>
							<p class="m-0">Alternative ways to sign in!</p>
						</div>
						
						<div class="col-12 mt-4 d-block d-md-none"><!-- mobile spacer --></div>

						<div class="col-12 col-md-6 col-lg-4 text-align-end">

							<div class="row">

								<div class="col-6">
									<a href="#" class="btn btn-sm btn-block btn-facebook transition-hover-top mt-1" rel="noopener">
										<i class="fi fi-social-facebook"></i>
										facebook
									</a>
								</div>

								<div class="col-6">
									<a href="#" class="btn btn-sm btn-block bg-googleplay transition-hover-top mt-1 text-white" rel="noopener">
										<i>G</i>
										google
									</a>
								</div>

							</div>

						</div>

					</div>
				</div>
			</section>
			<!-- /CONNECT WITH -->



			<!-- Footer -->
			<footer id="footer" class="footer-dark">
				<div class="container">

					<div class="row">
						
						<div class="bg-distinct col-12 col-md-6 col-lg-4 text-center p-0 py-5">

							<div class="footer-svg-shape position-absolute absolute-top z-index-2 mt--n70 w-100 overflow-hidden pt--5">
								<svg viewBox="0 0 1440 28" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
									<path d="M0 28H1440C1440 28 1154 3.21961e-10 720 1.30487e-09C286 2.28777e-09 0 28 0 28Z"></path>
								</svg>
							</div>

							<form method="post" action="#subscribe_url" class="px-4"> 

								<input type="hidden" name="action" value="subscribe" tabindex="-1"> 
								
								<p id="btnAriaFooterFormTitle" class="text-muted">
									Claim your candy now!
								</p>
								
									
								<div class="input-group-over input-group-pill mb-4"> 
									
									<input required class="form-control b-0" name="subscriber_email" type="email" value="" placeholder="email address..." aria-label="email address...">
									
									<button type="submit" class="btn bg-transparent shadow-none" aria-label="subscribe" aria-labelledby="btnAriaFooterFormTitle"> 
										<i class="fi fi-send fs--18"></i> 
									</button>

								</div>


							</form>

							<div class="mt--12"> 

								<a href="#!" class="btn btn-sm btn-facebook transition-hover-top mb-2 rounded-circle" rel="noopener" aria-label="facebook page">
									<i class="fi fi-social-facebook"></i> 
								</a>

								<a href="#!" class="btn btn-sm btn-twitter transition-hover-top mb-2 rounded-circle" rel="noopener" aria-label="twitter page">
									<i class="fi fi-social-twitter"></i> 
								</a>

								<a href="#!" class="btn btn-sm btn-linkedin transition-hover-top mb-2 rounded-circle" rel="noopener" aria-label="linkedin page">
									<i class="fi fi-social-linkedin"></i> 
								</a>

								<a href="#!" class="btn btn-sm btn-youtube transition-hover-top mb-2 rounded-circle" rel="noopener" aria-label="youtube page">
									<i class="fi fi-social-youtube"></i> 
								</a>

							</div>

						</div>


						<div class="col-12 col-md-6 col-lg-8 py-5 fs--15 text-center-xs">

							<h3 class="fs--15 text-muted">SPY US! WE'VE GOT SECRETS!</h3>

							<ul class="mt--30 mb-0 breadcrumb bg-transparent p-0 block-xs"> 
								<li class="breadcrumb-item"><a href="contact-1.html">Contact</a></li> 
								<li class="breadcrumb-item"><a href="about-us-1.html">About Us</a></li> 
								<li class="breadcrumb-item"><a href="page-terms-and-conditions.html">Terms &amp; Conditions</a></li> 
								<li class="breadcrumb-item"><a href="page-cookie.html">GDPR &amp; Cookies</a></li> 
							</ul>

							<div class="text-muted mt--30">
								<p>
									Frontend? Admin? What if you don't need anymore to learn and work with two different templates on your projects? 
									<b>What would you do if time really matter?</b> Both: frontend and admin uses exactly the same core and all elements can be used in both sides because... actually there are no such thing "two sides" with Smarty!
								</p>
							</div>

						</div>

					</div>

				</div>

				<div class="bg-distinct py-3 clearfix">

					<div class="container clearfix font-weight-light text-center-xs">

						<div class="fs--14 py-2 float-start float-none-xs m-0-xs">
							&copy; My Company Inc.
						</div>

						<ul class="list-inline mb-0 mt-2 float-end float-none-xs m-0-xs"> 
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

			</footer>
			<!-- /Footer -->


		</div><!-- /#wrapper -->

		<script src="${contextPath}/resources/assets/js/core.min.js"></script>
		
	</body>
</html>