const e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]'),o=_.throttle((function(){const e={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);e.addEventListener("input",o),window.addEventListener("load",(function(){const e=localStorage.getItem("feedback-form-state");if(e){const o=JSON.parse(e);t.value=o.email,a.value=o.message}})),e.addEventListener("submit",(function(e){e.preventDefault();const o={email:t.value,message:a.value};localStorage.removeItem("feedback-form-state"),e.target.reset(),console.log(o)}));
//# sourceMappingURL=03-feedback.bdc292ee.js.map