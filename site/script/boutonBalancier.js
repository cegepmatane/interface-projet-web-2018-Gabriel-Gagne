



var finVigniette;
var boutonBalancier;


function initialiserBouton()
{
    
    finVigniette = document.getElementById("fin-vigniette");
    boutonBalancier = document.getElementById("bouton-balancier-Lancia");
    
    boutonBalancier.onclick = balancerTexteFinVignette;
    boutonBalancier.ouvert = false;
    
    
}






function balancerTexteFinVignette(evenement)
{
    if(boutonBalancier.ouvert)
    {
        evenement.preventDefault();
        finVigniette.style.display="none";
        bouton-balancier-Lancia.innerHTML = "+";
        boutonBalancier.ouvert = false;
    }
    else
    {
        evenement.preventDefault();
        finVigniette.style.display="inline";
        boutonBalancier.innerHTML = "-";
        boutonBalancier.ouvert = true;
    }
}
