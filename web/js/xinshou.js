var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://luojunz.github.io/hello-world/201710422312web/xinshou.json';
       
      
var request = new XMLHttpRequest();
request.open('GET', requestURL);            //现在我们需要使用 open() 函数打开一个新的请求

request.responseType = 'json';              //接下来，添加，两行代码，我们设定 responseType 为 JSON，
request.send();                             //所以服务器将知道我们想要返回一个 JSON 对象，然后发送请求 :

request.onload = function() {                  //最后一点内容涉及相应来自服务器的返回数据，然后处理它
var xinshou = request.response;
populateHeader(xinshou);
showHeroes(xinshou);
}

function populateHeader(jsonObj) {              //我们称参数为 jsonObj，那也是为什么我们要在其中调用 JSON 对象。
var myH1 = document.createElement("h1");      //这儿我们首先使用 createElement() 创建了一个 <h1> 节点，
myH1.textContent = jsonObj['headline1'];      //将它的 textContent 设为 JSON 对象的 headline1 属性，
header.appendChild(myH1);                     //然后通过 appendChild() 把它加入 <header>中。
                                            //然后我们对段落做了相同的一件事情：创建，设置内容，追加到 <header>。
var myPara1 = document.createElement('p');     //唯一的不同在于它的内容设为一个与 JSON 内属性 content1。
myPara1.textContent =  jsonObj['content1'] ;
header.appendChild(myPara1);

var myH2 = document.createElement("h1");      
myH2.textContent = jsonObj['headline2'];      
header.appendChild(myH2);

var myPara2 = document.createElement('p');     
myPara2.textContent =  jsonObj['content2'] ;
header.appendChild(myPara2);

}
