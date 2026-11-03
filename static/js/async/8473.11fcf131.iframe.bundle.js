"use strict";(self.webpackChunktag_web=self.webpackChunktag_web||[]).push([["8473"],{"../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-JWPE2WC7.mjs"(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-Y2CYZVJY.mjs").K)(i,"populateCommonDb")},"../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/pieDiagram-E7YTZNPT.mjs"(e,t,a){a.d(t,{diagram:()=>y});var i=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-JWPE2WC7.mjs"),r=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-CLGD4ZFX.mjs"),l=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-75Z2AOVW.mjs"),s=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-DU6HZSFF.mjs"),n=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-X3CZISLH.mjs"),d=a("../../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-Y2CYZVJY.mjs"),o=a("../../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs"),m=a("../../node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js"),c=s.UI.pie,p={sections:new Map,showData:!1,config:c},u=p.sections,h=p.showData,g=structuredClone(c),f=(0,d.K)(()=>structuredClone(g),"getConfig"),k=(0,d.K)(()=>{u=new Map,h=p.showData,(0,s.IU)()},"clear"),w=(0,d.K)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,t),n.R.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),x=(0,d.K)(()=>u,"getSections"),$=(0,d.K)(e=>{h=e},"setShowData"),S=(0,d.K)(()=>h,"getShowData"),C={getConfig:f,clear:k,setDiagramTitle:s.ke,getDiagramTitle:s.ab,setAccTitle:s.SV,getAccTitle:s.iN,setAccDescription:s.EI,getAccDescription:s.m7,addSection:w,getSections:x,setShowData:$,getShowData:S},D=(0,d.K)((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),_={parse:(0,d.K)(async e=>{let t=await (0,o.qg)("pie",e);n.R.debug(t),D(t,C)},"parse")},b=(0,d.K)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),T=(0,d.K)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),a=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return(0,m.rLf)().value(e=>e.value).sort(null)(a)},"createPieArcs"),y={parser:_,db:C,renderer:{draw:(0,d.K)((e,t,a,i)=>{n.R.debug("rendering pie chart\n"+e);let d=i.db,o=(0,s.D7)(),c=(0,l.$t)(d.getConfig(),o.pie),p=(0,r.D)(t),u=p.append("g");u.attr("transform","translate(225,225)");let{themeVariables:h}=o,[g]=(0,l.I5)(h.pieOuterStrokeWidth);g??=2;let f=c.legendPosition,k=c.textPosition,w=c.donutHole>0&&c.donutHole<=.9?c.donutHole:0,x=(0,m.JLW)().innerRadius(185*w).outerRadius(185),$=(0,m.JLW)().innerRadius(185*k).outerRadius(185*k),S=u.append("g");S.append("circle").attr("cx",0).attr("cy",0).attr("r",185+g/2).attr("class","pieOuterCircle");let C=d.getSections(),D=T(C),_=[h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12],b=0;C.forEach(e=>{b+=e});let y=D.filter(e=>"0"!==(e.data.value/b*100).toFixed(0)),v=(0,m.UMr)(_).domain([...C.keys()]);S.selectAll("mySlices").data(y).enter().append("path").attr("d",x).attr("fill",e=>v(e.data.label)).attr("class",e=>{let t="pieCircle";return"hover"===c.highlightSlice?t+=" highlightedOnHover":c.highlightSlice===e.data.label&&(t+=" highlighted"),t}),S.selectAll("mySlices").data(y).enter().append("text").text(e=>(e.data.value/b*100).toFixed(0)+"%").attr("transform",e=>"translate("+$.centroid(e)+")").style("text-anchor","middle").attr("class","slice");let j=u.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText"),A=[...C.entries()].map(([e,t])=>({label:e,value:t})),K=u.selectAll(".legend").data(A).enter().append("g").attr("class","legend");K.append("rect").attr("width",18).attr("height",18).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),K.append("text").attr("x",22).attr("y",14).text(e=>d.getShowData()?`${e.label} [${e.value}]`:e.label);let W=Math.max(...K.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),O=450,R=490,F=22*A.length;switch(f){case"center":K.attr("transform",(e,t)=>"translate("+(-W/2-22)+","+(22*t-22*A.length/2)+")");break;case"top":O+=F,K.attr("transform",(e,t)=>`translate(${-W/2-22}, ${22*t-185})`),S.attr("transform",()=>`translate(0, ${F+22})`);break;case"bottom":O+=F,K.attr("transform",(e,t)=>"translate("+(-W/2-22)+","+(22*t- -207)+")");break;case"left":R+=22+W,K.attr("transform",(e,t)=>"translate(-207,"+(22*t-22*A.length/2)+")"),S.attr("transform",()=>`translate(${W+18+4}, 0)`);break;default:R+=22+W,K.attr("transform",(e,t)=>"translate(216,"+(22*t-22*A.length/2)+")")}let H=j.node()?.getBoundingClientRect().width??0,L=Math.min(0,225-H/2),M=Math.max(R,225+H/2)-L;p.attr("viewBox",`${L} 0 ${M} ${O}`),(0,s.a$)(p,O,M,c.useMaxWidth)},"draw")},styles:b}}}]);
