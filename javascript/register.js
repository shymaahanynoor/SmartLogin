var myname=document.getElementById("name");
var myemail=document.getElementById("email");
var mypassword=document.getElementById("passward");
var register_btn=document.getElementById("register");
var alert=document.getElementById("alert");

console.log(alert)
var datalist=[];


if(localStorage.getItem("list")!=null){
  datalist=JSON.parse(localStorage.getItem("list"));


}



register_btn.addEventListener("click",function(){

  
  var res = JSON.parse( localStorage.getItem("list"))?.find((el)=>{
    return  (el.email == myemail.value ) 
  
  })


if(myname.value === "" || myemail.value === "" || mypassword.value === ""){
  alert("Please Fill Data");
   

}else if(res==undefined) {

  var data={
    name:myname.value,
    email:myemail.value,
    password:mypassword.value

}
 datalist.push(data);
  localStorage.setItem("list",JSON.stringify(datalist))

setTimeout(()=>{
window.location="login.html";

}
,1500  )

  }

else{
  
  alert.style.display="block"
}
});





