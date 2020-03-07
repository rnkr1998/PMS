



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
                           
                       <input type="text" class="form-control" placeholder="No.of slots" id="inputHleftslots[`+i+`]" required>
                       <input type="text" class="form-control" placeholder="No.of gaps" id="inputHleftgapitems[`+i+`]" oninput="horizontalleftspaces(value,`+i+`)" required>
                        
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
                           <input type="text" class="form-control" placeholder="No.of gaps" id="inputHrightspaceitems[`+i+`]"  oninput="horizontalrightspaces(value,`+i+`)">
                   
                         </div>
                         <div class="input-group mb-3 " id="inputHrightspaceitemdata[`+i+`]">
                      
                         </div>
                       </div>`
                    
                       
                      
                       
                     
                    
                
                      
                }
                inputdata= inputdata+`
                <div><button class="btn btn-dark" type="button" onclick="display()">SUBMIT</button></div>  </div>`;
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
               
                
   
                
   
              if(id>=1)
              {
                 for(i=0;i<=id;i++)
                 {
                     space=space+`
                     HORIZONTAL-LEFT-SIDE[ROW-`+Hlanes+`]-GAPSLOT:`+(i+1)+`
                     <div class="input-group input-group-sm mb-3 spacedata" >
         
                      
                    <input type="text" class="form-control" placeholder="No.of slots in gap container : `+(i+1)+`" id="inputHleftgapslot[`+(i+1)+`]" required>
         
                       </div>`
                       
                 }
                
             
                    
                  
                  
                    
                     
                 //document.getElementById("inputleftdata["+Hlanes+"]").innerHTML +=space;
                       
                 document.getElementById("inputHleftspaceitemdata["+Hlanes+"]").innerHTML =space;
             
                 
              }
              else{
                document.getElementById("inputHleftspaceitemdata["+Hlanes+"]").innerHTML ="";
              }
                
   
         }
   
   
         function horizontalrightspaces(id,Hlanes)
         {
             
             var i;
             var space="";
         
           
              if(id>=1)
              {
                 for(i=0;i<=id;i++)
                 {
                     space=space+`
                     HORIZONTAL-RIGHT-SIDE[ROW-`+Hlanes+`]-GAPSLOT:`+(i+1)+`
                     <div class="input-group input-group-sm mb-3 spacedata" >
         
                      
                     <input type="text" class="form-control" placeholder=" No.of slots in gap container : `+(i+1)+`" id="inputHrightgapslot[`+(i+1)+`]" required>
                     
                        </div>`
                 }
                 document.getElementById("inputHrightspaceitemdata["+Hlanes+"]").innerHTML=space;
         }
         else{
            document.getElementById("inputHrightspaceitemdata["+Hlanes+"]").innerHTML="";
         }
        }
   
   
        
   
   
   
   $(document).ready(function(){
   $(".available").click(function()
   {
     $(this).css("background","orange");
    
    
   })
   });
   
   
   
   
   function display()
   {
     var i,j,k,l,m;
      var sum=0;
     
     var Hlanes=document.getElementById("hor").value;
     var dis=document.getElementById("sec");
     var res=` <section class="horizontal-parking container">`
     

  for(i=1;i<=Hlanes;i++)
  {
      
    var inputHleftskotss= document.getElementById("inputHleftgapitems["+i+"]").value;
    res=res+`<div class="car-row pull-left">
   <div class="clearfix-grass">
                     
    </div>
    <div class="horizontal-row-number">
    <div class="row-number"></div>
    <span>L`+i+`</span>
  </div>`
    var Lslots=document.getElementById("inputHleftslots["+i+"]").value;
    var Hslots=document.getElementById("inputHleftslots["+i+"]").value;
    for(j=0;j<=inputHleftskotss;j++)
    {
     
       

          sum=sum+document.getElementById("inputHleftgapslot["+(j+1)+"]").value;

        if(sum==Lslots)
         {
               res=res+`<div class="cars-container available ">
               <div class="car"></div>
               <span>S`+k+`</span>
             </div>`
         }
    }
  }
  res=res+`</div></section>`
  dis.innerHTML=res;
     /*
     var res=` <section class="horizontal-parking container">`;
     









   for(i=1;i<=Hlanes;i++)
   {


     res=res+`<div class="car-row pull-left">`
      
     
     console.log(Hlanes);
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
            
           
                 
                   <div class="cars-container available ">
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
            
           
        
                   <div class="cars-container available ">
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

   */
   
   }