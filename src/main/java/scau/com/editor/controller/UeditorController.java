package scau.com.editor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by 钟锐锋 on 2017/4/18.
 */
@Controller
@RequestMapping("/ueditor")
public class UeditorController extends BaseController{
    @Autowired
    HttpServletRequest request;

    /**
     * 链接跳转
     * @return
     */
    @ResponseBody
    @RequestMapping("/urlPath/**/")
    public ModelAndView urlPath(){
        String requestURI=request.getRequestURI();
        //requestURI1=/ueditor/urlPath/ueditorDemo
        System.out.println("requestURI1= "+requestURI);
        requestURI=requestURI.substring("/ueditor/urlPath".length());
        //requestURI2=/ueditorDemo
        System.out.println("requestURI2= "+requestURI);
        ModelAndView modelAndView=new ModelAndView("/"+requestURI);
        ///WEB-INF/views/~.html
        return modelAndView;
    }
}
