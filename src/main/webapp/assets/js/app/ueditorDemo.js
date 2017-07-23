define(['ajaxPackage','ueditor'],function(editorAjax){
    /*var ue = UE.getEditor('container');
    //设置编辑器的内容
    //ue.setContent('hello');
    //获取html内容，返回: <p>hello</p>
    //var html = ue.getContent();
    //获取纯文本内容，返回: hello
    //var txt = ue.getContentTxt();
    alert("txt");
    $.ajax({ 
	    type: "GET", 	
	    url: "http://127.0.0.1:8080/ajaxdemo/serverjson2.php?txt =" ,
	    dataType: "json",
	    success: function(data) {
		if (data.success) { 
			$("#searchResult").html(data.msg);
		} else {
			$("#searchResult").html("出现错误：" + data.msg);
		}  
	    },
	    error: function(jqXHR){     
	        alert("发生错误：" + jqXHR.status);  
	   },     
	});*/
	var ue = UE.getEditor('container');
	//var ue = UE.getContent();
	//对编辑器的操作最好在编辑器ready之后再做
	ue.ready(function() {	});
	    //设置编辑器的内容
	    //ue.setContent('hello');
	  
	    
	    //点击保存提交数据到后台
	    $("#save").click(function(){ 
	    	  //获取html内容，返回: <p>hello</p>
		    var html = ue.getContent();
		    //alert("html= "+html);
		    //获取纯文本内容，返回: hello
		    var txt = ue.getContentTxt();
	    	alert("html= "+html);	
	    $.ajax({ 
		    type: "GET", 	
		    url: "ceshi.action?html ="+html,
		    dataType: "json",
		    success: function(data) {
			/*if (data.success) { 
				$("#searchResult").html(data.msg);
			} else {
				$("#searchResult").html("出现错误：" + data.msg);
			}  */
		    },
		    error: function(jqXHR){     
		        alert("发生错误：" + jqXHR.status);  
		   },     
		});
	    
	    
	    

	});
	
	
	
})