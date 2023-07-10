import{r as n,j as e,H as A,L as h,a as S,b as f,F as N,c as j,R as v}from"./index-43cb7cfe.js";const y="/Memory-Game/assets/brain-icon-4dd26c43.svg",E="/Memory-Game/assets/telephone-icon-c392fd8e.svg",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO3ZMQ6AMAxD0dz/0mZHokZRSVHyn9SRwdgdEBEAKujA+USbIJU0Loh+PhWNDVKFIA6NJDEth2klMS2HaXWZloqeE0FeopFgWmtjLrs2fzgRxBkzrScECRpZY1rR5LJnEcShkSSm5TCtpPuL067fEKcbUZcg27QLouJDEABhXZxfxErLHmIsAAAAAElFTkSuQmCC",P="/Memory-Game/assets/coming-9cd792fc.png";function k(){const[c,s]=n.useState(!1);function o(){s(a=>!a)}return e.jsx("div",{className:"games-container",children:e.jsxs("div",{className:"games-main",children:[e.jsx("a",{href:"sequence.html",children:e.jsxs("div",{className:"games-box",children:[e.jsx("img",{src:y,alt:"",className:"brain-icon"}),e.jsx("p",{children:"Sequences"})]})}),e.jsx("a",{href:"numbers.html",children:e.jsxs("div",{className:"games-box",children:[e.jsx("img",{src:E,alt:"",className:"telephone-icon"}),e.jsx("p",{children:"Numbers"})]})}),e.jsx("div",{href:"",onClick:o,children:e.jsxs("div",{className:"games-box",children:[e.jsx("img",{src:b,alt:"",className:"pair-icon"}),e.jsx("p",{children:"Card Pairs"})]})}),c&&e.jsxs("div",{className:"coming-soon",children:[e.jsx("div",{className:"coming-soon-title",children:"Sorry this game is still in development"}),e.jsx("img",{className:"coming-soon-image",src:P,alt:""}),e.jsx("div",{className:"coming-soon-text",children:"Please check back in a while!"}),e.jsx("button",{onClick:o,children:"X"})]})]})})}function L(){const[c,s]=n.useState(!1),[o,a]=n.useState(!1),[d,u]=n.useState(!1);function l(){const p=JSON.stringify([{playerName:"SKT T1 Faker",level:15,date:"27/06/2023"},{playerName:"100T Doublelift",level:14,date:"27/06/2023"},{playerName:"Daniel Negs",level:12,date:"27/06/2023"},{playerName:"Wolfey VGC",level:12,date:"27/06/2023"},{playerName:"Lelouch Vi Britannia",level:1,date:"27/06/2023"}]);localStorage.setItem("sequenceScores",p);const x=JSON.stringify([{playerName:"Hikaru Nakamura",level:16,date:"27/06/2023"},{playerName:"Magnus Carlsen",level:16,date:"27/06/2023"},{playerName:"Drxx",level:14,date:"27/06/2023"},{playerName:"JW",level:12,date:"27/06/2023"},{playerName:"Jue Viole Grace",level:1,date:"27/06/2023"}]);localStorage.setItem("numberScores",x),console.log("Store initialized")}n.useEffect(()=>{l()},[]);function t(){u(m=>!m)}function i(){s(!0),a(!1)}function r(){a(!0),s(!1)}function g(){s(!1),a(!1)}return e.jsxs("div",{className:"home-main-container",children:[e.jsx(A,{toggleLogin:i,toggleSignup:r,toggleHighScore:t}),e.jsxs("div",{className:"home-main-container-content",children:[e.jsx(h,{closeToggle:g,loginPopup:c,signupPopup:o,toggleLogin:i,toggleSignup:r}),d&&e.jsx(S,{toggleHighScore:t,initializeScore:l}),e.jsxs("div",{className:"main-container",children:[e.jsx(f,{}),e.jsx(k,{})]})]}),e.jsx(N,{})]})}j.createRoot(document.getElementById("root")).render(e.jsx(v.StrictMode,{children:e.jsx(L,{})}));