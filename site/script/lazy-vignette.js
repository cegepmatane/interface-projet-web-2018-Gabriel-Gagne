



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
function afficherVignetteVedetteLazy(evenement)
{
    cacherToutesLesVignetteVedette();

    var baliseImage = evenement.target;
    var baliseA = baliseImage.parentNode;
    var lienTexte = baliseA.href;
    var tableauLienTexte = lienTexte.split("#");
    var idFicheVedette =tableauLienTexte[1];
    
    var ajax = new XMLHttpRequest();			
    ajax.open('GET', 'http://localhost/site/vignette-serveur.php?idVignette='+idFicheVedette, true);	
    console.log('http://localhost/site/vignette-serveur.php?idVignette='+idFicheVedette);
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
                vignietteVedetteLazy.innerHTML += "Texte " + ajax.responseText;
            }
        }
    }
    
    ajax.send("");
    
}
function cacherToutesLesVignetteVedette()
{
    
    for(position = 0; position < listeVignetteVedette.length; position++)
    {
        listeVignetteVedette[position].style.display = "none";
    }
}