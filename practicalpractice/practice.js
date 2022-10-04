//create
let ele = document.createElement('form');

ele.setAttribute('method', 'get');
ele.action = 'practice.html';

ele.onsubmit = function(){val('arg');};
ele.setAttribute('onsubmit', "val('arg')");

let hEle = document.createElement('h2');
hEle.style.color = "red";
hEle.style.fontFamily = "skia";
hEle.setAttribute('style', 'padding:2em;color:red;');
hEle.id = "fred";
hEle.appendChild(document.createTextNode("hi practical"));


document.getElementsByTagName('body')[0].appendChild(hEle);

document.getElementById('1').insertBefore(hEle, document.getElementById('3'));

parentToAppendTo.appendChild(ele)
parentToPuItInto.insertBefore(ele, whichCholdoFParentToPutInFrontOF)
parentToRemoveFrom.removeChild(childToKill)
parentHoldingThing. replaceChild(ele, childOfParentToReplace)
node.cloneNode(true)

let c = document.getElementById('1').cloneNode(true);
c.id = "fred";
document.getElementsByTagName('body')[0].appendChild(c);


function $(id){
    return document.getElementById(id);
}

//******************************************



let hEle = document.createElement('h2');

hEle.setAttribute('onmouseenter', 'doThat("args)');

hEle.onclick = doIt;

hEle.onclick = doThat('arg');

hEle.onclick = function(){doThat('args');};

document.getElementById('fred').addEventListener('click', doIt);
document.getElementById('fred').addEventListener('click', function(){doThat('args');});




