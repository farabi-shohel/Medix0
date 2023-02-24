// Wow Js Link >>>>>>>>>>>>>>>
new WOW().init();
// Wow Js Link >>>>>>>>>>>>>>>

//Accordian======
let acc = document.getElementsByClassName('accordion')

// console.log(acc);

// Creating a loop to add eventListener to all .accordion classes

for(let i=0;i<acc.length;i++){
  acc[i].addEventListener('click',function(){
    
    
//targetting sibling of every .accordion class named .panel class
    
    let panel = this.nextElementSibling
    
//if panel is open, then this block will close it on mouse click
    
    if(panel.style.maxHeight){
      panel.style.maxHeight=null;
      this.classList.remove('open')
      this.getElementsByClassName('icon')[0].innerHTML ='+';
    }
 //if panel is closed, then this block will open it on mouse click
    else{
      
//Removes everthing on previous accordion on new mouse click       
//by this for loop
      
      for(let x=0;x<acc.length; x++){
        acc[x].classList.remove('open')
        acc[x].nextElementSibling.style.maxHeight=null;
        acc[x].getElementsByClassName('icon')[0].innerHTML ='+';

      }
      
 //if panel is closed, then these codes will open it on mouse click & set those specific rules mentioned below.
      
      panel.style.maxHeight = panel.scrollHeight + 'px';
      this.classList.toggle('open')
      this.getElementsByClassName('icon')[0].innerHTML ='-'
    }
  })
}




