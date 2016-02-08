i={//Ιοτα
 o:['css/proBar.css'],
 d:document,
 dss:'http://162.248.52.194/WorldTours/Pagina/',//data-searching-server
 hrf:wise_flights.src.split('all')[0],
 iR:Function('R','i.s.insertRule(R,i.s.cssRules.length)'),//insert in a new position
 js:(//async since pos3
  'all-templates:'+
  'min-1.11.1 sessvars easySlider1.5 fadetransition featureList-1.0.0 wslide skinned-select peloslideli.v1.0.1.min autocomplete cookies.2.1.0 swfobject dataTables jcarousel.min ui validationEngine validationEngine-es idletimeout idletimer:'+
  'ValidadorTarjeta Funciones Estilo ModalMensaje:'+
  'Hoteles:'+
  'search setDate:'+
  'VueloHotel:'+
  'widget').split(':'),
 nw:function(t,e){//tag, new Element
  i.d.head.appendChild(
   e=i.d.createElement(t>0?'style':'script'))[
    t>0?
     (i.iR(
      '@import "'+(i.hrf+i.o[0])+'"',
       i.s=i.s[i.s.length-1]),
       'hrf')
    :'src']=i.hrf+i.o.shift()
  i.PB()//i.pb,i.o.shift()
  i.o[0]?
   e.onload=i.nw
   //i.nw()
   :(
    i.bg(wise_flights.getAttribute('data-background-color'),i.s),
    i.pb.classList.remove('pro-bar'))},
 PB:function(){//ProgressBar
  i.pb?
   i.pb.setAttribute('style','width:'+(270/30*(30-i.o.length))+'px!important')
   :i.pb=ssoft_white_label_app.getElementsByClassName('ui-tabs-nav')[0]},
 url:function(o,d,j,p){//urlsObj, parentDirectory[d], file.js[j], position[p]
  i.dir=('js jquery js hoteles'+(j='/development/js')+' vuelos'+j+' vuelohotel'+j+' packages'+j).split(' ')
  i.s=i.d.styleSheets
  for(d in i.dir){
   o=i.js[d].split(' ')
   for(j in o)i.o.push(o[j]=i.dir[d]+'/'+o[j]+'.js')}
  i.nw(1)},
 bg:function(c,s,t){//colour, styleSheets[0], tab
  c=c.split(' ')
  for(t in c){
   i.iR('div#tabs>ul>li.ui-tabs-active:nth-child('+(++t)+'){background:'+c[--t])}}}

i.d.readyState=='complete'?
 i.url()
 :onload=i.url