import{h as x,o as i,c,a,t as h,w as y,S as T,b as d,F as w,r as C,J as I,v as S,T as $,j as k,O as U,i as V,f as v,C as B}from"./entry.8c71bdde.js";import{u as D}from"./useCars.8340edd6.js";import{u as F}from"./useSupabaseClient.0f403400.js";const L={class:"flex flex-col w-[48%] mt-2"},O={for:"",class:"text-cyan-500 mb-1 text-sm"},R=["value"],j={__name:"Select",props:{title:String,name:String,options:Array},emits:["changeInput"],setup(n,{emit:u}){const r=n,t=x(""),e=()=>{u("changeInput",t.value,r.name)};return(l,s)=>(i(),c("div",L,[a("label",O,h(n.title),1),y(a("select",{name:"",id:"",class:"p-2 border w-100 rounded",onChange:e,"onUpdate:modelValue":s[0]||(s[0]=o=>I(t)?t.value=o:null)},[(i(!0),c(w,null,C(n.options,o=>(i(),c("option",{key:o.id,value:o},h(o),9,R))),128))],544),[[T,d(t)]])]))}},P={class:"flex flex-col w-[48%] mt-2"},E={for:"",class:"text-cyan-500 mb-1 text-sm"},J=["placeholder","name"],Y={__name:"Input",props:{title:String,name:String,placeholder:String},emits:["changeInput"],setup(n,{emit:u}){const r=n,t=x(""),e=()=>{u("changeInput",t.value,r.name)};return(l,s)=>(i(),c("div",P,[a("label",E,h(n.title),1),y(a("input",{type:"text",class:"p-2 border w-100 rounded",placeholder:n.placeholder,"onUpdate:modelValue":s[0]||(s[0]=o=>I(t)?t.value=o:null),name:n.name,onInput:e},null,40,J),[[S,d(t)]])]))}},q={class:"flex flex-col w-[100%] mt-2"},z={for:"",class:"text-cyan-500 mb-1 text-sm"},G=["placeholder","name"],H={__name:"Textarea",props:{title:String,name:String,placeholder:String},emits:["changeInput"],setup(n,{emit:u}){const r=n,t=x(""),e=()=>{u("changeInput",t.value,r.name)};return(l,s)=>(i(),c("div",q,[a("label",z,h(n.title),1),y(a("textarea",{type:"text",class:"p-2 border w-100 rounded",placeholder:n.placeholder,"onUpdate:modelValue":s[0]||(s[0]=o=>I(t)?t.value=o:null),name:n.name,onInput:e},null,40,G),[[S,d(t)]])]))}},K={class:"col-md-5 offset-md-1 mt-2 w-[100%]"},Q=a("label",{for:"",class:"text-cyan-500 mb-1 text-sm"},"Image*",-1),W={class:"mt-2"},X={class:"form-group"},Z={class:"relative"},ee=a("span",{class:"cursor-pointer"},"Browser File",-1),te={key:0,class:"border p-2 mt-3 w-56"},ae=["src"],se={__name:"Image",emits:["changeInput"],setup(n,{emit:u}){const r=$("carImage",()=>({preview:null,image:null})),t=e=>{const l=e.target;if(l.files){const s=new FileReader;s.onload=o=>{r.value.preview=o.target.result},r.value.image=l.files[0],s.readAsDataURL(l.files[0]),u("changeInput",l.files[0],"image")}};return(e,l)=>(i(),c("div",K,[Q,a("form",W,[a("div",X,[a("div",Z,[a("input",{type:"file",accept:"image/*",class:"opacity-0 absolute cursor-pointer",onChange:t},null,32),ee]),d(r).preview?(i(),c("div",te,[a("img",{src:d(r).preview,class:"img-fluid"},null,8,ae)])):k("",!0)])])]))}},ne=a("div",{class:"mt-24"},[a("h1",{class:"text-6xl"},"Create a New Listing")],-1),le={class:"shadow rounded p-3 mt-5 flex flex-wrap justify-between"},oe=["disabled"],re={key:0,class:"mt-3 text-red-400"},de={__name:"create",setup(n){const{makes:u}=D(),r=U(),t=F(),e=$("adInfo",()=>({make:"",model:"",year:"",miles:"",price:"",city:"",seats:"",features:"",description:"",image:null})),l=x(""),s=(m,p)=>{e.value[p]=m},o=[{id:1,title:"Model *",name:"model",placeholder:"Civic"},{id:2,title:"Year *",name:"year",placeholder:"2019"},{id:3,title:"Price *",name:"price",placeholder:"10000"},{id:4,title:"Miles *",name:"miles",placeholder:"10000"},{id:5,title:"City *",name:"city",placeholder:"Austin"},{id:6,title:"Number of Seats *",name:"seats",placeholder:"5"},{id:7,title:"Features *",name:"features",placeholder:"Leather Interior, No Accidents"}],M=V(()=>{for(let m in e.value)if(!e.value[m])return!0;return!1}),A=async()=>{const m=Math.floor(Math.random()*1e10),{data:p,error:b}=await t.storage.from("images").upload("upload/"+m,e.value.image);if(b)return l.value="Cannot upload image";const _={...e.value,city:e.value.city.toLowerCase(),features:e.value.features.split(", "),numberOfSeats:parseInt(e.value.seats),miles:parseInt(e.value.miles),price:parseInt(e.value.price),year:parseInt(e.value.year),name:`${e.value.make} ${e.value.model}`,listerId:r.value.id,image:p.path};delete _.seats;try{const g=await $fetch("/api/car/listings",{method:"POST",body:_});B("/profile/listings")}catch(g){l.value=g.statusMessage,await t.storage.from("image").remove(p.path)}};return(m,p)=>{const b=j,_=Y,g=H,N=se;return i(),c("div",null,[ne,a("div",le,[v(b,{title:"Make *",options:d(u),name:"make",onChangeInput:s},null,8,["options"]),(i(),c(w,null,C(o,f=>v(_,{key:f.id,title:f.title,name:f.name,placeholder:f.placeholder,onChangeInput:s},null,8,["title","name","placeholder"])),64)),v(g,{title:"Description *",name:"description",placeholder:"",onChangeInput:s}),v(N,{onChangeInput:s}),a("div",null,[a("button",{disabled:d(M),onClick:A,class:"bg-blue-400 text-white rounded py-2 px-7 mt-3"}," Submit ",8,oe),d(l)?(i(),c("p",re,h(d(l)),1)):k("",!0)])])])}}};export{de as default};