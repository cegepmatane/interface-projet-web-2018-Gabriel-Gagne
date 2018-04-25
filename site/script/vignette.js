


function initialiser()
{
    
    
    
    
    listeApercu = document.getElementsByClassName("apercu");
    listeVignetteVedette = document.getElementsByClassName("vigniette-vedette");
    
    
    ajouterActionSurApercu();
    cacherToutesLesVignetteVedette();
}
function ajouterActionSurApercu()
{
    for(position = 0; position < listeApercu.length; position++)
    {
        listeApercu[position].onclick = afficherVignetteVedette;
    }
}

function cacherToutesLesVignetteVedette()
{
    
    for(position = 0; position < listeVignetteVedette.length; position++)
    {
        listeVignetteVedette[position].style.display = "none";
    }
}

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