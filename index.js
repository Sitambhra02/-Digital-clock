setInterval(()=>{
    let d= new Date()

    let h= d.getHours()
    let m=d.getMinutes()
    let s=d.getSeconds()
    let ap= h>=12 ?'PM':'AM'
   
    h= h % 12
     h= h? h:12
   
    m= m < 10 ? '0'+ m : m
   
    document.getElementById("demo").innerHTML= h+':'+m+':'+s
   
    
},1000)

 // index.js

 
