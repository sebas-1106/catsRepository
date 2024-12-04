// hecho por el parcero
let body= document.getElementsByTagName("body");
let main= document.getElementsByTagName("main");
let ol= document.getElementsByTagName("ol");
let ul= document.getElementsByTagName("ul");
let li= document.getElementsByTagName("li");
let hTres=document.getElementsByTagName("h3");
let a= document.getElementsByTagName("a");
let img=document.getElementsByTagName("img");
let mainParcero=document.getElementById("parcero");
let thunder=document.getElementsByClassName("thunder");

console.log("Body: ",body );
console.log("thunder: ", thunder);
// console.log("body hijos: ", body[0].childNodes);
// body[0].style = "background-color: lightcyan";
body[0].style.backgroundColor = "lightcyan";
main[0].style.paddingTop="1rem";
main[0].style.paddingLeft="1rem";
main[0].style.color="Black";

main[0].style.paddingTop="1rem";
a[0].style.color="plum";
a[0].style.fontStyle="italic";
ol[0].style.paddingLeft="2rem";
ul[0].style.paddingLeft="2rem";
li[0].style.color="crimson";
thunder[0].style.color="green";
hTres[0].style.fontStyle="italic";
img[0].style.borderRadius="141rem";
img[1].style.width="400px";


// let rat="🫣";
for (let index = 3; index < li.length; index++) {
    li[index].innerHTML="🫣";
    
}
for (let i = 0; i < hTres.length; i++) {
    if (hTres[i].className=="dislike") {
        hTres[i].innerHTML="🫣";
    }  
}
let nuevoh1= document.createElement("h1");
console.log("mi nuevo h1: ",nuevoh1);
nuevoh1.innerHTML="nuevo h1 del parcero";
console.log("mi nuevo html..", nuevoh1);
mainParcero.appendChild(nuevoh1);

let nuevoP=document.createElement("p");
nuevoP.innerHTML="buenas a todos";
console.log("mi nuevo parrafo: ",nuevoP);
mainParcero.appendChild(nuevoP);

let otroP= document.createElement("p");
otroP.innerHTML="buenas buenas buenas";
console.log("otro parrafo")
mainParcero.appendChild(otroP);
nuevoP.style.color="red";
otroP.style.color="green";

let nuevoDiv= "<div> tom y jerry 😾🐭</div>";
mainParcero.insertAdjacentHTML('afterbegin', nuevoDiv);
let nuevoDiv1= "<div>tom y jerry 😾🐭 </div>";
mainParcero.insertAdjacentHTML('beforeend', nuevoDiv1);
//eliminar el elemento
// mainParcero.remove();
let hijosMainParcero= mainParcero.childNodes;
console.log("Eliminar hijos de mainParcero ", hijosMainParcero);
// mainParcero.removeChild(nuevoDiv);

//recorrer la lista con los elementos dijos de mainParcero y quitar los que tengan en su innerhtml "tom && jerry 😾🐭 "

for (let i=0; i<hijosMainParcero.length; i++) {
    if (hijosMainParcero(i).innerHTML==="tom y jerry 😾🐭") {
        // hijosMainParcero[i].remove();
        mainParcero.removeChild(hijosMainParcero(i))
        // mainParcero.remove(nuevoDiv);
        // mainParcero.remove(nuevoDiv1);
        
    }
}