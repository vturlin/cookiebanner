//VARIABLES
var dl_domain='monnouveaum2.com'; //le domaine du site sur lequel la banniÃ¨re doit Ãªtre dÃ©clenchÃ©e
var dl_policies='https://monnouveaum2.com/politique-de-confidentialite/'; //le lien vers les policies du site
var dl_logo="https://monnouveaum2.com/wp-content/uploads/2022/05/Logo-Mon-Nouveau-m2.svg";//le logo du site, au format png
var dl_couleur_primaire="98,0,238";//couleur primaire de la charte du site 
var dl_css='https://github.com/vturlin/cookiebanner/blob/77163d3fd3547edc2ae698ac80cbaae6511e236a/Banner.css';//lien vers le fichier CSS
var dl_police='https://fonts.googleapis.com/css?family=Roboto&display=swap';//lien vers la police de la charte du site

//FONCTIONS JAVASCRIPT
function setCookie(consent) {//function to set cookie on domain
	function addDaysToDate(date, days){  //function to create neux expiring date for cookie
    				var res = new Date(date);
    				res.setDate(res.getDate() + days);
    				return res;}

		var date_now = Date()
		var expires = addDaysToDate(date_now,365)
		document.cookie = 'consent_mode='+ consent + ';expires=' + expires + ';domain=.' + dl_domain + ';path=/'
		dataLayer.push({  //add the updated information to the dataLayer
		'event':'consent_mode_updated',
		'consent_mode' : consent
	})}

function newCookie(a) {//function to set cookie on domain

  function addDaysToDate(date, days){  //function to create new expiring date for cookie
    				var res = new Date(date);
    				res.setDate(res.getDate() + days);
    				return res;}
  
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
var date_now = Date()
var id = Date.now() + '.' + makeid(3)
var expires = addDaysToDate(date_now,365)
		document.cookie = 'consent_record='+ id + ';expires=' + expires + ';domain=.' + dl_domain + ';path=/'
}

function getCookie(cname){
	var decodedCookie = decodeURIComponent(document.cookie)
	var ca = decodedCookie.split(';')
	var name = cname + '='
	for( var i = 0 ; i < ca.length ; i++){
		var c = ca[i]
		while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);}}
  return 'absent'
}

function redirect(){// function to activate preference center	
		var preference_center = document.getElementById('preference_center')
		var message = document.getElementById('message')
		message.setAttribute('style','padding:2%;display:none')
		preference_center.setAttribute('style','padding:2%; display:block')
}

function pop(button) {		
		var check_mode = button.getAttribute('check_mode')
		if(check_mode.indexOf('none')!=-1){
		button.setAttribute('check_mode','checked')
		}
		else {button.setAttribute('check_mode','none')}
}

//STRUCTURE HTML/CSS	
var consent_record = getCookie('consent_record')//if the cookie isn't set then create it empty
var consent_mode = getCookie('consent_mode')
if(consent_record == "absent" || consent_mode == "absent" || consent_mode == "empty" ){
		
		setCookie('empty')

var css_link = document.createElement('link')
css_link.setAttribute('rel','stylesheet')
css_link.setAttribute('href',dl_css)
document.head.appendChild(css_link)

var font_link = document.createElement('link')
font_link.setAttribute('rel','stylesheet')
font_link.setAttribute('href',dl_police)
document.head.appendChild(font_link)

var banner_creat = document.createElement('div')
banner_creat.setAttribute('id','creat_banner')
document.body.appendChild(banner_creat)
banner_creat.insertAdjacentHTML('afterbegin','<div id="banner" class="cmpbanner"><div id="mask" class="cmpmask"><div id="containerauto" class="cmpcontainerauto">')

var center_creat = document.getElementById('containerauto')
center_creat.insertAdjacentHTML('afterbegin','<div id="preference_center"style="padding:2%;display:none;"><div class="cmpwrapper_1"> <div class="cmplogo" id="logo_pref_center"><img style="width:40px;height:30px;" src='+dl_logo+'> </div> <span class="cmptitle" id="title_pref_center">Centre de prÃ©fÃ©rences</span></div><p class="cmpdescription_center">Lorsque vous consultez un site Web, des donnÃ©es peuvent Ãªtre stockÃ©es dans votre navigateur ou rÃ©cupÃ©rÃ©es Ã  partir de celui-ci, gÃ©nÃ©ralement sous la forme de cookies. Ces informations peuvent porter sur vous, sur vos prÃ©fÃ©rences ou sur votre appareil et sont principalement utilisÃ©es pour s\'assurer que le site Web fonctionne correctement. Les informations ne permettent gÃ©nÃ©ralement pas de vous identifier directement, mais peuvent vous permettre de bÃ©nÃ©ficier d\'une expÃ©rience Web personnalisÃ©e. Parce que nous respectons votre droit Ã  la vie privÃ©e, nous vous donnons la possibilitÃ© de ne pas autoriser certains types de cookies. Cliquez sur les diffÃ©rentes catÃ©gories pour obtenir plus de dÃ©tails sur chacune d\'entre elles, et modifier les paramÃ¨tres par dÃ©faut. Toutefois, si vous bloquez certains types de cookies, votre expÃ©rience de navigation et les services que nous sommes en mesure de vous offrir peuvent Ãªtre impactÃ©s.</p><div class="cmpcategory" id="category" style="overflow:hidden;overflow-y:scroll;max-height:300px;"> <div class="cmpcategory_1" id="category_1"> <span class="cmpcat_title">Cookies strictement nÃ©cessaires :</span> <p class="cmpcat_description">Ces cookies sont absolument necessaires au bon fonctionnement de notre site et ne peuvent Ãªtre dÃ©sactivÃ©s.</p> <div class="toggle_validation" id="toggle_validation"><label class="switch"><input type="checkbox"id="check_1" check_mode="checked" disabled="disabled" checked onclick="pop(this)"><span class="slider round"></span></label></div> </div> <div class="cmpcategory_2" id="category_2" > <span class="cmpcat_title">Cookies de mesure de la performance:</span> <p class="cmpcat_description">Ces cookies nous permettent de mesurer l\'activitÃ© des utilisateurs sur notre site. Ils nous sont importants pour vous proposer une naviagation et du contenu adaptÃ©s.</p> <div class="toggle_validation" id="toggle_validation"><label class="switch"><input type="checkbox" id="check_2"check_mode="none"onclick="pop(this)"><span class="slider round"></span> </label></div>  </div> <div class="cmpcategory_2" id="category_3"> <span class="cmpcat_title">Cookies de fonctionnalitÃ©:</span> <p class="cmpcat_description">Ces cookies nous permettent de mettre en oeuvre des fonctionnalitÃ©s de personnalisation de votre expÃ©rience sur notre site</p> <div class="toggle_validation" id="toggle_validation"><label class="switch"><input type="checkbox"id="check_3"check_mode="none"onclick="pop(this)"><span class="slider round"></span></label></div> </div> <div class="cmpcategory_2" id="category_4"> <span class="cmpcat_title">Cookies de publicitÃ© ciblÃ©e:</span> <p class="cmpcat_description">Ces cookies peuvent Ãªtre dÃ©posÃ©s par nos partenaires publicitaires afin de vous proposer des publicitÃ©s sur des contenus pertinents et qui vous intÃ©ressent.</p> <div class="toggle_validation" id="toggle_validation"><label class="switch"><input type="checkbox"id="check_4"check_mode="none"onclick="pop(this)"> <span class="slider round"> </span> </label></div> </div> </div> <div> <div class="cmpbutton_1" type="button" id="save_choice">SAUVEGARDER MA SELECTION</div> </div> </div> ')
 
var message_creat = document.getElementById('containerauto')
message_creat.insertAdjacentHTML('beforeend','<div id="message"style="padding:2%;display:block;" ><div class="cmpwrapper_1" id="title" style="display:grid;grid-template-columns:50px auto auto;grid-auto-rows:minmax(20px,auto);align-items:center;"> <div class="cmplogo" style="grid-column:1/3;grid-row:1;"><img style="width:40px;height:30px;" src='+dl_logo+'></div> <span class="cmptitle" style= "grid-column:2/3;grid-row:1;">Nous respectons votre vie privÃ©e</span> <div id="denied" type="button" class="cmpbutton_3">continuer sans accepter</div> </div> <p class="cmpdescription">DIGITALinkers utilise des cookies pour personnaliser le contenu et vous offrir une expÃ©rience sur mesure. Vous pouvez gÃ©rer vos prÃ©fÃ©rences et en savoir plus en cliquant sur "ParamÃ¨tres des cookies" et Ã  tout moment dans notre <a href='+dl_policies+' class="cmplink">Politique de confidentialitÃ©.</a></p><div id="wrapper"style="display:grid;grid-template-columns:repeat(3,1fr);grid-gap:30px;grid-auto-rows:minmax(30px,auto);align-items:center;"> <div class="cmpbutton_2" id="accept"type="button">ACCEPTER</div>	<div class="cmpfavoritestyled2" id="parameter"onclick="redirect(this)"type="button">PERSONNALISER MES CHOIX</div> </div> </div></div>')

window.dataLayer = window.dataLayer || [];
var banner = document.getElementById('banner')

var screen_height = window.screen.availHeight
var screen_measure =  window.screen.availWidth
if(screen_measure <= 700){
    var mask = document.getElementById('mask')
mask.setAttribute('style','background:#0000008c;position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%;')

var title = document.getElementById('title')
title.setAttribute('style','display:grid;grid-template-columns:auto auto auto;grid-auto-rows:minmax(20px,auto);align-items:center;margin-bottom:15px;grid-template-columns:50px auto auto;')
  
var container = document.getElementById('containerauto')
container.setAttribute('style','position:relative;background:white;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);width:auto;max-height:100%;overflow:hidden;overflow-y:scroll;font-family:roboto;padding:2%')
  
var wrapper = document.getElementById('wrapper')
wrapper.setAttribute('style','display:grid;grid-template-columns:repeat(1,1fr);grid-gap:10px;grid-auto-rows:minmax(50px,auto);align-items:center;')
  
var button_denied= document.getElementById('parameter')
button_denied.setAttribute('style','grid-column: 1;grid-row: 2/2;border: 0;font-size:0.9rem;color:rgba('+dl_couleur_primaire+',1);background-color:white;font-family:roboto;text-align:center;')
	var button_accept= document.getElementById('accept')
	button_accept.setAttribute('style','grid-column: 1;grid-row: 1/2;border:0;padding:1px;font-size:0.9rem;font-family:roboto;text-align:center;color:rgba('+dl_couleur_primaire+',1);background-color:rgba('+dl_couleur_primaire+',0.12);border-radius:4px')

var logo_pref= document.getElementById('logo_pref_center')
logo_pref.setAttribute('style','grid-column:1/3;grid-row:1;')

var title_pref= document.getElementById('title_pref_center')
title_pref.setAttribute('style','text-align:left;grid-column:2/3;grid-row:1;border:0;font-family:roboto;font-size:1.1rem;')

var category= document.getElementById('category')
category.setAttribute('style','')
var toggle = document.querySelectorAll('[id^="toggle_validation"]')
toggle.forEach(function(a){
	a.setAttribute('style','left:85%')
})

}

		var check_box_2 = document.getElementById('check_2')
		check_box_2.addEventListener('click',function(){
		var check_mode_2 = check_box_2.getAttribute('check_mode')
		if(check_mode_2.indexOf('checked')!=-1){
			var cat_i_string_2 = document.getElementById('category_2')
			cat_i_string_2.setAttribute('style','position:relative;background:rgba('+dl_couleur_primaire+',0.12);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba('+dl_couleur_primaire+');')
			}
		else {
			var cat_i_string_2 = document.getElementById('category_2')
			cat_i_string_2.setAttribute('style','background:rgba(192,192,192,0.38);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba(192,192,192);')
}})

var check_box_3 = document.getElementById('check_3')
		check_box_3.addEventListener('click',function(){
		var check_mode_3 = check_box_3.getAttribute('check_mode')
		if(check_mode_3.indexOf('checked')!=-1){
			var cat_i_string_3 = document.getElementById('category_3')
			cat_i_string_3.setAttribute('style','position:relative;background:rgba('+dl_couleur_primaire+',0.12);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba('+dl_couleur_primaire+');')
			}
		else {
			var cat_i_string_3 = document.getElementById('category_3')
			cat_i_string_3.setAttribute('style','background:rgba(192,192,192,0.38);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba(192,192,192);')
}})

		var check_box_4 = document.getElementById('check_4')
		check_box_4.addEventListener('click',function(){
		var check_mode_4 = check_box_4.getAttribute('check_mode')
		if(check_mode_4.indexOf('checked')!=-1){
			var cat_i_string = document.getElementById('category_4')
			cat_i_string.setAttribute('style','position:relative;background:rgba('+dl_couleur_primaire+',0.12);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba('+dl_couleur_primaire+');')
			}
		else {
			var cat_i_string = document.getElementById('category_4')
			cat_i_string.setAttribute('style','background:rgba(192,192,192,0.38);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba(192,192,192);')
}})
		var accept = document.getElementById('accept')
accept.addEventListener('click',function(){ //function on accept CTA click 
		setCookie('1,2,3,4')
        newCookie('1,2,3,4')
		banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;')
})
var denied = document.getElementById('denied')
denied.addEventListener('click',function(){  //function on refuse CTA click
		setCookie('1')
        newCookie('1')
		banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;')
})

var save_choice = document.getElementById('save_choice')
save_choice.addEventListener('click',function(){
var check_box = document.querySelectorAll('[id^="check_"]')
var consent_cat = [1]
for(var i=1 ; i<check_box.length; i++){
	var check_mode = check_box[i].getAttribute('check_mode')
		if(check_mode.indexOf('checked')!=-1){
			consent_cat.push(i+1)}}

var consent_mode = consent_cat.toString()
dataLayer.push({
	event:'consent_mode_updated',
	'consent_mode' : consent_mode
})
setCookie(consent_mode)
newCookie(consent_mode)
banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;')
})
} // displays the banner
  else {dataLayer.push({
	event:'consent_mode_updated',
	'consent_mode' : consent_mode
})
}
