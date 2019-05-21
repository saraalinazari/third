$(document).ready(function(){
   
   $("body").on("click","#btn1",function(){
       var str1 =  $("#text1").val();
       console.log("str1:"+str1);
       isUnique(str1);
       $("#newTxt").text(str1) ;
   });
  function isUnique(str1){
      var unique=true;
    for(var i=0;i<str1.length;i++){
        console.log(str1[i]);
        if(str1.indexOf(str1[i])!==i){
           unique=false;
        }
        
    }
    if(!unique){
        console.log("this is not unique");
    }
    else{
        console.log("this is unique");
    }
  }
});