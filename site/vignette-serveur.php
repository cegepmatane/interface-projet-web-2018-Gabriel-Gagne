<?php

function afficherVignetteSlomo()
{?>
    <div class="vigniette-vedette-lazy" id="vigniette-vedette-slomo">
        <img src="rbo_bio_745x490_0.jpg" alt="stromgol">
        <h3>slomo</h3>
        <p>
            Rock et Belles Oreilles (aussi appelé RBO) est un groupe humoristique québécois réputé pour son humour cinglant, parfois raffiné, parfois vulgaire ou attirant la controverse. Formé le 15 mai 1981, il connaît ses heures de gloire dans les années 1980 jusqu`à sa séparation. 
        </p>
    </div>

<?php
}

function afficherVignetteStromgol()
{?>
    <div class="vigniette-vedette-lazy" id="vigniette-vedette-stromgol">
        <img src="rbo_bio_745x490_0.jpg" alt="stromgol">
        <h3>Stromgol</h3>
        <p>
            Rock et Belles Oreilles (aussi appelé RBO) est un groupe humoristique québécois réputé pour son humour cinglant, parfois raffiné, parfois vulgaire ou attirant la controverse. Formé le 15 mai 1981, il connaît ses heures de gloire dans les années 1980 jusqu`à sa séparation. 
        </p>
    </div>

<?php
}

function afficherVignetteCrastillon()
{?>
    <div class="vigniette-vedette-lazy" id="vigniette-vedette-rastillon">
        <img src="rbo_bio_745x490_0.jpg" alt="stromgol">
        <h3>Crastillon</h3>
        <p>
            Rock et Belles Oreilles (aussi appelé RBO) est un groupe humoristique québécois réputé pour son humour cinglant, parfois raffiné, parfois vulgaire ou attirant la controverse. Formé le 15 mai 1981, il connaît ses heures de gloire dans les années 1980 jusqu`à sa séparation. 
        </p>
    </div>

<?php
}


$idVignette = $_GET['idVignette'];

switch ($idVignette) {
    case "vigniette-vedette-stromgol":
        afficherVignetteStromgol();
        break;
    case "vigniette-vedette-crastillon":
        afficherVignetteCrastillon();
        break;
    case "vigniette-vedette-slomo":
        afficherVignetteSlomo();
        break;
}


//echo $vignetteDemandee;

?>

