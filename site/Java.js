var lienCanada;
var lienFacebook;
var lienReddit;
var lienTwitter;
var lienQuora;







function initialiser()
{
     lienCanada = document.getElementById("lien-canada");
    
     lienFacebook = document.getElementById("lien-Facebook");
     lienReddit = document.getElementById("lien-reddit");
     lienTwitter = document.getElementById("lien-Twitter");
     lienQuora = document.getElementById("lien-Quora");
    
    
    remplacerTextParImageSurLienCanada();
    
    remplacerTextParImageSurlienFacebook();
    remplacerTextParImageSurlienReddit();
    remplacerTextParImageSurlienTwitter();
    remplacerTextParImageSurlienQuora();
    
}
function remplacerTextParImageSurLienCanada()
{
    var texteLien =lienCanada.innerHTML;
    lienCanada.innerHTML = "";
    lienCanada.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "images/image de lien rss/CKTV.png";
    imageLogo.onload = function()
        {
            lienCanada.appendChild(imageLogo);
            imageLogo.style.width = "100px";
        }
}
function remplacerTextParImageSurlienFacebook()
{
    var texteLien =lienFacebook.innerHTML;
    lienFacebook.innerHTML = "";
    lienFacebook.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "images/image de lien rss/Facebook-logo-png-image-76118.png";
    imageLogo.onload = function()
        {
            lienCanada.appendChild(imageLogo);
            imageLogo.style.width = "100px";
        }
}
function  remplacerTextParImageSurlienReddit()
{
    var texteLien =lienReddit.innerHTML;
    lienReddit.innerHTML = "";
    lienReddit.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "images/image de lien rss/2000px-Reddit_logo.svg.png";
    imageLogo.onload = function()
        {
            lienReddit.appendChild(imageLogo);
            imageLogo.style.width = "100px";
        }
}
function  remplacerTextParImageSurlienTwitter()
{
    var texteLien =lienTwitter.innerHTML;
    lienTwitter.innerHTML = "";
    lienTwitter.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "images/image de lien rss/twitter_PNG33.png";
    imageLogo.onload = function()
        {
            lienTwitter.appendChild(imageLogo);
            imageLogo.style.width = "100px";
        }
}
function  remplacerTextParImageSurlienQuora()
{
    var texteLien =lienQuora.innerHTML;
    lienQuora.innerHTML = "";
    lienQuora.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "images/image de lien rss/quora.png";
    imageLogo.onload = function()
        {
            lienQuora.appendChild(imageLogo);
            imageLogo.style.width = "100px";
        }
}