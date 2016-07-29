// JavaScript Document

function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		var bBtn = true;
		
		for(var attr in json){
			
			var iCur = 0;
			if( attr == 'opacity'){
				iCur = Math.round(getStyle(obj,attr)*100);
			}
			else{
				iCur = parseInt(getStyle(obj,attr));
			}
			
			var iSpeed = (json[attr] - iCur)/7;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if(iCur != json[attr]){
				bBtn = false;
			}
			
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity='+ (iCur+iSpeed) +')';
				obj.style.opacity = (iCur+iSpeed)/100;
			}
			else{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
			
			
		}
		
		if(bBtn){
			clearInterval(obj.timer);
			if(fn){
				fn.call(obj);
			}
		}
		
	},30);
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}



function addClass(obj,sClass)
{
	var aClass=obj.className.split('');
	if(!aClass[0])
	{
		obj.className=sClass;
		return
	}
	for(var i=0;i<aClass.length;i++)
	{
		if(aClass[i]==sClass)
		{
			return;
		}
	}
	obj.className+=' '+sClass;
}

function getClass(obj,sClass)
{
	var aClass=obj.className.split(" ");
	for(var i=0;i<aClass.length;i++)
	{
		if(aClass[i]==sClass)
		{
			return true;
		}
	}
	return false;
}
function removeClass(obj,sClass){
	
	var aClass = obj.className.split(' ');
	if(!aClass[0])return;
	
	for(var i=0; i<aClass.length; i++){
		if(aClass[i]==sClass){
			aClass.splice(i,1);
			obj.className = aClass.join(' ');
			return;
		}	
	}		
}


function getByClass(sClass,oParent){
		
		var parent = oParent || document;
		var aEles = parent.getElementsByTagName('*');
		var arr = [];
		
		for(var i=0; i<aEles.length; i++){
			
			var aClass = aEles[i].className.split(' ');
			
			for(var j=0; j<aClass.length; j++){
				if(aClass[j] == sClass){
				
					arr.push(aEles[i]);
					
				}	
			}
			
		}
		
		return arr;
		
	}

function vieH()
{
	return document.documentElement.clientHeight;
}

function vieH()
{
	return document.documentElement.clientWidth;
}


function scrollY()
{
	return document.body.scrollTop||document.documentElement.scrollTop;
}

function bindEvent(obj,events,fn)
{
	if(obj.addEventListener){
	   obj.addEventListener(events,fn,false);
	}
	else{
	   obj.attachEvent('on'+events,fn);
	}
}

function posTop(obj)
{
	var iTop=0;
	while(obj)
	{
		iTop+=obj.offsetTop;
		obj=obj.offsetParent;
	}

	return iTop;
}