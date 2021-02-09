<?php

function afficherVignetteSTI()
{?>
    <div class="card-img-top vigniette-vedette-lazy" id="vigniette-vedette-Sti">
        <img class="img-fluid"  src="images/vignette/0e4f4bdb591a986fdf3127bfd00e87ca.jpg" alt="stromgol">
        <h3>Sti</h3>
        <p>
            Nouveau look et 20 chevaux en plus que le modèle 2006 avec son moteur de 2,5 L turbo développant 305 ch à 6 000 tr/min et 407 Nm à 4 000 tr/min pour 1 505 kg, régime maximal 6 700 tr/min.
        </p>
    </div>

<?php
}

function afficherVignetteRs()
{?>
    <div class="card-img-top vigniette-vedette-lazy" id="vigniette-vedette-Rs">
        <img class="img-fluid"  src="images/vignette/car_photo_405259.jpg" alt="stromgol">
        <h3>Focus Rs</h3>
        <p>
            The Ford Focus RS WRC is a car built for the Ford World Rally Team by Ford Europe and M-Sport and based on the Ford Focus Climate 2-litre production hatchback, developed to compete in the World Rally Championship.
        </p>
    </div>

<?php
}

function afficherVignetteEvo()
{?>
    <div class="card-img-top vigniette-vedette-lazy" id="vigniette-vedette-Evo">
        <img class="img-fluid"  src="images/vignette/63e836b4ff0da82e0dd310ffeb42b3f5.jpg" alt="stromgol">
        <h3>Evo</h3>
        <p>
            La puissance de l'Evolution III, introduite en janvier 1995, passe à 270 ch grâce, entre autres, au nouveau turbocompresseur TDO5-16G6-7.
        </p>
    </div>

<?php
}
function afficherVignetteRs200()
{?>
    <div class="card-img-top vigniette-vedette-lazy" id="vigniette-vedette-Rs200">
        <img class="img-fluid"  src="images/vignette/2ba825b2864e2db02ea9a380fa5246b8.jpg" alt="stromgol">
        <h3>Rs200</h3>
        <p>
            La Ford RS200 est une voiture de compétition, à quatre roues motrices et moteur central, produite par Ford entre 1984 et 1986. Un modèle de série, basé sur la version de rallye, a été construit à 200 exemplaires,
        </p>
    </div>

<?php
}

function afficherVignetteLancia()
{?>
    <div class="card-img-top vigniette-vedette-lazy" id="vigniette-vedette-Lancia">
        <img class="img-fluid" src="images/vignette/1992-lancia-delta-hf-integrale-evoluzione.jpg" alt="stromgol">
        <h3>Lancia</h3>
        <p>
            En 1988, la Delta HF Integrale va succéder à la 4WD. Son moteur délivre 20 chevaux de plus mais la différence principale réside en ses ailes élargies qui permettent de monter des jantes et des pneumatiques de plus grandes dimensions pour améliorer la tenue de route et passer plus de puissance au sol
        </p>
    </div>

<?php
}

$idVignette = $_GET['idVignette'];

switch ($idVignette) {
    case "vigniette-vedette-Sti":
        afficherVignetteSTI();
        break;
    case "vigniette-vedette-Rs":
        afficherVignetteRs();
        break;
    case "vigniette-vedette-Evo":
        afficherVignetteEvo();
        break;
    case "vigniette-vedette-Rs200":
        afficherVignetteRs200();
        break;
    case "vigniette-vedette-Lancia":
        afficherVignetteLancia();
        break; 
        
        
}


//echo $vignetteDemandee;

?>



