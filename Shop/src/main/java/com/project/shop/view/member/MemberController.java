package com.project.shop.view.member;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.project.shop.member.MemberService;
import com.project.shop.member.MemberVO;

@Controller("memberController")
@RequestMapping(value="/member")
public class MemberController {
//	@Autowired
//	private MemberService memberService;
//	@Autowired
//	private MemberVO memberVO;
	
//	@RequestMapping(value="/login.do" ,method = RequestMethod.POST)
	@RequestMapping(value="/login.do")
	public ModelAndView login(@RequestParam Map<String, String> loginMap,
			                  HttpServletRequest request, HttpServletResponse response) throws Exception {
		ModelAndView mav = new ModelAndView();
//		 memberVO=memberService.login(loginMap);
//		if(memberVO!= null && memberVO.getMember_id()!=null){
//			HttpSession session=request.getSession();
//			session=request.getSession();
//			session.setAttribute("isLogOn", true);
//			session.setAttribute("memberInfo",memberVO);
//			
//			String action=(String)session.getAttribute("action");
//			if(action!=null && action.equals("/order/orderEachGoods.do")){
//				mav.setViewName("forward:"+action);
//			}else{
//				mav.setViewName("redirect:/main/main.do");	
//			}
			
//			
//			
//		}else{
//			String message="아이디나  비밀번호가 틀립니다. 다시 로그인해주세요";
//			mav.addObject("message", message);
//			mav.setViewName("/member/loginForm");
//		}
		mav.setViewName("/member/loginForm");
		return mav;
	}
}