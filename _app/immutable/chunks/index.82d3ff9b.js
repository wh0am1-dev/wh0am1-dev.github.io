import{w as n,d as i}from"./index.7b3f20bd.js";const t={wave:"hey 👋🏻",intro:"I'm Carlos, a software engineer specializing in web technologies. Born in Malaga, Spain, I believe web design can be more diverse and inspiring. With a mission to present the possibilities of web design, I'm pursuing new expressions through experiments and thoughts.",edu:"Software Engineering @ UMA"},a={title:"work"},r={title:"oss"},l={soon:"Under construction..."},c={home:t,work:a,lab:r,misc:l},g={wave:"hola 👋🏻",intro:"Soy Carlos, un ingeniero de software especializado en tecnologías web. Nacido en Málaga, España, creo que el diseño web puede ser más diverso e inspirador. Con la misión de presentar las posibilidades del diseño web, busco nuevas expresiones a través de experimentos y pensamientos.",edu:"Software Engineering @ UMA"},d={title:"labor"},m={title:"oss"},p={soon:"En construcción..."},u={home:g,work:d,lab:m,misc:p},w=()=>{{const e=localStorage.getItem("lang");if(e)return e;const s=navigator.language.split(/-|_/)[0];if(s)return s}return"en"},o=n(w());o.subscribe(e=>localStorage.setItem("lang",e));const h=i(o,e=>e==="es"?u:c);export{h as i,o as l};
