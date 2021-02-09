



var listeApercuLazy;
var vignietteVedetteLazy;


function initialiser()
{
    
  var listeApercuLazyParent =  document.getElementById("liste-apercu-rbo-lazy");
    listeApercuLazy = listeApercuLazyParent.getElementsByClassName("apercu");
    
    
    
    vignietteVedetteLazy = document.getElementsByClassName("vigniette-vedette-lazy");
    
    listeVignetteVedette = document.getElementsByClassName("vigniette-vedette");
    
    ajouterActionSurApercuLazy();
    
    
}
function ajouterActionSurApercuLazy()
{
    for(position = 0; position < listeApercuLazy.length; position++)
    {
        listeApercuLazy[position].onclick = afficherVignetteVedetteLazy;
    }
}
function cacherToutesLesVignetteVedette()
{
    function afficherVignetteVedette(evenement)
{
    cacherToutesLesVignetteVedette();
    
    //alert("afficherVignetteVedette");
    var baliseImage = evenement.target;
    var baliseA = baliseImage.parentNode;
    var lienTexte = baliseA.href;
    var tableauLienTexte = lienTexte.split("#");
    var idFicheVedette =tableauLienTexte[1];
    var ficheVedette = document.getElementById(idFicheVedette);
    ficheVedette.style.display = "block";
    
}

    for(position = 0; position < vignietteVedetteLazy.length; position++)
    {
        vignietteVedetteLazy[position].style.display = "none";
    }
}

function afficherVignetteVedetteLazy(evenement)
{
    cacherToutesLesVignetteVedette();

    var baliseImage = evenement.target;
    var baliseA = baliseImage.parentNode;
    var lienTexte = baliseA.href;
    var tableauLienTexte = lienTexte.split("#");
    var idFicheVedette =tableauLienTexte[1];
    
    var ajax = new XMLHttpRequest();			
    ajax.open('GET', 'vignette-serveur.php?idVignette='+idFicheVedette, true);	
    ajax.onreadystatechange = function()
    {
        if(4 == ajax.readyState)
        {
            var vignietteVedetteLazy=document.getElementById('vigniette-vedette-lazy');	
            console.log("ajax.response : " + ajax.response);
            console.log("ajax.responseText" + ajax.responseText);
            if(vignietteVedetteLazy) 
            {
                //alert(ajax.responseText);
                vignietteVedetteLazy.innerHTML += "" + ajax.responseText;
            }
        }
    }
    ajax.send("");
    
}




