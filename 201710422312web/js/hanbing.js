var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);            //现在我们需要使用 open() 函数打开一个新的请求

request.responseType = 'json';              //接下来，添加，两行代码，我们设定 responseType 为 JSON，
request.send();                             //所以服务器将知道我们想要返回一个 JSON 对象，然后发送请求 :

request.onload = function() {                  //最后一点内容涉及相应来自服务器的返回数据，然后处理它
var hanbing = request.response;
populateHeader(hanbing);
showHeroes(hanbing);
}

function populateHeader(jsonObj) {              //我们称参数为 jsonObj，那也是为什么我们要在其中调用 JSON 对象。
var myH1 = document.createElement("a");      //这儿我们首先使用 createElement() 创建了一个 <h1> 节点，
myH1.textContent = jsonObj['squadName'];      //将它的 textContent 设为 JSON 对象的 squadName 属性，
header.appendChild(myH1);                     //然后通过 appendChild() 把它加入 <header>中。
                                            //然后我们对段落做了相同的一件事情：创建，设置内容，追加到 <header>。
var myPara = document.createElement('p');     //唯一的不同在于它的内容设为一个与 JSON 内属性 homeTown 和formed相关联的字符串。
myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
header.appendChild(myPara);
}

function showHeroes(jsonObj) {
var heroes = jsonObj['members'];
  
for(i = 0; i < heroes.length; i++) {
var myArticle = document.createElement('article');
var myH2 = document.createElement('h2');
var myPara1 = document.createElement('p');
var myPara2 = document.createElement('p');
var myPara3 = document.createElement('p');
var myList = document.createElement('ul');

myH2.textContent = heroes[i].name;
myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
myPara2.textContent = 'Age: ' + heroes[i].age;
myPara3.textContent = 'Superpowers:';
    
var superPowers = heroes[i].powers;
for(j = 0; j < superPowers.length; j++) {
  var listItem = document.createElement('li');
  listItem.textContent = superPowers[j];
  myList.appendChild(listItem);
}

myArticle.appendChild(myH2);
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);
myArticle.appendChild(myList);

section.appendChild(myArticle);
}
}