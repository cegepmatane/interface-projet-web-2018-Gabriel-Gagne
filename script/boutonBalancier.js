



var finVignietteLancia;
var boutonBalancierLancia;

var finVignietteSubaru;
var boutonBalancierSubaru;

var finVigniette;
var boutonBalancierMitsubishi;

function initialiser()
{
    //lancia
    finVignietteLancia = document.getElementById("fin-vigniette-Lancia");
    boutonBalancierLancia = document.getElementById("bouton-balancier-Lancia");
    
    boutonBalancierLancia.onclick = balancerTexteFinVignetteLancia;
    boutonBalancierLancia.ouvert = false;
    
    
    //Subaru
    finVignietteSubaru = document.getElementById("fin-vigniette-Subaru");
    boutonBalancierSubaru = document.getElementById("bouton-balancier-Subaru");
    
    boutonBalancierSubaru.onclick = balancerTexteFinVignetteSubaru;
    boutonBalancierSubaru.ouvert = false;
    
    
    //mishibishi
    finVignietteMitsubishi = document.getElementById("fin-vigniette-Mitsubishi");
    boutonBalancierMitsubishi = document.getElementById("bouton-balancier-Mitsubishi");
    
    boutonBalancierMitsubishi.onclick = balancerTexteFinVignetteMitsubishi;
    boutonBalancierMitsubishi.ouvert = false;
    
    
    
    
    
}






function balancerTexteFinVignetteLancia(evenement)
{
    if(boutonBalancierLancia.ouvert)
    {
        evenement.preventDefault();
        finVignietteLancia.style.display="none";
        boutonBalancierLancia.innerHTML = "+";
        boutonBalancierLancia.ouvert = false;
    }
    else
    {
        evenement.preventDefault();
        finVignietteLancia.style.display="inline";
        boutonBalancierLancia.innerHTML = "-";
        boutonBalancierLancia.ouvert = true;
    }
}

function balancerTexteFinVignetteSubaru(evenement)
{
    if(boutonBalancierSubaru.ouvert)
    {
        evenement.preventDefault();
        finVignietteSubaru.style.display="none";
        boutonBalancierSubaru.innerHTML = "+";
        boutonBalancierSubaru.ouvert = false;
    }
    else
    {
        evenement.preventDefault();
        finVignietteSubaru.style.display="inline";
        boutonBalancierSubaru.innerHTML = "-";
        boutonBalancierSubaru.ouvert = true;
    }
}

function balancerTexteFinVignetteMitsubishi(evenement)
{
    if(boutonBalancierMitsubishi.ouvert)
    {
        evenement.preventDefault();
        finVignietteMitsubishi.style.display="none";
        boutonBalancierMitsubishi.innerHTML = "+";
        boutonBalancierMitsubishi.ouvert = false;
    }
    else
    {
        evenement.preventDefault();
        finVignietteMitsubishi.style.display="inline";
        boutonBalancierMitsubishi.innerHTML = "-";
        boutonBalancierMitsubishi.ouvert = true;
    }
}