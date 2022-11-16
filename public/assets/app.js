// document.addEventListener('DOMContentLoaded', function () {
//   cookieconsent.run({"notice_banner_type":"headline","consent_type":"express","palette":"dark","change_preferences_selector":"#changePreferences","language":"en","website_name":"Blankkanvas"});
// });

window.addEventListener('load', function () {

  var cookieText = 'We use cookie to improve your experience on our site. By using our site you consent cookies '
  // var policyLinkText = 'Policy Link'

  // create cookie DIV container
  var cookieDiv = document.createElement('div');
  cookieDiv.id = 'cookieConsent';
  cookieDiv.className = 'cookie-container';


  // create left panel child div
  var leftPanelDiv = document.createElement('div');
  var cookieTextContainer = document.createElement('p');
  var cookieTextNode = document.createTextNode(cookieText);
  // var policyLink = document.createElement('a');
  // var policyLinkTextNode = document.createTextNode(policyLinkText);

  //create private policy text
  // policyLink.appendChild(policyLinkTextNode);
  // policyLink.href = "#";
  //create cookie copy text
  cookieTextContainer.id = "cookieText";
  cookieTextContainer.appendChild(cookieTextNode);
  // cookieTextContainer.appendChild(policyLink);
  //append cookie text and privacy policy to left panel
  leftPanelDiv.classList.add('left-panel', 'copy-container');
  leftPanelDiv.appendChild(cookieTextContainer);

  // create left panel child div
  var rightPanelDiv = document.createElement('div');
  var acceptBtn = document.createElement('button');
  var declineBtn = document.createElement('button');
  rightPanelDiv.classList.add('right-panel', 'btn-container');
  //create accept btn
  acceptBtn.id = 'acceptCookie';
  acceptBtn.className = 'accept-cookie';
  var acceptText = document.createTextNode('yes babe');
  acceptBtn.appendChild(acceptText);
  //create decline btn
  declineBtn.id = 'declineCookie';
  declineBtn.className = 'decline-cookie';
  var declineText = document.createTextNode('nope');
  declineBtn.appendChild(declineText);

  rightPanelDiv.appendChild(acceptBtn);
  rightPanelDiv.appendChild(declineBtn);

  // append left and right panel to container
  cookieDiv.appendChild(leftPanelDiv);
  cookieDiv.appendChild(rightPanelDiv);

  //append to body
  document.getElementsByTagName('body')[0].appendChild(cookieDiv);


  //add events
  var cookieContainer = document.getElementById('cookieConsent');

  //accept cookie event
  document.addEventListener('click', function (e) {
      if (e.target && e.target.id == 'acceptCookie') {
          accept_cookie();
      }
  });
  //accept cookie event
  document.addEventListener('click', function (e) {
      if (e.target && e.target.id == 'declineCookie') {
          decline_cookie();
      }
  });

  function decline_cookie() {
      console.log('decline');
      cookieContainer.remove();
  }

  function accept_cookie() {
      console.log('accept');

      //get JS script for google tag
      var script = document.currentScript || document.querySelector('script[src*="https://www.googletagmanager.com/gtag/js"]')
      console.log(script.src);

      //check if gtag script is there
      if (script) {
          //REGEX get the UA tag after the id
          var response = script.src.match(/id=(.*)/)[1]
          //check that the string is gtag after "id" and not another string
          var gtagRes = response.substr(0, 2) == "UA"
          //if true inject gtag response
          if (gtagRes) {
              console.log(response);
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());

              //gtag('config', UA-45669564-8, {
              gtag('config', response, {
                  'cookie_prefix': 'nbme-ga',
                  'cookie_update': false
              });
          }


      }

      cookieContainer.remove();
  }

  // if (script.src.indexOf('id=') != -1) {
  //     console.log(script);
  // }


  var BrowserLink = window.location.href;
  var res = BrowserLink.substr(0, 38);
  var siteID = undefined;

  mediaId = {
      "id1": 1,
      "id2": 2,
      "id3": 3,
      "id4": 4,
      "id5": 5,
      "id6": 6
  }

  if (res === 'http://localhost:9000/') {
      siteID = mediaId.id3
      console.log(siteID);

      window.dataLayer = window.dataLayer || [];
      // function gtag() { dataLayer.push(arguments); }
      // gtag('js', new Date());

      // gtag('config', 'UA-45669564-8', {
      //     'cookie_prefix': 'nbme-ga',
      //     'cookie_update': false
      // });


  }
  else {
      console.log('wrong link');
  }




});
  
  
  
  
  
  // ----------------------------------- follow ----------------------------------------------------

  $(document).mousemove(function(e){
    $("#image").css({left:e.pageX, top:e.pageY});
});
$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX - ", pageY: " + event.pageY );
  $( "#tooltip" ).css({ "left" : event.pageX - 50, "top" : event.pageY - 50});
  $( "#tooltip2" ).css({ "left" : event.pageX - 50, "top" : event.pageY - 50});
  $( "#image" ).css({ "left" : event.pageX - 50, "top" : event.pageY - 50});
});




// this is the code for a DONATE button to go in the donate section (QR CODE is attached if that's better):

(function (d, id) {

  if (d.getElementById(id)) {

    return;

  }

  var js = d.createElement('script');

  js.id = id;

  js.src = 'https://static.beaconproducts.co.uk/js-sdk/production/beaconcrm.min.js';

  d.getElementsByTagName('head')[0].appendChild(js);

}(document, 'beacon-js-sdk'));





// this is the code for a newsletter POP UP which could be fun:

!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/53ab2b977fbe8d08ff728f928/8bb2f082fefa0cb6b0e93f866.js");
  


// <!-- Begin Mailchimp Signup Form -->

(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);




