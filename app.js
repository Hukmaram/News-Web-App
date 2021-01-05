console.log('This is project3.js file');

//Api data
let apiKey='35d873ddc947441781fe1fe8f9a652c4';
let source='bbc-news';


let newsAccordion=document.getElementById('newsAccordion');

//AJAX
let xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);
// xhr.setRequestHeader('Access-Control-Allow-Origin','*')
xhr.onprogress=function(){
    console.log('Please Wait News is loading')
}
xhr.onload=function(){
    let newsHtml='';
if(this.status===200){
    let json=JSON.parse(this.responseText);
    let articles=json.articles;
    //console.log(json)
    console.log(articles)
    articles.forEach(function(element,index) {
        newsHtml+=`<div class="card">
<div class="card-header" id="heading${index}">
    <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
            data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
           <b style="color:red">Breaking News ${index+1}</b> ${element.title}
        </button>
    </h2>
</div>
<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
    data-parent="#newsAccordion">
    <div class="card-body">
       ${element.content} <a href="${element.url}" target="_blank">Read More</a>
    </div>
</div>
</div>`
    });
}
else{
    console.log('Some Error Occured ');
}
newsAccordion.innerHTML=newsHtml;
}
xhr.send();