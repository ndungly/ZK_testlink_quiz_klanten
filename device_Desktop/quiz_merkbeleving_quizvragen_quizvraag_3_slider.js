if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
	pageClick = function() {
		setTimeout( 'action30465()', 300); 
	};
}
og29538.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og29538",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image50253.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj50253Img\" src=\"images/Achtergrond%20quiz_onze%20klanten_leeg.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1366px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj50253",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_onze klanten_leeg"
	},
	objData:	{"a":[0,288,0,[0,0,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768}}
};
image30472.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj30472Img\" src=\"images/Score_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 378px; height: 165px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 494px; top: 0px; width: 378px; height: 165px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj30472",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Score_bg"
	},
	objData:	{"a":[0,288,0,[494,0,378,165]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":494,"y":0,"width":378,"height":165}}
};
text30473.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 69px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:18pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">Jouw score:\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 17px; width: 200px; height: 69px; z-index: 4;",
	cssClasses:	"jouw-score",
	htmlId:		"tobj30473",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Subtitle quiz score"
	},
	objData:	{"a":[0,32,0,[583,17,200,69]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":17,"width":200,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text30474.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 478px; min-height: 72px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 478px; min-height: 72px;\"><p leglh=\"1.283\" style=\"margin-left:0px;text-indent:0px;line-height:1.283;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:40pt; font-family:\'PT Sans\', sans-serif; color:#002857; \"><strong>" +  Varquiz_score.getValueForDisplay() + "</strong></span><span style=\" font-size:40pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 444px; top: 57px; width: 478px; height: 72px; z-index: 5;",
	cssClasses:	"score",
	htmlId:		"tobj30474",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[444,57,478,72]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":444,"y":57,"width":478,"height":72},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text30475.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 29px;\"><p leglh=\"1.229\" style=\"margin-left:0px;text-indent:0px;line-height:1.229;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'PT Sans\', sans-serif; color:#74c9e2;\">Vraag 3 van de 10</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#74c9e2;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 181px; width: 200px; height: 29px; z-index: 6;",
	cssClasses:	"question-no",
	htmlId:		"tobj30475",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Vraag 1 van 11"
	},
	objData:	{"a":[0,32,0,[583,181,200,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":181,"width":200,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text30476.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 526px; min-height: 108px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 526px; min-height: 108px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:18pt; font-family:\'Titillium Web\'; color:#ffffff;\">Welk rapportcijfer geven onze klanten ons gemiddeld in het afgelopen jaar?</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 421px; top: 229px; width: 526px; height: 108px; z-index: 7;",
	cssClasses:	"body-txt",
	htmlId:		"tobj30476",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question"
	},
	objData:	{"a":[0,32,0,[421,229,526,108]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":421,"y":229,"width":526,"height":108},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text30477.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 32px;\"><p leglh=\"1.229\" style=\"margin-left:0px;text-indent:0px;line-height:1.229;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'PT Sans\', sans-serif; color:#74c9e2;\">Jouw inzet:</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#74c9e2;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 342px; width: 200px; height: 32px; z-index: 8;",
	cssClasses:	"question-no",
	htmlId:		"tobj30477",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Jouw inzet"
	},
	objData:	{"a":[0,32,0,[583,342,200,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":342,"width":200,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton30482.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_30464_1952\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1952&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 566px; top: 380px; width: 64px; height: 66px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30482",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 10",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('10'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Selected',actItem:function(){ image30491.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10Normal',actItem:function(){ textbutton30482.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20',actItem:function(){ image30505.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Normal',actItem:function(){ textbutton30496.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30',actItem:function(){ image30519.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Normal',actItem:function(){ textbutton30510.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[566,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":380,"width":64,"height":66},"imgDataNormal":"images/desktop_shape51792.png","imgDataOver":"images/desktop_shape51792_over.png","imgDataDown":"images/desktop_shape51792_down.png","imgDataDisabled":"images/desktop_shape51792_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1952\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1952&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1954\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1954&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1956\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1956&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1958\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1958&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image30491.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj30491Img\" src=\"images/Inzet_10_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 566px; top: 380px; width: 64px; height: 66px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj30491",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_10_selected"
	},
	objData:	{"a":[0,288,0,[566,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":380,"width":64,"height":66}}
};
textbutton30496.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_30464_1960\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1960&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 651px; top: 380px; width: 64px; height: 66px; z-index: 30; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30496",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 20",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('20'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Selected',actItem:function(){ image30505.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20Normal',actItem:function(){ textbutton30496.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10',actItem:function(){ image30491.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Normal',actItem:function(){ textbutton30482.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30',actItem:function(){ image30519.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Normal',actItem:function(){ textbutton30510.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[651,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":380,"width":64,"height":66},"imgDataNormal":"images/desktop_shape51801.png","imgDataOver":"images/desktop_shape51801_over.png","imgDataDown":"images/desktop_shape51801_down.png","imgDataDisabled":"images/desktop_shape51801_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1960\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1960&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1962\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1962&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1964\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1964&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1966\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_disabled.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1966&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image30505.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj30505Img\" src=\"images/Inzet_20_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 651px; top: 380px; width: 64px; height: 66px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj30505",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_20_selected"
	},
	objData:	{"a":[0,256,0,[651,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":380,"width":64,"height":66}}
};
textbutton30510.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_30464_1968\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1968&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 736px; top: 380px; width: 64px; height: 66px; z-index: 31; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30510",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 30",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('30'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Selected',actItem:function(){ image30519.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30Normal',actItem:function(){ textbutton30510.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20',actItem:function(){ image30505.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Normal',actItem:function(){ textbutton30496.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10',actItem:function(){ image30491.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Normal',actItem:function(){ textbutton30482.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[736,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":736,"y":380,"width":64,"height":66},"imgDataNormal":"images/desktop_shape51810.png","imgDataOver":"images/desktop_shape51810_over.png","imgDataDown":"images/desktop_shape51810_down.png","imgDataDisabled":"images/desktop_shape51810_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1968\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1968&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1970\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1970&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1972\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1972&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_30464_1974\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_disabled.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_30464_1974&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image30519.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj30519Img\" src=\"images/Inzet_30_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 736px; top: 380px; width: 64px; height: 66px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj30519",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_30_selected"
	},
	objData:	{"a":[0,256,0,[736,380,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":736,"y":380,"width":64,"height":66}}
};
shape30521.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 406 3\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(203 1.5)\" style=\"\">\n	<path d=\"M 0 0 L 403 0\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-201.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(203 8.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 482.5px; top: 542.5px; width: 406px; height: 3px; z-index: 12; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30521",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[482.5,542.5,406,3]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":544,"width":406,"height":3},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51819.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape30523.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 157, 218); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 471.5px; top: 532.5px; width: 23px; height: 23px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30523",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 1"
	},
	objData:	{"a":[0,32,0,[471.5,532.5,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":473,"y":534,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51820.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape30525.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 463px; top: 524px; width: 40px; height: 40px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30525",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 1",
		"arChld":
	[
		{type:6,on:2,delay:300,name:'OnMClkGoToNextPage',actItem:function(){ trivExitPage('quiz_merkbeleving_quizvragen_fout_3.html',true,false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot1',actItem:function(){ shape30530.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[463,524,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":463,"y":524,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51821.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape30530.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(201, 58, 131); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 464px; top: 526px; width: 36px; height: 36px; z-index: 15; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj30530",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 1"
	},
	objData:	{"a":[0,0,0,[464,526,36,36]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#A0144C","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":526,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51825.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text30531.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 38px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 38px; min-height: 36px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"left\">\n<span style=\" font-size:18pt; font-family:\'Titillium Web\'; color:#ffffff; \"><strong>5,9</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 464px; top: 568px; width: 38px; height: 36px; z-index: 16;",
	cssClasses:	"slider-txt",
	htmlId:		"tobj30531",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord 1"
	},
	objData:	{"a":[0,32,0,[464,568,38,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":568,"width":38,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape30533.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 157, 218); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 605.5px; top: 532.5px; width: 23px; height: 23px; z-index: 17; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30533",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 2"
	},
	objData:	{"a":[0,32,0,[605.5,532.5,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":607,"y":534,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51820.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape30535.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 597px; top: 524px; width: 40px; height: 40px; z-index: 18; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30535",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 2",
		"arChld":
	[
		{type:6,on:2,delay:300,name:'OnMClkGoToNextPage',actItem:function(){ trivExitPage('quiz_merkbeleving_quizvragen_fout_3.html',true,false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot2',actItem:function(){ shape30540.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[597,524,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":597,"y":524,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51821.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape30540.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(201, 58, 131); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 599px; top: 526px; width: 36px; height: 36px; z-index: 19; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj30540",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 2"
	},
	objData:	{"a":[0,0,0,[599,526,36,36]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#A0144C","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":599,"y":526,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51825.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text30541.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 36px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 36px; min-height: 36px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"left\">\n<span style=\" font-size:18pt; font-family:\'Titillium Web\'; color:#ffffff; \"><strong>6,9</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 599px; top: 568px; width: 36px; height: 36px; z-index: 20;",
	cssClasses:	"slider-txt",
	htmlId:		"tobj30541",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord 2"
	},
	objData:	{"a":[0,32,0,[599,568,36,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":599,"y":568,"width":36,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape30543.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 157, 218); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 739.5px; top: 532.5px; width: 23px; height: 23px; z-index: 21; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30543",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 3"
	},
	objData:	{"a":[0,32,0,[739.5,532.5,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":741,"y":534,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51820.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape30545.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 731px; top: 524px; width: 40px; height: 40px; z-index: 22; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30545",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 3",
		"arChld":
	[
		{type:6,on:2,delay:300,name:'OnMClkGoToNextPage',actItem:function(){ trivExitPage('quiz_merkbeleving_quizvragen_goed_3.html',true,false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varquiz_score.add('' +  Varinzet.getValueForDisplay() + ''); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot3',actItem:function(){ shape30550.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[731,524,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":731,"y":524,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51821.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape30550.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(201, 58, 131); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 734px; top: 526px; width: 36px; height: 36px; z-index: 23; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj30550",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 3"
	},
	objData:	{"a":[0,0,0,[734,526,36,36]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#A0144C","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":734,"y":526,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51825.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text30551.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 38px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 38px; min-height: 36px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"left\">\n<span style=\" font-size:18pt; font-family:\'Titillium Web\'; color:#ffffff; \"><strong>7,9</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 734px; top: 568px; width: 38px; height: 36px; z-index: 24;",
	cssClasses:	"slider-txt",
	htmlId:		"tobj30551",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord 3"
	},
	objData:	{"a":[0,32,0,[734,568,38,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":734,"y":568,"width":38,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape30553.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 157, 218); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 873.5px; top: 532.5px; width: 23px; height: 23px; z-index: 25; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30553",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 4"
	},
	objData:	{"a":[0,32,0,[873.5,532.5,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":875,"y":534,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51820.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape30555.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 865px; top: 524px; width: 40px; height: 40px; z-index: 26; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj30555",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 4",
		"arChld":
	[
		{type:6,on:2,delay:300,name:'OnMClkGoToNextPage',actItem:function(){ trivExitPage('quiz_merkbeleving_quizvragen_fout_3.html',true,false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot4',actItem:function(){ shape30560.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[865,524,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":865,"y":524,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51821.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape30560.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(201, 58, 131); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 869px; top: 526px; width: 36px; height: 36px; z-index: 27; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj30560",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 4"
	},
	objData:	{"a":[0,0,0,[869,526,36,36]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#A0144C","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":869,"y":526,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape51825.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text30561.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 40px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 40px; min-height: 36px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"left\">\n<span style=\" font-size:18pt; font-family:\'Titillium Web\'; color:#ffffff; \"><strong>8,9</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 867px; top: 568px; width: 40px; height: 36px; z-index: 28;",
	cssClasses:	"slider-txt",
	htmlId:		"tobj30561",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord 4"
	},
	objData:	{"a":[0,32,0,[867,568,40,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":867,"y":568,"width":40,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	11
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Inzet_10.png","images/Inzet_10_selected.png","images/Inzet_20.png","images/Inzet_20_disabled.png","images/Inzet_20_selected.png","images/Inzet_30.png","images/Inzet_30_disabled.png","images/Inzet_30_selected.png","images/Score_bg.png","images/Inzet_10_hover.png","images/Inzet_20_hover.png","images/Inzet_30_hover.png","images/Achtergrond%20quiz_onze%20klanten_leeg.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
