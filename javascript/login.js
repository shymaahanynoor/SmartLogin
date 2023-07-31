

var email=document.getElementById("myemail");
var password=document.getElementById("mypassword");
var login_btn=document.getElementById("Login");
var alert1=document.getElementById("alert1");
var alert2=document.getElementById("alert2");



login_btn?.addEventListener("click",function(){
  var res = JSON.parse( localStorage.getItem("list"))?.find((el)=>{
    return  (el.email == email.value && el.password == password.value) 
  
  })

console.log(res)
  if(res == undefined){
    
alert1.style.display="block"
alert2.style.display="none"
}


else{
  localStorage.setItem("name",JSON.stringify(res) )
    alert2.style.display="block"
 alert1.style.display="none"



 setTimeout(()=>{
     window.location="name.html";
     
       }
     ,1500  )

  }

});

