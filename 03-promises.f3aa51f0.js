const e={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function t(e,t){return new Promise(((o,n)=>{const u=Math.random()>.3;setTimeout((()=>{u?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.form.addEventListener("submit",(function(o){o.preventDefault();let n=Number(e.delay.value);const u=Number(e.step.value),m=Number(e.amount.value);e.form.reset();for(let e=1;e<=m;e+=1)t(e,n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),n+=u}));
//# sourceMappingURL=03-promises.f3aa51f0.js.map
