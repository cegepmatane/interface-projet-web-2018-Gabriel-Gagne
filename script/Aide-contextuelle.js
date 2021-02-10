
var etiquette;

function intialiser()
{
    
    etiquette = document.getElementById("etiquette-S");
    etiquetteM = document.getElementById("etiquette-M");
    aide = document.getElementById("aide");
   
    
    
    augmenterAideContextuele();
    augmenterAideContextueleM();
}








function augmenterAideContextuele()
{
    var texteAide = etiquette.title;
    etiquette.title = "";
    
    etiquette.onmouseover = function()
        {
            aide.innerHTML = texteAide;
            aide.style.display = "block";
           
        }
    
    etiquette.onmouseout = function()
        {
            aide.innerHTML = "";
            aide.style.display = "none";
        }
    
    
}
function augmenterAideContextueleM()
{
    var texteAide = etiquetteM.title;
    etiquetteM.title = "";
    
    etiquetteM.onmouseover = function()
        {
            aide.innerHTML = texteAide;
            aide.style.display = "block";
            
        }
    
    etiquetteM.onmouseout = function()
        {
            aide.innerHTML = "";
            aide.style.display = "none";
        }
    
    
}
