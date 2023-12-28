//VARIABLES
//var banner_domain='monnouveaum2.com'; //le domaine du site sur lequel la banniÃ¨re doit Ãªtre dÃ©clenchÃ©e
//var policies='https://monnouveaum2.com/politique-de-confidentialite/'; //le lien vers les policies du site
//var banner_logo="https://monnouveaum2.com/wp-content/uploads/2022/05/Logo-Mon-Nouveau-m2.svg";//le logo du site, au format png
//var custom_color="198,206,0";//couleur primaire de la charte du site 
var dl_css='https://vturlin.github.io/cookiebanner/Banner.css';//lien vers le fichier CSS
var dl_police='https://fonts.googleapis.com/css?family=Roboto&display=swap';//lien vers la police de la charte du site

//FONCTIONS JAVASCRIPT
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

function GCM_setdefaultconsent(){
	gtag('consent', 'default', {
  	  'ad_storage': "denied",
	  'analytics_storage': "denied",
	  'functionality_storage': "denied",
	  'personalization_storage': "denied",
	  'security_storage': "granted",
	  'ad_user_data': "denied",
	  'ad_personalization': "denied"
	});
}

function GCM_setupdatedconsent_ads(consent){	
	consent.includes('4') ? 
	gtag('consent', 'update', {
    	'ad_storage': 'granted',
	'ad_personalization': 'granted',
	'ad_user_data': 'granted',
  	})
	:
	gtag('consent', 'update', {
    	'ad_storage': 'denied',
	'ad_personalization': 'denied',
	'ad_user_data': 'granted'
  	})
}
function GCM_setupdatedconsent_perso(consent){
	consent.includes('3') ? 
	gtag('consent', 'update', {
    	'functionality_storage': "granted",
	'personalization_storage': "granted",
  	}):
	gtag('consent', 'update', {
    	'functionality_storage': "denied",
	'personalization_storage': "denied",
  	})
}		
function GCM_setupdatedconsent_all(){
	gtag('consent', 'update', {
  	  'ad_storage': "granted",
	  'analytics_storage': "granted",
	  'functionality_storage': "granted",
	  'personalization_storage': "granted",
	  'security_storage': "granted",
	  'ad_user_data': "granted",
	  'ad_personalization': "granted"
  	})
}

function GCM_setupdatedconsent_denied(){
		gtag('consent', 'update', {
  	  'ad_storage': "denied",
	  'analytics_storage': "denied",
	  'functionality_storage': "denied",
	  'personalization_storage': "denied",
	  'security_storage': "granted",
	  'ad_user_data': "denied",
	  'ad_personalization': "denied"
	})
}
	
function GCM_setupdatedconsent_analytics(consent){
	consent.includes('2') ?
	gtag('consent', 'update', {
    	'analytics_storage': 'granted'
  	})
	:
	gtag('consent', 'update', {
    	'analytics_storage': 'denied'
  	})
}
	
function setCookie(consent) {//function to set cookie on domain
	function addDaysToDate(date, days){  //function to create neux expiring date for cookie
    				var res = new Date(date);
    				res.setDate(res.getDate() + days);
    				return res;}

		var date_now = Date()
		var expires = addDaysToDate(date_now,365)
		document.cookie = 'consent_mode='+ consent + ';expires=' + expires + ';domain=.' + banner_domain + ';path=/'
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
		document.cookie = 'consent_record='+ id + ';expires=' + expires + ';domain=.' + banner_domain + ';path=/'
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
		message.setAttribute('style','padding:4%;display:none')
		preference_center.setAttribute('style','padding:4%; display:block')
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
GCM_setdefaultconsent()
if(consent_record == "absent" || consent_mode == "absent" || consent_mode == "empty" ){
		
		setCookie('empty')
		
var css_link = document.createElement('link')
css_link.setAttribute('rel','stylesheet')
css_link.setAttribute('type','text/css')	
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
center_creat.insertAdjacentHTML('afterbegin','<div id="preference_center"style="padding:2%;display:none;"><div class="cmpwrapper2"> <div class="cmplogo" id="logo_pref_center"><img style="width:80px;height:60px;" src='+banner_logo+'> </div> <span class="cmptitleprefcenter" id="title_pref_center">Centre de préférences</span></div><span class="cmpdescription_center">Lorsque vous consultez un site Web, des données peuvent être stockées dans votre navigateur ou récupérées à partir de celui-ci, généralement sous la forme de cookies. Ces informations peuvent porter sur vous, sur vos préférences ou sur votre appareil et sont principalement utilisées pour s\'assurer que le site Web fonctionne correctement. Les informations ne permettent généralement pas de vous identifier directement, mais peuvent vous permettre de bénéficier d\'une expérience Web personnalisée. Parce que nous respectons votre droit à la vie privée, nous vous donnons la possibilité de ne pas autoriser certains types de cookies. Cliquez sur les différentes catégories pour obtenir plus de détails sur chacune d\'entre elles, et modifier les paramètres par défaut. Toutefois, si vous bloquez certains types de cookies, votre expérience de navigation et les services que nous sommes en mesure de vous offrir peuvent être impactés.</span><div class="cmpcategory" id="category"> <div class="cmpcategory_1" id="category_1"> <span class="cmpcat_title">Cookies strictement nécessaires :</span> <span class="cmpcat_description">Ces cookies sont absolument nécessaires au bon fonctionnement de notre site et ne peuvent être désactivés.</span> <div class="toggle_validation" id="toggle_validation"><label class="switch"><input type="checkbox"id="check_1" check_mode="checked" disabled="disabled" checked onclick="pop(this)"><span class="slider round"></span></label></div> </div> <div class="cmpcategory_2" id="category_2" > <span class="cmpcat_title">Cookies de mesure de la performance:</span> <span class="cmpcat_description">Ces cookies nous permettent de mesurer l\'activité des utilisateurs sur notre site. Ils nous sont importants pour vous proposer une naviagation et du contenu adaptés.</span> <div class="toggle_validation" id="toggle_validation"><label class="switch"><input type="checkbox" id="check_2"check_mode="none"onclick="pop(this)"><span class="slider round"></span> </label></div>  </div> <div class="cmpcategory_2" id="category_3"> <span class="cmpcat_title">Cookies de fonctionnalité:</span> <span class="cmpcat_description">Ces cookies nous permettent de mettre en oeuvre des fonctionnalités de personnalisation de votre expérience sur notre site</span> <div class="toggle_validation" id="toggle_validation"><label class="switch"><input type="checkbox"id="check_3"check_mode="none"onclick="pop(this)"><span class="slider round"></span></label></div> </div> <div class="cmpcategory_2" id="category_4"> <span class="cmpcat_title">Cookies de publicité ciblée:</span> <span class="cmpcat_description">Ces cookies peuvent être déposés par nos partenaires publicitaires afin de vous proposer des publicités sur des contenus pertinents et qui vous intéressent.</span> <div class="toggle_validation" id="toggle_validation"><label class="switch"><input type="checkbox"id="check_4"check_mode="none"onclick="pop(this)"> <span class="slider round"> </span> </label></div> </div> </div> <div> <div class="cmpbutton1" type="button" id="save_choice">SAUVEGARDER MA SELECTION</div> </div> </div> ')
 
var message_creat = document.getElementById('containerauto')
message_creat.insertAdjacentHTML('beforeend','<div id="message"style="padding:4%;display:block;" ><div class="cmpwrapper1" id="title"> <div class="cmplogo" style="grid-column:1/3;grid-row:1;"><img style="width:80px;height:40px;" src='+banner_logo+'></div> <span class="cmptitle" style= "grid-column:2/3;grid-row:1;">NOUS RESPECTONS VOTRE VIE PRIVEE</span> <div id="denied" type="button" class="cmpbutton3">continuer sans accepter</div> </div> <span class="cmpdescription">Mon Nouveau mètre carré utilise des cookies pour personnaliser le contenu et vous offrir une expérience sur mesure. Vous pouvez gérer vos préférences et en savoir plus en cliquant sur "Paramètres des cookies" et à tout moment dans notre <a href='+policies+' class="cmplink">Politique de confidentialité.</a></sp><div id="wrapper"style="display:grid;grid-template-columns:repeat(3,1fr);grid-gap:30px;grid-auto-rows:minmax(30px,auto);align-items:center;"> <div class="cmpbutton2" id="accept"type="button">ACCEPTER</div>	<div class="cmpfavoritestyled2" id="parameter"onclick="redirect(this)"type="button">PERSONNALISER MES CHOIX</div> </div> </div></div>')

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
button_denied.setAttribute('style','grid-column: 1;grid-row: 2/2;border: 0;font-size:0.9rem;color:rgba('+custom_color+',1);background-color:white;font-family:roboto;text-align:center;')
	var button_accept= document.getElementById('accept')
	button_accept.setAttribute('style','grid-column: 1;grid-row: 1/2;border:0;padding:1px;font-size:0.9rem;font-family:roboto;text-align:center;color:rgba('+custom_color+',1);background-color:rgba('+custom_color+',0.12);border-radius:4px')

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
			cat_i_string_2.setAttribute('style','position:relative;background:rgba('+custom_color+',0.12);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba('+custom_color+');')
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
			cat_i_string_3.setAttribute('style','position:relative;background:rgba('+custom_color+',0.12);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba('+custom_color+');')
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
			cat_i_string.setAttribute('style','position:relative;background:rgba('+custom_color+',0.12);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba('+custom_color+');')
			}
		else {
			var cat_i_string = document.getElementById('category_4')
			cat_i_string.setAttribute('style','background:rgba(192,192,192,0.38);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba(192,192,192);')
}})
		var accept = document.getElementById('accept')
accept.addEventListener('click',function(){ //function on accept CTA click 
		var consent_update = '1,2,3,4'
		setCookie(consent_update)
        	newCookie(consent_update)
		GCM_setupdatedconsent_all()
		banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;')
})
var denied = document.getElementById('denied')
denied.addEventListener('click',function(){  //function on refuse CTA click
		var consent_update = '1'
		setCookie(consent_update)
        	newCookie(consent_update)
		GCM_setupdatedconsent_denied()
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
GCM_setupdatedconsent_ads(consent_mode)
GCM_setupdatedconsent_analytics(consent_mode)
GCM_setupdatedconsent_perso(consent_mode)
banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;')
})
} // displays the banner
  else {dataLayer.push({
	event:'consent_mode_updated',
	'consent_mode' : consent_mode
})
GCM_setupdatedconsent_ads(consent_mode)
GCM_setupdatedconsent_analytics(consent_mode)
GCM_setupdatedconsent_perso(consent_mode)
}
