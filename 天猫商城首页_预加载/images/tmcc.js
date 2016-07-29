// JavaScript Document
window.onload=function()
{
	var oDiv=document.getElementById('cont');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi_ul=oUl.getElementsByTagName('li');
	var oOl=oDiv.getElementsByTagName('ol')[0];
	var aLi_ol=oOl.getElementsByTagName('li');
	var num = 0;
	var timert = null;
	
	for(var i=0;i<aLi_ol.length;i++){
		aLi_ol[i].index = i;
		aLi_ol[i].onmouseover = function(){
			for(var i=0;i<aLi_ol.length;i++){
				aLi_ol[i].className = '';
				startMove(aLi_ul[i],{opacity:0});
				aLi_ul[i].style.zIndex = 1;
			}
			
			this.className = 'active';
			aLi_ul[this.index].style.zIndex = 2;		
			startMove(aLi_ul[this.index],{opacity:100});
			num = this.index;			
			
		};
		
	
	}
	oDiv.onmouseover = function(){
		clearInterval(timert);
	};
	oDiv.onmouseout = function(){
		timert = setInterval(toChanges,2400);
	};
	
	timert = setInterval(toChanges,2400);
	function toChanges(){
		if(num == aLi_ol.length-1){
			num = 0;
		}
		else{
			num++;
		}
		
		for(var i=0;i<aLi_ol.length;i++){
			aLi_ol[i].className = '';
			startMove(aLi_ul[i],{opacity:0});
			aLi_ul[i].style.zIndex = 1;
		}
		
		aLi_ol[num].className = 'active';
		aLi_ul[num].style.zIndex = 2;		
		startMove(aLi_ul[num],{opacity:100});
		
	}
	var oCon=document.getElementById('content');
	var oCon_aLi=oCon.children;
	var oSort=document.getElementById('sort_bg');
	for(var i=0;i<oCon_aLi.length;i++)
	{
		var a_aLi=oCon_aLi[i].getElementsByTagName('div')[0]
		if(a_aLi)
		{
			oCon_aLi[i].onmouseover=function()
			{
				addClass(this,"active");
				var a_Div=this.getElementsByTagName('div')[0];
				a_Div.style.display='block';
			};

			oCon_aLi[i].onmouseout=function()
			{
				removeClass(this,"active");
				var a_Div=this.getElementsByTagName('div')[0];
				a_Div.style.display='none';
			};
		}
	}
		oCon_aLi[oCon_aLi.length-1].onmouseover=function()
		{
			addClass(this,"active");
			oSort.style.display="block";
		}

		oCon_aLi[oCon_aLi.length-1].onmouseout=function()
		{
			removeClass(this,"active");
			oSort.style.display="none";
		}

		oSort.onmouseover=function()
		{
			addClass(oCon_aLi[oCon_aLi.length-1],"active");
			oSort.style.display="block";
		}
		oSort.onmouseout=function()
		{
			removeClass(oCon_aLi[oCon_aLi.length-1],"active");
			oSort.style.display="none";
		}

	var oMall=document.getElementById('mall_m');
	var aCss=getByClass('cs',oMall);
	for(var i=0;i<aCss.length;i++)
	{
		aCss[i].index=i;
		aCss[i].onmouseover=function(){
			var aSpan=this.getElementsByTagName('span')[0];
			aSpan.style.display='block';
			var aP=this.getElementsByTagName('p');
			for(var i=0;i<aP.length;i++){
				aP[i].style.color='#bd0000';
			}
		};
		aCss[i].onmouseout=function(){
			var aSpan=this.getElementsByTagName('span')[0];
			aSpan.style.display='none';
			var aP=this.getElementsByTagName('p');
			for(var i=0;i<aP.length;i++){
				aP[i].style.color='#aaa9a9';
			}
		};
	}
	
	var oTx=document.getElementById('tx');
	oTx.onmouseover=function()
	{
		var oTspan=this.getElementsByTagName('span')[0];
		var oB=this.getElementsByTagName('b')[0];
		oB.style.color="#fff";
		startMove(oTspan,{top:0});
	}
	oTx.onmouseout=function()
	{
		var oTspan=this.getElementsByTagName('span')[0];
		var oB=this.getElementsByTagName('b')[0];
		oB.style.color="#513a16";
		startMove(oTspan,{top:27});
	}

	var oTxs=document.getElementById('txs');
	var oTspan1=oTxs.getElementsByTagName('span')[0];
	oTxs.onmouseover=function()
	{
		startMove(oTspan1,{top:0});
	}
	oTxs.onmouseout=function()
	{
		startMove(oTspan1,{top:27});
	}

	var alist=getByClass('floor_imges_list2',oMall);
	var alist1=getByClass('floor_imges_list1',oMall);
	for(var i=0;i<alist.length;i++)
	{
		alist[i].onmouseover=alist1[i].onmouseover=function()
		{
			startMove(this,{left:-42});
		}

		alist[i].onmouseout=alist1[i].onmouseout=function()
		{
			startMove(this,{left:110});
		}
	}
	
	var alists=getByClass('floor_logo',oMall);
	var alists1=getByClass('floor_slide',oMall);
	for(var i=0;i<alists.length;i++)
	{
		fnMove(alists[i],'ol','ul','active');
	}
	for(var i=0;i<alists1.length;i++)
	{
		fnMove(alists1[i],'ol','ul','active');
	}
	function fnMove(oList,obj1,obj2,aClass)
	{
		var alists_ol=oList.getElementsByTagName(obj1)[0];
		var alists_ul=oList.getElementsByTagName(obj2)[0];
		var alists_ol_li=alists_ol.getElementsByTagName('li');
		var alists_ul_li=alists_ul.getElementsByTagName('li');
		
		var iWidth = alists_ul_li[0].offsetWidth;
	
		var iOld = 0;
		
		for(var i=1;i<alists_ul_li.length;i++)
		{
			alists_ul_li[i].style.left = iWidth + 'px';
		}
		for(var i=0;i<alists_ol_li.length;i++)
		{
			alists_ol_li[i].index = i;
			alists_ol_li[i].onmouseover = function(){
				for(var i=0;i<alists_ol_li.length;i++){
					alists_ol_li[i].className = '';
				}
				this.className = aClass;
				
				if(this.index>iOld){  //往右移动
					
					alists_ul_li[this.index].style.left = iWidth + 'px';
					startMove(alists_ul_li[iOld],{left : -iWidth});
				}
				else if(this.index<iOld){ //往左移动
					alists_ul_li[this.index].style.left = -iWidth + 'px';
					startMove(alists_ul_li[iOld],{left : iWidth});
				}
				
				startMove(alists_ul_li[this.index],{left : 0});
				
				iOld = this.index;
				
			};
		}
	}

	var oMemu=document.getElementById('mall_left');
	var oMemu1=document.getElementById('parent_left');
	window.onscroll=window.onresize=function()
	{
		if( document.body.scrollTop>=93 ){
			oMemu1.style.position = 'fixed';
		}
		else if(document.documentElement.scrollTop>=93)
		{
			oMemu1.style.position = 'fixed';
		}
		else{
			oMemu1.style.position = 'relative';
		}

	}

	var oBut_cn=document.getElementById('but');
	var aBut_cn=oBut_cn.getElementsByTagName('a');
	var oMenu=document.getElementById('mall_left_menu');
	var oMenu_li=oMenu.getElementsByTagName('li');
	var oMenu_p=oMenu.getElementsByTagName('p');
	var acc=true;
	aBut_cn[0].onclick=function()
	{
		for(var i=0;i<oMenu_li.length;i++)
		{
			startMove(oMenu_li[i],{height:69});
		}
		for(var i=0;i<aBut_cn.length;i++)
		{
			aBut_cn[i].style.backgroundColor='#be0000';	
		}
				this.style.backgroundColor='#850000';
		acc=true;
	}
	aBut_cn[1].onclick=function()
	{
		acc=false;
		for(var i=0;i<aBut_cn.length;i++)
		{
			aBut_cn[i].style.backgroundColor='#be0000';	
		}
		this.style.backgroundColor='#850000';
		for(var i=0;i<oMenu_li.length;i++)
		{
			startMove(oMenu_li[i],{height:23});
		}
	}
	
	var oMenuc=document.getElementById('mall_menu_right');
	var iTem=getByClass('item',oMenuc);
	var timer=null;
	var n=0;
	for(var i=0;i<oMenu_li.length;i++)
	{
		oMenu_li[i].index=i;
		oMenu_li[i].onmouseover=function()
		{
			addClass(this,'hover');
			if(acc==false)
			{
				startMove(this,{height:69});
			}
			for(var i=0;i<iTem.length;i++)
			{
				iTem[i].style.display='none';
			}
				iTem[this.index].style.display='block';
			n=this.index;
		}
		oMenu_li[i].onmouseout=function()
		{
			removeClass(this,'hover');
			var aP=this.getElementsByTagName('p');
			if(acc==false)
			{
				startMove(this,{height:23});
			}
		}
	}
	oMemu1.onmouseover=function()
	{
		clearTimeout(this.timer);
	};
	oMemu1.onmouseout=function()
	{
		clearTimeout(this.timer);
		this.timer=setTimeout(function()
		{
			for(var i=0;i<iTem.length;i++)
			{
				iTem[i].style.display='none';
			}
		},100);
	};
	for(var i=0;i<iTem.length;i++)
	{
		iTem[i].onmouseover=function()
		{
			addClass(oMenu_li[n],'hover');
		}
		iTem[i].onmouseout=function()
		{
			removeClass(oMenu_li[n],'hover');
		}
	}
	
	
	var iScroll=document.getElementById('scrollBox');

	bindEvent(window,'scroll',function()
	{
		if(document.body.scrollTop||document.documentElement.scrollTop>250)
		{
			iScroll.style.display='block';
		}
		else
		{
			iScroll.style.display='none';
		}
	})

	iScroll.onclick=function()
	{
		
		downMove(0);
	}

	function downMove(target)
	{
		clearInterval(timer);
		timer=setInterval(function()
		{
			var iScrollY=document.body.scrollTop||document.documentElement.scrollTop;
			var iSpeed=(target-iScrollY)/8;
			iSpeed=Math.floor(iSpeed);
			if(iScrollY<=target)
			{
				clearInterval(timer);
			}
			else
			{
				document.body.scrollTop=document.documentElement.scrollTop=iScrollY+iSpeed;
			}
		},30)	
	}

	var show_img=oMall.getElementsByTagName('img');
	var cff=[];
	for(var i=0;i<show_img.length;i++)
	{
		if(show_img[i].getAttribute('_src'))
		{
			cff.push(show_img[i]);
		}
	}
	for(var i=0;i<cff.length;i++)
	{
		cff[i].att=true;
	}

	function toChange()
	{
		var iScroll=document.documentElement.scrollTop||document.body.scrollTop;
		var iClient=document.documentElement.clientHeight;
		for(var i=0;i<cff.length;i++)
		{
			if(posTop(cff[i])<iClient+iScroll&&cff[i].att)
			{
				cff[i].src=cff[i].getAttribute('_src');
				cff[i].style.opacity=0;
				cff[i].style.filter='alpha(opacity:0)';
				startMove(cff[i],{opacity:100});
				cff[i].att=false;
			}
		}
	}
	toChange();

	bindEvent(window,'scroll',function(){
		toChange();
	});

	var tm_text=document.getElementById('tm_text');
	tm_text.onfocus=function()
	{
		if(this.value=='搜索天猫 商品/店铺')
		{
			this.value='';
		}
	}
	var tm_text=document.getElementById('tm_text');
	var tm_ul=document.getElementById('tmall_ul');
	var tm_ulLi=tm_ul.getElementsByTagName('li');
	var tm_ulLia=tm_ul.getElementsByTagName('a');
	var aScript=document.getElementsByTagName('script');
	var tm_num=0;
	tm_text.onkeydown=function()
	{
		if(this.value=='搜索天猫商品 /店铺')
		{
			this.value='';
		}
	}
	/*
	document.onkeydown=function(ev)
	{
		var ev=ev||event;
		if(tm_ul.style.display=='none')
		{
			return;	
		}
		tm_ul.style.display='block'
		for(var i=0;i<tm_ulLi.length;i++)
		{
			tm_ulLi[i].className='';
		}
		if(ev.keyCode==40)
		{
			tm_num%=tm_ulLi.length;
			tm_ulLi[tm_num].className='active';
			tm_num++;
		}
		if(ev.keyCode==38)
		{
			tm_num--;
			if(tm_num<0)
			{
				tm_num=tm_ulLi.length-1;
			}
			tm_ulLi[tm_num].className='active';
		}
	}*/
	tm_text.onkeyup=function()
	{	
		tm_text.style.color='#000';
		tm_text.style.fontWeight='bold';
		tm_text.style.fontSize='14px';
		tm_ul.style.display='block';
		var oScript = document.createElement('script');
		
		document.body.appendChild(oScript);
		oScript.src = 'http://suggest.taobao.com/sug?area=b2c&code=utf-8&callback=tmll.callback=tmll&q=' + this.value;		

		if(aScript.length>10)
		{
			document.body.removeChild(aScript[aScript.length-1]);
		}
		
	}
	
	bindEvent(document,'click',function(){
		tm_ul.style.display='none';
	})
};

	function tmll(data)
	{
		var oUl=document.getElementById('tmall_ul');
		var reset=data.result;
		var istr='';
		for(var i=0;i<reset.length;i++)
		{
			istr+='<li><a href="http://s.taobao.com/search?q='+encodeURI(reset[i][0])+'&commend=all&ssid=s5-e-p1&search_type=item&sourceId=tb.index&spm=1.1000386.5803581.d4908513&initiative_id=tbindexz_20130602&suggest=0_2&source=suggest&wq=iphone">'+reset[i][0]+'</a></li>';
		}
		oUl.innerHTML=istr;
	}
