import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let mydiv=document.getElementById("container");
mydiv.style.display="flex";
 mydiv.style.flexWrap="wrap";
//  mydiv.style.flexDirection="row";
 mydiv.style.justifyContent="space-evenly";
 

var data;
fetch("https://restcountries.eu/rest/v2/all")
.then(response=>response.json())
.then(data=>{ return data;})
.then(cdata=>{
  for(var i=0;i<cdata.length;i++){
      var name=cdata[i].name;
      var img=document.createElement("img");
      img.src=cdata[i].flag;
      img.width=100;
      img.height=80;
      img.setAttribute("class","card-img-top");
      var cap=cdata[i].capital;
      var reg=cdata[i].region;
      var code=cdata[i].alpha2Code;
      var d=display(name,cap,code,reg,img);
  }
  function display(name,cap,code,reg,img){
      var card=document.createElement("div");
    //  card.setAttribute("class","container");
      card.setAttribute("class","card");
      card.style.width="18rem";
      card.style.border= "1px solid black";
      var cardBody=document.createElement("div");
     
    //  var carduBody=document.createElement("div");
    //  carduBody.setAttribute("class","card-body");
      var text0=document.createElement("p");
      var text=document.createElement("p");
      var text1=document.createElement("p");
      var text2=document.createElement("p");
      var text3=document.createElement("p");
      var text5=document.createElement("p");
   //   text0.setAttribute("class","card-title");
    //  text1.setAttribute("class","card-title");
     // text2.setAttribute("class","card-title");
     // text3.setAttribute("class","card-title");
     // text5.setAttribute("class","card-title");
      text0.innerText="Country Number: "+parseInt(i+1);
      text1.innerText="Country Name: "+name;
       text2.innerText="Capital: "+cap;
       text3.innerText="Country Code: "+code;
       text5.innerText="-----------------";
      // div.setAttribute("card","");
    //   div.style.width=50;
    cardBody.style.background="Acquamarine";
    //   div.style.border=20;
    //   div.style.padding=20;
    cardBody.style.borderColor="black";
    cardBody.style.paddingColor="black";
    cardBody.setAttribute("class","container");
    cardBody.appendChild(text0);
    cardBody.appendChild(img);
    cardBody.appendChild(text);
    cardBody.appendChild(text1);
    cardBody.appendChild(text2);
    cardBody.appendChild(text3);
       var button=document.createElement("button");
       button.innerHTML="temperature";
        button.style.background="red"; 
        cardBody.appendChild(button); 
        card.append(cardBody); 
      card.style.padding="50px 50px 50px 50px";
      card.style.textAlign="center";
       mydiv.appendChild(card);
       document.body.appendChild(mydiv);
        
    }
})
  }

}
