var e=document.querySelector(".logo"),t=new Promise(function(t,n){e.addEventListener("click",function(){t("Promise was resolved!")})}),n=new Promise(function(e,t){setTimeout(function(){t("Promise was rejected!")},3e3)});t.then(function(e){var t=document.createElement("div");t.className="message",t.textContent=e,document.body.appendChild(t),n.then(function(e){var t=document.createElement("div");t.className="message",t.textContent=e,document.body.appendChild(t)}).catch(function(e){var t=document.createElement("div");t.className="message error-message",t.textContent=e,document.body.appendChild(t)})}),t.catch(function(e){var t=document.createElement("div");t.className="message error-message",t.textContent=e,document.body.appendChild(t)});//# sourceMappingURL=index.e17a5651.js.map

//# sourceMappingURL=index.e17a5651.js.map
