
(function(){
var t=document.querySelector('.navtoggle'),n=document.getElementById('primary-nav');
if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');t.setAttribute('aria-label',o?'Close menu':'Open menu');});}
document.querySelectorAll('.dropbtn').forEach(function(b){b.addEventListener('click',function(){var li=b.parentNode;var o=li.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});});
document.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){var a=document.getElementById(b.getAttribute('aria-controls'));var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',o?'false':'true');a.style.maxHeight=o?'0px':a.scrollHeight+'px';});});
})();
