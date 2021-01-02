function showNav(){
	var nav=new mdui.Drawer('#mb-nav');
	if(nav.getState()=='opened'){
		nav.close();
	}else if(nav.getState()=='closed'){
		nav.open();
	}
}
		