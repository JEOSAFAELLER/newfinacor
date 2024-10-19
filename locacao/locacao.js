function girar(moedaId, btnId, imgId,valueId){
const moeda = document.getElementById(moedaId);
const btn = document.getElementById(btnId);
const img = document.getElementById(imgId);
const value = document.getElementById(valueId);
 
let ladoImg = true;





btn.addEventListener('click', () => {

    if(ladoImg){

        moeda.style.transform = 'rotateY(180deg)';

        moeda.innerHTML= `
        
        <ul class="img-arvores rounded-circle list-unstyled text-white  p-5">
                <li class="lista_moeda">Decoração com bolas, laços, flores</li>
                <li class="lista_moeda">Inclui iluminação <br> - pisca de led</li>
                <li class="lista_moeda">Disponivel nas cores vermelho, dourado, champanhe, rosé</li>
                <li class="lista_moeda"><span class="value">R$ ${valueId}*</span></li>
        
        `


    }else{
        moeda.style.transform = 'rotateY(0deg)';

        moeda.innerHTML= `
        <div id="moeda"> <img class="img-arvores rounded-circle" src="../img/locacao/Natal 2023/${imgId}.png" alt=""></div>
        `

    }
      
    ladoImg = !ladoImg;
   
    });
}

    girar("moeda1","btn1","img1","1200,00");
    girar("moeda2","btn2","img2","1700,00");
    girar("moeda3","btn3","img3","2300,00");
    girar("moeda4","btn4","img4","3700,00");


