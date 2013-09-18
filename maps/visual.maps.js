/*
colors, legend
Copyright (c) 2013 Institut d'Estadistica de Catalunya (Idescat)
http://www.idescat.cat (https://github.com/idescat/visual)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
VisualJS.func.colors=function(a,b,c,d){var e=document,f=function(a,b,c){var d;return 0>c?c+=1:c>1&&(c-=1),d=1>6*c?a+6*(b-a)*c:1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a,255*d},g=function(a){var e,g,h,i,j,k,b=a.h,c=a.s/100,d=a.l/100;return 0==c?i=j=k=255*d:(g=.5>=d?d*(c+1):d+c-d*c,e=2*d-g,h=b/360,i=f(e,g,h+1/3),j=f(e,g,h),k=f(e,g,h-1/3)),{r:Math.round(i),g:Math.round(j),b:Math.round(k)}},h=function(a){return parseInt(a,16)},i=function(a){return a=a.replace("#",""),{r:h(a.substr(0,2)),g:h(a.substr(2,2)),b:h(a.substr(4,2))}},j=function(a){var g,h,b=a.r/255,c=a.g/255,d=a.b/255,e=Math.max(b,c,d),f=Math.min(b,c,d),i=(e+f)/2;if(e==f)g=h=0;else{var j=e-f;switch(h=i>.5?j/(2-e-f):j/(e+f),e){case b:g=(c-d)/j+(d>c?6:0);break;case c:g=(d-b)/j+2;break;case d:g=(b-c)/j+4}g/=6}return{h:Math.floor(360*g),s:Math.floor(100*h),l:Math.floor(100*i)}},k=e.createElement("style"),l=new Array,m=j(i(a));k.setAttribute("type","text/css"),e.getElementsByTagName("head")[0].appendChild(k);for(var n=(97-m.l)/--b,o=0,p="";b>=o;)rgb=g(m),l[o]={r:rgb.r,g:rgb.g,b:rgb.b},p+="."+d+(b-o)+"{"+c+": rgb("+rgb.r+","+rgb.g+","+rgb.b+")}",o++,m.l+=n;return k.innerHTML=p,l},VisualJS.func.legend=function(a,b,c,d,e,f,g,h){var i=250,j=170,k=15,l=4,m=f.append("svg:g").attr("class","llegenda"),n=[{color:"fill:rgb("+e.r+","+e.g+","+e.b+")",text:"\u2265 "+b},{color:"fill:rgb("+d.r+","+d.g+","+d.b+"); ",text:"\u2264 "+c}],o=function(a){var b=document,c=b.createElement("span");c.visibility="hidden",c.innerHTML=a,b.body.appendChild(c);var d=c.getBoundingClientRect();return c.parentNode.removeChild(c),d},p=o(VisualJS.tooltipText(a,null,n[0].text)),q=Math.max(.9*f.attr("width")-Math.max(p.width,o(VisualJS.tooltipText(a,null,n[1].text)).width),.4*f.attr("width")),r=.65*f.attr("height"),t=r;h>j&&(m.selectAll("rect").data(n).enter().append("svg:rect").attr("x",q).attr("y",function(){return t+=k+l}).attr("width",k).attr("height",k).attr("style",function(a){return a.color}),h>i?(t=r+k/2+p.height/4,m.selectAll("text").data(n).enter().append("svg:text").attr("x",q+k+5).attr("y",function(){return t+=k+l}).text(function(b){return VisualJS.tooltipText(a,null,b.text)})):m.selectAll("rect").on("mousemove",function(b){VisualJS.showTooltip(VisualJS.tooltipText(a,null,b.text),d3.event.pageX,d3.event.pageY)}).on("mouseout",function(){g.style("display","none")}))};