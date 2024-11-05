
function salvarInfo() {

    console.log('Salvo infos');

    localStorage.nivel = document.getElementById('nivel').value;
    localStorage.nome = document.getElementById('nomeP').value;

    localStorage.vidaMax = document.getElementById('vidaMax').value;
    localStorage.vidaA = document.getElementById('vidaA').value;
    
    localStorage.def = document.getElementById('def').value;
    localStorage.acoes = document.getElementById("acoes").value;
    localStorage.iniciativa = document.getElementById("iniciativa").value;

    localStorage.AttFis = document.getElementById("AttFis").value;
    localStorage.AttInt = document.getElementById("AttInt").value;
    localStorage.AttAgi = document.getElementById("AttAgi").value;
    localStorage.AttCoragem = document.getElementById("AttCoragem").value;

    localStorage.tormento = document.getElementById("tormento").value;
    localStorage.descP = document.getElementById("descP").value;

    localStorage.recompensa = document.getElementById("recompensa").value;

    localStorage.habilidadestext1 = document.getElementsByClassName("habilidadestext")[0].value;
    localStorage.habilidadestext2 = document.getElementsByClassName("habilidadestext")[1].value;
    localStorage.habilidadestext3 = document.getElementsByClassName("habilidadestext")[2].value;
    localStorage.habilidadestext4 = document.getElementsByClassName("habilidadestext")[3].value;

    localStorage.AntComb = document.getElementById("AntComb").value;
    localStorage.AntNegocio = document.getElementById("AntNegocio").value;
    localStorage.AntMontaria = document.getElementById("AntMontaria").value;
    localStorage.AntTradicao = document.getElementById("AntTradicao").value;
    localStorage.AntLabuta = document.getElementById("AntLabuta").value;
    localStorage.AntExplo = document.getElementById("AntExplo").value;
    localStorage.AntRoubo = document.getElementById("AntRoubo").value;
    localStorage.AntMed = document.getElementById("AntMed").value;

    localStorage.dinheiro = document.getElementById("dinheiro").value;

    localStorage.item1 = document.getElementById("item1").value;
    localStorage.stat1 = document.getElementById("stat1").value;
    localStorage.item2 = document.getElementById("item2").value;
    localStorage.stat2 = document.getElementById("stat2").value;
    localStorage.item3 = document.getElementById("item3").value;
    localStorage.stat3 = document.getElementById("stat3").value;
    localStorage.item4 = document.getElementById("item4").value;
    localStorage.stat4 = document.getElementById("stat4").value;
    localStorage.item5 = document.getElementById("item5").value;
    localStorage.stat5 = document.getElementById("stat5").value;
    localStorage.item6 = document.getElementById("item6").value;
    localStorage.stat6 = document.getElementById("stat6").value;
    localStorage.item7 = document.getElementById("item7").value;
    localStorage.stat7 = document.getElementById("stat7").value;
    localStorage.item8 = document.getElementById("item8").value;
    localStorage.stat8 = document.getElementById("stat8").value;
    localStorage.item9 = document.getElementById("item9").value;
    localStorage.stat9 = document.getElementById("stat9").value;
    localStorage.item10 = document.getElementById("item10").value;
    localStorage.stat10 = document.getElementById("stat10").value;

    
}

function onloadA() {
    document.getElementById('nivel').value = localStorage.nivel;
    document.getElementById("dinheiro").value = localStorage.dinheiro;
    
    document.getElementById('nomeP').value = localStorage.nome;

    document.getElementById('vidaA').value = localStorage.vidaA;
    document.getElementById('vidaMax').value = localStorage.vidaMax;

    document.getElementById('def').value = localStorage.def;
    document.getElementById("acoes").value =localStorage.acoes;
    document.getElementById("iniciativa").value =localStorage.iniciativa;


    document.getElementById("AttFis").value =localStorage.AttFis;
    document.getElementById("AttInt").value =localStorage.AttInt;
    document.getElementById("AttAgi").value =localStorage.AttAgi;
    document.getElementById("AttCoragem").value =localStorage.AttCoragem;

    document.getElementById("tormento").value =localStorage.tormento;
    document.getElementById("descP").value =localStorage.descP;

    document.getElementById("recompensa").value =localStorage.recompensa;

    document.getElementsByClassName("habilidadestext")[0].value = localStorage.habilidadestext1;
    document.getElementsByClassName("habilidadestext")[1].value = localStorage.habilidadestext2;
    document.getElementsByClassName("habilidadestext")[2].value = localStorage.habilidadestext3;
    document.getElementsByClassName("habilidadestext")[3].value = localStorage.habilidadestext4;

    document.getElementById("AntComb").value =localStorage.AntComb;
    document.getElementById("AntNegocio").value =localStorage.AntNegocio;
    document.getElementById("AntMontaria").value =localStorage.AntMontaria;
    document.getElementById("AntTradicao").value =localStorage.AntTradicao;
    document.getElementById("AntLabuta").value =localStorage.AntLabuta;
    document.getElementById("AntExplo").value =localStorage.AntExplo;
    document.getElementById("AntRoubo").value =localStorage.AntRoubo;
    document.getElementById("AntMed").value =localStorage.AntMed;

    document.getElementById("item1").value =localStorage.item1;
    document.getElementById("stat1").value =localStorage.stat1;
    document.getElementById("item2").value =localStorage.item2;
    document.getElementById("stat2").value =localStorage.stat2;
    document.getElementById("item3").value =localStorage.item3;
    document.getElementById("stat3").value =localStorage.stat3;
    document.getElementById("item4").value =localStorage.item4;
    document.getElementById("stat4").value =localStorage.stat4;
    document.getElementById("item5").value =localStorage.item5;
    document.getElementById("stat5").value =localStorage.stat5;
    document.getElementById("item6").value =localStorage.item6;
    document.getElementById("stat6").value =localStorage.stat6;
    document.getElementById("item7").value =localStorage.item7;
    document.getElementById("stat7").value =localStorage.stat7;
    document.getElementById("item8").value =localStorage.item8;
    document.getElementById("stat8").value =localStorage.stat8;
    document.getElementById("item9").value =localStorage.item9;
    document.getElementById("stat9").value =localStorage.stat9;
    document.getElementById("item10").value =localStorage.item10;
    document.getElementById("stat10").value =localStorage.stat10;
}



function first() {
    localStorage.first = 1;
    /* ATRIBUTOS BÁSICOS INICIO*/
    localStorage.nivel = 1;
    localStorage.nome = '';

    localStorage.tormento = '';
    localStorage.descP = '';
    localStorage.recompensa = 0;


    localStorage.vidaMax = 6;
    localStorage.vidaA = 6;

    localStorage.acoes = 1;

    localStorage.def = 5;
    localStorage.antecedente = 4;
    localStorage.iniciativa = 0;

    localStorage.atributosAEscolher=4;
    localStorage.habilidadestext = '';

    localStorage.AttFis = 0;
    localStorage.AttInt = 0;
    localStorage.AttAgi = 0;
    localStorage.AttCoragem = 0;


    // Antecedentes

    localStorage.maxAntecedentes = 2;

    localStorage.AntComb = 0;
    localStorage.AntNegocio = 0;
    localStorage.AntMontaria = 0;
    localStorage.AntTradicao = 0;
    localStorage.AntLabuta = 0;
    localStorage.AntExplo = 0;
    localStorage.AntMed = 0;
    localStorage.AntRoubo = 0;


    localStorage.dinheiro = '150R$';

    localStorage.item1 = '';
    localStorage.stat1 = '';
    
    localStorage.item2 = '';
    localStorage.stat2 = '';

    localStorage.item3 = '';
    localStorage.stat3 = '';
    
    localStorage.item4 = '';
    localStorage.stat4 = '';
    
    localStorage.item5 = '';
    localStorage.stat5 = '';
    
    localStorage.item6 = '';
    localStorage.stat6 = '';
    
    localStorage.item7 = '';
    localStorage.stat7 = '';
    
    localStorage.item8 = '';
    localStorage.stat8 = '';
    
    localStorage.item9 = '';
    localStorage.stat9 = '';
    
    localStorage.item10 = '';
    localStorage.stat10 = '';

/* ATRIBUTOS BÁSICOS FIM*/
}

if (!localStorage.first) {
    first();
}
onloadA()

