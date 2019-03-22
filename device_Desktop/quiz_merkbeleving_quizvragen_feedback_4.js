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
image51162.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj51162Img\" src=\"images/Achtergrond%20quiz_onze%20klanten_feedback2.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1366px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj51162",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_onze klanten_feedback2"
	},
	objData:	{"a":[0,288,0,[0,0,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768}}
};
text31646.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 589px; min-height: 210px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 589px; min-height: 210px;\"><p align=\"center\" leglh=\"1.276\" style=\"margin-left:0px;text-indent:0px;line-height:1.276;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\">In december bellen bijna</span><span style=\" font-size:32pt; font-family:\'Arial\', sans-serif; color:#000000;\"> </span><strong><span style=\" font-size:32pt; font-family:\'Arial\', sans-serif; color:#000000; \">500.000 mensen</span></strong><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\"> ons. In andere maanden krijgen </span><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\">we ruim 200.000 telefoontjes binnen. Meer dan </span><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\">een </span><strong><span style=\" font-size:32pt; font-family:\'Arial\', sans-serif; color:#000000; \">verdubbeling</span></strong><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\"> dus! </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 452px; top: 211px; width: 589px; height: 210px; z-index: 3;",
	cssClasses:	"feedback-text",
	htmlId:		"tobj31646",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Feedback text"
	},
	objData:	{"a":[0,32,0,[452,211,589,210]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":452,"y":211,"width":589,"height":210},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton31651.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 61 62\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30.5 31)\" style=\"\">\n	<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_31645_2024\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_31645_2024&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30.5 31)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 902px; top: 516px; width: 61px; height: 62px; z-index: 4; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj31651",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quizvragen_quizvraag_5_stelling.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[902,516,61,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":902,"y":516,"width":61,"height":62},"imgDataNormal":"images/desktop_shape31501.png","imgDataOver":"images/desktop_shape31501_over.png","imgDataDown":"images/desktop_shape31501.png","imgDataDisabled":"images/desktop_shape31501_disabled.png","svgDataNormal":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_31645_2024\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_31645_2024&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_31645_2026\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_31645_2026&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_31645_2028\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_31645_2028&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_31645_2030\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_31645_2030&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	18
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Verder_roze.png","images/Verder_roze_hover.png","images/Achtergrond%20quiz_onze%20klanten_feedback2.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
