(()=>{"use strict";const e=e=>`${Math.round(e-273.15)}`,t=e=>`${Math.round(3.6*e)}`,n=(e=>({staticDomElements:(e=>({bodyEl:e.querySelector(".body"),contentLeftEl:e.querySelector(".content__left"),contentRightEl:e.querySelector(".content__right"),searchBoxFormEl:e.querySelector(".search_box__form"),searchBoxFormClearBtnEl:e.querySelector(".search_box__btn--clear"),searchBoxErrorDisplayEl:e.querySelector(".search_box__error_display"),mainModalEl:e.querySelector(".modal"),errorMsgModalEl:e.querySelector(".err_msg_modal"),errorMsgModalDisplayEl:e.querySelector(".err_msg_modal__display"),errorMsgModalCloseBtnEl:e.querySelector(".err_msg_modal__btn--close"),loadingSpinnerModalEl:e.querySelector(".loading_spinner_modal"),toggleTempSwitchInputEl:e.querySelector(".toggle_temp_switch__input")}))(e),dynamicDomElements:(e=>({get:function(){return{weatherCurrentTempValueEl:e.querySelector(".weather_current__temp_value"),weatherCurrentTempUnitEl:e.querySelector(".weather_current__temp_unit"),weatherCurrentWindSpeedEl:e.querySelector(".weather_current__info_card_content--wind_speed")};}}))(e)}))(document),{staticDomElements:r,dynamicDomElements:a}=n,o=(()=>{const e=r.mainModalEl,t=()=>e.classList.add("hidden"),n=()=>e.classList.remove("hidden"),a=(()=>{const e=r.searchBoxErrorDisplayEl;return{show:function(t){e.textContent=t;},close:function(){e.textContent="";}};})();return{errorMsgDom:(()=>{const e=r.errorMsgModalEl,a=r.errorMsgModalDisplayEl;return{show:function(t){n(),e.classList.remove("hidden"),a.textContent=t;},close:function(){e.classList.add("hidden"),a.textContent="",t();}};})(),loadingSpinnerDom:(()=>{const e=r.loadingSpinnerModalEl;return{show:function(){n(),e.classList.remove("hidden");},close:function(){e.classList.add("hidden"),t();}};})(),searchBoxErrorDom:a};})(),s=(()=>{const n=[];function s(e){n.push(e);}function c(){return[...n];}return{addData:s,getData:c,fetchData:async function(e){try{o.loadingSpinnerDom.show();let t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=7b36a65082c985be6a27657feb9c1629`,r=await((e,t={},n)=>{return t=Object.assign({mode:"cors"},t),Promise.race([fetch(e,t),(r=n,new Promise(((e,t)=>{setTimeout(e,r);})))]);var r;})(t,{},6e4),a=await r.json();n.length=0,s(a);}catch(e){return o.loadingSpinnerDom.close(),Promise.reject(e);}return o.loadingSpinnerDom.close(),c()[0];},getIconUrl:function(e){return`https://openweathermap.org/img/wn/${e}@4x.png`;},handleToggleTempSwitchClick:function(n){const o=r.toggleTempSwitchInputEl,s=c()[0],i=a.get();var d,l;o.checked?(i.weatherCurrentTempValueEl.textContent=e(s.main.temp),i.weatherCurrentTempUnitEl.textContent="C",i.weatherCurrentWindSpeedEl.textContent=`${t(s.wind.speed)} km/h`):(i.weatherCurrentTempValueEl.textContent=(l=s.main.temp,`${Math.round(1.8*(l-273.15)+32)}`),i.weatherCurrentTempUnitEl.textContent="F",i.weatherCurrentWindSpeedEl.textContent=(d=s.wind.speed,`${Math.round(2.23694*d)} mph`));},getWeatherImageUrl:async function(e){const t=+String(e)[0],n=await fetch("assets/json/weatherImage.json");return(await n.json())[t];}};})(),c=(n=>({weatherCurrent:function(){const a=r.contentLeftEl,o=s.getData()[0];(e=>{for(;e.firstChild;)e.removeChild(e.firstChild);})(a),async function(e){if(e){const t=await s.getWeatherImageUrl(e);r.bodyEl.style.background=`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),\n                                                    url("${t}") no-repeat`;}}(o.weather[0].id);const c=n.createElement("div");c.classList.add("weather_current");const i=n.createElement("div");i.classList.add("weather_current__condition"),i.textContent=o.weather[0].description;const d=n.createElement("div");d.classList.add("weather_current__location"),d.textContent=`${o.name}, ${o.sys.country}`;const l=n.createElement("div");l.classList.add("weather_current__temp");const _=n.createElement("span");_.classList.add("weather_current__temp_value"),_.textContent=e(o.main.temp);const h=n.createElement("span");h.classList.add("weather_current__temp_unit"),h.textContent="C",l.appendChild(_),l.appendChild(h);const u=n.createElement("div");u.classList.add("weather_current__info");const m=n.createElement("div");m.classList.add("weather_current__info_card","weather_current__info_card_wind");const p=n.createElement("span");p.classList.add("weather_current__info_card_heading"),p.textContent="Wind";const w=n.createElement("img");w.classList.add("weather_current__info_card_icon"),w.setAttribute("src","./assets/images/svg/wind.svg");const g=n.createElement("span");g.classList.add("weather_current__info_card_content","weather_current__info_card_content--wind_speed"),g.textContent=`${t(o.wind.speed)} km/h`,m.appendChild(p),m.appendChild(w),m.appendChild(g);const E=n.createElement("div");E.classList.add("weather_current__info_card","weather_current__info_card_humidity");const C=n.createElement("span");C.classList.add("weather_current__info_card_heading"),C.textContent="Humidity";const f=n.createElement("img");f.classList.add("weather_current__info_card_icon"),f.setAttribute("src","./assets/images/svg/humidity.svg");const y=n.createElement("span");y.classList.add("weather_current__info_card_content","weather_current__info_card_content-humidity"),y.textContent=`${o.main.humidity} %`,E.appendChild(C),E.appendChild(f),E.appendChild(y);const x=n.createElement("div");x.classList.add("weather_current__info_card","weather_current__info_card_pressure");const L=n.createElement("span");L.classList.add("weather_current__info_card_heading"),L.textContent="Pressure";const v=n.createElement("img");v.classList.add("weather_current__info_card_icon"),v.setAttribute("src","./assets/images/svg/pressure.svg");const D=n.createElement("span");D.classList.add("weather_current__info_card_content","weather_current__info_card_content--pressure"),D.textContent=`${o.main.pressure} hpa`,x.appendChild(L),x.appendChild(v),x.appendChild(D),u.appendChild(m),u.appendChild(E),u.appendChild(x),c.appendChild(i),c.appendChild(d),c.appendChild(l),c.appendChild(u),a.appendChild(c);}}))(document),i=async function(e){e.preventDefault();const t=r.searchBoxFormEl.elements.city.value.trim();if(t.length)try{const e=await s.fetchData(t);if("404"===e.cod)return void o.searchBoxErrorDom.show(e.message);o.searchBoxErrorDom.close(),c.weatherCurrent();}catch(e){console.error(e),e.message?o.errorMsgDom.show(e.message):o.errorMsgDom.show("Due to technical error unable to show weather data :(");}else o.searchBoxErrorDom.show("Input cannot be blank");},d=function(e){r.searchBoxFormEl.elements.city.value="";};r.searchBoxFormEl.addEventListener("submit",i),r.searchBoxFormClearBtnEl.addEventListener("click",d),r.toggleTempSwitchInputEl.addEventListener("click",s.handleToggleTempSwitchClick),r.errorMsgModalCloseBtnEl.addEventListener("click",(e=>o.errorMsgDom.close())),window.addEventListener("unhandledrejection",(function(e){console.group("Global Promise Reject"),console.error(e.promise),console.error(e.reason),console.groupEnd();})),function(e,t){console.log("App loaded"),e.addEventListener("DOMContentLoaded",(async e=>{try{await s.fetchData("delhi"),c.weatherCurrent();}catch(e){console.error(e),o.errorMsgDom.show(e.message);}}));}(window,document);})();