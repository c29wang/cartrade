import{O as u,o as t,c as r,f as c,L as o,U as s,b as _,a as p,H as m,C as f,V as x}from"./entry.8c71bdde.js";import{u as d}from"./useSupabaseClient.0f403400.js";const h={class:"sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"},b={key:0,class:"flex"},v={__name:"NavBar",setup(g){const a=u(),l=d(),i=async()=>{l.auth.signOut();try{await $fetch("/api/_supabase/session",{method:"POST",body:{event:"SIGNED_OUT",session:null}})}catch(n){return console.log(n)}a.value=null,f("/")};return(n,k)=>{const e=x;return t(),r("header",h,[c(e,{class:"text-4xl font-mono",to:"/"},{default:o(()=>[s("cartrader")]),_:1}),_(a)?(t(),r("div",b,[c(e,{class:"text-2xl font-mono mr-10",to:"/profile/listings"},{default:o(()=>[s("Profile")]),_:1}),p("p",{class:"cursor-pointer text-2xl font-mono mr-5",onClick:i}," Logout ")])):(t(),m(e,{key:1,class:"text-2xl font-mono mr-10",to:"/login"},{default:o(()=>[s("Login")]),_:1}))])}}};export{v as _};