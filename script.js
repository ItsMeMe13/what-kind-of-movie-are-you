
let button = document.querySelector("button");
let fullParagraph = document.querySelector(".results");
button.onclick = function() {
     fullParagraph.style.display="block";
    let number = document.querySelector (".number").value;
     let wather =document.querySelector(".wather").value;
    let color = document.querySelector(".color").value;
      let origin = document.querySelector(".origin").value;
    
     fullParagraph.innerHTML = " Your scream time is " + number + " and you like " + wather + " days, you pick " + color + " so you a " + origin;
    
    
      if (number >= "10" && wather !=="suuny" && color !=="red") {
       fullParagraph.innerHTML = "fuuny moive";
      }
       else if  (number >= "20" && wather !=="cold" && color !=="red") {   
    fullParagraph.innerHTML = "action moive";
       }
        else if  (number >= "24" && wather !=="rainy" && color !=="blue") {   
      fullParagraph.innerHTML = "sad moive";
      }
    
    
};