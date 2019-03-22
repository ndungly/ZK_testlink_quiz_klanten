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
image50799.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj50799Img\" src=\"images/Achtergrond%20quiz_onze%20klanten_leeg.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1366px; height: 768px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj50799",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Achtergrond quiz_onze klanten_leeg"
	},
	objData:	{"a":[0,288,0,[0,0,1366,768]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768}}
};
image48948.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj48948Img\" src=\"images/Score_bg.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 378px; height: 165px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 494px; top: 0px; width: 378px; height: 165px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj48948",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Score_bg"
	},
	objData:	{"a":[0,288,0,[494,0,378,165]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":494,"y":0,"width":378,"height":165}}
};
text48951.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 69px;\"><p leglh=\"1.296\" style=\"margin-left:0px;text-indent:0px;line-height:1.296;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:18pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">Jouw score: \n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 17px; width: 200px; height: 69px; z-index: 4;",
	cssClasses:	"jouw-score",
	htmlId:		"tobj48951",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Subtitle quiz score"
	},
	objData:	{"a":[0,32,0,[583,17,200,69]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":17,"width":200,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text48952.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 478px; min-height: 72px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 478px; min-height: 72px;\"><p leglh=\"1.283\" style=\"margin-left:0px;text-indent:0px;line-height:1.283;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:40pt; font-family:\'PT Sans\', sans-serif; color:#002857; \"><strong>" +  Varquiz_score.getValueForDisplay() + " </strong></span><span style=\" font-size:40pt; font-family:\'PT Sans\', sans-serif; color:#002857;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 444px; top: 57px; width: 478px; height: 72px; z-index: 5;",
	cssClasses:	"score",
	htmlId:		"tobj48952",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Quiz score"
	},
	objData:	{"a":[0,32,0,[444,57,478,72]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":444,"y":57,"width":478,"height":72},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text48953.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 29px;\"><p leglh=\"1.229\" style=\"margin-left:0px;text-indent:0px;line-height:1.229;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'PT Sans\', sans-serif; color:#74c9e2;\">Vraag 10 van de 10</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#74c9e2;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 159px; width: 200px; height: 29px; z-index: 6;",
	cssClasses:	"question-no",
	htmlId:		"tobj48953",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Vraag 2 van 10"
	},
	objData:	{"a":[0,32,0,[583,159,200,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":159,"width":200,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text48954.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 758px; min-height: 98px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 758px; min-height: 98px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:20pt; font-family:\'Arial\', sans-serif; color:#010101;\">Hoeveel declaraties zijn er in 2018 verwerkt?</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 304px; top: 214px; width: 758px; height: 98px; z-index: 7;",
	cssClasses:	"body-txt",
	htmlId:		"tobj48954",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question"
	},
	objData:	{"a":[0,32,0,[304,214,758,98]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":304,"y":214,"width":758,"height":98},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text48955.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 32px;\"><p leglh=\"1.229\" style=\"margin-left:0px;text-indent:0px;line-height:1.229;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'PT Sans\', sans-serif; color:#74c9e2;\">Jouw inzet:</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#74c9e2;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 583px; top: 296px; width: 200px; height: 32px; z-index: 8;",
	cssClasses:	"question-no",
	htmlId:		"tobj48955",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Jouw inzet"
	},
	objData:	{"a":[0,32,0,[583,296,200,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":583,"y":296,"width":200,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton48960.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 410 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(205 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(205 35.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;340 miljoen</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 477px; top: 449px; width: 410px; height: 71px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj48960",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.add('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:300,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quizvragen_goed_10.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[477,449.00000000000006,410,71]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":477,"y":449,"width":410,"height":71},"imgDataNormal":"images/desktop_shape48960.png","imgDataOver":"images/desktop_shape48960_over.png","imgDataDown":"images/desktop_shape48960_over.png","imgDataDisabled":"images/desktop_shape48960_disabled.png","svgDataNormal":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;340 miljoen</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;340 miljoen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;340 miljoen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;340 miljoen</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton48967.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 410 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(205 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(205 35.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;570 miljoen</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 477px; top: 539px; width: 410px; height: 71px; z-index: 13; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj48967",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!Varquiz_score.lessThan('' +  Varinzet.getValueForDisplay() + ''))Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:300,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quizvragen_fout_10.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[477,539,410,71]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":477,"y":539,"width":410,"height":71},"imgDataNormal":"images/desktop_shape48967.png","imgDataOver":"images/desktop_shape48967_over.png","imgDataDown":"images/desktop_shape48967_over.png","imgDataDisabled":"images/desktop_shape48967_disabled.png","svgDataNormal":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;570 miljoen</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;570 miljoen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;570 miljoen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;570 miljoen</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton48974.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 410 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(205 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(205 35.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;620 miljoen</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 479px; top: 629px; width: 410px; height: 71px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj48974",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varquiz_score.sub('' +  Varinzet.getValueForDisplay() + ''); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:300,name:'OnMClkGoTo',actItem:function(){ trivExitPage('quiz_merkbeleving_quizvragen_fout_10.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[479,629,410,71]],"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":479,"y":629,"width":410,"height":71},"imgDataNormal":"images/desktop_shape48974.png","imgDataOver":"images/desktop_shape48974_over.png","imgDataDown":"images/desktop_shape48974_over.png","imgDataDisabled":"images/desktop_shape48974_disabled.png","svgDataNormal":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;620 miljoen</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;620 miljoen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;620 miljoen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(205 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 405.03 0 A 4.97 4.97 0 0 1 410 4.97 L 410 66.03 A 4.97 4.97 0 0 1 405.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(205 35.5)\">\n\t\t<text font-family=\"Titillium Web\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-201.76\" y=\"7.56\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;620 miljoen</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton48981.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_48943_2224\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2224&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 567px; top: 354px; width: 64px; height: 66px; z-index: 15; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj48981",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 10",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('10'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Selected',actItem:function(){ image48990.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10Normal',actItem:function(){ textbutton48981.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20',actItem:function(){ image49004.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Normal',actItem:function(){ textbutton48995.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30',actItem:function(){ image49018.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Normal',actItem:function(){ textbutton49009.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[567,354,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":567,"y":354,"width":64,"height":66},"imgDataNormal":"images/desktop_shape51792.png","imgDataOver":"images/desktop_shape51792_over.png","imgDataDown":"images/desktop_shape51792_down.png","imgDataDisabled":"images/desktop_shape51792_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2224\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2224&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2226\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2226&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2228\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2228&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2230\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_10.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2230&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image48990.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj48990Img\" src=\"images/Inzet_10_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 567px; top: 354px; width: 64px; height: 66px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj48990",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_10_selected"
	},
	objData:	{"a":[0,288,0,[567,354,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":567,"y":354,"width":64,"height":66}}
};
textbutton48995.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_48943_2232\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2232&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 652px; top: 354px; width: 64px; height: 66px; z-index: 16; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj48995",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 20",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('20'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Selected',actItem:function(){ image49004.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20Normal',actItem:function(){ textbutton48995.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10',actItem:function(){ image48990.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Normal',actItem:function(){ textbutton48981.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30',actItem:function(){ image49018.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Normal',actItem:function(){ textbutton49009.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[652,354,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":652,"y":354,"width":64,"height":66},"imgDataNormal":"images/desktop_shape51801.png","imgDataOver":"images/desktop_shape51801_over.png","imgDataDown":"images/desktop_shape51801_down.png","imgDataDisabled":"images/desktop_shape51801_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2232\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2232&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2234\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2234&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2236\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2236&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2238\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_20_disabled.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2238&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image49004.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj49004Img\" src=\"images/Inzet_20_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 652px; top: 354px; width: 64px; height: 66px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj49004",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_20_selected"
	},
	objData:	{"a":[0,256,0,[652,354,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":652,"y":354,"width":64,"height":66}}
};
textbutton49009.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 64 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32 33)\" style=\"\">\n	<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_48943_2240\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2240&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32 33)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 737px; top: 354px; width: 64px; height: 66px; z-index: 17; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj49009",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Inzet 30",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varinzet.set('30'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow30Selected',actItem:function(){ image49018.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide30Normal',actItem:function(){ textbutton49009.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide20',actItem:function(){ image49004.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow20Normal',actItem:function(){ textbutton48995.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide10',actItem:function(){ image48990.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow10Normal',actItem:function(){ textbutton48981.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[737,354,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":737,"y":354,"width":64,"height":66},"imgDataNormal":"images/desktop_shape51810.png","imgDataOver":"images/desktop_shape51810_over.png","imgDataDown":"images/desktop_shape51810_down.png","imgDataDisabled":"images/desktop_shape51810_disabled.png","svgDataNormal":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2240\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2240&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2242\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2242&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2244\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_selected.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2244&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32 33)\" style=\"\">\n\t<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_48943_2246\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"64\" height=\"66\" xlink:href=\"images/Inzet_30_disabled.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 64 0 L 64 66 L 0 66 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_48943_2246&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32, -33) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32 33)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image49018.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj49018Img\" src=\"images/Inzet_30_selected.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 66px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 737px; top: 354px; width: 64px; height: 66px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj49018",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Inzet_30_selected"
	},
	objData:	{"a":[0,256,0,[737,354,64,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":737,"y":354,"width":64,"height":66}}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	39
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Inzet_10.png","images/Inzet_10_selected.png","images/Inzet_20.png","images/Inzet_20_disabled.png","images/Inzet_20_selected.png","images/Inzet_30.png","images/Inzet_30_disabled.png","images/Inzet_30_selected.png","images/Score_bg.png","images/Inzet_10_hover.png","images/Inzet_20_hover.png","images/Inzet_30_hover.png","images/Achtergrond%20quiz_onze%20klanten_leeg.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
