<script>
  
var banner_creat = document.createElement('div')
banner_creat.setAttribute('id','creat_banner')
document.body.appendChild(banner_creat)
banner_creat.insertAdjacentHTML('afterbegin','<div id="banner"style="position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none"><div id="mask"style="	background:#0000008c;position:fixed;top:0;right:0;bottom:0;left:0;"><div id="containerauto"style="	position:fixed;background:white;top:50%;transform:translate(0, -50%);height:auto;min-height:50px;max-width:600px;max-height: 90%;left:0;right:0;margin:auto;overflow:hidden;overflow-y:scroll;">')

var center_creat = document.getElementById('containerauto')
center_creat.insertAdjacentHTML('afterbegin','<div id="preference_center"style="padding:5%5%5%5%;display:none;"><h4 style="margin-bottom:1rem;">CENTRE DE PRÉFÉRENCE</h4><p style="margin-bottom:20px;">Ici vous pouvez modifier l\'état de votre consentement pour chacune des catégories de cookie présente sur notre site Certains cookies sont essentiels au bon fonctionnement du site, d\'autres contribuent à en améliorer les performances.</p><div class="pref_table"><div class="category_1"><h4>Cookies strictement nécessaires :</h4><p style="margin-bottom:10px;">Ces cookies sont absolument necessaires au bon fonctionnement de notre site et ne peuvent être désactivés.</p></div><div class="category_2"><h4>Cookies de mesure de la performance:</h4><p>Ces cookies nous permettent de mesurer l\'activité des utilisateurs sur notre site. Ils nous sont importants pour vous proposer une naviagation et du contenu adaptés.</p></div><div class="check_2"><input type="checkbox"id="check_2"check_mode="none"onclick="pop(this)"></div><div class="category_3"><h4>Cookies de fonctionnalité:</h4><p>Ces cookies nous permettent de mettre en oeuvre des fonctionnalités de personnalisation de votre expérience sur notre site</p></div><div class="check_3"><input type="checkbox"id="check_3"check_mode="none"onclick="pop(this)"></div><div class="category_4"><h4>Cookies de publicité ciblée:</h4><p>Ces cookies peuvent être déposés par nos partenaires publicitaires afin de vous proposer des publicités sur des contenus pertinents et qui vous intéressent.</p></div><div class="check_4"><input type="checkbox"id="check_4"check_mode="none"onclick="pop(this)"></div><div><button type="button" id="save_choice"style="right:0;left:0;margin:auto;background:black;color:white;postion:fixed;border:none;font-family:Prata;font-size:1.3rem;">Sauvegarder ma sélection</button></div></div></div>')
 
var message_creat = document.getElementById('containerauto')
message_creat.insertAdjacentHTML('beforeend','<div id="message"style="padding:5%5%5%5%;display:block;"><h4 style= "text-align:left;margin-left:20px;">NOUS RESPECTONS VOTRE VIE PRIVÉE</h3><div style= "text-align:justify;text-justify:auto;margin:20px;font-family:Prata;font-size:0.95rem" >Notre site utilise des cookies afin de vous garantir une expérience optimale et sur mesure. Vous pouvez toute fois personnaliser ce fonctionnement en acceptant ou refusant le dépos de cookies via notre centre de préférence.</h5><div id="wrapper"style="display:grid;grid-template-columns:repeat(2,1fr);grid-gap:40px;grid-auto-rows:minmax(40px,auto);margin-top:30px;margin-bottom:20px;"><button class="favoritestyled"id="accept"type="button"style="grid-column:2/2;grid-row:1;border:0;line-height:2;padding:1px;font-family:Prata;font-size:1.05rem;text-align:center;color:White;background-color:Black;">Accepter</button><button id="parameter"onclick="redirect(this)" class="favoritestyled"type="button"style="grid-column:1/2;grid-row:1;border:0;line-height:2;padding:1px;font-size:1.05rem;text-align:center;color:White;background-color:Black;font-family:Prata;">Paramètres des cookies</button></div><div class="three"style><button class="buttonaccept" id="denied"style="padding:0;background-color:white;border: none;font-family:Prata;font-size:1rem;color:black">Continuer sans accepter</button></div></div></div></div>')
                                          
var banner = document.getElementById('banner')

var screen_height = window.screen.availHeight
var screen_measure =  window.screen.availWidth
if(screen_measure <= 550){
    var para = document.querySelectorAll('p')
    for(var i = 0;i<para.length; i++){para[i].setAttribute('style','margin-top:5px;line-height: 20px')}
    var mask = document.getElementById('mask')
mask.setAttribute('style','background:#0000008c;position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%;')
  
var container = document.getElementById('containerauto')
container.setAttribute('style','position: relative;background: white;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);width:auto;height:auto;')
  
var wrapper = document.getElementById('wrapper')
wrapper.setAttribute('style','display:grid;grid-template-columns:repeat(1,1fr);grid-gap:10px;grid-auto-rows:minmax(50px,auto);')
  
var button_denied= document.getElementById('parameter')
button_denied.setAttribute('style','grid-column: 1;grid-row: 2/2;border: 0;line-height: 2.5;padding: 0 20px;font-size: 1rem;text-align: center;color:white;background-color:black;')
	var button_accept= document.getElementById('accept')
	button_accept.setAttribute('style','grid-column: 1;grid-row: 1/2;border: 0;line-height: 2.5;padding: 0 20px;font-size: 1rem;text-align:center;color:white;background-color:black;')
}
function setCookie(consent) {//function to set cookie on domain

		function addDaysToDate(date, days){  //function to create neux expiring date for cookie
    				var res = new Date(date);
    				res.setDate(res.getDate() + days);
    				return res;}

		var date_now = Date()
		var expires = addDaysToDate(date_now,365)
		document.cookie = 'consent_mode='+ consent + ';expires=' + expires + ';domain=.monnouveaum2.com;path=/'
		dataLayer.push({  //add the updated information to the dataLayer
		'event':'consent_mode_updated',
		'consent_mode' : consent
	})}
function newCookie() {//function to set cookie on domain

  function addDaysToDate(date, days){  //function to create neux expiring date for cookie
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
		document.cookie = 'consent_record='+ id + ';expires=' + expires + ';domain=.monnouveaum2.com;path=/'
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
  return 'absent'}

var consent_record = getCookie('consent_record')//if the cookie isn't set then create it empty
var consent_mode = getCookie('consent_mode')
if(consent_record == "absent" || consent_mode == "absent" || consent_mode == "empty" ){
		setCookie('empty')
		banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:block;')} // displays the banner
  else {dataLayer.push({
	event:'consent_mode_updated',
	'consent_mode' : consent_mode
})}

var accept = document.getElementById('accept')
accept.addEventListener('click',function(){ //function on accept CTA click 
		setCookie('1,2,3,4')
        newCookie()
		banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;')
})
var denied = document.getElementById('denied')
denied.addEventListener('click',function(){  //function on refuse CTA click
		setCookie('1')
        newCookie()
		banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;')
})

function redirect(){// function to activate preference center	
		var preference_center = document.getElementById('preference_center')
		var message = document.getElementById('message')
        var container = document.getElementById('containerauto')
		message.setAttribute('style','padding: 5% 5% 5% 5%;display:none')
        preference_center.setAttribute('style','padding: 5% 5% 5% 5%;display:block;')
  if(screen_measure <= 550){
container.setAttribute('style','position:relative;background:white;width:auto;height:100%;display:block;overflow:hidden;overflow-y:scroll;')
}}
function pop(button) {		
		var check_mode = button.getAttribute('check_mode')
		if(check_mode.indexOf('none')!=-1){
		button.setAttribute('check_mode','checked')
		}
		else {button.setAttribute('check_mode','none')}
	}

var save_choice = document.getElementById('save_choice')
save_choice.addEventListener('click',function(){
var check_box = document.querySelectorAll('[id^="check_"]')
var consent_cat = [1]
for(var i=0 ; i<check_box.length; i++){
	var check_mode = check_box[i].getAttribute('check_mode')
		if(check_mode.indexOf('checked')!=-1){
			consent_cat.push(i+2)}}

var consent_mode = consent_cat.toString()
dataLayer.push({
	event:'consent_mode_updated',
	'consent_mode' : consent_mode
})
setCookie(consent_mode)
newCookie()
banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;')
})
</script>