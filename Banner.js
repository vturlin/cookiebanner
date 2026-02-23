var dl_css = 'https://vturlin.github.io/cookiebanner/Banner.css'; // lien vers le fichier CSS
var dl_police = 'https://fonts.googleapis.com/css?family=Roboto&display=swap'; // lien vers la police de la charte du site

// FONCTIONS JAVASCRIPT
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
        'ad_personalization': "denied",
        'wait_for_update': 500
    });
}

function GCM_setupdatedconsent_ads(consent){
    consent.includes('4') ?
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_personalization': 'granted',
        'ad_user_data': 'granted',
    }) :
    gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_personalization': 'denied',
        'ad_user_data': 'granted'
    });
}

function GCM_setupdatedconsent_perso(consent){
    consent.includes('3') ?
    gtag('consent', 'update', {
        'functionality_storage': "granted",
        'personalization_storage': "granted",
    }) :
    gtag('consent', 'update', {
        'functionality_storage': "denied",
        'personalization_storage': "denied",
    });
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
    });
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
    });
}

function GCM_setupdatedconsent_analytics(consent){
    consent.includes('2') ?
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    }) :
    gtag('consent', 'update', {
        'analytics_storage': 'denied'
    });
}

function setCookie(consent) {
    function addDaysToDate(date, days){ 
        var res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
    }
    var date_now = Date();
    var expires = addDaysToDate(date_now,365);
    document.cookie = 'consent_mode='+ consent + ';expires=' + expires + ';domain=.' + banner_domain + ';path=/';
    
    dataLayer.push({ 
        'event':'consent_mode_updated',
        'consent_mode' : consent
    });
}

function newCookie(a) {
    function addDaysToDate(date, days){ 
        var res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
    }
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    var date_now = Date();
    var id = Date.now() + '.' + makeid(3);
    var expires = addDaysToDate(date_now,365);
    document.cookie = 'consent_record='+ id + ';expires=' + expires + ';domain=.' + banner_domain + ';path=/';
}

function getCookie(cname){
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var name = cname + '=';
    for( var i = 0 ; i < ca.length ; i++){
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return 'absent';
}

function redirect(){
    var preference_center = document.getElementById('preference_center');
    var message = document.getElementById('message');
    message.setAttribute('style','padding:4%;display:none');
    preference_center.setAttribute('style','padding:4%; display:block');
}

function pop(button) {
    var check_mode = button.getAttribute('check_mode');
    if(check_mode.indexOf('none')!=-1){
        button.setAttribute('check_mode','checked');
    } else {
        button.setAttribute('check_mode','none');
    }
}

// STRUCTURE HTML/CSS
var consent_record = getCookie('consent_record');
var consent_mode = getCookie('consent_mode');

GCM_setdefaultconsent();

if(consent_record == "absent" || consent_mode == "absent" || consent_mode == "empty" ){

    setCookie('empty');
    
    var css_link = document.createElement('link');
    css_link.setAttribute('rel','stylesheet');
    css_link.setAttribute('type','text/css');
    css_link.setAttribute('href',dl_css);
    document.head.appendChild(css_link);
    
    var font_link = document.createElement('link');
    font_link.setAttribute('rel','stylesheet');
    font_link.setAttribute('href',dl_police);
    document.head.appendChild(font_link);
    
    var banner_creat = document.createElement('div');
    banner_creat.setAttribute('id','creat_banner');
    document.body.appendChild(banner_creat);
    
    banner_creat.insertAdjacentHTML('afterbegin',`
        <!-- ADD YOUR PREFERENCE CENTER HTML HERE -->
        <div id="preference_center" style="display:none;">
            <h2>Centre de préférences</h2>
            <p>Lorsque vous consultez un site Web, des données peuvent être stockées dans votre navigateur ou récupérées à partir de celui-ci, généralement sous la forme de cookies. Ces informations peuvent porter sur vous, sur vos préférences ou sur votre appareil et sont principalement utilisées pour s\'assurer que le site Web fonctionne correctement. Les informations ne permettent généralement pas de vous identifier directement, mais peuvent vous permettre de bénéficier d\'une expérience Web personnalisée. Parce que nous respectons votre droit à la vie privée, nous vous donnons la possibilité de ne pas autoriser certains types de cookies. Cliquez sur les différentes catégories pour obtenir plus de détails sur chacune d\'entre elles, et modifier les paramètres par défaut. Toutefois, si vous bloquez certains types de cookies, votre expérience de navigation et les services que nous sommes en mesure de vous offrir peuvent être impactés.</p>
            <p>Cookies strictement nécessaires : Ces cookies sont absolument nécessaires au bon fonctionnement de notre site et ne peuvent être désactivés.</p>
            <p>Cookies de mesure de la performance: Ces cookies nous permettent de mesurer l\'activité des utilisateurs sur notre site. Ils nous sont importants pour vous proposer une naviagation et du contenu adaptés.</p>
            <p>Cookies de fonctionnalité: Ces cookies nous permettent de mettre en oeuvre des fonctionnalités de personnalisation de votre expérience sur notre site</p>
            <p>Cookies de publicité ciblée: Ces cookies peuvent être déposés par nos partenaires publicitaires afin de vous proposer des publicités sur des contenus pertinents et qui vous intéressent.</p>
            <button id="save_choice">SAUVEGARDER MA SELECTION</button>
        </div>
    `);
    
    var message_creat = document.getElementById('containerauto');
    if (message_creat) {
        message_creat.insertAdjacentHTML('beforeend',`
            <!-- ADD YOUR MESSAGE HTML HERE -->
            <div id="message">
                <h2>NOUS RESPECTONS VOTRE VIE PRIVEE</h2>
                <button id="denied">continuer sans accepter</button>
                <p>Mon Nouveau mètre carré utilise des cookies pour personnaliser le contenu et vous offrir une expérience sur mesure. Vous pouvez gérer vos préférences et en savoir plus en cliquant sur "Paramètres des cookies" et à tout moment dans notre Politique de confidentialité. <a href="'+policies+'">Politique de confidentialité</a></p>
                <button id="accept">ACCEPTER</button>
                <button id="logo_pref_center" onclick="redirect()">PERSONNALISER MES CHOIX</button>
            </div>
        `);
    }

    var banner = document.getElementById('banner');

    var check_box_2 = document.getElementById('check_2');
    if (check_box_2) {
        check_box_2.addEventListener('click',function(){
            var check_mode_2 = check_box_2.getAttribute('check_mode');
            var cat_i_string_2 = document.getElementById('category_2');
            if(check_mode_2.indexOf('checked')!=-1){
                cat_i_string_2.setAttribute('style','position:relative;background:rgba('+custom_color+',0.12);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba('+custom_color+');');
            } else {
                cat_i_string_2.setAttribute('style','background:rgba(192,192,192,0.38);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba(192,192,192);');
            }
        });
    }

    var check_box_3 = document.getElementById('check_3');
    if (check_box_3) {
        check_box_3.addEventListener('click',function(){
            var check_mode_3 = check_box_3.getAttribute('check_mode');
            var cat_i_string_3 = document.getElementById('category_3');
            if(check_mode_3.indexOf('checked')!=-1){
                cat_i_string_3.setAttribute('style','position:relative;background:rgba('+custom_color+',0.12);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba('+custom_color+');');
            } else {
                cat_i_string_3.setAttribute('style','background:rgba(192,192,192,0.38);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba(192,192,192);');
            }
        });
    }

    var check_box_4 = document.getElementById('check_4');
    if (check_box_4) {
        check_box_4.addEventListener('click',function(){
            var check_mode_4 = check_box_4.getAttribute('check_mode');
            var cat_i_string = document.getElementById('category_4');
            if(check_mode_4.indexOf('checked')!=-1){
                cat_i_string.setAttribute('style','position:relative;background:rgba('+custom_color+',0.12);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba('+custom_color+');');
            } else {
                cat_i_string.setAttribute('style','background:rgba(192,192,192,0.38);border-radius:4px;margin-top:20px;padding:1%;border: 1.5px;border-style: solid;border-color: rgba(192,192,192);');
            }
        });
    }

    var accept = document.getElementById('accept');
    if (accept) {
        accept.addEventListener('click',function(){ 
            var consent_update = '1,2,3,4';
            setCookie(consent_update);
            newCookie(consent_update);
            GCM_setupdatedconsent_all();
            if(banner) banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;');
        });
    }

    var denied = document.getElementById('denied');
    if (denied) {
        denied.addEventListener('click',function(){ 
            var consent_update = '1';
            setCookie(consent_update);
            newCookie(consent_update);
            GCM_setupdatedconsent_denied();
            if(banner) banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;');
        });
    }

    var save_choice = document.getElementById('save_choice');
    if (save_choice) {
        save_choice.addEventListener('click',function(){
            var check_box = document.querySelectorAll('[id^="check_"]');
            var consent_cat = [7];
            
            for(var i=1; i<check_box.length; i++){
                var check_mode = check_box[i].getAttribute('check_mode');
                if(check_mode.indexOf('checked')!=-1){
                    consent_cat.push(i+1);
                }
            }
            
            var consent_mode = consent_cat.toString();
            
            dataLayer.push({
                event:'consent_mode_updated',
                'consent_mode' : consent_mode
            });
            
            setCookie(consent_mode);
            newCookie(consent_mode);
            GCM_setupdatedconsent_ads(consent_mode);
            GCM_setupdatedconsent_analytics(consent_mode);
            GCM_setupdatedconsent_perso(consent_mode);
            
            if(banner) banner.setAttribute('style','position:fixed;z-index:99999;top:0;right:0;bottom:0;left:0;display:none;');
        });
    }

} else { 
    // If the banner shouldn't display, push existing consent state to dataLayer
    dataLayer.push({
        event:'consent_mode_updated',
        'consent_mode' : consent_mode
    });
    
    GCM_setupdatedconsent_ads(consent_mode);
    GCM_setupdatedconsent_analytics(consent_mode);
    GCM_setupdatedconsent_perso(consent_mode);
}
