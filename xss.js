function showXss() {
  var div = document.createElement('div');
  div.innerHTML = 'xss running...';
  div.style.cssText = 'position:fixed; top:0; right:0; color:red; background:#000; font-size:40px; line-height:40px; z-index:999999';      
  document.body.appendChild(div);
}

if (document.body) {
  showXss();
} else {
  window.addEventListener('DOMContentLoaded', showXss);
}
