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
image51176.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj51176Img\" src=\"images/Achtergrond%20quiz_onze%20klanten_feedback2.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1366px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj51176",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_onze klanten_feedback2"
	},
	objData:	{"a":[0,288,0,[0,0,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768}}
};
text45365.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 588px; min-height: 239px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 588px; min-height: 239px;\"><p leglh=\"1.276\" style=\"margin-left:0px;text-indent:0px;line-height:1.276;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\">De </span><span style=\" font-size:32pt; font-family:\'Arial\', sans-serif; color:#000000; \"><strong>34 Zorgcoaches</strong></span><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\"> van Zilveren </span><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\">Kruis besparen door wachtlijstbemiddeling </span><span style=\" font-size:32pt; font-family:\'Arial\', sans-serif; color:#000000; \"><strong>duizenden wachtdagen</strong></span><span style=\" font-size:32pt; font-family:\'Arial\', sans-serif; color:#000000;\"> </span><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\">per </span><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\">maand. In 2018 bespaarde de afdeling ruim </span><span style=\" font-size:32pt; font-family:\'Arial\', sans-serif; color:#000000; \"><strong>183.000 wachtdagen</strong></span><span style=\" font-size:32pt; font-family:\'Arial\', sans-serif; color:#000000;\">.</span><span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 450px; top: 197px; width: 588px; height: 239px; z-index: 3;",
	cssClasses:	"feedback-text",
	htmlId:		"tobj45365",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Feedback text"
	},
	objData:	{"a":[0,32,0,[450,197,588,239]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":450,"y":197,"width":588,"height":239},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton45370.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 61 62\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30.5 31)\" style=\"\">\n	<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_45362_2104\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_45362_2104&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30.5 31)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 711px; top: 555px; width: 61px; height: 62px; z-index: 4; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj45370",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quizvragen_quizvraag_7_mpc.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[711,555,61,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":711,"y":555,"width":61,"height":62},"imgDataNormal":"images/desktop_shape31501.png","imgDataOver":"images/desktop_shape31501_over.png","imgDataDown":"images/desktop_shape31501.png","imgDataDisabled":"images/desktop_shape31501_disabled.png","svgDataNormal":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_45362_2104\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_45362_2104&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_45362_2106\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_45362_2106&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_45362_2108\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_45362_2108&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30.5 31)\" style=\"\">\n\t<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_45362_2110\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"61\" height=\"62\" xlink:href=\"images/Verder_roze.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 61 0 L 61 62 L 0 62 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_45362_2110&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -31) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 31)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	26
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Verder_roze.png","images/Verder_roze_hover.png","images/Achtergrond%20quiz_onze%20klanten_feedback2.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
