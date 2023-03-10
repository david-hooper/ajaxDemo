const $body = $('body');
const $container = $('.container')

//get the data from the API
$.get('https://davelab.dev/students',(data) =>{
    console.log(data)
    data.forEach(gitHubUserName => {
        createCard(gitHubUserName);
    });
});




//create card for each student
function createCard(gitHubUserName){
    let $cardEl = $(`<div class="card"><h2><a href="https://github.com/${gitHubUserName}/">${gitHubUserName}</a></h2></div>`)
    let $imgEl = $(`<img src=https://github.com/${gitHubUserName}.png?size=200 width="200px">`)
    let $pixelEl = $(`<a href='http://${gitHubUserName}.github.io/mcsp-project-pixel-art-maker/'> Pixel Art Maker </a>`) 
    $cardEl.append($imgEl)
    $cardEl.append($pixelEl);
    $container.append($cardEl);
    console.log
}