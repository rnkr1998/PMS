



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
                     `<div class="inputcontent" data-hor="${i}"> 
                     <div class="inputsidecontent">
                       <div class="inputdata" >
                       <h5>HORIZONTAL-LEFT-SIDE[ROW-`+i+`]:</h5>
                        
                         <div class="input-group input-group-sm" id="inputleftgroup[`+i+`]">
                      
                     <input type="number" style=" font-size:16px" class="form-control" name="field" placeholder="No.of slots [max value:1000]" id="inputHleftslots[`+i+`]" min="0" max="1000" oninput="Lchangeofslot(`+i+`)" required >
                   
                  
                    <input type="number"  style=" font-size:16px" class="form-control" name="field" placeholder="No.of space items [max value:100]" id="inputHleftspaceitems[`+i+`]" min="0" max="100" oninput="horizontalleftspaces(value,`+i+`)" required>
                    
                
                    </div>
                    <div class="input-group input-group-sm justify-content-md-center" id="inputHleftspaceitemdata[`+i+`]">
                   
                    </div>
                  
                    </div>
                    `+
                  
                    `
                
                    <div class="inputdata" id=inputrightdata[`+i+`]>
                    <h5>HORIZONTAL-RIGHT-SIDE[ROW-`+i+`]:</h5>
                    
                    <div class="input-group input-group-sm " id="inputrightgroup[`+i+`]">
                     
                        <input type="number" style=" font-size:16px" class="form-control" name="field" placeholder="No.of slots [max value:1000]" id="inputHrightslots[`+i+`]" min="0" max="1000" oninput="Rchangeofslot(`+i+`)" required >
                       
                        <input type="number" style=" font-size:16px" class="form-control" name="field" placeholder="No.of space items [max value:100]" id="inputHrightspaceitems[`+i+`]"  min="0" max="100" oninput="horizontalrightspaces(value,`+i+`)" required>
                      
                      </div>
                      <div class="input-group input-group-sm justify-content-md-center" id="inputHrightspaceitemdata[`+i+`]">
                   
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
  document.getElementById("inputHleftspaceitems["+a+"]").value="";

  document.getElementById("inputHleftspaceitemdata["+a+"]").innerHTML ="";


}
function Rchangeofslot(a)
{

  document.getElementById("inputHrightspaceitems["+a+"]").value="";

  document.getElementById("inputHrightspaceitemdata["+a+"]").innerHTML ="";

}
      function horizontalleftspaces(id, Hlanes)
      {
          
          var i;
          var space="";
          var leftid=id;
          var HLmaxvalues=document.getElementById("inputHleftslots["+Hlanes+"]").value;

             
         if(HLmaxvalues>0)
         {
              for(i=1;i<=id;i++)
              {
                
              
                  space=space+`
                  <h6>HORIZONTAL-LEFT-SIDE[ROW-`+Hlanes+`]-SPACEITEM:`+i+`</h6>
                  
                  <div class="input-group  col-md-10" id="inputleftgroupspacegroup[`+i+`]" data-leftspace="${i}">
      
                    <input type="number" style="height:2.1rem;font-size:16px;"  class="form-control" name="field" placeholder="slot number to hold [max value:`+HLmaxvalues+`]" id="inputHleftslotspaceitemindex[`+i+`]" min="1" max="`+HLmaxvalues+`" required>
                
                    <input type="number" style="height:2.1rem;font-size:16px;"  class="form-control" name="field" placeholder="No.of spaces [max value:20]" id="inputHleftslotspaces[`+i+`]" min="1" max="20" required>
                 
                    </div>`
              }
              
             
          
                 
               
               
                 
                  
           
                    
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
      
          var HRmaxvalues=document.getElementById("inputHrightslots["+Hlanes+"]").value;
          if(HRmaxvalues>0)
          {
            
              for(i=1;i<=id;i++)
              {
                  space=space+`
                  <h6>HORIZONTAL-RIGHT-SIDE[ROW-`+Hlanes+`]-SPACEITEM:`+i+`</h6>
                  
                  <div class="input-group col-md-10 spacedata" id="inputrightgroupspacegroup[`+i+`]" data-rightspace="${i}">
      
                  <input type="number" style="height:2.1rem;font-size:16px;" class="form-control" name="field" placeholder="slot number to hold [max value:`+HRmaxvalues+`]" id="inputHrightslotspaceitemindex[`+i+`]" min="1" max="`+HRmaxvalues+`" required>
                 
                  <input type="number" style="height:2.1rem;font-size:16px;" class="form-control" name="field" placeholder="No.of spaces [max value:20]" id="inputHrightslotspaces[`+i+`]" min="1" max="20" required>
                
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


//render slots and slot items

function display()
{

  $(".content-wrapper2").hide();
  var i,j,k,l,m;
  var Hlanes=document.getElementById("hor").value;
  var dis=document.getElementById("Hsec");
  var res=` <section class="horizontal-parking">
  <div class="hscrollable">
<div class="row-data">`;
  
 
for(i=1;i<=Hlanes;i++)
{
  res=res+`<div class="car-row pull-left">`
   

  var inputHleftskotss= document.getElementById("inputHleftslots["+i+"]").value;
  var inputHrightslotss= document.getElementById("inputHrightslots["+i+"]").value;
 
  res=res+` <div class="clearfix-grass">
                  
  </div>
  <div class="horizontal-row-number">
  <div class="row-number"></div>
  <span>`+(String.fromCharCode(64+i))+`1</span>
</div>`
    for(j=1;j<=inputHleftskotss;j++)
    {
         res=res+`
         
        
              
                <div class="cars-container available "  id="`+(String.fromCharCode(64+i))+`1S`+j+`"  onclick="myfun(id)">
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
  <span>`+(String.fromCharCode(64+i))+`2</span>
</div>`


    for(k=1;k<=inputHrightslotss;k++)
    {
         res=res+`
         
        
     
                <div class="cars-container available " id="`+(String.fromCharCode(64+i))+`2S`+k+`"  onclick="myfun(id)">
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
res=res+`</div></div></section>`
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
  var leftids=document.getElementById("inputHleftspaceitems["+i+"]").value;
  var rightids=document.getElementById("inputHrightspaceitems["+i+"]").value;

  for(l=1;l<=leftids;l++)
 {
          var num=document.getElementById("inputHleftslotspaces["+l+"]").value;
          var after=document.getElementById("inputHleftslotspaceitemindex["+l+"]").value;
         

          var spaces="";

          var element=document.getElementById((String.fromCharCode(64+i))+"1S"+after);

              for(j=1;j<=num;j++)
              {
                
                spaces=spaces+`
                <div class="space-container" > <span class="hspace" ></span></div>


                `
              
               }
          
         
         

          
         
          $(element).after(spaces);

              }
          for(m=1;m<=rightids;m++)
          {
                   var num=document.getElementById("inputHrightslotspaces["+m+"]").value;
                   var after=document.getElementById("inputHrightslotspaceitemindex["+m+"]").value;
                  
                   var spices="";
                   var elementer=document.getElementById((String.fromCharCode(64+i))+"2S"+after);
                       for(j=1;j<=num;j++)
                       {
                       
                         spices=spices+`
                         <div class="space-container" > <span class="hspace" ></span></div>
                         `
                       
                              }


                  


                   
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

            var Hlanes=document.getElementById("hor").value;  
            var Vlanes=document.getElementById("ver").value;  
            if(Hlanes>0 && Vlanes<=0)
            {
            display();
            get();
            }
            else if(Vlanes>0 && Hlanes<=0)
            {
            Vdisplay();
            get();
            }
            else if(Hlanes==0 && Vlanes==0)
            {
              alert("Aleast one value should be greater than zero!");
            }
            else
            {
              display();
              Vdisplay();
              get();
            }
          
         
        }
       
        
      }, false);
    });
  }, false);
})();

















function Vinner()
{
  
    var Vlanes=document.getElementById("ver").value;  
    
    
    
  
    var data="";
    var inputdata ="";
  
    
     var i;
     if(Vlanes>=1 && Vlanes<=26)
     {
         for(i=1;i<=Vlanes;i++)
       {
            
           
               inputdata = inputdata +
               `<div class="inputcontent" data-ver="${i}"> 
               <div class="inputsidecontent">
                 <div class="inputdata" >
                 <h5>VERTICAL-LEFT-SIDE[ROW-`+i+`]:</h5>
                  
                   <div class="input-group input-group-sm  " id="inputleftgroup[`+i+`]">
                
               <input type="number" style=" font-size:16px" class="form-control" name="field" placeholder="No.of slots [max value:1000]" id="inputVleftslots[`+i+`]" min="0" max="1000" oninput="VLchangeofslot(`+i+`)" required >
             
            
              <input type="number" style=" font-size:16px" class="form-control" name="field" placeholder="No.of space items [max value:100]" id="inputVleftspaceitems[`+i+`]" min="0" max="100" oninput="verticalleftspaces(value,`+i+`)" required>
              
          
              </div>
              <div class="input-group input-group-sm justify-content-md-center" id="inputVleftspaceitemdata[`+i+`]">
             
              </div>
            
              </div>
              `+
            
              `
          
              <div class="inputdata" id=inputrightdata[`+i+`]>
              <h5>VERTICAL-RIGHT-SIDE[ROW-`+i+`]:</h5>
              
              <div class="input-group input-group-sm " id="inputrightgroup[`+i+`]">
               
                  <input type="number" style=" font-size:16px" class="form-control" name="field" placeholder="No.of slots [max value:1000]" id="inputVrightslots[`+i+`]" min="0" max="1000" oninput="VRchangeofslot(`+i+`)" required >
                 
                  <input type="number" style=" font-size:16px" class="form-control" name="field" placeholder="No.of space items [max value:100]" id="inputVrightspaceitems[`+i+`]"  min="0" max="100" oninput="verticalrightspaces(value,`+i+`)" required>
                
                </div>
                <div class="input-group input-group-sm justify-content-md-center" id="inputVrightspaceitemdata[`+i+`]">
             
                </div>
              </div></div>`
           
              
             
              
            
           
       
             
       }
      
       
       document.getElementById("Vcontentdata").innerHTML =inputdata;
  

     }
     else
     {
      document.getElementById("Vcontentdata").innerHTML ="";
     }
    
    
    
   

}
function VLchangeofslot(a)
{
document.getElementById("inputVleftspaceitems["+a+"]").value="";

document.getElementById("inputVleftspaceitemdata["+a+"]").innerHTML ="";


}
function VRchangeofslot(a)
{

document.getElementById("inputVrightspaceitems["+a+"]").value="";

document.getElementById("inputVrightspaceitemdata["+a+"]").innerHTML ="";

}
function verticalleftspaces(id, Vlanes)
{
    
    var i;
    var space="";
    var leftid=id;
    var VLmaxvalues=document.getElementById("inputVleftslots["+Vlanes+"]").value;

       
   if(VLmaxvalues>0)
   {
        for(i=1;i<=id;i++)
        {
          
        
            space=space+`
            <h6>VERTICAL-LEFT-SIDE[ROW-`+Vlanes+`]-SPACEITEM:`+i+`</h6>
            
            <div class="input-group  col-md-10" id="VHinputleftgroupspacegroup[`+i+`]" data-leftspace="${i}">

              <input type="number" style="height:2.1rem;font-size:16px;" class="form-control" name="field" placeholder="slot number to hold [max value:`+VLmaxvalues+`]" id="inputVleftslotspaceitemindex[`+i+`]" min="1" max="`+VLmaxvalues+`" required>
          
              <input type="number" style="height:2.1rem;font-size:16px;" class="form-control" name="field" placeholder="No.of spaces [max value:20]" id="inputVleftslotspaces[`+i+`]" min="1" max="20" required>
           
              </div>`
        }
        
       
    
           
         
         
           
            
     
              
        document.getElementById("inputVleftspaceitemdata["+Vlanes+"]").innerHTML =space;
      }
      else{
        document.getElementById("inputVleftspaceitemdata["+Vlanes+"]").innerHTML ="";
      }
    
        
       
       

}


function verticalrightspaces(id,Vlanes)
{
    
    var i;
    var space="";

    var VRmaxvalues=document.getElementById("inputVrightslots["+Vlanes+"]").value;
    if(VRmaxvalues>0)
    {
      
        for(i=1;i<=id;i++)
        {
            space=space+`
            <h6>VERTICAL-RIGHT-SIDE[ROW-`+Vlanes+`]-SPACEITEM:`+i+`</h6>
            
            <div class="input-group col-md-10 spacedata" id="VRinputrightgroupspacegroup[`+i+`]" data-rightspace="${i}">

            <input type="number" style="height:2.1rem;font-size:16px;" class="form-control" name="field" placeholder="slot number to hold [max value:`+VRmaxvalues+`]" id="inputVrightslotspaceitemindex[`+i+`]" min="1" max="`+VRmaxvalues+`" required>
           
            <input type="number" style="height:2.1rem;font-size:16px;" class="form-control" name="field" placeholder="No.of spaces [max value:20]" id="inputVrightslotspaces[`+i+`]" min="1" max="20" required>
          
               </div>`
        }
        document.getElementById("inputVrightspaceitemdata["+Vlanes+"]").innerHTML=space;
      }
      else{
        document.getElementById("inputVrightspaceitemdata["+Vlanes+"]").innerHTML="";
      }
}










//render slots and slot items

function Vdisplay()
{

  $(".content-wrapper3").hide();
var i,j,k,l,m;
var Vlanes=document.getElementById("ver").value;
var dis=document.getElementById("Vsec");
var ress=` <section class="vertical-parking">
<div class="hscrollable">
<div class="row-data">
 `;


for(i=1;i<=Vlanes;i++)
{

  ress=ress+`<div class="column-set">`
  
var inputVleftslotss= document.getElementById("inputVleftslots["+i+"]").value;
var inputVrightslotss= document.getElementById("inputVrightslots["+i+"]").value;

ress=ress+`

    
<div class="car-row pull-left">
    <div class="vertical-left">

  <div class="vertical-row-number">
    <div class="row-number"> <span>`+(String.fromCharCode(64+i))+`1</span></div>    
  </div>

      `
        
      




for(j=1;j<=inputVleftslotss;j++)
{
   ress=ress+`
   
   <div class="cars-container available" id="`+(String.fromCharCode(64+i))+`1P`+j+`" onclick="myfun(id)">
   <div class="car"></div>
   <span>P`+j+`</span>
 </div>`
}


 ress=ress+`
 <div class="entry-points">
      <span style="bottom: 40px;"><i class="fa fa-arrow-circle-left"> </i> EXIT</span> 
      <span style="top: 25px;"> <i class="fa fa-arrow-circle-left"> </i> ENTRY</span> 
    </div>
  </div>
</div>`

ress=ress+`


<div class="car-row pull-left">
    <div class="vertical-right">
      <div class="vertical-row-number">
        <div class="row-number"> <span>`+(String.fromCharCode(64+i))+`2</span></div>    
      </div>

      `


for(k=1;k<=inputVrightslotss;k++)
{
   ress=ress+`
   

          <div class="cars-container available" id="`+(String.fromCharCode(64+i))+`2P`+k+`" onclick="myfun(id)">
          <div class="car"></div>
          <span>P`+k+`</span>
        </div>
         `
}


ress=ress+` 
<div class="grass-points">
  <div class="clearfix-grass">

  </div>
</div>


</div>
</div></div>

`

}
ress=ress+`</div></div></section>`
dis.innerHTML=ress;

display3();


}


//render spaces
function display3()
{


$(".content-wrapper3").show(800);
var i,j,k,l,m;


var Vlanes=document.getElementById("ver").value;

for(i=1;i<=Vlanes;i++)
{
var leftids=document.getElementById("inputVleftspaceitems["+i+"]").value;
var rightids=document.getElementById("inputVrightspaceitems["+i+"]").value;

for(l=1;l<=leftids;l++)
{
    var num=document.getElementById("inputVleftslotspaces["+l+"]").value;
    var after=document.getElementById("inputVleftslotspaceitemindex["+l+"]").value;
 

    var spaces="";              

    var element=document.getElementById((String.fromCharCode(64+i))+"1P"+after);

        for(j=1;j<=num;j++)
        {
          
          spaces=spaces+`
          <div class="space-container" ><div class="car"></div> <span class="vspace" ></span></div>


          `
        
         }
    
   
   

    
   
    $(element).after(spaces);

        }
    for(m=1;m<=rightids;m++)
    {
             var num=document.getElementById("inputVrightslotspaces["+m+"]").value;
             var after=document.getElementById("inputVrightslotspaceitemindex["+m+"]").value;
   
             var spices="";
             var elementer=document.getElementById((String.fromCharCode(64+i))+"2P"+after);
                 for(j=1;j<=num;j++)
                 {
                 
                   spices=spices+`
                   <div class="space-container" > <span class="hspace" >
                  </span></div>
                   `
                 
                        }


             


             
             $(elementer).after(spices);
}

    
}



}





  function get()
  {
 

    var obj ={};
    obj.hdata=[];
    obj.vdata=[];
 
    
    $.each($('[data-hor]'),function(i,it)
    {
        
      let leftslots = $($(it).find('[id^=inputHleftslots]')[0]).val();
      let rightslots = $($(it).find('[id^=inputHrightslots]')[0]).val();
 
    //  var leftspaces = $($(it).find('[id^=inputHleftspaceitems]')[0]).val();
    // var rightspaces = $($(it).find('[id^=inputHrightspaceitems]')[0]).val();
      
    let hrow = {};

    
      hrow.leftslots= leftslots;
      hrow.rightslots= rightslots;

      hrow.leftspaces=[];
      hrow.rightspaces=[];
     

      $.each($($(it).find('[data-leftspace]')),function(j,is){
       
        let slotnum = $($(is).find('[id^=inputHleftslotspaceitemindex]')[0]).val();
        let totalspace = $($(is).find('[id^=inputHleftslotspaces]')[0]).val();
       

        let innerobj ={slotnumber:slotnum,totalspaces:totalspace};
        hrow.leftspaces.push(innerobj);

      })

      $.each($($(it).find('[data-rightspace]')),function(j,is){

        let slotnum = $($(is).find('[id^=inputHrightslotspaceitemindex]')[0]).val();
        let totalspace = $($(is).find('[id^=inputHrightslotspaces]')[0]).val();
        let innerobj ={slotnumber:slotnum,totalspaces:totalspace};
        hrow.rightspaces.push(innerobj);
      })

      
        obj.hdata.push(hrow);
        
        

    })
  
  

    $.each($('[data-ver]'),function(i,it)
    {
      let leftslots = $($(it).find('[id^=inputVleftslots]')[0]).val();
      let rightslots = $($(it).find('[id^=inputVrightslots]')[0]).val();
 
    //  var leftspaces = $($(it).find('[id^=inputHleftspaceitems]')[0]).val();
    // var rightspaces = $($(it).find('[id^=inputHrightspaceitems]')[0]).val();
      
    let vrow = {};

      vrow.leftslots= leftslots;
      vrow.rightslots= rightslots;

      vrow.leftspaces=[];
      vrow.rightspaces=[];


      $.each($($(it).find('[data-leftspace]')),function(j,is){
       
        let slotnum = $($(is).find('[id^=inputVleftslotspaceitemindex]')[0]).val();
        let totalspace = $($(is).find('[id^=inputVleftslotspaces]')[0]).val();
       

        let innerobj ={slotnumber:slotnum,totalspaces:totalspace};
        vrow.leftspaces.push(innerobj);

      })

      $.each($($(it).find('[data-rightspace]')),function(j,is){

        let slotnum = $($(is).find('[id^=inputVrightslotspaceitemindex]')[0]).val();
        let totalspace = $($(is).find('[id^=inputVrightslotspaces]')[0]).val();
        let innerobj ={slotnumber:slotnum,totalspaces:totalspace};
        vrow.rightspaces.push(innerobj);
      })


      
    
         obj.vdata.push(vrow);

    })







    console.log(obj);

    console.log(JSON.stringify(obj));
  }