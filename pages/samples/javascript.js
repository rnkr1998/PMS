
var leftid;


    $(document).ready(function(){
     $(".available").click(function()
     {
       $(this).css("filter","opacity(50%)");
       $(this).css("background","red");
      
     
      
      
     })
    });
    
    function myfun(s)
      {
        alert(" Your selected seat is : " +s);
      }
    
    
      function inner()
      {
        
          var Hlanes=document.getElementById("hor").value;  
          
          
        
          var data="";
          var inputdata ="";
        
          
           var i;
           if(Hlanes>=1)
           {
               for(i=1;i<=Hlanes;i++)
             {
                  
                 
                     inputdata = inputdata +
                     `<div class="inputcontent"> 
                     
                       <div class="inputdata" >
                    
                        HORIZONTAL-LEFT-SIDE[ROW-`+i+`]:
                         <div class="input-group mb-3 " id="inputleftgroup[`+i+`]">
                        
                    <input type="text" class="form-control" placeholder="No.of slots" id="inputHleftslots[`+i+`]" >
                    <input type="text" class="form-control" placeholder="No.of space items" id="inputHleftspaceitems[`+i+`]" oninput="horizontalleftspaces(value,`+i+`)">
                     
                    </div>
                    <div class="input-group mb-3 " id="inputHleftspaceitemdata[`+i+`]">
                   
                    </div>
                  
                    </div>
                    `+
                  
                    `
                
                    <div class="inputdata" id=inputrightdata[`+i+`]>
                      HORIZONTAL-RIGHT-SIDE[ROW-`+i+`]
                    <div class="input-group mb-3 " id="inputrightgroup[`+i+`]">
                     
                        <input type="text" class="form-control" placeholder="No.of slots" id="inputHrightslots[`+i+`]">
                        <input type="text" class="form-control" placeholder="No.of space items" id="inputHrightspaceitems[`+i+`]"  oninput="horizontalrightspaces(value,`+i+`)">
                
                      </div>
                      <div class="input-group mb-3 " id="inputHrightspaceitemdata[`+i+`]">
                   
                      </div>
                    </div>`
                 
                    
                   
                    
                  
                 
             
                   
             }
             inputdata= inputdata+`
             <div><button class="btn btn-dark" type="button" onclick="display()">SUBMIT</button></div>`
             
             document.getElementById("contentdata").innerHTML =inputdata;
        
         // document.getElementById("hort").innerHTML + =data;
           }
           else
           {
            document.getElementById("contentdata").innerHTML ="";
           }
         
     
      }


      function horizontalleftspaces(id, Hlanes)
      {
          
          var i;
          var space="";
          leftid=id;
             

             


              for(i=1;i<=id;i++)
              {
                  space=space+`
                  HORIZONTAL-LEFT-SIDE[ROW-`+Hlanes+`]-SPACEITEM:`+i+`
                  <div class="input-group input-group-sm mb-3 spacedata" id="inputleftgroupspacegroup[`+i+`]">
      
                    <input type="text" class="form-control" placeholder="After which slot these spaces hold" id="inputHleftslotspaceitemindex[`+i+`]" required>
                 <input type="text" class="form-control" placeholder="No.of spaces" id="inputHleftslotspaces[`+i+`]" required>
                
                    </div>`
              }
             
          
                 
               
               
                 
                  
              //document.getElementById("inputleftdata["+Hlanes+"]").innerHTML +=space;
                    
              document.getElementById("inputHleftspaceitemdata["+Hlanes+"]").innerHTML =space;
          
              
             
             

      }


      function horizontalrightspaces(id,Hlanes)
      {
          
          var i;
          var space="";
      
        
           
              for(i=1;i<=id;i++)
              {
                  space=space+`
                  HORIZONTAL-RIGHT-SIDE[ROW-`+Hlanes+`]-SPACEITEM:`+i+`
                  <div class="input-group input-group-sm mb-3 spacedata" id="inputrightgroupspacegroup[`+i+`]">
      
                  <input type="text" class="form-control" placeholder="After which slot these spaces hold" id="inputHrightslotspaceitemindex[`+i+`]" required>
                  <input type="text" class="form-control" placeholder="No.of spaces" id="inputHrightslotspaces[`+i+`]" required>
                 
                     </div>`
              }
              document.getElementById("inputHrightspaceitemdata["+Hlanes+"]").innerHTML=space;
      }


     



$(document).ready(function(){
$(".available").click(function()
{
  $(this).css("background","orange");
 
 
})
});




function display()
{
  $(".content-wrapper2").hide();
  var i,j,k,l,m;
  var Hlanes=document.getElementById("hor").value;
  var dis=document.getElementById("sec");
  var res=` <section class="horizontal-parking container">`;
  
for(i=1;i<=Hlanes;i++)
{
  res=res+`<div class="car-row pull-left">`
   

  var inputHleftskotss= document.getElementById("inputHleftslots["+i+"]").value;
  var inputHrightslotss= document.getElementById("inputHrightslots["+i+"]").value;
 
  res=res+` <div class="clearfix-grass">
                  
  </div>
  <div class="horizontal-row-number">
  <div class="row-number"></div>
  <span>L`+i+`</span>
</div>`
    for(j=1;j<=inputHleftskotss;j++)
    {
         res=res+`
         
        
              
                <div class="cars-container available "  id="Hleftseat-`+i+`.`+j+`">
                  <div class="car"></div>
                  <span>S`+j+`</span>
                </div>
               `
    }
    res=res+` <div class="mid-row clearfix">
    <span class="fa fa-arrow-circle-right pull-left"> ENTRY</span> 
    <span class="fa fa-arrow-circle-right pull-right"> EXIT </span> 
  </div>
  <div class="horizontal-row-number">
  <div class="row-number"></div>
  <span>R`+i+`</span>
</div>`


    for(k=1;k<=inputHrightslotss;k++)
    {
         res=res+`
         
        
     
                <div class="cars-container available " id="Hrightseat-`+i+`.`+k+`">
                  <div class="car"></div>
                  <span>S`+k+`</span>
                </div>
               `
    }
    
   
res=res+` <div class="clearfix-grass">
                  
</div>
`
    res=res+`
    </div>`




               
     
}
res=res+`</section>`
dis.innerHTML=res;



display2();

}


function display2()
{

  
  $(".content-wrapper2").show(800);
  var i,j,k,l,m;
  

  var Hlanes=document.getElementById("hor").value;

  for(i=1;i<=Hlanes;i++)
{
  var leftids=document.getElementById("inputHleftspaceitems["+i+"]").value;
  var rightids=document.getElementById("inputHrightspaceitems["+i+"]").value;

  for(l=1;l<=leftids;l++)
 {
          var num=document.getElementById("inputHleftslotspaces["+l+"]").value;
          var after=document.getElementById("inputHleftslotspaceitemindex["+l+"]").value;
          console.log(after);
          console.log(num);

          var spaces="";

          var element=document.getElementById("Hleftseat-"+i+"."+after);
              for(j=1;j<=num;j++)
              {
                
                spaces=spaces+`
                <div class="space-container" style="padding:20px;"> <span class="hspace" ></span></div>


                `
              
               }
          
         
         

          console.log(element);
         
          $(element).after(spaces);

              }
          for(m=1;m<=rightids;m++)
          {
                   var num=document.getElementById("inputHrightslotspaces["+m+"]").value;
                   var after=document.getElementById("inputHrightslotspaceitemindex["+m+"]").value;
                   console.log(after);
                   console.log(num);
                   var spices="";
                   var elementer=document.getElementById("Hrightseat-"+i+"."+after);
                       for(j=1;j<=num;j++)
                       {
                       
                         spices=spices+`
                         <div class="space-container" style="padding:20px;"> <span class="hspace" ></span></div>
                         `
                       
                              }


                   console.log(element);


                   
                   $(elementer).after(spices);
}
          
}
}


