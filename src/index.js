// IE10 Mobile Viewport fix 1.2.0.20171106
// Copyright (C) 2013-2017 ConsidoNet Solutions / www.considonet.com
// Released under MIT Licence

/*
VERSION HISTORY
1.2.0.20171106 @pg
* Now acting as a separate npm module
* jQuery no longer required

1.1.0 @pg
+ ES6

1.0.0 @pg
+ Initial version

*/

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	document.addEventListener("DOMContentLoaded", () => { 
	  
	  const msViewportStyle = document.createElement("style");
	  msViewportStyle.appendChild(
		document.createTextNode(
		  "@-ms-viewport{width:auto!important}"
		)
	  );
	  document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	  
	});
}
