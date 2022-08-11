const btnAdd = document.querySelector(".btn") //создат переменную для кнопки
const boxcard = document.querySelector(`.box-card`)// создаем переменную которая указывает на клас где будет происходить рендер

let nftCard = []

btnAdd.addEventListener("click",()=>{ //Для переменной кнопуи доключаем слушателя на клик
  nftCard.push(getRandomCard());
  renderCard();
})

function deleteNftCard(Id){
  nftCard  = nftCard.filter(el => el.id !== Id) // Фильтром мы создаем новый маси без айди который нам нужен
  renderCard();
}

function renderCard(){
  let res=``;
  for (let i = 0; i<nftCard.length; i++) {
    res += `<div class="bigbox">
        <div class="imgbox">
          <div class="hight-text">Card Name</div>
          <div class="botton-text">card description</div>
         ${nftCard[i].img}
          </div>
        <div class="buttenBox">
          <button class="buttenTresh" onclick="deleteNftCard(${nftCard[i].id})"> <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0938 5.46875H3.90625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.0938 5.46875H3.90625" stroke="#F178B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.1562 10.1562V16.4062" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.1562 10.1562V16.4062" stroke="#F178B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.8438 10.1562V16.4062" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.8438 10.1562V16.4062" stroke="#F178B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.5312 5.46875V20.3125C19.5312 20.5197 19.4489 20.7184 19.3024 20.8649C19.1559 21.0114 18.9572 21.0938 18.75 21.0938H6.25C6.0428 21.0938 5.84409 21.0114 5.69757 20.8649C5.55106 20.7184 5.46875 20.5197 5.46875 20.3125V5.46875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.5312 5.46875V20.3125C19.5312 20.5197 19.4489 20.7184 19.3024 20.8649C19.1559 21.0114 18.9572 21.0938 18.75 21.0938H6.25C6.0428 21.0938 5.84409 21.0114 5.69757 20.8649C5.55106 20.7184 5.46875 20.5197 5.46875 20.3125V5.46875" stroke="#F178B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.4062 5.46875V3.90625C16.4062 3.49185 16.2416 3.09442 15.9486 2.8014C15.6556 2.50837 15.2582 2.34375 14.8438 2.34375H10.1562C9.74185 2.34375 9.34442 2.50837 9.0514 2.8014C8.75837 3.09442 8.59375 3.49185 8.59375 3.90625V5.46875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.4062 5.46875V3.90625C16.4062 3.49185 16.2416 3.09442 15.9486 2.8014C15.6556 2.50837 15.2582 2.34375 14.8438 2.34375H10.1562C9.74185 2.34375 9.34442 2.50837 9.0514 2.8014C8.75837 3.09442 8.59375 3.49185 8.59375 3.90625V5.46875" stroke="#F178B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
        </div>`
  }
  boxcard.innerHTML=res;
}

// renderCard();

function getRandomCard(){
return {
  img: getRandomPhoto(),
  id: getRandomeId(),
}
}

function getRandomPhoto(){
  return `<img class="nftImg" src="https://random.imagecdn.app/500/150">`;
}

function getRandomeId(){
  return Math.floor(Math.random()*100);

}

