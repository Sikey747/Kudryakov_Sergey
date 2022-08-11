const btnAdd = document.querySelector(`.add`);
const uConteiner = document.querySelector(`.user-Conteiner`)

let users = [
  {
    userName: `Sergey`,
    userSerName: `Kudryakov`,
    id:getRandomId(),
  }
]

btnAdd.addEventListener(`click`,()=>{
users.push(getRandomeUser());
  rendorUser();
})

function deleteusers(usersId){
  users = users.filter(el => el.id !== usersId) // Фильтром мы создаем новый маси без айди который нам нужен
  rendorUser();
}

function changeName(value,userID){
  users = users.map(el => {
    if(el.id === userID){
      el.userName = value;
    }
    return el;
  })
  rendorUser();
}

function rendorUser(){
  let res = ``;
  for (let i = 0; i<users.length; i++) {
    res += `<div class="user-Card">
             <span>${users[i].userName}</span>
             <span>${users[i].userSerName}</span>
             <span>${users[i].id}</span>
             <button class="btn delete" onclick="deleteusers(${users[i].id})">X</button>
             <input type="text" onchange="changeName(this.value,${users[i].id})" value="${users[i].userName}">
             </div>`
  }
  uConteiner.innerHTML=res;
}

rendorUser();

function getRandomId (){
  return Math.floor(Math.random()*100);
}

function getRandomeUser(){
  const rName = [`Vova`,`Philip`,`Ivan`,`Nikolay`,`Gosha`,`Kira`,`Katy`,`lexa`]
  const rSerName = [`Pavlyk`,`Linkoln`,`Kudryakov`,`Smirnov`,`Chapaev`,`Popov`]
  return {
    userName: rName[Math.floor(Math.random() * rName.length - 1) + 1],
    userSerName: rSerName[Math.floor(Math.random() * rSerName.length - 1) + 1],
    id:getRandomId(),
  }
}


