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


	<body>

		<div id="wrapper">

		

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