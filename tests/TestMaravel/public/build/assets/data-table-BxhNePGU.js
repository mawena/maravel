import{_ as ae}from"./AppTextField-2IS70PnL.js";import{u as ie}from"./useApi-DS-LZAt1.js";import{V as Q,a as b}from"./VRow-GpmvwSSA.js";import{V as U}from"./VCardText-DYTBPo8J.js";import{bb as oe,r as w,a as te,c as V,o as m,b as e,e as a,aU as X,l as r,Z as H,v as M,s as D,t as i,d as s,k as ne,f as x,F as se,h as ce,be as R,di as P,bm as h,a$ as _,bn as F,bd as j,b0 as K,b1 as J,E as re,af as O,p as me}from"./main-7JdyGFby.js";import{V as B}from"./VChip-C72F9fhC.js";import{V as E}from"./VAvatar-sg7CZdU7.js";import{V as Y}from"./VImg-Bk3huQTU.js";import{V as C}from"./VDataTable-C-BKOBP-.js";import{a as G}from"./formatters-Cw2xOObF.js";import{V as de}from"./VSelect-bXJTNHr2.js";import{V as ue}from"./VPagination-DeWQbSgu.js";import{_ as pe}from"./AppSelect-B8s5BIHD.js";import{V as Z}from"./VCard-D0LXqtBI.js";import{V as ee}from"./VDialog-By-T7n_4.js";import{_ as ve}from"./AppCardCode-CUjMQLDl.js";import"./form-BuGlugVy.js";import"./VTextField-DdAXD61i.js";/* empty css                   */import"./VCounter-muzn6vBk.js";import"./VField-Cnag0GiO.js";import"./easing-Bybner-F.js";import"./VInput-U8KQD51r.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./VSlideGroup-B-2l8qWb.js";import"./VCheckboxBtn-CBQDHvrp.js";import"./VSelectionControl-lb_mBfMr.js";import"./VTable-s963RB6j.js";import"./filter-D7y4hkNL.js";import"./VDivider-CIpTZ8Ni.js";import"./helpers-DK5QwNv0.js";import"./VList-BD6Dg9I8.js";import"./ssrBoot-CA1KQA2w.js";import"./dialog-transition-B9GC1vyq.js";import"./VMenu-D3AJz5Bm.js";import"./VOverlay-BMzCYiWA.js";import"./delay-9Hi4eTuF.js";import"./lazy-cOdXnimE.js";import"./scopeId-j0VLF_1N.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";const ge={class:"d-flex align-center"},ye={class:"d-flex flex-column ms-3"},fe={class:"d-block font-weight-medium text-truncate text-high-emphasis"},xe={class:"text-xs"},he={class:"d-flex align-center"},be={class:"ms-1 text-no-wrap"},De={class:"d-flex align-center"},Ae={key:1},ke={class:"text-no-wrap font-weight-medium text-high-emphasis ms-2"},Ie={class:"d-flex flex-column"},Ve={class:"d-flex align-center"},Ne={class:"text-high-emphasis font-weight-medium"},Se={key:0},_e={class:"text-xs text-no-wrap"},Ce={__name:"DemoDataTableKitchenSink",async setup(N){let c,n;const{data:l,error:o}=([c,n]=oe(()=>ie("pages/datatable")),c=await c,n(),c),t=w(""),p=[{title:"PRODUCT",key:"product.name"},{title:"DATE",key:"date"},{title:"CATEGORY",key:"product.category"},{title:"BUYERS",key:"buyer.name"},{title:"PAYMENT",key:"payment",sortable:!1},{title:"STATUS",key:"status",sortable:!1},{title:"DELETE",key:"delete",sortable:!1}],v=I=>{if(!l.value)return;const A=l.value.findIndex(S=>S.product.id===I);l.value.splice(A,1)},g=[{name:"Mouse",icon:"tabler-mouse",color:"warning"},{name:"Glass",icon:"tabler-eyeglass",color:"primary"},{name:"Smart Watch",icon:"tabler-device-watch",color:"success"},{name:"Bag",icon:"tabler-briefcase",color:"info"},{name:"Storage Device",icon:"tabler-device-audio-tape",color:"warning"},{name:"Bluetooth",icon:"tabler-bluetooth",color:"error"},{name:"Gaming",icon:"tabler-device-gamepad-2",color:"warning"},{name:"Home",icon:"tabler-home",color:"error"},{name:"VR",icon:"tabler-badge-vr",color:"primary"},{name:"Shoes",icon:"tabler-shoe",color:"success"},{name:"Electronics",icon:"tabler-cpu",color:"info"},{name:"Projector",icon:"tabler-theater",color:"warning"},{name:"iPod",icon:"tabler-device-airpods",color:"error"},{name:"Keyboard",icon:"tabler-keyboard",color:"primary"},{name:"Smart Phone",icon:"tabler-device-mobile",color:"success"},{name:"Smart TV",icon:"tabler-device-tv",color:"info"},{name:"Google Home",icon:"tabler-brand-google",color:"warning"},{name:"Mac",icon:"tabler-brand-apple",color:"error"},{name:"Headphone",icon:"tabler-headphones",color:"primary"},{name:"iMac",icon:"tabler-device-imac",color:"success"},{name:"iPhone",icon:"tabler-brand-apple",color:"warning"}],T=I=>{if(I==="Confirmed")return"primary";if(I==="Completed")return"success";if(I==="Cancelled")return"error"},z=I=>{const A=g.findIndex(S=>S.name===I);return A!==-1?[{icon:g[A].icon,color:g[A].color}]:[{icon:"tabler-help-circle",color:"primary"}]};return o.value&&console.error(o.value),(I,A)=>{const S=ae,W=te("IconBtn");return m(),V("div",null,[e(U,null,{default:a(()=>[e(Q,null,{default:a(()=>[e(b,{cols:"12","offset-md":"8",md:"4"},{default:a(()=>[e(S,{modelValue:r(t),"onUpdate:modelValue":A[0]||(A[0]=d=>X(t)?t.value=d:null),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(C,{headers:p,items:r(l)||[],search:r(t),"items-per-page":5,class:"text-no-wrap"},{"item.product.name":a(({item:d})=>[s("div",ge,[s("div",null,[e(Y,{src:d.product.image,height:"40",width:"40"},null,8,["src"])]),s("div",ye,[s("span",fe,i(d.product.name),1),s("span",xe,i(d.product.brand),1)])])]),"item.product.category":a(({item:d})=>[s("div",he,[(m(!0),V(se,null,ce(z(d.product.category),(f,u)=>(m(),x(E,{key:u,size:"26",color:f.color,variant:"tonal"},{default:a(()=>[e(H,{size:"20",color:f.color,class:"rounded-0"},{default:a(()=>[D(i(f.icon),1)]),_:2},1032,["color"])]),_:2},1032,["color"]))),128)),s("span",be,i(d.product.category),1)])]),"item.buyer.name":a(({item:d})=>[s("div",De,[e(E,{size:"1.875rem",color:d.buyer.avatar?void 0:"primary",variant:d.buyer.avatar?void 0:"tonal"},{default:a(()=>[d.buyer.avatar?(m(),x(Y,{key:0,src:d.buyer.avatar},null,8,["src"])):(m(),V("span",Ae,i(d.buyer.name.slice(0,2).toUpperCase()),1))]),_:2},1032,["color","variant"]),s("span",ke,i(d.buyer.name),1)])]),"item.payment":a(({item:d})=>[s("div",Ie,[s("div",Ve,[s("span",Ne,"$"+i(d.payment.paidAmount),1),d.payment.paidAmount!==d.payment.total?(m(),V("span",Se,"/"+i(d.payment.total),1)):ne("",!0)]),s("span",_e,i(d.payment.receivedPaymentStatus),1)])]),"item.status":a(({item:d})=>[e(B,{color:T(d.payment.status),class:M([`text-${T(d.payment.status)}`,"font-weight-medium"]),size:"small"},{default:a(()=>[D(i(d.payment.status),1)]),_:2},1032,["color","class"])]),"item.delete":a(({item:d})=>[e(W,{onClick:f=>v(d.product.id)},{default:a(()=>[e(H,{icon:"tabler-trash"})]),_:2},1032,["onClick"])]),_:1},8,["items","search"])])}}},L=[{responsiveId:"",id:95,avatar:R,fullName:"Edwina Ebsworth",post:"Human Resources Assistant",email:"eebsworth2m@sbwire.com",city:"Puzi",startDate:"09/27/2018",salary:19586.23,age:"27",experience:"2 Years",status:1},{responsiveId:"",id:1,avatar:P,fullName:"Korrie O'Crevy",post:"Nuclear Power Engineer",email:"kocrevy0@thetimes.co.uk",city:"Krasnosilka",startDate:"09/23/2016",salary:23896.35,age:"61",experience:"1 Year",status:2},{responsiveId:"",id:7,avatar:"",fullName:"Eileen Diehn",post:"Environmental Specialist",email:"ediehn6@163.com",city:"Lampuyang",startDate:"10/15/2017",salary:18991.67,age:"59",experience:"9 Years",status:3},{responsiveId:"",id:11,avatar:"",fullName:"De Falloon",post:"Sales Representative",email:"dfalloona@ifeng.com",city:"Colima",startDate:"06/12/2018",salary:19252.12,age:"30",experience:"0 Year",status:4},{responsiveId:"",id:3,avatar:h,fullName:"Stella Ganderton",post:"Operator",email:"sganderton2@tuttocitta.it",city:"Golcowa",startDate:"03/24/2018",salary:13076.28,age:"66",experience:"6 Years",status:5},{responsiveId:"",id:5,avatar:"",fullName:"Harmonia Nisius",post:"Senior Cost Accountant",email:"hnisius4@gnu.org",city:"Lucan",startDate:"08/25/2017",salary:10909.52,age:"33",experience:"3 Years",status:2},{responsiveId:"",id:6,avatar:"",fullName:"Genevra Honeywood",post:"Geologist",email:"ghoneywood5@narod.ru",city:"Maofan",startDate:"06/01/2017",salary:17803.8,age:"61",experience:"1 Year",status:1},{responsiveId:"",id:4,avatar:P,fullName:"Dorolice Crossman",post:"Cost Accountant",email:"dcrossman3@google.co.jp",city:"Paquera",startDate:"12/03/2017",salary:12336.17,age:"22",experience:"2 Years",status:2},{responsiveId:"",id:8,avatar:h,fullName:"Richardo Aldren",post:"Senior Sales Associate",email:"raldren7@mtv.com",city:"Skoghall",startDate:"11/05/2016",salary:19230.13,age:"55",experience:"5 Years",status:3},{responsiveId:"",id:9,avatar:R,fullName:"Allyson Moakler",post:"Safety Technician",email:"amoakler8@shareasale.com",city:"Mogilany",startDate:"12/29/2018",salary:11677.32,age:"39",experience:"9 Years",status:5},{responsiveId:"",id:10,avatar:h,fullName:"Merline Penhalewick",post:"Junior Executive",email:"mpenhalewick9@php.net",city:"Kanuma",startDate:"04/19/2019",salary:15939.52,age:"23",experience:"3 Years",status:2},{responsiveId:"",id:12,avatar:"",fullName:"Cyrus Gornal",post:"Senior Sales Associate",email:"cgornalb@fda.gov",city:"Boro Utara",startDate:"12/09/2017",salary:16745.47,age:"22",experience:"2 Years",status:4},{responsiveId:"",id:13,avatar:"",fullName:"Tallou Balf",post:"Staff Accountant",email:"tbalfc@sina.com.cn",city:"Siliana",startDate:"01/21/2016",salary:15488.53,age:"36",experience:"6 Years",status:4},{responsiveId:"",id:14,avatar:"",fullName:"Othilia Extill",post:"Associate Professor",email:"oextilld@theatlantic.com",city:"Brzyska",startDate:"02/01/2016",salary:18442.34,age:"43",experience:"3 Years",status:2},{responsiveId:"",id:15,avatar:"",fullName:"Wilmar Bourton",post:"Administrative Assistant",email:"wbourtone@sakura.ne.jp",city:"Bích Động",startDate:"04/25/2018",salary:13304.45,age:"19",experience:"9 Years",status:5},{responsiveId:"",id:16,avatar:_,fullName:"Robinson Brazenor",post:"General Manager",email:"rbrazenorf@symantec.com",city:"Gendiwu",startDate:"12/23/2017",salary:11953.08,age:"66",experience:"6 Years",status:5},{responsiveId:"",id:17,avatar:"",fullName:"Nadia Bettenson",post:"Environmental Tech",email:"nbettensong@joomla.org",city:"Chabařovice",startDate:"07/11/2018",salary:20484.44,age:"64",experience:"4 Years",status:1},{responsiveId:"",id:18,avatar:"",fullName:"Titus Hayne",post:"Web Designer",email:"thayneh@kickstarter.com",city:"Yangon",startDate:"05/25/2019",salary:16871.48,age:"59",experience:"9 Years",status:1},{responsiveId:"",id:19,avatar:_,fullName:"Roxie Huck",post:"Administrative Assistant",email:"rhucki@ed.gov",city:"Polýkastro",startDate:"04/04/2019",salary:19653.56,age:"41",experience:"1 Year",status:4},{responsiveId:"",id:20,avatar:h,fullName:"Latashia Lewtey",post:"Actuary",email:"llewteyj@sun.com",city:"Hougong",startDate:"08/03/2017",salary:18303.87,age:"35",experience:"5 Years",status:1},{responsiveId:"",id:21,avatar:"",fullName:"Natalina Tyne",post:"Software Engineer",email:"ntynek@merriam-webster.com",city:"Yanguan",startDate:"03/16/2019",salary:15256.4,age:"30",experience:"0 Year",status:2},{responsiveId:"",id:22,avatar:"",fullName:"Faun Josefsen",post:"Analog Circuit Design manager",email:"fjosefsenl@samsung.com",city:"Wengyang",startDate:"07/08/2017",salary:11209.16,age:"40",experience:"0 Year",status:3},{responsiveId:"",id:23,avatar:h,fullName:"Rosmunda Steed",post:"Assistant Media Planner",email:"rsteedm@xing.com",city:"Manzanares",startDate:"12/23/2017",salary:13778.34,age:"21",experience:"1 Year",status:5},{responsiveId:"",id:24,avatar:"",fullName:"Scott Jiran",post:"Graphic Designer",email:"sjirann@simplemachines.org",city:"Pinglin",startDate:"05/26/2016",salary:23081.71,age:"23",experience:"3 Years",status:1},{responsiveId:"",id:25,avatar:"",fullName:"Carmita Medling",post:"Accountant",email:"cmedlingo@hp.com",city:"Bourges",startDate:"07/31/2019",salary:13602.24,age:"47",experience:"7 Years",status:3},{responsiveId:"",id:26,avatar:R,fullName:"Morgen Benes",post:"Senior Sales Associate",email:"mbenesp@ted.com",city:"Cà Mau",startDate:"04/10/2016",salary:16969.63,age:"42",experience:"2 Years",status:4},{responsiveId:"",id:27,avatar:"",fullName:"Onfroi Doughton",post:"Civil Engineer",email:"odoughtonq@aboutads.info",city:"Utrecht (stad)",startDate:"09/29/2018",salary:23796.62,age:"28",experience:"8 Years",status:3},{responsiveId:"",id:28,avatar:"",fullName:"Kliment McGinney",post:"Chief Design Engineer",email:"kmcginneyr@paginegialle.it",city:"Xiaocheng",startDate:"07/09/2018",salary:24027.81,age:"28",experience:"8 Years",status:4},{responsiveId:"",id:29,avatar:"",fullName:"Devin Bridgland",post:"Tax Accountant",email:"dbridglands@odnoklassniki.ru",city:"Baoli",startDate:"07/17/2016",salary:13508.15,age:"48",experience:"8 Years",status:3},{responsiveId:"",id:30,avatar:F,fullName:"Gilbert McFade",post:"Biostatistician",email:"gmcfadet@irs.gov",city:"Deje",startDate:"08/28/2018",salary:21632.3,age:"20",experience:"0 Year",status:2},{responsiveId:"",id:31,avatar:"",fullName:"Teressa Bleakman",post:"Senior Editor",email:"tbleakmanu@phpbb.com",city:"Žebrák",startDate:"09/03/2016",salary:24875.41,age:"37",experience:"7 Years",status:5},{responsiveId:"",id:32,avatar:"",fullName:"Marcelia Alleburton",post:"Safety Technician",email:"malleburtonv@amazon.com",city:"Basail",startDate:"06/02/2016",salary:23888.98,age:"53",experience:"3 Years",status:2},{responsiveId:"",id:33,avatar:h,fullName:"Aili De Coursey",post:"Environmental Specialist",email:"adew@etsy.com",city:"Łazy",startDate:"09/30/2016",salary:14082.44,age:"27",experience:"7 Years",status:5},{responsiveId:"",id:34,avatar:F,fullName:"Charlton Chatres",post:"Analyst Programmer",email:"cchatresx@goo.gl",city:"Reguengos de Monsaraz",startDate:"04/07/2016",salary:21386.52,age:"22",experience:"2 Years",status:3},{responsiveId:"",id:35,avatar:j,fullName:"Nat Hugonnet",post:"Financial Advisor",email:"nhugonnety@wufoo.com",city:"Pimentel",startDate:"09/11/2019",salary:13835.97,age:"46",experience:"6 Years",status:4},{responsiveId:"",id:36,avatar:"",fullName:"Lorine Hearsum",post:"Payment Adjustment Coordinator",email:"lhearsumz@google.co.uk",city:"Shuiying",startDate:"03/05/2019",salary:22093.91,age:"47",experience:"7 Years",status:4},{responsiveId:"",id:37,avatar:K,fullName:"Sheila-kathryn Haborn",post:"Environmental Specialist",email:"shaborn10@about.com",city:"Lewolang",startDate:"11/10/2018",salary:24624.23,age:"51",experience:"1 Year",status:3},{responsiveId:"",id:38,avatar:J,fullName:"Alma Harvatt",post:"Administrative Assistant",email:"aharvatt11@addtoany.com",city:"Ulundi",startDate:"11/04/2016",salary:21782.82,age:"41",experience:"1 Year",status:1},{responsiveId:"",id:39,avatar:R,fullName:"Beatrix Longland",post:"VP Quality Control",email:"blongland12@gizmodo.com",city:"Damu",startDate:"07/18/2016",salary:22794.6,age:"62",experience:"2 Years",status:2},{responsiveId:"",id:40,avatar:_,fullName:"Hammad Condell",post:"Project Manager",email:"hcondell13@tiny.cc",city:"Bulung'ur",startDate:"11/04/2018",salary:10872.83,age:"37",experience:"7 Years",status:4},{responsiveId:"",id:41,avatar:"",fullName:"Parker Bice",post:"Technical Writer",email:"pbice14@ameblo.jp",city:"Shanlian",startDate:"03/02/2016",salary:17471.92,age:"65",experience:"5 Years",status:5},{responsiveId:"",id:42,avatar:"",fullName:"Lowrance Orsi",post:"Biostatistician",email:"lorsi15@wp.com",city:"Dengteke",startDate:"12/10/2018",salary:24719.51,age:"64",experience:"4 Years",status:1},{responsiveId:"",id:43,avatar:P,fullName:"Ddene Chaplyn",post:"Environmental Tech",email:"dchaplyn16@nymag.com",city:"Lattes",startDate:"01/23/2019",salary:11958.33,age:"38",experience:"8 Years",status:2},{responsiveId:"",id:44,avatar:"",fullName:"Washington Bygraves",post:"Human Resources Manager",email:"wbygraves17@howstuffworks.com",city:"Zlaté Hory",startDate:"09/07/2016",salary:10552.43,age:"37",experience:"7 Years",status:1},{responsiveId:"",id:45,avatar:h,fullName:"Meghann Bodechon",post:"Operator",email:"mbodechon18@1und1.de",city:"Itō",startDate:"07/23/2018",salary:23024.28,age:"61",experience:"1 Year",status:4},{responsiveId:"",id:46,avatar:j,fullName:"Moshe De Ambrosis",post:"Recruiting Manager",email:"mde19@purevolume.com",city:"San Diego",startDate:"02/10/2018",salary:10409.9,age:"47",experience:"7 Years",status:5},{responsiveId:"",id:47,avatar:_,fullName:"Had Chatelot",post:"Cost Accountant",email:"hchatelot1a@usatoday.com",city:"Mercedes",startDate:"11/23/2016",salary:11446.3,age:"64",experience:"4 Years",status:4},{responsiveId:"",id:48,avatar:"",fullName:"Georgia McCrum",post:"Registered Nurse",email:"gmccrum1b@icio.us",city:"Nggalak",startDate:"04/19/2018",salary:14002.31,age:"63",experience:"3 Years",status:1},{responsiveId:"",id:49,avatar:K,fullName:"Krishnah Stilldale",post:"VP Accounting",email:"kstilldale1c@chronoengine.com",city:"Slavs'ke",startDate:"03/18/2017",salary:10704.29,age:"56",experience:"6 Years",status:1},{responsiveId:"",id:50,avatar:_,fullName:"Mario Umbert",post:"Research Assistant",email:"mumbert1d@digg.com",city:"Chorotis",startDate:"05/13/2019",salary:21813.54,age:"43",experience:"3 Years",status:1},{responsiveId:"",id:51,avatar:"",fullName:"Edvard Dixsee",post:"Graphic Designer",email:"edixsee1e@unblog.fr",city:"Rancharia",startDate:"04/23/2019",salary:18053.11,age:"46",experience:"6 Years",status:3},{responsiveId:"",id:52,avatar:h,fullName:"Tammie Davydoch",post:"VP Quality Control",email:"tdavydoch1f@examiner.com",city:"Mamedkala",startDate:"04/19/2016",salary:17617.08,age:"47",experience:"7 Years",status:3},{responsiveId:"",id:53,avatar:"",fullName:"Benito Rodolico",post:"Safety Technician",email:"brodolico1g@sciencedirect.com",city:"Wonosobo",startDate:"10/06/2018",salary:18866.55,age:"21",experience:"1 Year",status:5},{responsiveId:"",id:54,avatar:"",fullName:"Marco Pennings",post:"Compensation Analyst",email:"mpennings1h@bizjournals.com",city:"Umag",startDate:"06/15/2017",salary:13722.18,age:"30",experience:"0 Year",status:3},{responsiveId:"",id:55,avatar:"",fullName:"Tommie O'Corr",post:"Quality Engineer",email:"tocorr1i@nyu.edu",city:"Olhos de Água",startDate:"09/26/2018",salary:15228.8,age:"51",experience:"1 Year",status:1},{responsiveId:"",id:56,avatar:j,fullName:"Cybill Poyle",post:"Cost Accountant",email:"cpoyle1j@amazon.com",city:"Hamm",startDate:"01/03/2016",salary:13951.96,age:"29",experience:"9 Years",status:1},{responsiveId:"",id:57,avatar:F,fullName:"Norry Stoller",post:"Human Resources Manager",email:"nstoller1k@noaa.gov",city:"Ruukki",startDate:"02/04/2018",salary:15100,age:"27",experience:"7 Years",status:4},{responsiveId:"",id:58,avatar:"",fullName:"Wendi Somerlie",post:"Systems Administrator",email:"wsomerlie1l@accuweather.com",city:"Meicheng",startDate:"04/22/2016",salary:20023.52,age:"28",experience:"9 Years",status:5},{responsiveId:"",id:59,avatar:"",fullName:"Ferdie Georgeon",post:"Geologist",email:"fgeorgeon1m@nhs.uk",city:"Tanahbeureum",startDate:"04/08/2019",salary:12630.26,age:"28",experience:"1 Year",status:2},{responsiveId:"",id:60,avatar:"",fullName:"Jules Auten",post:"Desktop Support Technician",email:"jauten1n@foxnews.com",city:"Mojo",startDate:"08/13/2019",salary:13870.62,age:"48",experience:"5 Years",status:4},{responsiveId:"",id:61,avatar:J,fullName:"Nichole Dacres",post:"Mechanical Systems Engineer",email:"ndacres1o@apache.org",city:"Kimanuit",startDate:"11/06/2017",salary:18220.51,age:"20",experience:"0 Year",status:3},{responsiveId:"",id:62,avatar:j,fullName:"Holly Edgworth",post:"Junior Executive",email:"hedgworth1p@craigslist.org",city:"Pedreira",startDate:"08/05/2017",salary:13999.88,age:"37",experience:"0 Year",status:5},{responsiveId:"",id:63,avatar:h,fullName:"Henriette Croft",post:"Food Chemist",email:"hcroft1q@desdev.cn",city:"Taizhou",startDate:"09/12/2019",salary:11049.79,age:"53",experience:"1 Year",status:5},{responsiveId:"",id:64,avatar:"",fullName:"Annetta Glozman",post:"Staff Accountant",email:"aglozman1r@storify.com",city:"Pendawanbaru",startDate:"08/25/2017",salary:10745.32,age:"27",experience:"3 Years",status:5},{responsiveId:"",id:65,avatar:"",fullName:"Cletis Cervantes",post:"Health Coach",email:"ccervantes1s@de.vu",city:"Solnechnyy",startDate:"05/24/2018",salary:24769.08,age:"22",experience:"7 Years",status:1},{responsiveId:"",id:66,avatar:h,fullName:"Christos Kiley",post:"Geologist",email:"ckiley1t@buzzfeed.com",city:"El Bolsón",startDate:"02/27/2019",salary:16053.15,age:"46",experience:"2 Years",status:1},{responsiveId:"",id:67,avatar:h,fullName:"Silvain Siebert",post:"VP Sales",email:"ssiebert1u@domainmarket.com",city:"Cadiz",startDate:"09/23/2017",salary:23347.17,age:"47",experience:"8 Years",status:5},{responsiveId:"",id:68,avatar:"",fullName:"Sharla Ibberson",post:"Payment Adjustment Coordinator",email:"sibberson1v@virginia.edu",city:"Lamam",startDate:"11/01/2016",salary:15658.4,age:"51",experience:"8 Years",status:1},{responsiveId:"",id:69,avatar:h,fullName:"Ripley Rentcome",post:"Physical Therapy Assistant",email:"rrentcome1w@youtu.be",city:"Dashkawka",startDate:"07/15/2018",salary:15396.66,age:"41",experience:"8 Years",status:2},{responsiveId:"",id:70,avatar:"",fullName:"Chrisse Birrane",post:"Chemical Engineer",email:"cbirrane1x@google.com.br",city:"Las Toscas",startDate:"05/22/2016",salary:15823.4,age:"62",experience:"0 Year",status:5},{responsiveId:"",id:71,avatar:"",fullName:"Georges Tesyro",post:"Human Resources Manager",email:"gtesyro1y@last.fm",city:"Gabao",startDate:"01/27/2019",salary:19051.25,age:"37",experience:"7 Years",status:1},{responsiveId:"",id:72,avatar:"",fullName:"Bondon Hazard",post:"Geological Engineer",email:"bhazard1z@over-blog.com",city:"Llano de Piedra",startDate:"01/17/2019",salary:11632.84,age:"65",experience:"3 Years",status:4},{responsiveId:"",id:73,avatar:_,fullName:"Aliza MacElholm",post:"VP Sales",email:"amacelholm20@printfriendly.com",city:"Sosnovyy Bor",startDate:"11/17/2017",salary:16741.31,age:"64",experience:"7 Years",status:2},{responsiveId:"",id:74,avatar:R,fullName:"Lucas Witherdon",post:"Senior Quality Engineer",email:"lwitherdon21@storify.com",city:"Staré Křečany",startDate:"09/26/2016",salary:19387.76,age:"38",experience:"2 Years",status:3},{responsiveId:"",id:75,avatar:"",fullName:"Pegeen Peasegod",post:"Web Designer",email:"ppeasegod22@slideshare.net",city:"Keda",startDate:"05/21/2016",salary:24014.04,age:"59",experience:"6 Years",status:3},{responsiveId:"",id:76,avatar:"",fullName:"Elyn Watkinson",post:"Structural Analysis Engineer",email:"ewatkinson23@blogspot.com",city:"Osan",startDate:"09/30/2016",salary:14493.51,age:"55",experience:"7 Years",status:1},{responsiveId:"",id:77,avatar:P,fullName:"Babb Skirving",post:"Analyst Programmer",email:"bskirving24@cbsnews.com",city:"Balky",startDate:"09/27/2016",salary:24733.28,age:"39",experience:"1 Year",status:4},{responsiveId:"",id:78,avatar:"",fullName:"Shelli Ondracek",post:"Financial Advisor",email:"sondracek25@plala.or.jp",city:"Aoluguya Ewenke Minzu",startDate:"03/28/2016",salary:21922.17,age:"23",experience:"1 Year",status:3},{responsiveId:"",id:79,avatar:h,fullName:"Stanislaw Melloy",post:"Sales Associate",email:"smelloy26@fastcompany.com",city:"Funafuti",startDate:"04/13/2017",salary:16944.42,age:"30",experience:"2 Years",status:2},{responsiveId:"",id:80,avatar:"",fullName:"Seamus Eisikovitsh",post:"Legal Assistant",email:"seisikovitsh27@usgs.gov",city:"Cangkringan",startDate:"05/28/2018",salary:21963.69,age:"22",experience:"7 Years",status:1},{responsiveId:"",id:81,avatar:R,fullName:"Tammie Wattins",post:"Web Designer",email:"twattins28@statcounter.com",city:"Xilin",startDate:"08/07/2018",salary:16049.93,age:"36",experience:"5 Years",status:2},{responsiveId:"",id:82,avatar:K,fullName:"Aila Quailadis",post:"Technical Writer",email:"aquail29@prlog.org",city:"Shuangchahe",startDate:"02/11/2018",salary:24137.29,age:"43",experience:"4 Years",status:4},{responsiveId:"",id:83,avatar:"",fullName:"Myrvyn Gilogly",post:"Research Associate",email:"mgilogly2a@elpais.com",city:"Prince Rupert",startDate:"05/13/2018",salary:10089.96,age:"19",experience:"8 Years",status:4},{responsiveId:"",id:84,avatar:_,fullName:"Hanna Langthorne",post:"Analyst Programmer",email:"hlangthorne2b@stumbleupon.com",city:"Guaynabo",startDate:"11/11/2018",salary:14227.1,age:"21",experience:"7 Years",status:3},{responsiveId:"",id:85,avatar:"",fullName:"Ruby Gimblet",post:"Registered Nurse",email:"rgimblet2c@1688.com",city:"Nanyulinxi",startDate:"03/28/2016",salary:19562.59,age:"30",experience:"1 Year",status:2},{responsiveId:"",id:86,avatar:_,fullName:"Louis Paszak",post:"Programmer",email:"lpaszak2d@behance.net",city:"Chiscas",startDate:"04/25/2016",salary:17178.86,age:"51",experience:"7 Years",status:5},{responsiveId:"",id:87,avatar:"",fullName:"Glennie Riolfi",post:"Computer Systems Analyst",email:"griolfi2e@drupal.org",city:"Taung",startDate:"06/18/2018",salary:15089.83,age:"29",experience:"4 Years",status:3},{responsiveId:"",id:88,avatar:"",fullName:"Jemimah Morgan",post:"Staff Accountant",email:"jmorgan2f@nifty.com",city:"La Esperanza",startDate:"01/17/2016",salary:18330.72,age:"27",experience:"3 Years",status:1},{responsiveId:"",id:89,avatar:P,fullName:"Talya Brandon",post:"Food Chemist",email:"tbrandon2g@ucoz.com",city:"Zaječar",startDate:"10/08/2018",salary:16284.64,age:"28",experience:"6 Years",status:1},{responsiveId:"",id:90,avatar:F,fullName:"Renate Shay",post:"Recruiter",email:"rshay2h@tumblr.com",city:"Pueblo Viejo",startDate:"03/15/2017",salary:18523.75,age:"28",experience:"3 Years",status:1},{responsiveId:"",id:91,avatar:"",fullName:"Julianne Bartosik",post:"Senior Cost Accountant",email:"jbartosik2i@state.gov",city:"Botlhapatlou",startDate:"02/06/2017",salary:17607.66,age:"48",experience:"6 Years",status:3},{responsiveId:"",id:92,avatar:J,fullName:"Yvonne Emberton",post:"Recruiter",email:"yemberton2j@blog.com",city:"Nagcarlan",startDate:"02/13/2017",salary:17550.18,age:"20",experience:"1 Year",status:4},{responsiveId:"",id:93,avatar:K,fullName:"Danya Faichnie",post:"Social Worker",email:"dfaichnie2k@weather.com",city:"Taling",startDate:"07/29/2019",salary:18469.35,age:"37",experience:"3 Years",status:4},{responsiveId:"",id:94,avatar:"",fullName:"Ronica Hasted",post:"Software Consultant",email:"rhasted2l@hexun.com",city:"Gangkou",startDate:"07/04/2019",salary:24866.66,age:"53",experience:"7 Years",status:4},{responsiveId:"",id:96,avatar:"",fullName:"Alaric Beslier",post:"Tax Accountant",email:"abeslier2n@zimbio.com",city:"Ocucaje",startDate:"04/16/2017",salary:19366.53,age:"22",experience:"8 Years",status:4},{responsiveId:"",id:2,avatar:j,fullName:"Bailie Coulman",post:"VP Quality Control",email:"bcoulman1@yolasite.com",city:"Hinigaran",startDate:"05/20/2018",salary:13633.69,age:"63",experience:"3 Years",status:2},{responsiveId:"",id:97,avatar:"",fullName:"Reina Peckett",post:"Quality Control Specialist",email:"rpeckett2o@timesonline.co.uk",city:"Anyang",startDate:"05/20/2018",salary:16619.4,age:"46",experience:"8 Years",status:4},{responsiveId:"",id:98,avatar:h,fullName:"Olivette Gudgin",post:"Paralegal",email:"ogudgin2p@gizmodo.com",city:"Fujinomiya",startDate:"04/09/2019",salary:15211.6,age:"47",experience:"8 Years",status:2},{responsiveId:"",id:99,avatar:P,fullName:"Evangelina Carnock",post:"Cost Accountant",email:"ecarnock2q@washington.edu",city:"Doushaguan",startDate:"01/26/2017",salary:23704.82,age:"51",experience:"0 Year",status:4},{responsiveId:"",id:100,avatar:"",fullName:"Glyn Giacoppo",post:"Software Test Engineer",email:"ggiacoppo2r@apache.org",city:"Butha-Buthe",startDate:"04/15/2017",salary:24973.48,age:"41",experience:"7 Years",status:2}],Te={class:"d-flex align-center"},we={key:1},Ee={class:"d-flex flex-column ms-3"},Ye={class:"d-block font-weight-medium text-high-emphasis text-truncate"},Re={class:"d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2"},Pe={__name:"DemoDataTableExternalPagination",setup(N){const c=w([]),n=w({page:1,itemsPerPage:5,sortBy:[""],sortDesc:[!1]}),l=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],o=t=>t===1?{color:"primary",text:"Current"}:t===2?{color:"success",text:"Professional"}:t===3?{color:"error",text:"Rejected"}:t===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return re(()=>{c.value=JSON.parse(JSON.stringify(L))}),(t,p)=>(m(),x(C,{headers:l,items:r(c),"items-per-page":r(n).itemsPerPage,page:r(n).page,options:r(n)},{"item.fullName":a(({item:v})=>[s("div",Te,[e(E,{size:"32",color:v.avatar?"":"primary",class:M(v.avatar?"":"v-avatar-light-bg primary--text"),variant:v.avatar?void 0:"tonal"},{default:a(()=>[v.avatar?(m(),x(Y,{key:0,src:v.avatar},null,8,["src"])):(m(),V("span",we,i(("avatarText"in t?t.avatarText:r(G))(v.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",Ee,[s("span",Ye,i(v.fullName),1),s("small",null,i(v.post),1)])])]),"item.status":a(({item:v})=>[e(B,{color:o(v.status).color,class:"font-weight-medium",size:"small"},{default:a(()=>[D(i(o(v.status).text),1)]),_:2},1032,["color"])]),bottom:a(()=>[e(U,{class:"pt-2"},{default:a(()=>[s("div",Re,[e(de,{modelValue:r(n).itemsPerPage,"onUpdate:modelValue":p[0]||(p[0]=v=>r(n).itemsPerPage=v),items:[5,10,25,50,100],label:"Rows per page:",variant:"underlined",style:{"max-inline-size":"8rem","min-inline-size":"5rem"}},null,8,["modelValue"]),e(ue,{modelValue:r(n).page,"onUpdate:modelValue":p[1]||(p[1]=v=>r(n).page=v),"total-visible":t.$vuetify.display.smAndDown?3:5,length:Math.ceil(r(c).length/r(n).itemsPerPage)},null,8,["modelValue","total-visible","length"])])]),_:1})]),_:1},8,["items","items-per-page","page","options"]))}},Me={class:"d-flex align-center"},Be={key:1},Le={class:"d-flex flex-column ms-3"},ze={class:"d-block font-weight-medium text-high-emphasis text-truncate"},Ge={class:"d-flex gap-1"},je={class:"text-body-1 mb-6"},$e={class:"text-h6"},Oe={class:"self-align-end d-flex gap-4 justify-end"},Ue={class:"d-flex justify-center gap-4"},He={__name:"DemoDataTableRowEditingViaDialog",setup(N){const c=w(!1),n=w(!1),l=w({responsiveId:"",id:-1,avatar:"",fullName:"",post:"",email:"",city:"",startDate:"",salary:-1,age:"",experience:"",status:-1}),o=w(l.value),t=w(-1),p=w([]),v=[{text:"Current",value:1},{text:"Professional",value:2},{text:"Rejected",value:3},{text:"Resigned",value:4},{text:"Applied",value:5}],g=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"},{title:"ACTIONS",key:"actions"}],T=f=>f===1?{color:"primary",text:"Current"}:f===2?{color:"success",text:"Professional"}:f===3?{color:"error",text:"Rejected"}:f===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"},z=f=>{t.value=p.value.indexOf(f),o.value={...f},c.value=!0},I=f=>{t.value=p.value.indexOf(f),o.value={...f},n.value=!0},A=()=>{c.value=!1,t.value=-1,o.value={...l.value}},S=()=>{n.value=!1,t.value=-1,o.value={...l.value}},W=()=>{t.value>-1?Object.assign(p.value[t.value],o.value):p.value.push(o.value),A()},d=()=>{p.value.splice(t.value,1),S()};return re(()=>{p.value=JSON.parse(JSON.stringify(L))}),(f,u)=>{const q=te("IconBtn"),$=ae,le=pe;return m(),V(se,null,[e(C,{headers:g,items:r(p),"items-per-page":5},{"item.fullName":a(({item:y})=>[s("div",Me,[e(E,{size:"32",color:y.avatar?"":"primary",class:M(y.avatar?"":"v-avatar-light-bg primary--text"),variant:y.avatar?void 0:"tonal"},{default:a(()=>[y.avatar?(m(),x(Y,{key:0,src:y.avatar},null,8,["src"])):(m(),V("span",Be,i(("avatarText"in f?f.avatarText:r(G))(y.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",Le,[s("span",ze,i(y.fullName),1),s("small",null,i(y.post),1)])])]),"item.status":a(({item:y})=>[e(B,{color:T(y.status).color,size:"small"},{default:a(()=>[D(i(T(y.status).text),1)]),_:2},1032,["color"])]),"item.actions":a(({item:y})=>[s("div",Ge,[e(q,{onClick:k=>z(y)},{default:a(()=>[e(H,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(q,{onClick:k=>I(y)},{default:a(()=>[e(H,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),_:1},8,["items"]),e(ee,{modelValue:r(c),"onUpdate:modelValue":u[6]||(u[6]=y=>X(c)?c.value=y:null),"max-width":"600px"},{default:a(()=>[e(Z,{title:"Edit Item"},{default:a(()=>[e(U,null,{default:a(()=>{var y;return[s("div",je,[u[8]||(u[8]=D(" Name: ")),s("span",$e,i((y=r(o))==null?void 0:y.fullName),1)]),e(Q,null,{default:a(()=>[e(b,{cols:"12",sm:"6"},{default:a(()=>[e($,{modelValue:r(o).fullName,"onUpdate:modelValue":u[0]||(u[0]=k=>r(o).fullName=k),label:"User name"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6"},{default:a(()=>[e($,{modelValue:r(o).email,"onUpdate:modelValue":u[1]||(u[1]=k=>r(o).email=k),label:"Email"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6"},{default:a(()=>[e($,{modelValue:r(o).salary,"onUpdate:modelValue":u[2]||(u[2]=k=>r(o).salary=k),label:"Salary",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6"},{default:a(()=>[e($,{modelValue:r(o).age,"onUpdate:modelValue":u[3]||(u[3]=k=>r(o).age=k),label:"Age",type:"number"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6"},{default:a(()=>[e($,{modelValue:r(o).startDate,"onUpdate:modelValue":u[4]||(u[4]=k=>r(o).startDate=k),label:"Date"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6"},{default:a(()=>[e(le,{modelValue:r(o).status,"onUpdate:modelValue":u[5]||(u[5]=k=>r(o).status=k),items:v,"item-title":"text","item-value":"value",label:"Standard"},null,8,["modelValue"])]),_:1})]),_:1})]}),_:1}),e(U,null,{default:a(()=>[s("div",Oe,[e(O,{color:"error",variant:"outlined",onClick:A},{default:a(()=>u[9]||(u[9]=[D(" Cancel ")])),_:1,__:[9]}),e(O,{color:"success",variant:"elevated",onClick:W},{default:a(()=>u[10]||(u[10]=[D(" Save ")])),_:1,__:[10]})])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(ee,{modelValue:r(n),"onUpdate:modelValue":u[7]||(u[7]=y=>X(n)?n.value=y:null),"max-width":"500px"},{default:a(()=>[e(Z,{title:"Are you sure you want to delete this item?"},{default:a(()=>[e(U,null,{default:a(()=>[s("div",Ue,[e(O,{color:"error",variant:"outlined",onClick:S},{default:a(()=>u[11]||(u[11]=[D(" Cancel ")])),_:1,__:[11]}),e(O,{color:"success",variant:"elevated",onClick:d},{default:a(()=>u[12]||(u[12]=[D(" OK ")])),_:1,__:[12]})])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},Fe={class:"d-flex align-center"},Ke={key:1},We={class:"d-flex flex-column ms-3"},Je={class:"d-block font-weight-medium text-high-emphasis text-truncate"},Xe={__name:"DemoDataTableGroupingRows",setup(N){const c=[{responsiveId:"",id:1,avatar:P,fullName:"Korrie O'Crevy",post:"Nuclear Power Engineer",email:"kocrevy0@thetimes.co.uk",city:"Krasnosilka",startDate:"09/23/2016",salary:23896.35,age:"61",experience:"1 Year",status:"Professional"},{responsiveId:"",id:2,avatar:j,fullName:"Bailie Coulman",post:"VP Quality Control",email:"bcoulman1@yolasite.com",city:"Hinigaran",startDate:"05/20/2018",salary:13633.69,age:"63",experience:"3 Years",status:"Professional"},{responsiveId:"",id:3,avatar:h,fullName:"Stella Ganderton",post:"Operator",email:"sganderton2@tuttocitta.it",city:"Golcowa",startDate:"03/24/2018",salary:13076.28,age:"66",experience:"6 Years",status:"Applied"},{responsiveId:"",id:4,avatar:P,fullName:"Dorolice Crossman",post:"Cost Accountant",email:"dcrossman3@google.co.jp",city:"Paquera",startDate:"12/03/2017",salary:12336.17,age:"22",experience:"2 Years",status:"Professional"},{responsiveId:"",id:6,avatar:"",fullName:"Genevra Honeywood",post:"Geologist",email:"ghoneywood5@narod.ru",city:"Maofan",startDate:"06/01/2017",salary:17803.8,age:"61",experience:"1 Year",status:"Current"},{responsiveId:"",id:7,avatar:"",fullName:"Eileen Diehn",post:"Environmental Specialist",email:"ediehn6@163.com",city:"Lampuyang",startDate:"10/15/2017",salary:18991.67,age:"59",experience:"9 Years",status:"Rejected"},{responsiveId:"",id:8,avatar:h,fullName:"Richardo Aldren",post:"Senior Sales Associate",email:"raldren7@mtv.com",city:"Skoghall",startDate:"11/05/2016",salary:19230.13,age:"55",experience:"5 Years",status:"Rejected"},{responsiveId:"",id:9,avatar:R,fullName:"Allyson Moakler",post:"Safety Technician",email:"amoakler8@shareasale.com",city:"Mogilany",startDate:"12/29/2018",salary:11677.32,age:"39",experience:"9 Years",status:"Applied"},{responsiveId:"",id:11,avatar:"",fullName:"De Falloon",post:"Sales Representative",email:"dfalloona@ifeng.com",city:"Colima",startDate:"06/12/2018",salary:19252.12,age:"30",experience:"0 Year",status:"Resigned"},{responsiveId:"",id:12,avatar:"",fullName:"Cyrus Gornal",post:"Senior Sales Associate",email:"cgornalb@fda.gov",city:"Boro Utara",startDate:"12/09/2017",salary:16745.47,age:"22",experience:"2 Years",status:"Resigned"},{responsiveId:"",id:13,avatar:"",fullName:"Tallou Balf",post:"Staff Accountant",email:"tbalfc@sina.com.cn",city:"Siliana",startDate:"01/21/2016",salary:15488.53,age:"36",experience:"6 Years",status:"Resigned"},{responsiveId:"",id:15,avatar:"",fullName:"Wilmar Bourton",post:"Administrative Assistant",email:"wbourtone@sakura.ne.jp",city:"Bích Động",startDate:"04/25/2018",salary:13304.45,age:"19",experience:"9 Years",status:"Applied"},{responsiveId:"",id:16,avatar:_,fullName:"Robinson Brazenor",post:"General Manager",email:"rbrazenorf@symantec.com",city:"Gendiwu",startDate:"12/23/2017",salary:11953.08,age:"66",experience:"6 Years",status:"Applied"},{responsiveId:"",id:17,avatar:"",fullName:"Nadia Bettenson",post:"Environmental Tech",email:"nbettensong@joomla.org",city:"Chabařovice",startDate:"07/11/2018",salary:20484.44,age:"64",experience:"4 Years",status:"Current"},{responsiveId:"",id:18,avatar:"",fullName:"Titus Hayne",post:"Web Designer",email:"thayneh@kickstarter.com",city:"Yangon",startDate:"05/25/2019",salary:16871.48,age:"59",experience:"9 Years",status:"Current"},{responsiveId:"",id:19,avatar:_,fullName:"Roxie Huck",post:"Administrative Assistant",email:"rhucki@ed.gov",city:"Polýkastro",startDate:"04/04/2019",salary:19653.56,age:"41",experience:"1 Year",status:"Resigned"},{responsiveId:"",id:23,avatar:h,fullName:"Rosmunda Steed",post:"Assistant Media Planner",email:"rsteedm@xing.com",city:"Manzanares",startDate:"12/23/2017",salary:13778.34,age:"21",experience:"1 Year",status:"Applied"},{responsiveId:"",id:26,avatar:R,fullName:"Morgen Benes",post:"Senior Sales Associate",email:"mbenesp@ted.com",city:"Cà Mau",startDate:"04/10/2016",salary:16969.63,age:"42",experience:"2 Years",status:"Resigned"},{responsiveId:"",id:28,avatar:"",fullName:"Kliment McGinney",post:"Chief Design Engineer",email:"kmcginneyr@paginegialle.it",city:"Xiaocheng",startDate:"07/09/2018",salary:24027.81,age:"28",experience:"8 Years",status:"Resigned"},{responsiveId:"",id:31,avatar:"",fullName:"Teressa Bleakman",post:"Senior Editor",email:"tbleakmanu@phpbb.com",city:"Žebrák",startDate:"09/03/2016",salary:24875.41,age:"37",experience:"7 Years",status:"Applied"}],n=[{title:"Group by status",key:"data-table-group"},{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],l=[{key:"status"}],o=p=>p==="Current"?{color:"primary"}:p==="Professional"?{color:"success"}:p==="Rejected"?{color:"error"}:p==="Resigned"?{color:"warning"}:{color:"info"},t=p=>p.icon;return(p,v)=>(m(),x(C,{headers:n,items:c,"items-per-page":10,"group-by":l},{"item.fullName":a(({item:g})=>[s("div",Fe,[e(E,{size:"32",color:g.avatar?"":"primary",class:M(g.avatar?"":"v-avatar-light-bg primary--text"),variant:g.avatar?void 0:"tonal"},{default:a(()=>[g.avatar?(m(),x(Y,{key:0,src:g.avatar},null,8,["src"])):(m(),V("span",Ke,i(("avatarText"in p?p.avatarText:r(G))(g.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",We,[s("span",Je,i(g.fullName),1),s("small",null,i(g.post),1)])])]),"item.status":a(({item:g})=>[e(B,{color:o(g.status).color,size:"small",class:"font-weight-medium"},{default:a(()=>[D(i(g.status),1)]),_:2},1032,["color"])]),"data-table-group":a(({props:g,item:T,count:z})=>[s("td",null,[e(O,me(g,{variant:"text",density:"comfortable"}),{default:a(()=>[e(H,{class:"flip-in-rtl",icon:t(g)},null,8,["icon"])]),_:2},1040),s("span",null,i(T.value),1),s("span",null,"("+i(z)+")",1)])]),_:1}))}},Qe={class:"v-data-table__tr"},qe=["colspan"],Ze={class:"my-1"},ea={class:"my-1"},aa={class:"d-flex align-center"},ta={key:1},sa={class:"d-flex flex-column ms-3"},ra={class:"d-block font-weight-medium text-high-emphasis text-truncate"},la={__name:"DemoDataTableExpandableRows",setup(N){const c=[{title:"",key:"data-table-expand"},{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],n=l=>l===1?{color:"primary",text:"Current"}:l===2?{color:"success",text:"Professional"}:l===3?{color:"error",text:"Rejected"}:l===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(l,o)=>(m(),x(C,{headers:c,items:r(L),"items-per-page":5,"expand-on-click":""},{"expanded-row":a(t=>[s("tr",Qe,[s("td",{colspan:c.length},[s("p",Ze," City: "+i(t.item.city),1),s("p",ea," Experience: "+i(t.item.experience),1),s("p",null,"Post: "+i(t.item.post),1)],8,qe)])]),"item.fullName":a(({item:t})=>[s("div",aa,[e(E,{size:"32",color:t.avatar?"":"primary",class:M(t.avatar?"":"v-avatar-light-bg primary--text"),variant:t.avatar?void 0:"tonal"},{default:a(()=>[t.avatar?(m(),x(Y,{key:0,src:t.avatar},null,8,["src"])):(m(),V("span",ta,i(("avatarText"in l?l.avatarText:r(G))(t.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",sa,[s("span",ra,i(t.fullName),1),s("small",null,i(t.post),1)])])]),"item.status":a(({item:t})=>[e(B,{color:n(t.status).color,class:"font-weight-medium",size:"small"},{default:a(()=>[D(i(n(t.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}},ia={class:"d-flex align-center"},oa={key:1},na={class:"d-flex flex-column ms-3"},ca={class:"d-block font-weight-medium text-high-emphasis text-truncate"},ma={__name:"DemoDataTableFixedHeader",setup(N){const c=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],n=l=>l===1?{color:"primary",text:"Current"}:l===2?{color:"success",text:"Professional"}:l===3?{color:"error",text:"Rejected"}:l===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(l,o)=>(m(),x(C,{headers:c,items:r(L),"items-per-page":10,height:"300","fixed-header":""},{"item.fullName":a(({item:t})=>[s("div",ia,[e(E,{size:"32",color:t.avatar?"":"primary",class:M(t.avatar?"":"v-avatar-light-bg primary--text"),variant:t.avatar?void 0:"tonal"},{default:a(()=>[t.avatar?(m(),x(Y,{key:0,src:t.avatar},null,8,["src"])):(m(),V("span",oa,i(("avatarText"in l?l.avatarText:r(G))(t.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",na,[s("span",ca,i(t.fullName),1),s("small",null,i(t.post),1)])])]),"item.status":a(({item:t})=>[e(B,{color:n(t.status).color,class:"font-weight-medium",size:"small"},{default:a(()=>[D(i(n(t.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}},da={class:"d-flex align-center"},ua={key:1},pa={class:"d-flex flex-column ms-3"},va={class:"d-block font-weight-medium text-high-emphasis text-truncate"},ga={__name:"DemoDataTableRowSelection",setup(N){const c=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],n=l=>l===1?{color:"primary",text:"Current"}:l===2?{color:"success",text:"Professional"}:l===3?{color:"error",text:"Rejected"}:l===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(l,o)=>(m(),x(C,{headers:c,items:r(L),"items-per-page":5,"show-select":""},{"item.fullName":a(({item:t})=>[s("div",da,[e(E,{size:"32",color:t.avatar?"":"primary",class:M(t.avatar?"":"v-avatar-light-bg primary--text"),variant:t.avatar?void 0:"tonal"},{default:a(()=>[t.avatar?(m(),x(Y,{key:0,src:t.avatar},null,8,["src"])):(m(),V("span",ua,i(("avatarText"in l?l.avatarText:r(G))(t.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",pa,[s("span",va,i(t.fullName),1),s("small",null,i(t.post),1)])])]),"item.status":a(({item:t})=>[e(B,{color:n(t.status).color,class:"font-weight-medium",size:"small"},{default:a(()=>[D(i(n(t.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}},ya={class:"d-flex align-center"},fa={key:1},xa={class:"d-flex flex-column ms-3"},ha={class:"d-block font-weight-medium text-high-emphasis text-truncate"},ba={__name:"DemoDataTableCellSlot",setup(N){const c=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],n=l=>l===1?{color:"primary",text:"Current"}:l===2?{color:"success",text:"Professional"}:l===3?{color:"error",text:"Rejected"}:l===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(l,o)=>(m(),x(C,{headers:c,items:r(L),"items-per-page":5},{"item.fullName":a(({item:t})=>[s("div",ya,[e(E,{size:"32",color:t.avatar?"":"primary",class:M(t.avatar?"":"v-avatar-light-bg primary--text"),variant:t.avatar?void 0:"tonal"},{default:a(()=>[t.avatar?(m(),x(Y,{key:0,src:t.avatar},null,8,["src"])):(m(),V("span",fa,i(("avatarText"in l?l.avatarText:r(G))(t.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",xa,[s("span",ha,i(t.fullName),1),s("small",null,i(t.post),1)])])]),"item.status":a(({item:t})=>[e(B,{color:n(t.status).color,class:"font-weight-medium",size:"small"},{default:a(()=>[D(i(n(t.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}},Da={__name:"DemoDataTableDense",setup(N){const c=[{title:"ID",sortable:!1,key:"id"},{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"EXPERIENCE",key:"experience"},{title:"AGE",key:"age"}];return(n,l)=>(m(),x(C,{headers:c,items:r(L),density:"compact","items-per-page":5},null,8,["items"]))}},Aa={__name:"DemoDataTableBasic",setup(N){const c=[{title:"ID",sortable:!1,key:"id"},{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"EXPERIENCE",key:"experience"},{title:"AGE",key:"age"}];return(n,l)=>(m(),x(C,{headers:c,items:r(L),"items-per-page":5},null,8,["items"]))}},ka={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'ID', sortable: false, key: 'id' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'EXPERIENCE', key: 'experience' },
  { title: 'AGE', key: 'age' },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  />
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'ID',
    sortable: false,
    key: 'id',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'EXPERIENCE',
    key: 'experience',
  },
  {
    title: 'AGE',
    key: 'age',
  },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  />
</template>
`},Ia={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Va={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'ID', sortable: false, key: 'id' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'EXPERIENCE', key: 'experience' },
  { title: 'AGE', key: 'age' },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    density="compact"
    :items-per-page="5"
  />
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'ID',
    sortable: false,
    key: 'id',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'EXPERIENCE',
    key: 'experience',
  },
  {
    title: 'AGE',
    key: 'age',
  },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    density="compact"
    :items-per-page="5"
  />
</template>
`},Na={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

// Headers
const headers = [
  { title: '', key: 'data-table-expand' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    expand-on-click
  >
    <!-- Expanded Row Data -->
    <template #expanded-row="slotProps">
      <tr class="v-data-table__tr">
        <td :colspan="headers.length">
          <p class="my-1">
            City: {{ slotProps.item.city }}
          </p>
          <p class="my-1">
            Experience: {{ slotProps.item.experience }}
          </p>
          <p>Post: {{ slotProps.item.post }}</p>
        </td>
      </tr>
    </template>

    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: '',
    key: 'data-table-expand',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    expand-on-click
  >
    <!-- Expanded Row Data -->
    <template #expanded-row="slotProps">
      <tr class="v-data-table__tr">
        <td :colspan="headers.length">
          <p class="my-1">
            City: {{ slotProps.item.city }}
          </p>
          <p class="my-1">
            Experience: {{ slotProps.item.experience }}
          </p>
          <p>Post: {{ slotProps.item.post }}</p>
        </td>
      </tr>
    </template>

    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Sa={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'
import type { Data } from '@db/pages/datatable/types'

const userList = ref<Data[]>([])
const options = ref({ page: 1, itemsPerPage: 5, sortBy: [''], sortDesc: [false] })

// headers
const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    :options="options"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
          <VSelect
            v-model="options.itemsPerPage"
            :items="[5, 10, 25, 50, 100]"
            label="Rows per page:"
            variant="underlined"
            style="max-inline-size: 8rem;min-inline-size: 5rem;"
          />

          <VPagination
            v-model="options.page"
            :total-visible="$vuetify.display.smAndDown ? 3 : 5"
            :length="Math.ceil(userList.length / options.itemsPerPage)"
          />
        </div>
      </VCardText>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const userList = ref([])

const options = ref({
  page: 1,
  itemsPerPage: 5,
  sortBy: [''],
  sortDesc: [false],
})

// headers
const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    :options="options"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
          <VSelect
            v-model="options.itemsPerPage"
            :items="[5, 10, 25, 50, 100]"
            label="Rows per page:"
            variant="underlined"
            style="max-inline-size: 8rem;min-inline-size: 5rem;"
          />

          <VPagination
            v-model="options.page"
            :total-visible="$vuetify.display.smAndDown ? 3 : 5"
            :length="Math.ceil(userList.length / options.itemsPerPage)"
          />
        </div>
      </VCardText>
    </template>
  </VDataTable>
</template>
`},_a={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="10"
    height="300"
    fixed-header
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="10"
    height="300"
    fixed-header
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Ca={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const userList = [
  {
    responsiveId: '',
    id: 1,
    avatar: avatar8,
    fullName: 'Korrie O'Crevy',
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    startDate: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 2,
    avatar: avatar1,
    fullName: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    startDate: '05/20/2018',
    salary: 13633.69,
    age: '63',
    experience: '3 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 3,
    avatar: avatar7,
    fullName: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    startDate: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 4,
    avatar: avatar8,
    fullName: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    startDate: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 6,
    avatar: '',
    fullName: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    startDate: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 7,
    avatar: '',
    fullName: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    startDate: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 8,
    avatar: avatar7,
    fullName: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    startDate: '11/05/2016',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 9,
    avatar: avatar2,
    fullName: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    startDate: '12/29/2018',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 11,
    avatar: '',
    fullName: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    startDate: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 12,
    avatar: '',
    fullName: 'Cyrus Gornal',
    post: 'Senior Sales Associate',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    startDate: '12/09/2017',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 13,
    avatar: '',
    fullName: 'Tallou Balf',
    post: 'Staff Accountant',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    startDate: '01/21/2016',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 15,
    avatar: '',
    fullName: 'Wilmar Bourton',
    post: 'Administrative Assistant',
    email: 'wbourtone@sakura.ne.jp',
    city: 'Bích Động',
    startDate: '04/25/2018',
    salary: 13304.45,
    age: '19',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 16,
    avatar: avatar4,
    fullName: 'Robinson Brazenor',
    post: 'General Manager',
    email: 'rbrazenorf@symantec.com',
    city: 'Gendiwu',
    startDate: '12/23/2017',
    salary: 11953.08,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 17,
    avatar: '',
    fullName: 'Nadia Bettenson',
    post: 'Environmental Tech',
    email: 'nbettensong@joomla.org',
    city: 'Chabařovice',
    startDate: '07/11/2018',
    salary: 20484.44,
    age: '64',
    experience: '4 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 18,
    avatar: '',
    fullName: 'Titus Hayne',
    post: 'Web Designer',
    email: 'thayneh@kickstarter.com',
    city: 'Yangon',
    startDate: '05/25/2019',
    salary: 16871.48,
    age: '59',
    experience: '9 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 19,
    avatar: avatar4,
    fullName: 'Roxie Huck',
    post: 'Administrative Assistant',
    email: 'rhucki@ed.gov',
    city: 'Polýkastro',
    startDate: '04/04/2019',
    salary: 19653.56,
    age: '41',
    experience: '1 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 23,
    avatar: avatar7,
    fullName: 'Rosmunda Steed',
    post: 'Assistant Media Planner',
    email: 'rsteedm@xing.com',
    city: 'Manzanares',
    startDate: '12/23/2017',
    salary: 13778.34,
    age: '21',
    experience: '1 Year',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 26,
    avatar: avatar2,
    fullName: 'Morgen Benes',
    post: 'Senior Sales Associate',
    email: 'mbenesp@ted.com',
    city: 'Cà Mau',
    startDate: '04/10/2016',
    salary: 16969.63,
    age: '42',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 28,
    avatar: '',
    fullName: 'Kliment McGinney',
    post: 'Chief Design Engineer',
    email: 'kmcginneyr@paginegialle.it',
    city: 'Xiaocheng',
    startDate: '07/09/2018',
    salary: 24027.81,
    age: '28',
    experience: '8 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 31,
    avatar: '',
    fullName: 'Teressa Bleakman',
    post: 'Senior Editor',
    email: 'tbleakmanu@phpbb.com',
    city: 'Žebrák',
    startDate: '09/03/2016',
    salary: 24875.41,
    age: '37',
    experience: '7 Years',
    status: 'Applied',
  },
]

const headers = [
  { title: 'Group by status', key: 'data-table-group' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const groupBy = [{ key: 'status' }]

const resolveStatusVariant = (status: string) => {
  if (status === 'Current')
    return { color: 'primary' }
  else if (status === 'Professional')
    return { color: 'success' }
  else if (status === 'Rejected')
    return { color: 'error' }
  else if (status === 'Resigned')
    return { color: 'warning' }
  else
    return { color: 'info' }
}

const getIcon = (props: Record<string, unknown>) => props.icon as any
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    :group-by="groupBy"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"

        size="small"
        class="font-weight-medium"
      >
        {{ item.status }}
      </VChip>
    </template>

    <template #data-table-group="{ props, item, count }">
      <td>
        <VBtn
          v-bind="props"
          variant="text"
          density="comfortable"
        >
          <VIcon
            class="flip-in-rtl"
            :icon="getIcon(props)"
          />
        </VBtn>

        <span>{{ item.value }}</span>
        <span>({{ count }})</span>
      </td>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const userList = [
  {
    responsiveId: '',
    id: 1,
    avatar: avatar8,
    fullName: 'Korrie O'Crevy',
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    startDate: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 2,
    avatar: avatar1,
    fullName: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    startDate: '05/20/2018',
    salary: 13633.69,
    age: '63',
    experience: '3 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 3,
    avatar: avatar7,
    fullName: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    startDate: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 4,
    avatar: avatar8,
    fullName: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    startDate: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 6,
    avatar: '',
    fullName: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    startDate: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 7,
    avatar: '',
    fullName: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    startDate: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 8,
    avatar: avatar7,
    fullName: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    startDate: '11/05/2016',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 9,
    avatar: avatar2,
    fullName: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    startDate: '12/29/2018',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 11,
    avatar: '',
    fullName: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    startDate: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 12,
    avatar: '',
    fullName: 'Cyrus Gornal',
    post: 'Senior Sales Associate',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    startDate: '12/09/2017',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 13,
    avatar: '',
    fullName: 'Tallou Balf',
    post: 'Staff Accountant',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    startDate: '01/21/2016',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 15,
    avatar: '',
    fullName: 'Wilmar Bourton',
    post: 'Administrative Assistant',
    email: 'wbourtone@sakura.ne.jp',
    city: 'Bích Động',
    startDate: '04/25/2018',
    salary: 13304.45,
    age: '19',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 16,
    avatar: avatar4,
    fullName: 'Robinson Brazenor',
    post: 'General Manager',
    email: 'rbrazenorf@symantec.com',
    city: 'Gendiwu',
    startDate: '12/23/2017',
    salary: 11953.08,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 17,
    avatar: '',
    fullName: 'Nadia Bettenson',
    post: 'Environmental Tech',
    email: 'nbettensong@joomla.org',
    city: 'Chabařovice',
    startDate: '07/11/2018',
    salary: 20484.44,
    age: '64',
    experience: '4 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 18,
    avatar: '',
    fullName: 'Titus Hayne',
    post: 'Web Designer',
    email: 'thayneh@kickstarter.com',
    city: 'Yangon',
    startDate: '05/25/2019',
    salary: 16871.48,
    age: '59',
    experience: '9 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 19,
    avatar: avatar4,
    fullName: 'Roxie Huck',
    post: 'Administrative Assistant',
    email: 'rhucki@ed.gov',
    city: 'Polýkastro',
    startDate: '04/04/2019',
    salary: 19653.56,
    age: '41',
    experience: '1 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 23,
    avatar: avatar7,
    fullName: 'Rosmunda Steed',
    post: 'Assistant Media Planner',
    email: 'rsteedm@xing.com',
    city: 'Manzanares',
    startDate: '12/23/2017',
    salary: 13778.34,
    age: '21',
    experience: '1 Year',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 26,
    avatar: avatar2,
    fullName: 'Morgen Benes',
    post: 'Senior Sales Associate',
    email: 'mbenesp@ted.com',
    city: 'Cà Mau',
    startDate: '04/10/2016',
    salary: 16969.63,
    age: '42',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 28,
    avatar: '',
    fullName: 'Kliment McGinney',
    post: 'Chief Design Engineer',
    email: 'kmcginneyr@paginegialle.it',
    city: 'Xiaocheng',
    startDate: '07/09/2018',
    salary: 24027.81,
    age: '28',
    experience: '8 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 31,
    avatar: '',
    fullName: 'Teressa Bleakman',
    post: 'Senior Editor',
    email: 'tbleakmanu@phpbb.com',
    city: 'Žebrák',
    startDate: '09/03/2016',
    salary: 24875.41,
    age: '37',
    experience: '7 Years',
    status: 'Applied',
  },
]

const headers = [
  {
    title: 'Group by status',
    key: 'data-table-group',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const groupBy = [{ key: 'status' }]

const resolveStatusVariant = status => {
  if (status === 'Current')
    return { color: 'primary' }
  else if (status === 'Professional')
    return { color: 'success' }
  else if (status === 'Rejected')
    return { color: 'error' }
  else if (status === 'Resigned')
    return { color: 'warning' }
  else
    return { color: 'info' }
}

const getIcon = props => props.icon
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    :group-by="groupBy"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"

        size="small"
        class="font-weight-medium"
      >
        {{ item.status }}
      </VChip>
    </template>

    <template #data-table-group="{ props, item, count }">
      <td>
        <VBtn
          v-bind="props"
          variant="text"
          density="comfortable"
        >
          <VIcon
            class="flip-in-rtl"
            :icon="getIcon(props)"
          />
        </VBtn>

        <span>{{ item.value }}</span>
        <span>({{ count }})</span>
      </td>
    </template>
  </VDataTable>
</template>
`},Ta={ts:`<script setup lang="ts">
import type { SalesDetails } from '@db/pages/datatable/types'

const { data: productList, error } = await useApi<SalesDetails[]>('pages/datatable')

const search = ref('')

// headers
const headers = [
  { title: 'PRODUCT', key: 'product.name' },
  { title: 'DATE', key: 'date' },
  { title: 'CATEGORY', key: 'product.category' },
  { title: 'BUYERS', key: 'buyer.name' },
  { title: 'PAYMENT', key: 'payment', sortable: false },
  { title: 'STATUS', key: 'status', sortable: false },
  { title: 'DELETE', key: 'delete', sortable: false },
]

// 👉 methods
const deleteItem = (itemId: number) => {
  if (!productList.value)
    return

  const index = productList.value.findIndex(item => item.product.id === itemId)

  productList.value.splice(index, 1)
}

const categoryIcons = [
  { name: 'Mouse', icon: 'tabler-mouse', color: 'warning' },
  { name: 'Glass', icon: 'tabler-eyeglass', color: 'primary' },
  { name: 'Smart Watch', icon: 'tabler-device-watch', color: 'success' },
  { name: 'Bag', icon: 'tabler-briefcase', color: 'info' },
  { name: 'Storage Device', icon: 'tabler-device-audio-tape', color: 'warning' },
  { name: 'Bluetooth', icon: 'tabler-bluetooth', color: 'error' },
  { name: 'Gaming', icon: 'tabler-device-gamepad-2', color: 'warning' },
  { name: 'Home', icon: 'tabler-home', color: 'error' },
  { name: 'VR', icon: 'tabler-badge-vr', color: 'primary' },
  { name: 'Shoes', icon: 'tabler-shoe', color: 'success' },
  { name: 'Electronics', icon: 'tabler-cpu', color: 'info' },
  { name: 'Projector', icon: 'tabler-theater', color: 'warning' },
  { name: 'iPod', icon: 'tabler-device-airpods', color: 'error' },
  { name: 'Keyboard', icon: 'tabler-keyboard', color: 'primary' },
  { name: 'Smart Phone', icon: 'tabler-device-mobile', color: 'success' },
  { name: 'Smart TV', icon: 'tabler-device-tv', color: 'info' },
  { name: 'Google Home', icon: 'tabler-brand-google', color: 'warning' },
  { name: 'Mac', icon: 'tabler-brand-apple', color: 'error' },
  { name: 'Headphone', icon: 'tabler-headphones', color: 'primary' },
  { name: 'iMac', icon: 'tabler-device-imac', color: 'success' },
  { name: 'iPhone', icon: 'tabler-brand-apple', color: 'warning' },
]

const resolveStatusColor = (status: string) => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}

const categoryIconFilter = (categoryName: string): {
  icon: string
  color: string }[] => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)

  if (index !== -1)
    return [{ icon: categoryIcons[index].icon, color: categoryIcons[index].color }]

  return [{ icon: 'tabler-help-circle', color: 'primary' }]
}

if (error.value)
  console.error(error.value)
<\/script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <AppTextField
            v-model="search"
            placeholder="Search ..."
            append-inner-icon="tabler-search"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="productList || []"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap"
    >
      <!-- product -->
      <template #item.product.name="{ item }">
        <div class="d-flex align-center">
          <div>
            <VImg
              :src="item.product.image"
              height="40"
              width="40"
            />
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">{{ item.product.name }}</span>
            <span class="text-xs">{{ item.product.brand }}</span>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #item.product.category="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(category, index) in categoryIconFilter(item.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            variant="tonal"
          >
            <VIcon
              size="20"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </VIcon>
          </VAvatar>
          <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
        </div>
      </template>

      <!-- buyer -->
      <template #item.buyer.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="1.875rem"
            :color="!item.buyer.avatar ? 'primary' : undefined"
            :variant="!item.buyer.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="item.buyer.avatar"
              :src="item.buyer.avatar"
            />
            <span v-else>{{ item.buyer.name.slice(0, 2).toUpperCase() }}</span>
          </VAvatar>
          <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.buyer.name }}</span>
        </div>
      </template>

      <!-- Payment -->
      <template #item.payment="{ item }">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <span class="text-high-emphasis font-weight-medium">\${{ item.payment.paidAmount }}</span>
            <span v-if="item.payment.paidAmount !== item.payment.total">/{{ item.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.payment.receivedPaymentStatus }}</span>
        </div>
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.payment.status)"
          :class="\`text-\${resolveStatusColor(item.payment.status)}\`"
          size="small"
          class="font-weight-medium"
        >
          {{ item.payment.status }}
        </VChip>
      </template>

      <!-- Delete -->
      <template #item.delete="{ item }">
        <IconBtn @click="deleteItem(item.product.id)">
          <VIcon icon="tabler-trash" />
        </IconBtn>
      </template>
    </VDataTable>
  </div>
</template>
`,js:`<script setup>
const {
  data: productList,
  error,
} = await useApi('pages/datatable')

const search = ref('')

// headers
const headers = [
  {
    title: 'PRODUCT',
    key: 'product.name',
  },
  {
    title: 'DATE',
    key: 'date',
  },
  {
    title: 'CATEGORY',
    key: 'product.category',
  },
  {
    title: 'BUYERS',
    key: 'buyer.name',
  },
  {
    title: 'PAYMENT',
    key: 'payment',
    sortable: false,
  },
  {
    title: 'STATUS',
    key: 'status',
    sortable: false,
  },
  {
    title: 'DELETE',
    key: 'delete',
    sortable: false,
  },
]

const deleteItem = itemId => {
  if (!productList.value)
    return
  const index = productList.value.findIndex(item => item.product.id === itemId)

  productList.value.splice(index, 1)
}

const categoryIcons = [
  {
    name: 'Mouse',
    icon: 'tabler-mouse',
    color: 'warning',
  },
  {
    name: 'Glass',
    icon: 'tabler-eyeglass',
    color: 'primary',
  },
  {
    name: 'Smart Watch',
    icon: 'tabler-device-watch',
    color: 'success',
  },
  {
    name: 'Bag',
    icon: 'tabler-briefcase',
    color: 'info',
  },
  {
    name: 'Storage Device',
    icon: 'tabler-device-audio-tape',
    color: 'warning',
  },
  {
    name: 'Bluetooth',
    icon: 'tabler-bluetooth',
    color: 'error',
  },
  {
    name: 'Gaming',
    icon: 'tabler-device-gamepad-2',
    color: 'warning',
  },
  {
    name: 'Home',
    icon: 'tabler-home',
    color: 'error',
  },
  {
    name: 'VR',
    icon: 'tabler-badge-vr',
    color: 'primary',
  },
  {
    name: 'Shoes',
    icon: 'tabler-shoe',
    color: 'success',
  },
  {
    name: 'Electronics',
    icon: 'tabler-cpu',
    color: 'info',
  },
  {
    name: 'Projector',
    icon: 'tabler-theater',
    color: 'warning',
  },
  {
    name: 'iPod',
    icon: 'tabler-device-airpods',
    color: 'error',
  },
  {
    name: 'Keyboard',
    icon: 'tabler-keyboard',
    color: 'primary',
  },
  {
    name: 'Smart Phone',
    icon: 'tabler-device-mobile',
    color: 'success',
  },
  {
    name: 'Smart TV',
    icon: 'tabler-device-tv',
    color: 'info',
  },
  {
    name: 'Google Home',
    icon: 'tabler-brand-google',
    color: 'warning',
  },
  {
    name: 'Mac',
    icon: 'tabler-brand-apple',
    color: 'error',
  },
  {
    name: 'Headphone',
    icon: 'tabler-headphones',
    color: 'primary',
  },
  {
    name: 'iMac',
    icon: 'tabler-device-imac',
    color: 'success',
  },
  {
    name: 'iPhone',
    icon: 'tabler-brand-apple',
    color: 'warning',
  },
]

const resolveStatusColor = status => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}

const categoryIconFilter = categoryName => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)
  if (index !== -1)
    return [{
      icon: categoryIcons[index].icon,
      color: categoryIcons[index].color,
    }]
  
  return [{
    icon: 'tabler-help-circle',
    color: 'primary',
  }]
}

if (error.value)
  console.error(error.value)
<\/script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <AppTextField
            v-model="search"
            placeholder="Search ..."
            append-inner-icon="tabler-search"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="productList || []"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap"
    >
      <!-- product -->
      <template #item.product.name="{ item }">
        <div class="d-flex align-center">
          <div>
            <VImg
              :src="item.product.image"
              height="40"
              width="40"
            />
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">{{ item.product.name }}</span>
            <span class="text-xs">{{ item.product.brand }}</span>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #item.product.category="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(category, index) in categoryIconFilter(item.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            variant="tonal"
          >
            <VIcon
              size="20"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </VIcon>
          </VAvatar>
          <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
        </div>
      </template>

      <!-- buyer -->
      <template #item.buyer.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="1.875rem"
            :color="!item.buyer.avatar ? 'primary' : undefined"
            :variant="!item.buyer.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="item.buyer.avatar"
              :src="item.buyer.avatar"
            />
            <span v-else>{{ item.buyer.name.slice(0, 2).toUpperCase() }}</span>
          </VAvatar>
          <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.buyer.name }}</span>
        </div>
      </template>

      <!-- Payment -->
      <template #item.payment="{ item }">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <span class="text-high-emphasis font-weight-medium">\${{ item.payment.paidAmount }}</span>
            <span v-if="item.payment.paidAmount !== item.payment.total">/{{ item.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.payment.receivedPaymentStatus }}</span>
        </div>
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.payment.status)"
          :class="\`text-\${resolveStatusColor(item.payment.status)}\`"
          size="small"
          class="font-weight-medium"
        >
          {{ item.payment.status }}
        </VChip>
      </template>

      <!-- Delete -->
      <template #item.delete="{ item }">
        <IconBtn @click="deleteItem(item.product.id)">
          <VIcon icon="tabler-trash" />
        </IconBtn>
      </template>
    </VDataTable>
  </div>
</template>
`},wa={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'
import type { Data } from '@db/pages/datatable/types'

const editDialog = ref(false)
const deleteDialog = ref(false)

const defaultItem = ref<Data>({
  responsiveId: '',
  id: -1,
  avatar: '',
  fullName: '',
  post: '',
  email: '',
  city: '',
  startDate: '',
  salary: -1,
  age: '',
  experience: '',
  status: -1,
})

const editedItem = ref<Data>(defaultItem.value)
const editedIndex = ref(-1)
const userList = ref<Data[]>([])

// status options
const selectedOptions = [
  { text: 'Current', value: 1 },
  { text: 'Professional', value: 2 },
  { text: 'Rejected', value: 3 },
  { text: 'Resigned', value: 4 },
  { text: 'Applied', value: 5 },
]

// headers
const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
  { title: 'ACTIONS', key: 'actions' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}

// 👉 methods
const editItem = (item: Data) => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  editDialog.value = true
}

const deleteItem = (item: Data) => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  deleteDialog.value = true
}

const close = () => {
  editDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const closeDelete = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const save = () => {
  if (editedIndex.value > -1)
    Object.assign(userList.value[editedIndex.value], editedItem.value)

  else
    userList.value.push(editedItem.value)

  close()
}

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1)
  closeDelete()
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <!-- 👉 Datatable  -->
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="5"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <!-- avatar -->
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>

        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="editItem(item)">
          <VIcon icon="tabler-edit" />
        </IconBtn>
        <IconBtn @click="deleteItem(item)">
          <VIcon icon="tabler-trash" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>

  <!-- 👉 Edit Dialog  -->
  <VDialog
    v-model="editDialog"
    max-width="600px"
  >
    <VCard title="Edit Item">
      <VCardText>
        <div class="text-body-1 mb-6">
          Name: <span class="text-h6">{{ editedItem?.fullName }}</span>
        </div>
        <VRow>
          <!-- fullName -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.fullName"
              label="User name"
            />
          </VCol>

          <!-- email -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.email"
              label="Email"
            />
          </VCol>

          <!-- salary -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.salary"
              label="Salary"
              prefix="$"
              type="number"
            />
          </VCol>

          <!-- age -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.age"
              label="Age"
              type="number"
            />
          </VCol>

          <!-- start date -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.startDate"
              label="Date"
            />
          </VCol>

          <!-- status -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppSelect
              v-model="editedItem.status"
              :items="selectedOptions"
              item-title="text"
              item-value="value"
              label="Standard"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText>
        <div class="self-align-end d-flex gap-4 justify-end">
          <VBtn
            color="error"
            variant="outlined"
            @click="close"
          >
            Cancel
          </VBtn>
          <VBtn
            color="success"
            variant="elevated"
            @click="save"
          >
            Save
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- 👉 Delete Dialog  -->
  <VDialog
    v-model="deleteDialog"
    max-width="500px"
  >
    <VCard title="Are you sure you want to delete this item?">
      <VCardText>
        <div class="d-flex justify-center gap-4">
          <VBtn
            color="error"
            variant="outlined"
            @click="closeDelete"
          >
            Cancel
          </VBtn>
          <VBtn
            color="success"
            variant="elevated"
            @click="deleteItemConfirm"
          >
            OK
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const editDialog = ref(false)
const deleteDialog = ref(false)

const defaultItem = ref({
  responsiveId: '',
  id: -1,
  avatar: '',
  fullName: '',
  post: '',
  email: '',
  city: '',
  startDate: '',
  salary: -1,
  age: '',
  experience: '',
  status: -1,
})

const editedItem = ref(defaultItem.value)
const editedIndex = ref(-1)
const userList = ref([])

// status options
const selectedOptions = [
  {
    text: 'Current',
    value: 1,
  },
  {
    text: 'Professional',
    value: 2,
  },
  {
    text: 'Rejected',
    value: 3,
  },
  {
    text: 'Resigned',
    value: 4,
  },
  {
    text: 'Applied',
    value: 5,
  },
]

// headers
const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
  {
    title: 'ACTIONS',
    key: 'actions',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}

const editItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  editDialog.value = true
}

const deleteItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  deleteDialog.value = true
}

const close = () => {
  editDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const closeDelete = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const save = () => {
  if (editedIndex.value > -1)
    Object.assign(userList.value[editedIndex.value], editedItem.value)
  else
    userList.value.push(editedItem.value)
  close()
}

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1)
  closeDelete()
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <!-- 👉 Datatable  -->
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="5"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <!-- avatar -->
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>

        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="editItem(item)">
          <VIcon icon="tabler-edit" />
        </IconBtn>
        <IconBtn @click="deleteItem(item)">
          <VIcon icon="tabler-trash" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>

  <!-- 👉 Edit Dialog  -->
  <VDialog
    v-model="editDialog"
    max-width="600px"
  >
    <VCard title="Edit Item">
      <VCardText>
        <div class="text-body-1 mb-6">
          Name: <span class="text-h6">{{ editedItem?.fullName }}</span>
        </div>
        <VRow>
          <!-- fullName -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.fullName"
              label="User name"
            />
          </VCol>

          <!-- email -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.email"
              label="Email"
            />
          </VCol>

          <!-- salary -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.salary"
              label="Salary"
              prefix="$"
              type="number"
            />
          </VCol>

          <!-- age -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.age"
              label="Age"
              type="number"
            />
          </VCol>

          <!-- start date -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="editedItem.startDate"
              label="Date"
            />
          </VCol>

          <!-- status -->
          <VCol
            cols="12"
            sm="6"
          >
            <AppSelect
              v-model="editedItem.status"
              :items="selectedOptions"
              item-title="text"
              item-value="value"
              label="Standard"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText>
        <div class="self-align-end d-flex gap-4 justify-end">
          <VBtn
            color="error"
            variant="outlined"
            @click="close"
          >
            Cancel
          </VBtn>
          <VBtn
            color="success"
            variant="elevated"
            @click="save"
          >
            Save
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- 👉 Delete Dialog  -->
  <VDialog
    v-model="deleteDialog"
    max-width="500px"
  >
    <VCard title="Are you sure you want to delete this item?">
      <VCardText>
        <div class="d-flex justify-center gap-4">
          <VBtn
            color="error"
            variant="outlined"
            @click="closeDelete"
          >
            Cancel
          </VBtn>
          <VBtn
            color="success"
            variant="elevated"
            @click="deleteItemConfirm"
          >
            OK
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ea={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    show-select
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    show-select
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span v-else>{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},bt={__name:"data-table",setup(N){return(c,n)=>{const l=Aa,o=ve,t=Da,p=ba,v=ga,g=ma,T=la,z=Xe,I=He,A=Pe,S=Ce;return m(),x(Q,null,{default:a(()=>[e(b,{cols:"12"},{default:a(()=>[e(o,{title:"Basic",code:r(ka),"no-padding":""},{default:a(()=>[e(l)]),_:1},8,["code"])]),_:1}),e(b,null,{default:a(()=>[e(o,{title:"Dense",code:r(Va),"no-padding":""},{default:a(()=>[e(t)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(o,{title:"Cell Slot",code:r(Ia),"no-padding":""},{default:a(()=>[e(p)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(o,{title:"Row Selection",code:r(Ea),"no-padding":""},{default:a(()=>[e(v)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(o,{title:"Fixed Header",code:r(_a),"no-padding":""},{default:a(()=>[e(g)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(o,{title:"Expandable Rows",code:r(Na),"no-padding":""},{default:a(()=>[e(T)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(o,{title:"Grouping Rows",code:r(Ca),"no-padding":""},{default:a(()=>[e(z)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(o,{title:"Row Editing via Dialog",code:r(wa),"no-padding":""},{default:a(()=>[e(I)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(o,{title:"External Pagination",code:r(Sa),"no-padding":""},{default:a(()=>[e(A)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(o,{title:"Kitchen Sink",code:r(Ta),"no-padding":""},{default:a(()=>[e(S)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{bt as default};
