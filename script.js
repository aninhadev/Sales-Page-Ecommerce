let meuArray = [
  {
    nome: 'Aninha',
    habilidade: 'Programar',
    idade: '18 anos',
    foto: './img/xpg.jpg'
  },
  {
    nome: 'Ada Lovelace',
    habilidade: 'Criar algoritmos',
    idade: '36 anos',
    foto: './img/controle-sem-fio.jpg'
  },
  {
    nome: 'Juninho PLAY',
    habilidade: 'Flertar ',
    idade: '18 anos',
    foto: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/tumblr_ndfy29isqi1qg46g8o1_500.jpg?quality=70&strip=all'
  },
  {
    nome: 'Alan Turing',
    habilidade: 'Desvendar inigmas',
    idade: '41 anos',
    foto: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/tumblr_ndfy29isqi1qg46g8o1_500.jpg?quality=70&strip=all'
  },
  {
    nome: 'Alan Turing',
    habilidade: 'Desvendar inigmas',
    idade: '41 anos',
    foto: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/tumblr_ndfy29isqi1qg46g8o1_500.jpg?quality=70&strip=all'
  },
    {
    nome: 'Alan Turing',
    habilidade: 'Desvendar inigmas',
    idade: '41 anos',
    foto: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/tumblr_ndfy29isqi1qg46g8o1_500.jpg?quality=70&strip=all'
  },
  {
    nome: 'Alan Turing',
    habilidade: 'Desvendar inigmas',
    idade: '41 anos',
    foto: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/tumblr_ndfy29isqi1qg46g8o1_500.jpg?quality=70&strip=all'
  }
]
for (let i = 0; i < meuArray.length; i++) {
  let escreva = document.getElementById("res");
  let listaPessoas = document.createElement("div");
  let imagem = document.createElement("img");
  imagem.style.cssText = "width: 210px; height: 180px; "
  imagem.src = meuArray[i].foto;
  listaPessoas.style.cssText = "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; border-radius: 5px; display: flex; flex-direction: row; list-style: none; width: 500px; height: 250px; margin: 20px;  gap: 5px;";
  listaPessoas.appendChild(imagem);
  listaPessoas.innerHTML += ` <div style="display: flex; flex-direction: column; gap: 60px;" ><div style="margin: 10px; padding: 1px; gap: 2px; "> <p> ${meuArray[i].nome} </p> <p> <strong> Detalhes: </strong> ${meuArray[i].habilidade}</p> <p> ${meuArray[i].idade}</p> </div> <div style="display: flex; flex-direction: row; padding: 2px;  gap: 2px; padding-left: 10px; "> <button style="width: 90px;" type="submit">Comprar</button> <button style="width: 90px;" type="submit">Adicionar ao carrinho</button> </div> </div>`;
  escreva.appendChild(listaPessoas);
}


