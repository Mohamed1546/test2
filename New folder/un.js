function a1(){
  document.getElementById('co').style.background = " rgb(56, 55, 55)";
  document.getElementById('d1').style.background = "rgb(100, 99, 99)";
}
function a2(){
  document.getElementById('h11').innerHTML='الاسم /'
  document.getElementById('h12').innerHTML='السن /'
  document.getElementById('h13').innerHTML='التعليم /'
  document.getElementById('h31').innerHTML='محمد عبد الرؤوف'
  document.getElementById('h32').innerHTML='25 سنة'
  document.getElementById('h33').innerHTML='مطور واجهة امامية'
}

function a3(){
  document.getElementById('m2').outerHTML='<img style="width: 400px;height: 200px;" src="https://th.bing.com/th/id/R.81e93105612e9c8851ff0e92d0ba6449?rik=gRHaUPzzpakhCg&riu=http%3a%2f%2fchandra.as.utexas.edu%2fozbirds%2fCrimsonRosella-1DS70w.jpg&ehk=ERPpoVstUTGUXXaP9h1KHgF5Pj4drwO1VrGznV7uw%2bw%3d&risl=&pid=ImgRaw&r=0">'
}

function a4(){
  let filepdf = document.getElementById("s");
  html2pdf(filepdf).save();
}


