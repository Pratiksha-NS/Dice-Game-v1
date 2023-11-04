function start(){
  var randomNo1= Math.floor(Math.random()*6)+1;
  var randomNo2= Math.floor(Math.random()*6)+1;

  var images1= "images/dice"+randomNo1 +".png";
  var images2= "images/dice"+randomNo2 +".png";

  document.querySelectorAll("img")[0].setAttribute("src",images1);
  document.querySelectorAll("img")[1].setAttribute("src",images2);



  if(randomNo1 > randomNo2){
  document.querySelector("h1").innerHTML="🏁Player 1 has won  🏁";
    }
  else if(randomNo1 < randomNo2){
  document.querySelector("h1").innerHTML="🏁 Player 2 has won 🏁";
    }
  else{
    document.querySelector("h1").innerHTML="! Draw !";
    }  
}

