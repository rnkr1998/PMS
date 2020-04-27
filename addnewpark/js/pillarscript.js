



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
       
       
   
   
   
   
   
   
   
   
   
   
   
         function Hinner()
         {
           
             var Hlanes=document.getElementById("hor").value;  
             
             
             
           
             var data="";
             var inputdata ="";
           
             
              var i;
              if(Hlanes>=1 && Hlanes<=26)
              {
                  for(i=1;i<=Hlanes;i++)
                {
                     
                    
                        inputdata = inputdata +
                        `<div class="inputcontent"> 
                        <div class="inputsidecontent">
                          <div class="inputdata" >
                          <h4>LEFT-SIDE[ROW-`+i+`]:</h4>
                           
                            <div class="input-group input-group-md col-md-12 " id="inputleftgroup[`+i+`]">
                         
                        <input type="number"  style=" font-size:16px"class="form-control" name="field" placeholder="No.of slots [max value:1000]" id="inputHleftslots[`+i+`]" min="0" max="1000" oninput="Lchangeofslot(`+i+`)" required >
                      
                     
                       <input type="number" style="font-size:16px" class="form-control" name="field" placeholder="No.of pillars [max value:100]" id="inputHleftpillar[`+i+`]" min="0" max="100" oninput="horizontalleftspaces(value,`+i+`)" required>
                       
                   
                       </div>
                       <div class="input-group input-group-sm justify-content-md-center" id="inputHleftspaceitemdata[`+i+`]">
                      
                       </div>
                     
                       </div>
                       `+
                     
                       `
                   
                       <div class="inputdata" id=inputrightdata[`+i+`]>
                       <h4>RIGHT-SIDE[ROW-`+i+`]</h4>
                       
                       <div class="input-group input-group-md col-md-12 " id="inputrightgroup[`+i+`]">
                        
                           <input type="number" style=" font-size:16px" class="form-control" name="field" placeholder="No.of slots [max value:1000]" id="inputHrightslots[`+i+`]" min="0" max="1000" oninput="Rchangeofslot(`+i+`)" required >
                          
                           <input type="number" style="font-size:16px" class="form-control" name="field" placeholder="No.of pillars [max value:100]" id="inputHrightpillar[`+i+`]"  min="0" max="100" oninput="horizontalrightspaces(value,`+i+`)" required>
                         
                         </div>
                         <div class="input-group input-group-sm  justify-content-md-center" id="inputHrightspaceitemdata[`+i+`]">
                      
                         </div>
                       </div></div>`
                    
                       
                      
                       
                     
                    
                
                      
                }
               
                
                document.getElementById("Hcontentdata").innerHTML =inputdata;
           
   
              }
              else
              {
               document.getElementById("Hcontentdata").innerHTML ="";
              }
             
             
             
            
        
         }
   function Lchangeofslot(a)
   {
     document.getElementById("inputHleftpillar["+a+"]").value="";
   
     document.getElementById("inputHleftspaceitemdata["+a+"]").innerHTML ="";
   
   
   }
   function Rchangeofslot(a)
   {
   
     document.getElementById("inputHrightpillar["+a+"]").value="";
   
     document.getElementById("inputHrightspaceitemdata["+a+"]").innerHTML ="";
   
   }
         function horizontalleftspaces(id, Hlanes)
         {
             
             var i;
             var space="";
             var leftid=id;
             var HLmaxvalues=document.getElementById("inputHleftslots["+Hlanes+"]").value;
             var HLpillarmaxvalues=document.getElementById("inputHleftpillar["+Hlanes+"]").value;
             
                
            if(HLmaxvalues>0)
            {
                 for(i=1;i<=id;i++)
                 {
                   
                 
                     space=space+`
                     <h6>LEFT-SIDE[ROW-`+Hlanes+`]-SPACEITEM:`+i+`</h6>
                     
                     <div class="input-group input-group-sm   col-md-10" id="inputleftgroupspacegroup[`+i+`]">
         
                       <input type="number" style="height:2.1rem;font-size:16px;" class="form-control" name="field" placeholder="Pillar number [max value:`+HLpillarmaxvalues+`]" id="inputHleftslotspaceitemindex[`+i+`]" min="1" max="`+HLpillarmaxvalues+`"  required>
                   
                       <input type="number" style="height:2.1rem;font-size:16px;" class="form-control" name="field" placeholder="No.of slots [max value:10]" id="inputHleftslotspaces[`+i+`]" min="0" max="10" oninput="Lget(`+id+`,`+HLmaxvalues+`)" required>
                    
                       </div>`
                 }
                 
                
             
                    
                  
                  
                    
                     
              
                       
                 document.getElementById("inputHleftspaceitemdata["+Hlanes+"]").innerHTML =space;
               }
               else{
                 document.getElementById("inputHleftspaceitemdata["+Hlanes+"]").innerHTML ="";
               }
             
                 
                
                
   
         }
   

         function Lget(id,doc)
         {
           var i;
           var sum=0;
        
        
           for(i=1;i<=id;i++)
           {
             
             sum=sum+parseInt(document.getElementById("inputHleftslotspaces["+i+"]").value);

           }
           console.log(sum);

           if(doc!=sum)
           {
             console.log("error");
           }
           else{
             console.log("MATCHED");
           }
         }
   
         function horizontalrightspaces(id,Hlanes)
         {
             
             var i;
             var space="";
             var sum=0;
             var HRmaxvalues=document.getElementById("inputHrightslots["+Hlanes+"]").value;
             var HRpillarmaxvalues=document.getElementById("inputHrightpillar["+Hlanes+"]").value;
             if(HRmaxvalues>0)
             {
               
                 for(i=1;i<=id;i++)
                 {
                     space=space+`
                     <h6>RIGHT-SIDE[ROW-`+Hlanes+`]-SPACEITEM:`+i+`</h6>
                     
                     <div class="input-group input-group-sm col-md-10 spacedata" id="inputrightgroupspacegroup[`+i+`]">
         
                     <input type="number" style="height:2.1rem;font-size:16px;"  class="form-control" name="field" placeholder="Pillar number [max value:`+HRpillarmaxvalues+`]" id="inputHrightslotspaceitemindex[`+i+`]" min="1" max="`+HRpillarmaxvalues+`" required >
                    
                     <input type="number" style="height:2.1rem;font-size:16px;"  class="form-control" name="field" placeholder="No.of slots [max value:10]" id="inputHrightslotspaces[`+i+`]" min="0" max="10" oninput="Rget(`+id+`,`+HRmaxvalues+`)" required>
                   
                        </div>`
                 }
                 document.getElementById("inputHrightspaceitemdata["+Hlanes+"]").innerHTML=space;
               }
               else{
                 document.getElementById("inputHrightspaceitemdata["+Hlanes+"]").innerHTML="";
               }
         }
        
         function Rget(id,doc)
         {
           var i;
           var sum=0;
        
        
           for(i=1;i<=id;i++)
           {
             
             sum=sum+parseInt(document.getElementById("inputHrightslotspaces["+i+"]").value);

           }
           console.log(sum);

           if(doc!=sum)
           {
             console.log("error");
           }
           else{
             console.log("MATCHED");
           }
         }
   
        
   
   
   
   $(document).ready(function(){
   $(".available").click(function()
   {
     $(this).css("background","orange");
    
    
   })
   });
   
   
   //render slots and slot items
   
   function display()
   {
   
     $(".content-wrapper2").hide();
     var i,j,k,l,m;
     var Hlanes=document.getElementById("hor").value;
     var dis=document.getElementById("Hsec");
     var res=` <section class="horizontal-parking container">`;
     
    
   for(i=1;i<=Hlanes;i++)
   {
     res=res+`<div class="car-row pull-left">`
      
   
     var inputHleftskotss= document.getElementById("inputHleftpillar["+i+"]").value;
     var inputHrightslotss= document.getElementById("inputHrightpillar["+i+"]").value;

     
    
     res=res+` <div class="clearfix-grass">
                     
     </div>
     <div class="horizontal-row-number">
     <div class="row-number"></div>
     <span>`+(String.fromCharCode(64+i))+`1</span>
   </div>`
       for(j=1;j<=inputHleftskotss;j++)
       {
            res=res+`
            
           
                 
                   <div class="pillar-container" id="LP`+j+`">
                   <div class="pillar"></div>
                     <span>P`+j+`</span>
                   </div>
                  `
       }
       res=res+` <div class="mid-row clearfix">
       <span class="fa fa-arrow-circle-right pull-left"> ENTRY</span> 
       <span class="fa fa-arrow-circle-right pull-right"> EXIT </span> 
     </div>
     <div class="horizontal-row-number">
     <div class="row-number"></div>
     <span>`+(String.fromCharCode(64+i))+`2</span>
   </div>`
   
   
       for(k=1;k<=inputHrightslotss;k++)
       {
            res=res+`
            
           
        
                   <div class="pillar-container" id="RP`+k+`">
                     <div class="pillar"></div>
                     <span>P`+k+`</span>
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
   
   
   //render spaces
   function display2()
   {
   
     
     $(".content-wrapper2").show(800);
     var i,j,k,l,m;
     
   
     var Hlanes=document.getElementById("hor").value;
   
     for(i=1;i<=Hlanes;i++)
   {
     var leftids=document.getElementById("inputHleftpillar["+i+"]").value;
     var rightids=document.getElementById("inputHrightpillar["+i+"]").value;
   
     for(l=1;l<=leftids;l++)
    {
             var num=document.getElementById("inputHleftslotspaces["+l+"]").value;
             var after=document.getElementById("inputHleftslotspaceitemindex["+l+"]").value;
            
   
             var spaces="";
   
             var element=document.getElementById("LP"+after);
   
                 for(j=1;j<=num;j++)
                 {
                   
                   spaces=spaces+`
                   <div class="cars-container available "  id="`+(String.fromCharCode(64+i))+`1S`+j+`"  onclick="myfun(id)">
                   <div class="car"></div>
                   <span>S`+j+`</span>
                 </div>
   
   
                   `
                 
                  }
             
            
            
   
             
            
             $(element).after(spaces);
   
                 }
             for(m=1;m<=rightids;m++)
             {
                      var num=document.getElementById("inputHrightslotspaces["+m+"]").value;
                      var after=document.getElementById("inputHrightslotspaceitemindex["+m+"]").value;
                      console.log(after);
                      console.log(num);
                      var spices="";
                      var elementer=document.getElementById("RP"+after);
                          for(j=1;j<=num;j++)
                          {
                          
                            spices=spices+`
                            <div class="cars-container available "  id="`+(String.fromCharCode(64+i))+`1S`+j+`"  onclick="myfun(id)">
                            <div class="car"></div>
                            <span>S`+j+`</span>
                          </div>
                            `
                          
                                 }
   
   
                      console.log(element);
   
   
                      
                      $(elementer).after(spices);
   }
   
             
   }
   
   
   
   }
   
   
   //form validation
   (function() {
     'use strict';
     window.addEventListener('load', function() {
       // Fetch all the forms we want to apply custom Bootstrap validation styles to
       var forms = document.getElementsByClassName('contentclass');
       // Loop over them and prevent submission
       var validation = Array.prototype.filter.call(forms, function(form) {
         form.addEventListener('submit', function(event) {
           if (form.checkValidity() === false) {
             event.preventDefault();
             event.stopPropagation();
             form.classList.add('was-validated');
           
           }
           if (form.checkValidity() === true) {
   
            
               event.preventDefault();
               event.stopPropagation();
               form.classList.add('was-validated');
               display();
             
   
            
           }
          
           
         }, false);
       });
     }, false);
   })();
   
   
  