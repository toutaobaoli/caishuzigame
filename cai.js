



var num = Math.floor(Math.random() * 100); // 生成一个介于0到100之间的随机整数
        document.getElementById("chu").innerHTML='快开始游戏吧，你只能猜1~100以内的数'
        var ws=0
        function ok() {
          ws++;
var az=document.getElementById("jj").value

  if (az>100) {
 document.getElementById("chu").innerHTML='认真审题，只能输入1~100'
  }
  else if (typeof az===String) {
    document.getElementById("chu").innerHTML='只能输入数字，不要乱输入。'
  }

else  if (az>num) { 
document.getElementById("chu").innerHTML='你猜'+az+'？我告诉你:'+'你猜大了' 
document.getElementById("jj").value=''

}


else if (az<num) {
document.getElementById("chu").innerHTML=     '你猜'+az+'？我告诉你:'+'你猜小了' 
document.getElementById("jj").value=''
}


  else if(az===num){ 
    
    document.getElementById("chu").innerHTML='恭喜你猜对了,总共猜了'+ws+'次'
      }

          }
  function ok2(){

document.getElementById("ti").style.display = 'inline-block';
document.getElementById("shu").style.display = 'inline-block';
document.getElementById("que").style.display = 'inline-block';
document.getElementById("chu").style.display = 'inline-block';
  document.getElementById("deng").style.display = 'none'
}