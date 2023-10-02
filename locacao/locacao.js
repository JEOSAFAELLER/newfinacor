function girar(moedaId, btnId){
const moeda = document.getElementById(moedaId);
const btn = document.getElementById(btnId);
 
let ladoImg = true;





btn.addEventListener('click', () => {

    if(ladoImg){

        moeda.style.transform = 'rotateY(180deg)';

        moeda.innerHTML= `
        
        <ul class="img-arvores rounded-circle list-unstyled text-white  p-5">
                <li>Decoração com bolas, laços, flores</li>
                <li>Inclui iluminação <br> - pisca de led</li>
                <li>Disponivel nas cores vermelho, dourado, champanhe, rosé</li>
        
        `


    }else{
        moeda.style.transform = 'rotateY(0deg)';

        moeda.innerHTML= `
        <div id="moeda"> <img class="img-arvores rounded-circle" src="../img/locacao/Natal 2023/arvore de natal aluguel bh azul.png" alt=""></div>
        `

    }
      
    ladoImg = !ladoImg;
   
    });
}

    girar("moeda1","btn1");
    girar("moeda2","btn2");
    girar("moeda3","btn3");
    girar("moeda4","btn4");


