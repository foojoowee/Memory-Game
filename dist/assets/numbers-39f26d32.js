import{r as t,j as e,i as d,H as L,F as w,c as F,R as G}from"./index-92e3e9d3.js";import{h as N,a as D,b as Y}from"./start-1fc9a4ea.js";const l=[];for(let r=0;r<21;r++)l.push(Math.floor(Math.random()*9*10**r)+1**10*r);function H(r){const[i,n]=t.useState(0),[s,c]=t.useState([123,"●●●",123456,"●●●●●●",123456789,"●●●●●●●●● ",1234567890123,"●●●●●●●●●●●●"]);t.useEffect(()=>{c(a=>[...a,a[0]=Math.floor(Math.random()*900)+100,a[2]=Math.floor(Math.random()*9e5)+1e5,a[4]=Math.floor(Math.random()*9e8)+1e8,a[6]=Math.floor(Math.random()*9e11)+1e11]);const h=setInterval(()=>{n(a=>(a+1)%s.length)},1e3);return()=>clearInterval(h)},[]);const o=s[i];return e.jsxs("div",{className:"number-hero",children:[e.jsx("div",{className:"number-hero-title",children:"Number Memory Game"}),e.jsx("div",{className:"number-hero-display",children:o}),e.jsx("div",{className:"number-hero-text",children:"Type the number you saw."}),e.jsx("div",{className:"number-hero-text",children:"Good Luck!"}),e.jsx("button",{className:"number-hero-button",onClick:r.toggle,children:"START"})]})}function V(r){const[i,n]=t.useState(l[0]),[s,c]=t.useState(1),[o,h]=t.useState(3),[a,u]=t.useState(!0),[y,g]=t.useState(!1),[f,j]=t.useState(""),[p,m]=t.useState("false");function S(){u(!1),g(!1),j(""),c(b=>b+1)}t.useEffect(()=>{m(!0),n(l[s-1]),console.log("Current Level is "+s),setTimeout(()=>{n("●".repeat(s)),u(!0),m(!1)},1e3+s*250)},[s]);function M(){m(!0),n(l[s-1]),setTimeout(()=>{n("●".repeat(s)),u(!0),m(!1)},1e3+s*150)}function T(){j(""),M()}function C(){u(!1),new Audio(D).play(),console.log(f),console.log(l[s-1]),f==l[s-1]?g(!0):(g(!1),u(!1),m(!1),setTimeout(()=>{h(R=>R-1)},400))}const E=b=>{j(b.target.value)},[A,x]=t.useState(d[1]),[I,v]=t.useState("Are you even trying?");function k(){h(-1)}return t.useEffect(()=>{s>5&&s<=8&&(x(d[2]),v("I guess you are pretty below average. Try harder next time!")),s>8&&s<=12&&(x(d[3]),v("This is where most cognitive abilities stay within. You could be doing slightly better")),s>12&&s<=16&&(x(d[4]),v("Alright I get it, you have a decently good memory")),s>16&&(x(d[5]),v("Good job, you should consider trying a harder game to test your limits"))},[s]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`number-main ${o==0?"half-opacity":""} `,children:[e.jsxs("div",{className:"number-level",children:["Level ",s]}),e.jsxs("div",{className:"number-lives",children:["Lives :",o>0&&e.jsx("img",{src:N,alt:""}),o>1&&e.jsx("img",{src:N,alt:""}),o>2&&e.jsx("img",{src:N,alt:""})]}),e.jsx("div",{className:"number-main-display",children:i}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"number-input-text",children:"Enter Number:"}),e.jsx("input",{type:"text",value:f,onChange:E}),e.jsx("button",{className:"number-hero-submit",onClick:()=>C(),children:"SUBMIT"})]}),o>0&&!a&&!y&&!p&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"number-input-text",children:"Wrong, please try again."}),e.jsx("button",{className:"number-hero-next-level",onClick:()=>T(),children:"RETRY"})]}),o<0&&e.jsxs("div",{className:"number-game-over",children:[e.jsx("div",{className:"number-input-text",children:"Game Over. Please press Restart"}),e.jsx("button",{className:"number-hero-button",onClick:r.toggle,children:"RESTART"})]}),!a&&y&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"number-input-text",children:"Correct, please proceed"}),e.jsx("button",{className:"number-hero-next-level",onClick:()=>S(),children:"NEXT LEVEL"})]})]}),o==0&&e.jsxs("div",{className:"game-over",children:[e.jsx("div",{className:"game-over-title",children:"Your Results:"}),e.jsx("img",{className:"game-over-image",src:A,alt:""}),e.jsxs("div",{className:"game-over-text",children:["You got to Level ",s]}),e.jsx("div",{className:"game-over-flavour-text",children:I}),e.jsx("button",{onClick:()=>k(),children:"X"})]})]})}function B(){const[r,i]=t.useState(!1);function n(){new Audio(Y).play(),setTimeout(()=>{i(c=>!c)},500)}return e.jsxs("div",{children:[e.jsx(L,{}),e.jsxs("div",{className:"number-main-container",children:[!r&&e.jsx(H,{toggle:n}),r&&e.jsx(V,{toggle:n})]}),e.jsx(w,{})]})}F.createRoot(document.getElementById("root")).render(e.jsx(G.StrictMode,{children:e.jsx(B,{})}));
