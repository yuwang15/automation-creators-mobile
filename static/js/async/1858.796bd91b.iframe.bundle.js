"use strict";(self.webpackChunktag_web=self.webpackChunktag_web||[]).push([["1858"],{"../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-JWPE2WC7.mjs"(e,t,a){function r(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>r}),(0,a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-Y2CYZVJY.mjs").K)(r,"populateCommonDb")},"../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/diagram-UQ7AKVKN.mjs"(e,t,a){a.d(t,{diagram:()=>I});var r=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-JWPE2WC7.mjs"),i=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-CLGD4ZFX.mjs"),n=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-75Z2AOVW.mjs"),s=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-DU6HZSFF.mjs"),o=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-X3CZISLH.mjs"),l=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-Y2CYZVJY.mjs"),d=a("../../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs"),m={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},c={axes:[],curves:[],options:m},u=structuredClone(c),p=s.UI.radar,h=(0,l.K)(()=>(0,n.$t)({...p,...(0,s.zj)().radar}),"getConfig"),g=(0,l.K)(()=>u.axes,"getAxes"),x=(0,l.K)(()=>u.curves,"getCurves"),$=(0,l.K)(()=>u.options,"getOptions"),f=(0,l.K)(e=>{u.axes=e.map(e=>({name:e.name,label:e.label??e.name}))},"setAxes"),k=(0,l.K)(e=>{u.curves=e.map(e=>({name:e.name,label:e.label??e.name,entries:y(e.entries)}))},"setCurves"),y=(0,l.K)(e=>{if(void 0==e[0].axis)return e.map(e=>e.value);let t=g();if(0===t.length)throw Error("Axes must be populated before curves for reference entries");return t.map(t=>{let a=e.find(e=>e.axis?.$refText===t.name);if(void 0===a)throw Error("Missing entry for axis "+t.label);return a.value})},"computeCurveEntries"),v={getAxes:g,getCurves:x,getOptions:$,setAxes:f,setCurves:k,setOptions:(0,l.K)(e=>{let t=e.reduce((e,t)=>(e[t.name]=t,e),{});u.options={showLegend:t.showLegend?.value??m.showLegend,ticks:t.ticks?.value??m.ticks,max:t.max?.value??m.max,min:t.min?.value??m.min,graticule:t.graticule?.value??m.graticule},u.options.ticks>32&&(o.R.warn(`Radar diagram ticks (${u.options.ticks}) exceeds maximum allowed (32). Using 32 instead.`),u.options.ticks=32)},"setOptions"),getConfig:h,clear:(0,l.K)(()=>{(0,s.IU)(),u=structuredClone(c)},"clear"),setAccTitle:s.SV,getAccTitle:s.iN,setDiagramTitle:s.ke,getDiagramTitle:s.ab,getAccDescription:s.m7,setAccDescription:s.EI},w=(0,l.K)(e=>{(0,r.S)(e,v);let{axes:t,curves:a,options:i}=e;v.setAxes(t),v.setCurves(a),v.setOptions(i)},"populate"),C={parse:(0,l.K)(async e=>{let t=await (0,d.qg)("radar",e);o.R.debug(t),w(t)},"parse")},b=(0,l.K)((e,t,a,r)=>{let n=r.db,s=n.getAxes(),o=n.getCurves(),l=n.getOptions(),d=n.getConfig(),m=n.getDiagramTitle(),c=K((0,i.D)(t),d),u=l.max??Math.max(...o.map(e=>Math.max(...e.entries))),p=l.min,h=Math.min(d.width,d.height)/2;_(c,s,h,l.ticks,l.graticule),L(c,s,h,d),M(c,s,o,p,u,l.graticule,d),j(c,o,l.showLegend,d),c.append("text").attr("class","radarTitle").text(m).attr("x",0).attr("y",-d.height/2-d.marginTop)},"draw"),K=(0,l.K)((e,t)=>{let a=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,i={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return(0,s.a$)(e,r,a,t.useMaxWidth??!0),e.attr("viewBox",`0 0 ${a} ${r}`).attr("overflow","visible"),e.append("g").attr("transform",`translate(${i.x}, ${i.y})`)},"drawFrame"),_=(0,l.K)((e,t,a,r,i)=>{if("circle"===i)for(let t=0;t<r;t++){let i=a*(t+1)/r;e.append("circle").attr("r",i).attr("class","radarGraticule")}else if("polygon"===i){let i=t.length;for(let n=0;n<r;n++){let s=a*(n+1)/r,o=t.map((e,t)=>{let a=2*t*Math.PI/i-Math.PI/2,r=s*Math.cos(a),n=s*Math.sin(a);return`${r},${n}`}).join(" ");e.append("polygon").attr("points",o).attr("class","radarGraticule")}}},"drawGraticule"),L=(0,l.K)((e,t,a,r)=>{let i=t.length;for(let n=0;n<i;n++){let s=t[n].label,o=2*n*Math.PI/i-Math.PI/2,l=Math.cos(o),d=Math.sin(o);e.append("line").attr("x1",0).attr("y1",0).attr("x2",a*r.axisScaleFactor*l).attr("y2",a*r.axisScaleFactor*d).attr("class","radarAxisLine");let m=l>.01?"start":l<-.01?"end":"middle",c=d>.01?"hanging":d<-.01?"auto":"central";e.append("text").text(s).attr("x",a*r.axisLabelFactor*l+4*l).attr("y",a*r.axisLabelFactor*d+4*d).attr("text-anchor",m).attr("dominant-baseline",c).attr("class","radarAxisLabel")}},"drawAxes");function M(e,t,a,r,i,n,s){let o=t.length,l=Math.min(s.width,s.height)/2;a.forEach((t,a)=>{if(t.entries.length!==o)return;let d=t.entries.map((e,t)=>{let a=2*Math.PI*t/o-Math.PI/2,n=T(e,r,i,l);return{x:n*Math.cos(a),y:n*Math.sin(a)}});"circle"===n?e.append("path").attr("d",A(d,s.curveTension)).attr("class",`radarCurve-${a}`):"polygon"===n&&e.append("polygon").attr("points",d.map(e=>`${e.x},${e.y}`).join(" ")).attr("class",`radarCurve-${a}`)})}function T(e,t,a,r){return r*(Math.min(Math.max(e,t),a)-t)/(a-t)}function A(e,t){let a=e.length,r=`M${e[0].x},${e[0].y}`;for(let i=0;i<a;i++){let n=e[(i-1+a)%a],s=e[i],o=e[(i+1)%a],l=e[(i+2)%a],d={x:s.x+(o.x-n.x)*t,y:s.y+(o.y-n.y)*t},m={x:o.x-(l.x-s.x)*t,y:o.y-(l.y-s.y)*t};r+=` C${d.x},${d.y} ${m.x},${m.y} ${o.x},${o.y}`}return`${r} Z`}function j(e,t,a,r){if(!a)return;let i=(r.width/2+r.marginRight)*3/4,n=-(3*(r.height/2+r.marginTop))/4;t.forEach((t,a)=>{let r=e.append("g").attr("transform",`translate(${i}, ${n+20*a})`);r.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${a}`),r.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(t.label)})}(0,l.K)(M,"drawCurves"),(0,l.K)(T,"relativeRadius"),(0,l.K)(A,"closedRoundCurve"),(0,l.K)(j,"drawLegend");var S=(0,l.K)((e,t)=>{let a="";for(let r=0;r<e.THEME_COLOR_LIMIT;r++){let i=e[`cScale${r}`];a+=`
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`}return a},"genIndexStyles"),D=(0,l.K)(e=>{let t=(0,s.P$)(),a=(0,s.zj)(),r=(0,n.$t)(t,a.themeVariables),i=(0,n.$t)(r.radar,e);return{themeVariables:r,radarOptions:i}},"buildRadarStyleOptions"),I={parser:C,db:v,renderer:{draw:b},styles:(0,l.K)(({radar:e}={})=>{let{themeVariables:t,radarOptions:a}=D(e);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${a.axisColor};
		stroke-width: ${a.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${a.axisLabelFontSize}px;
		color: ${a.axisColor};
	}
	.radarGraticule {
		fill: ${a.graticuleColor};
		fill-opacity: ${a.graticuleOpacity};
		stroke: ${a.graticuleColor};
		stroke-width: ${a.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${a.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${S(t,a)}
	`},"styles")}}}]);
//# sourceMappingURL=1858.796bd91b.iframe.bundle.js.map