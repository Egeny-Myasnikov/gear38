(function(){"use strict";var t={143:function(t,o,n){var i=n(963),a=n(252);const s={class:"wrapper"};function r(e,t,o,n,i,r){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(l)])}var l={components:{},methods:{}},c=n(744);const d=(0,c.Z)(l,[["render",r]]);var u=d,p=n(205);(0,p.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var m=n(119);const f=(0,a.Uk)("Перейти в портфолио ");function g(e,t,o,n,i,s){const r=(0,a.up)("Header"),l=(0,a.up)("HomeGreeting"),c=(0,a.up)("HomeSitesTypes"),d=(0,a.up)("Portfolio"),u=(0,a.up)("ButtonPrimary"),p=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r),(0,a.Wm)(l),(0,a.Wm)(c),(0,a.Wm)(d,{homePage:i.homePage,portfolioData:e.$store.state.portfolioPageData,portfolioTitle:i.portfolioTitle},null,8,["homePage","portfolioData","portfolioTitle"]),(0,a.Wm)(u,{onClick:t[0]||(t[0]=t=>e.$router.push("/portfolio")),class:"btn"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(p)],64)}var v=n(577);const h={class:"home-greeting"},b={class:"__container home-greeting-container"},w={class:"right-col"},_=["src","alt"],k={class:"left-col"},y={class:"page-title"},I={class:"subTitle"},D=(0,a.Uk)(" Получить бесплатную консультацию ");function S(e,t,o,n,i,s){const r=(0,a.up)("ButtonPrimary"),l=(0,a.up)("Tel"),c=(0,a.up)("FormCollback"),d=(0,a.up)("ModalWindow");return(0,a.wg)(),(0,a.iD)("section",h,[(0,a._)("div",b,[(0,a._)("div",w,[(0,a._)("img",{class:"img",src:i.image,alt:i.title},null,8,_)]),(0,a._)("div",k,[(0,a._)("h1",y,(0,v.zw)(i.title),1),(0,a._)("p",I,(0,v.zw)(i.subTitle),1),(0,a.Wm)(r,{onClick:s.modalWindowShow,classes:"js-get-consultation"},{default:(0,a.w5)((()=>[D])),_:1},8,["onClick"])])]),(0,a.Wm)(d,{show:i.modalVisible,"onUpdate:show":t[0]||(t[0]=e=>i.modalVisible=e),title:"Свяжитесь со мной"},{default:(0,a.w5)((()=>[(0,a.Wm)(l),(0,a.Wm)(c)])),_:1},8,["show"])])}var T={name:"HomeGreeting",data(){return{title:"Разработка сайтов под ключ",subTitle:"Создаю эффективные сайты, которые решают бизнес-задачи и приносят прибыль.Если вам нужен сайт для продаж или презентации компании — это мой профиль.При разработке я уделяю внимание: - изучению целевой аудитории - специфике вашего бизнеса - определяю, какие цели он должен выполнять.",image:n(824),modalVisible:!1}},methods:{modalWindowShow(){this.modalVisible=!0}}};const C=(0,c.Z)(T,[["render",S],["__scopeId","data-v-068bdc2e"]]);var W=C;const P={class:"sites-types"},x={class:"__container sites-types-container"},H={class:"page-title"};function L(e,t,o,n,i,s){const r=(0,a.up)("HSTList");return(0,a.wg)(),(0,a.iD)("section",P,[(0,a._)("div",x,[(0,a._)("h2",H,(0,v.zw)(i.title),1),(0,a.Wm)(r)])])}const N={class:"list"};function M(e,t,o,n,i,s){const r=(0,a.up)("HSTListItem");return(0,a.wg)(),(0,a.iD)("div",N,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.items,(e=>((0,a.wg)(),(0,a.j4)(r,{key:e.name,itemTitle:e.itemTitle,itemDescription:e.itemDescription,fullDescription:e.fullDescription,idIcon:e.idIcon},null,8,["itemTitle","itemDescription","fullDescription","idIcon"])))),128))])}const q={class:"item-title"},Z={class:"item-descr"},j={class:"item-btn"},A=(0,a.Uk)(" Подробнее "),B={class:"btn-container"},z=(0,a.Uk)(" Заказать "),U=(0,a.Uk)(" Смотреть примеры ");function O(e,t,o,n,i,s){const r=(0,a.up)("Icon"),l=(0,a.up)("ButtonPrimary"),c=(0,a.up)("ButtonSecondary"),d=(0,a.up)("ModalWindow");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{onClick:t[0]||(t[0]=(...e)=>s.modalWindowShow&&s.modalWindowShow(...e)),class:"item js-lending"},[(0,a._)("div",q,[(0,a._)("h3",null,(0,v.zw)(o.itemTitle),1),(0,a.Wm)(r,{idIcon:o.idIcon,className:"item-title-svg item-title-svg__"+o.idIcon},null,8,["idIcon","className"])]),(0,a._)("div",Z,[(0,a._)("p",null,(0,v.zw)(o.itemDescription),1)]),(0,a._)("div",j,[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[A])),_:1})])]),(0,a.Wm)(d,{show:i.modalVisible,"onUpdate:show":t[1]||(t[1]=e=>i.modalVisible=e),title:o.itemTitle},{default:(0,a.w5)((()=>[(0,a._)("p",null,(0,v.zw)(o.fullDescription),1),(0,a._)("div",B,[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[z])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[U])),_:1})])])),_:1},8,["show","title"])],64)}var E={name:"HSTListItem",data(){return{modalVisible:!1}},props:{itemTitle:{type:String,required:!0},itemDescription:{type:String,required:!0},idIcon:{type:String,required:!0},fullDescription:{type:String,required:!0}},methods:{modalWindowShow(){this.modalVisible=!0}}};const V=(0,c.Z)(E,[["render",O],["__scopeId","data-v-519b7477"]]);var F=V,$={name:"HSTList",data(){return{items:[{name:"lending",itemTitle:"Лендинг (Lending Page)",itemDescription:"Целевя промостраница для продвижения товара или услуги",idIcon:"target",fullDescription:"Веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге."},{name:"catalog",itemTitle:"Каталог товаров",itemDescription:"Сайт с возможностью демонстрации каталога продукции",idIcon:"catalog",fullDescription:"Это вид коммерческого сайта, на котором представлен весь ассортимент компании с подробным описанием. Это прекрасный способ проинформировать покупателей о том, какие товары и услуги предоставляет предприятие. Такой ресурс ещё называют ветриной."},{name:"shop",itemTitle:"Интернет магазин",itemDescription:"Современный интернет-магазин с возможностью оплаты товаров онлайн",idIcon:"cart",fullDescription:"Сайт, торгующий товарами посредством сети интернет. Позволяет пользователям онлайн, в своём браузере или через мобильное приложение сформировать заказ на покупку, выбрать способ оплаты и доставки заказа, оплатить заказ."}]}},methods:{},components:{HSTListItem:F}};const G=(0,c.Z)($,[["render",M],["__scopeId","data-v-b9118fc4"]]);var K=G,Y={name:"HomeSitesTypes",data(){return{title:"Выберите нужный вид сайта"}},methods:{},components:{HSTList:K}};const J=(0,c.Z)(Y,[["render",L]]);var Q=J,R=n(765),X={name:"HomePage",components:{HomeGreeting:W,HomeSitesTypes:Q,Portfolio:R.Z},data(){return{portfolioTitle:"Немного моих работ",homePage:!0}}};const ee=(0,c.Z)(X,[["render",g],["__scopeId","data-v-69bdfad2"]]);var te=ee;const oe=[{path:"/",name:"home",component:te},{path:"/about",name:"aboutPage",component:()=>n.e(443).then(n.bind(n,316))},{path:"/portfolio",name:"PortfolioPage",component:()=>n.e(999).then(n.bind(n,999))},{path:"/contacts",name:"ContactsPage",component:()=>n.e(285).then(n.bind(n,285))},{path:"/portfolio/:id",name:"SinglePortfolioPage",component:()=>n.e(498).then(n.bind(n,498))}],ne=(0,m.p7)({history:(0,m.PO)("/"),routes:oe});var ie=ne,ae=n(907),se=(0,ae.MT)({state:{portfolioPageData:[{id:0,img:n(935),bigImg:n(609),title:"Сайт визитка автомастерской",alt:"auto",github:"",link:"",cost:"5`000 руб",stack:"HTML, CSS, JS",time:"4 дня",type:"businessCard"},{id:1,img:n(17),bigImg:n(442),title:"Сайт визитка",alt:"grid",github:"",link:"",cost:"5`000 руб",stack:"HTML, CSS",time:"4 дня",type:"businessCard"},{id:2,img:n(779),bigImg:n(964),title:"Сайт визитка адвоката",alt:"lawyer",github:"",link:"",cost:"5`000 руб",stack:"HTML, CSS",time:"4 дня",type:"businessCard"},{id:3,img:n(291),bigImg:n(479),title:"Сайт визитка дезинсектора",alt:"dezinsector",github:"https://github.com/Egeny-Myasnikov/des38",link:"https://egeny-myasnikov.github.io/des38/",cost:"10`000 руб",stack:"HTML, CSS, JS",time:"7 дней",type:"businessCard"},{id:4,img:n(217),bigImg:n(401),title:"Сайт каталог корпусной мебели",alt:"meban",github:"",link:"https://meban.ru/",cost:"15`000 руб",stack:"HTML, CSS, JS, WordPress",time:"10 дней",type:"catalog"},{id:5,img:n(382),bigImg:n(497),title:"Сайт визитка портфолио дизайнера",alt:"portfolio",github:"",link:"",cost:"5`000 руб",stack:"HTML, CSS",time:"4 дня",type:"businessCard"},{id:6,img:n(221),bigImg:n(622),title:"Сайт визитка аварийки",alt:"zamokservis-angarsk",github:"https://github.com/Egeny-Myasnikov/zamokservis-angarsk.ru",link:"https://zamokservis-angarsk.ru/",cost:"5`000 руб",stack:"HTML, CSS",time:"4 дня",type:"businessCard"}]},getters:{},mutations:{},actions:{},modules:{}});const re=["disabled","type"];function le(e,t,o,n,i,s){return(0,a.wg)(),(0,a.iD)("button",{disabled:o.disabled,class:(0,v.C_)(["btn-primary",o.classes]),type:o.type},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],10,re)}var ce={name:"ButtonPrimary",props:{classes:{type:String},type:{type:String},disabled:{type:Boolean}}};const de=(0,c.Z)(ce,[["render",le],["__scopeId","data-v-1bd0c66a"]]);var ue=de;const pe=["type"];function me(e,t,o,n,i,s){return(0,a.wg)(),(0,a.iD)("button",{class:(0,v.C_)(["btn-secondary",o.classes]),type:o.type},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],10,pe)}var fe={name:"ButtonSecondary",props:{classes:{type:String},type:{type:String}}};const ge=(0,c.Z)(fe,[["render",me],["__scopeId","data-v-3b3bd5a6"]]);var ve=ge;const he=["xlink:href"];function be(e,t,o,i,s,r){return(0,a.wg)(),(0,a.iD)("svg",{class:(0,v.C_)(o.className)},[(0,a._)("use",{"xlink:href":n(524)+"#"+o.idIcon},null,8,he)],2)}var we={name:"Icon",props:{idIcon:{type:String,required:!0},className:{type:String}}};const _e=(0,c.Z)(we,[["render",be]]);var ke=_e;const ye={href:"tel:+79501081773",title:"Позвонить",class:"phone link"},Ie=(0,a.Uk)(" +7 (950) 108-17-73 ");function De(e,t,o,n,i,s){const r=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("a",ye,[(0,a.Wm)(r,{idIcon:"phone",className:"phone-svg"}),Ie])}var Se={name:"Tel",components:{Icon:ke}};const Te=(0,c.Z)(Se,[["render",De],["__scopeId","data-v-4a130a44"]]);var Ce=Te;const We=e=>((0,a.dD)("data-v-f5746152"),e=e(),(0,a.Cn)(),e),Pe={class:"collback"},xe=We((()=>(0,a._)("h3",null,[(0,a.Uk)(" Оставьте свой номер телефона "),(0,a._)("br"),(0,a.Uk)(" и я перезвоню Вам "),(0,a._)("br"),(0,a.Uk)(" в течении 5-10 минут ")],-1))),He={key:0},Le={key:1,class:"unagreement"},Ne={class:"btn-container"},Me=(0,a.Uk)("Отправить");function qe(e,t,o,n,s,r){const l=(0,a.up)("InputPhone"),c=(0,a.up)("InputCheckbox"),d=(0,a.up)("ButtonPrimary");return(0,a.wg)(),(0,a.iD)("div",Pe,[xe,(0,a._)("form",{onSubmit:t[3]||(t[3]=(0,i.iM)((()=>{}),["prevent"])),class:"form-collback"},[(0,a.Wm)(l,{required:"",modelValue:s.phone,"onUpdate:modelValue":t[0]||(t[0]=e=>s.phone=e),value:s.phone,"onUpdate:value":t[1]||(t[1]=e=>s.phone=e)},null,8,["modelValue","value"]),(0,a.Wm)(c,{required:!0,checked:s.checked,class:"agreement",id:"checkbox","onUpdate:checked":t[2]||(t[2]=e=>s.checked=e)},{default:(0,a.w5)((()=>[!0===s.checked?((0,a.wg)(),(0,a.iD)("span",He,"Я даю согласие на обработку персональных данных")):(0,a.kq)("",!0),!1===s.checked?((0,a.wg)(),(0,a.iD)("span",Le,"Для отправки телефона необходимо дать согласие")):(0,a.kq)("",!0)])),_:1},8,["checked"]),(0,a._)("div",Ne,[(0,a.Wm)(d,{disabled:s.btnDis,type:"submit"},{default:(0,a.w5)((()=>[Me])),_:1},8,["disabled"])])],32)])}var Ze={name:"FormCollback",data(){return{phone:"",checked:!0,btnDis:!1}},unmounted(){},updated(){this.checked?this.btnDis=!1:this.btnDis=!0},methods:{}};const je=(0,c.Z)(Ze,[["render",qe],["__scopeId","data-v-f5746152"]]);var Ae=je;const Be=e=>((0,a.dD)("data-v-78c32312"),e=e(),(0,a.Cn)(),e),ze=["for"],Ue=["required","checked","name","id"],Oe=Be((()=>(0,a._)("span",null,null,-1))),Ee=Be((()=>(0,a._)("i",{class:"indicator"},null,-1)));function Ve(e,t,o,n,i,s){return(0,a.wg)(),(0,a.iD)("label",{for:o.id},[(0,a._)("input",{onInput:t[0]||(t[0]=t=>e.$emit("update:checked",t.target.checked)),required:o.required,checked:o.checked,type:"checkbox",name:o.id,id:o.id},null,40,Ue),Oe,Ee,(0,a.WI)(e.$slots,"default",{},void 0,!0)],8,ze)}var Fe={name:"InputCheckbox",props:{id:{String:String},checked:{type:Boolean,default:!0},required:{type:Boolean}}};const $e=(0,c.Z)(Fe,[["render",Ve],["__scopeId","data-v-78c32312"]]);var Ge=$e;const Ke=["required"];function Ye(e,t,o,n,i,s){const r=(0,a.Q2)("phoneMask");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{type:"tel",maxlength:"18",onInput:t[0]||(t[0]=(...e)=>s.updateInput&&s.updateInput(...e)),class:"input-tel",placeholder:"+7(950) 108-17-73",required:o.required},null,40,Ke)),[[r]])}var Je={name:"InputPhone",props:{required:{type:Boolean}},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const Qe=(0,c.Z)(Je,[["render",Ye]]);var Re=Qe;const Xe={class:"title"},et={class:"content"};function tt(e,t,o,n,s,r){const l=(0,a.Q2)("overflowHidden");return o.show?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:0,class:"modal-window",onClick:t[2]||(t[2]=(...e)=>r.hideModal&&r.hideModal(...e))},[(0,a._)("div",{onClick:t[1]||(t[1]=(0,i.iM)((()=>{}),["stop"])),class:"modal-window-wrap"},[(0,a._)("span",{onClick:t[0]||(t[0]=(...e)=>r.hideModal&&r.hideModal(...e)),class:"btn-close"}),(0,a._)("div",Xe,(0,v.zw)(o.title),1),(0,a._)("div",et,[(0,a.WI)(e.$slots,"default")])])])),[[l]]):(0,a.kq)("",!0)}var ot={name:"ModalWindow",props:{show:[Boolean],title:[String]},methods:{hideModal(){this.$emit("update:show",!1)}}};const nt=(0,c.Z)(ot,[["render",tt]]);var it=nt;const at=e=>((0,a.dD)("data-v-47e8bea3"),e=e(),(0,a.Cn)(),e),st={class:"footer"},rt={class:"__container footer-container"},lt={class:"page-title"},ct={class:"contact"},dt={class:"contact-me"},ut=at((()=>(0,a._)("h3",null,"Позвоните мне по телефону",-1))),pt={class:"contact-me-phone"},mt={class:"contact-me-soc"},ft={class:"contact-me-soc-item"},gt={class:"contact-me-soc-item-link",href:"https://vk.com/fljenya"},vt=at((()=>(0,a._)("span",null,"Я в VK ",-1))),ht=at((()=>(0,a._)("span",{class:"overlay"},null,-1))),bt={class:"contact-me-soc-item"},wt={class:"contact-me-soc-item-link",href:"https://t.me/fljenya"},_t=at((()=>(0,a._)("span",null,"Я в Telegram ",-1))),kt=at((()=>(0,a._)("span",{class:"overlay"},null,-1))),yt={class:"contact-me-soc-item"},It={class:"contact-me-soc-item-link",href:"https://api.whatsapp.com/send?phone=79501081773"},Dt=at((()=>(0,a._)("span",null,"Написать в Whatsapp ",-1))),St=at((()=>(0,a._)("span",{class:"overlay"},null,-1)));function Tt(e,t,o,n,i,s){const r=(0,a.up)("Tel"),l=(0,a.up)("Icon"),c=(0,a.up)("FormCollback");return(0,a.wg)(),(0,a.iD)("footer",st,[(0,a._)("div",rt,[(0,a._)("h2",lt,(0,v.zw)(i.title),1),(0,a._)("div",ct,[(0,a._)("div",dt,[ut,(0,a._)("div",pt,[(0,a.Wm)(r)]),(0,a._)("div",mt,[(0,a._)("div",ft,[(0,a._)("a",gt,[(0,a.Wm)(l,{idIcon:"vk",className:"contact-me-soc-svg vk"}),vt]),ht]),(0,a._)("div",bt,[(0,a._)("a",wt,[(0,a.Wm)(l,{idIcon:"telegram",className:"contact-me-soc-svg telegram"}),_t]),kt]),(0,a._)("div",yt,[(0,a._)("a",It,[(0,a.Wm)(l,{idIcon:"whatsapp",className:"contact-me-soc-svg whatsapp"}),Dt]),St])])]),(0,a.Wm)(c)])])])}var Ct={name:"Footer",data(){return{title:"Контакты"}},components:{FormCollback:Ae}};const Wt=(0,c.Z)(Ct,[["render",Tt],["__scopeId","data-v-47e8bea3"]]);var Pt=Wt;const xt={class:"header"},Ht={class:"__container container"},Lt={class:"header-phone"};function Nt(e,t,o,n,i,s){const r=(0,a.up)("Logo"),l=(0,a.up)("Navigation"),c=(0,a.up)("Tel"),d=(0,a.up)("SocialBarHeader");return(0,a.wg)(),(0,a.iD)("header",xt,[(0,a._)("div",Ht,[(0,a.Wm)(r),(0,a.Wm)(l),(0,a._)("div",Lt,[(0,a.Wm)(c)]),(0,a.Wm)(d)])])}const Mt=e=>((0,a.dD)("data-v-3a0fc603"),e=e(),(0,a.Cn)(),e),qt={class:"logo"},Zt=Mt((()=>(0,a._)("strong",{class:"logo-title"}," LOGO ",-1)));function jt(e,t,o,n,i,s){const r=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("div",qt,[(0,a.Wm)(r,{idIcon:"gearGroup",className:"svg-medium logo-svg"}),Zt])}var At={name:"Logo",components:{Icon:ke}};const Bt=(0,c.Z)(At,[["render",jt],["__scopeId","data-v-3a0fc603"]]);var zt=Bt;const Ut={class:"navigation"},Ot=(0,a.Uk)("Главная"),Et=(0,a.Uk)("Портфолио"),Vt=(0,a.Uk)("Обо мне"),Ft=(0,a.Uk)("Контакты");function $t(e,t,o,n,i,s){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",Ut,[(0,a.Wm)(r,{class:"nav-link link",to:"/"},{default:(0,a.w5)((()=>[Ot])),_:1}),(0,a.Wm)(r,{class:"nav-link link",to:"/portfolio"},{default:(0,a.w5)((()=>[Et])),_:1}),(0,a.Wm)(r,{class:"nav-link link",to:"/about"},{default:(0,a.w5)((()=>[Vt])),_:1}),(0,a.Wm)(r,{class:"nav-link link",to:"/contacts"},{default:(0,a.w5)((()=>[Ft])),_:1})])}var Gt={name:"Navigation"};const Kt=(0,c.Z)(Gt,[["render",$t],["__scopeId","data-v-1c3d6bc8"]]);var Yt=Kt;const Jt={class:"social"},Qt={href:"https://vk.com/fljenya"},Rt={href:"https://t.me/fljenya"},Xt={href:"https://api.whatsapp.com/send?phone=79501081773"};function eo(e,t,o,n,i,s){const r=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("div",Jt,[(0,a._)("div",{class:"social-wrap",onClick:t[0]||(t[0]=(...e)=>s.showAndHideSocBar&&s.showAndHideSocBar(...e))},[(0,a.Wm)(r,{idIcon:"arrowDown",className:"social-svg arrowDown"}),(0,a.Wm)(r,{class:(0,v.C_)({active:i.isActive}),idIcon:"gearMail",className:"svg-small social-svg gearMail"},null,8,["class"])]),(0,a._)("div",{class:(0,v.C_)([{active:i.isActive},"social-icons-container"])},[(0,a._)("a",Qt,[(0,a.Wm)(r,{idIcon:"vk",className:"svg-small vk"})]),(0,a._)("a",Rt,[(0,a.Wm)(r,{idIcon:"telegram",className:"svg-small telegram"})]),(0,a._)("a",Xt,[(0,a.Wm)(r,{idIcon:"whatsapp",className:"svg-small whatsapp"})])],2)])}var to={name:"SocialBarHeader",data(){return{isActive:!1}},methods:{showAndHideSocBar(){this.isActive=!this.isActive}},components:{Icon:ke}};const oo=(0,c.Z)(to,[["render",eo],["__scopeId","data-v-84b79932"]]);var no=oo,io={name:"Header",components:{Logo:zt,Navigation:Yt,Tel:Ce,SocialBarHeader:no}};const ao=(0,c.Z)(io,[["render",Nt],["__scopeId","data-v-0945278d"]]);var so=ao,ro=[it,so,Pt,ue,ke,Ce,Ae,ve,Ge,Re];const lo=(0,i.ri)(u);lo.use(se).use(ie).mount("#main"),ro.forEach((e=>{lo.component(e.name,e)})),lo.directive("phoneMask",{mounted(t){const o=e=>e.value.replace(/\D/g,"");t.oninput=function(e){if(!e.isTrusted)return;let t=e.target,n=o(t),i="",a=t.selectionStart;if(!n)return t.value="";if(t.value.length==a){if(["7","8","9"].indexOf(n[0])>-1){"9"===n[0]&&(n="7"+n);let e="8"===n[0]?"8":"+7";i=e+" ",n.length>1&&(i+="("+n.substring(1,4)),n.length>=5&&(i+=") "+n.substring(4,7)),n.length>=8&&(i+="-"+n.substring(7,9)),n.length>=10&&(i+="-"+n.substring(9,11))}else i="+"+n.substring(0,16);t.value=i}else e.data&&/\D/g.test(e.data)&&(t.value=n)},t.onkeydown=function(e){if(!e.isTrusted)return;const t=e.target;8==e.keyCode&&1==o(t).length&&(t.value="")},t.onpaste=function(){if(!e.isTrusted)return;const t=e.clipboardData||window.clipboardData,n=e.target,i=o(n);if(t){const e=t.getData("Text");/\D/g.test(e)&&(n.value=i)}}}}),lo.directive("overflowHidden",{mounted(e){document.body.style.overflow="hidden"},unmounted(e){document.body.removeAttribute("style")}})},765:function(e,t,o){o.d(t,{Z:function(){return S}});var n=o(252),i=o(577);const a={class:"portfolio"},s={class:"__container portfolio-container"},r={class:"page-title portfolio-title"};function l(e,t,o,l,c,d){const u=(0,n.up)("PortfolioList");return(0,n.wg)(),(0,n.iD)("section",a,[(0,n._)("div",s,[(0,n._)("h2",r,(0,i.zw)(o.portfolioTitle),1),o.homePage?((0,n.wg)(),(0,n.j4)(u,{key:1,portfolioData:o.portfolioData.slice(0,3)},null,8,["portfolioData"])):((0,n.wg)(),(0,n.j4)(u,{key:0,portfolioData:o.portfolioData},null,8,["portfolioData"]))])])}const c={class:"portfolio-list"};function d(e,t,o,i,a,s){const r=(0,n.up)("PortfolioListItem");return(0,n.wg)(),(0,n.iD)("div",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.portfolioData,(e=>((0,n.wg)(),(0,n.j4)(r,{dataType:o.dataType,id:e.id,alt:e.alt,key:e.id,img:e.img,title:e.title},null,8,["dataType","id","alt","img","title"])))),128))])}const u=e=>((0,n.dD)("data-v-33f00b9d"),e=e(),(0,n.Cn)(),e),p=["src","alt"],m={class:"portfolio-item-descr"},f=u((()=>(0,n._)("span",{class:"more"},"➙",-1)));function g(e,t,o,a,s,r){return(0,n.wg)(),(0,n.iD)("div",{onClick:t[0]||(t[0]=t=>e.$router.push(`/portfolio/${o.id}`)),class:"portfolio-item"},[(0,n._)("img",{src:o.img,alt:o.alt},null,8,p),(0,n._)("div",m,[(0,n._)("h4",null,(0,i.zw)(o.title),1),(0,n._)("p",null,(0,i.zw)(o.dataType),1),f])])}var v={name:"PortfolioListItem",data(){return{}},props:{img:{type:String,required:!0},title:{type:String,required:!0},alt:{type:String,required:!0},id:{type:Number,required:!0},dataType:{type:String}},methods:{},components:{}},h=o(744);const b=(0,h.Z)(v,[["render",g],["__scopeId","data-v-33f00b9d"]]);var w=b,_={name:"PortfolioList",data(){return{}},methods:{},components:{PortfolioListItem:w},props:{portfolioData:Array,dataType:[String]}};const k=(0,h.Z)(_,[["render",d],["__scopeId","data-v-548903e0"]]);var y=k,I={name:"Portfolio",data(){return{}},methods:{clack(){}},components:{PortfolioList:y},props:{portfolioTitle:String,portfolioData:Array,homePage:{type:Boolean,default:!1}}};const D=(0,h.Z)(I,[["render",l],["__scopeId","data-v-c9b3ade2"]]);var S=D},524:function(e,t,o){e.exports=o.p+"img/icons.d17049d2.svg"},824:function(e,t,o){e.exports=o.p+"img/createSite.1049040b.webp"},609:function(e,t,o){e.exports=o.p+"img/auto.b5c5b42a.webp"},479:function(e,t,o){e.exports=o.p+"img/dezinsector.ad03bbf5.webp"},442:function(e,t,o){e.exports=o.p+"img/grid.083a2545.webp"},964:function(e,t,o){e.exports=o.p+"img/lawyer.f650991b.webp"},401:function(e,t,o){e.exports=o.p+"img/meban.29fedc62.webp"},935:function(e,t,o){e.exports=o.p+"img/auto350x350.0acf4fcb.webp"},291:function(e,t,o){e.exports=o.p+"img/dezinsector350x350.daa04bfe.webp"},17:function(e,t,o){e.exports=o.p+"img/grid350x350.0bb58b41.webp"},779:function(e,t,o){e.exports=o.p+"img/lawyer350x350.ef7d9bca.webp"},217:function(e,t,o){e.exports=o.p+"img/meban350x350.eb852e59.webp"},382:function(e,t,o){e.exports=o.p+"img/portfolio350x350.e89f7722.webp"},221:function(e,t,o){e.exports=o.p+"img/zamokservis-angarsk350x350.f2aeb022.webp"},497:function(e,t,o){e.exports=o.p+"img/portfolio.07290078.webp"},622:function(e,t,o){e.exports=o.p+"img/zamokservis-angarsk.8ea4d4bf.png"}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,function(){var e=[];n.O=function(t,o,i,a){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],a=e[d][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,i,a]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{285:"1f8d03ed",443:"14b4ddb7",498:"8be3e48f",999:"71dfe63b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".5cd02a38.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue:";n.l=function(o,i,a,s){if(e[o])e[o].push(i);else{var r,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+a),r.src=o),e[o]=[i];var p=function(t,n){r.onerror=r.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,o,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(a){if(i.onerror=i.onload=null,"load"===a.type)o();else{var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=r,i.parentNode.removeChild(i),n(l)}};return i.onerror=i.onload=a,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var i=o[n],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){i=s[n],a=i.getAttribute("data-href");if(a===e||a===t)return i}},o=function(o){return new Promise((function(i,a){var s=n.miniCssF(o),r=n.p+s;if(t(s,r))return i();e(o,r,i,a)}))},i={143:0};n.f.miniCss=function(e,t){var n={498:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var a=new Promise((function(o,n){i=e[t]=[o,n]}));o.push(i[2]=a);var s=n.p+n.u(t),r=new Error,l=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",r.name="ChunkLoadError",r.type=a,r.request=s,i[1](r)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var d=l(n)}for(t&&t(o);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkvue"]=self["webpackChunkvue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var i=n.O(void 0,[998],(function(){return n(143)}));i=n.O(i)})();
//# sourceMappingURL=app.150981bb.js.map