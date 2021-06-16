let allElem=document.querySelectorAll('*');
console.log('Загальна кількість елементів у DOM-дереві:'+allElem.length);
let arr = [];
let obj={};

    for(let elem of allElem){
    let elemLength=document.querySelectorAll(elem.tagName).length;
    let elemNumber = elem.tagName +":" + elemLength;
    if(!arr.includes(elemNumber)){
        arr.push(elemNumber);
    }
    }
  

console.log(' Елементи, що сгруповані за  назвою тегу та їх кількість елементів: '+ arr);

for(let i=0;i<arr.length;i++){
    let elemLength=arr[i].split(':')[0].length;
    let amountOfElem = arr[i].split(':')[1];
    if(obj.hasOwnProperty(elemLength)){
        obj[elemLength]=obj[elemLength] + +amountOfElem;
    }else {obj[elemLength]=+amountOfElem }  
}

for(let key in obj){
    if(key==1){
        if(obj[key]==1){
            console.log('"' + key + ' symbol" - '+obj[key] +' tag')  
        }else{console.log('"' + key + ' symbol" - '+obj[key] +' tags')}
    }else{
        if(obj[key]==1){
            console.log('"' + key + ' symbols" - '+obj[key] +' tag')
        }else{console.log('"' + key + ' symbols" - '+obj[key] +' tags')}
    
}
}