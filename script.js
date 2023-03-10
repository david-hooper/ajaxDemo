const $body = $('body');
const $container = $('.container')
const gitHubUserNames = [
    'AGebn',
    'tpeterec',
    'amrioss',
    'BlakesHere',
    'kittbg',
    'calebbeam',
    'ImRlyNewHereSry',
    'DanielPurdy509',
    'Kennedyz71',
    'DessertWarrior',
    'israr2468',
    'jacobrphillips',
    'joegor85',
    'jordan-carlson99',
    'josh-benton',
    'joshuastew',
    'jrm0527',
    'Spirit1269',
    'MDrevon',
    'cnickbradford',
    'ranegray',
    'TDow520',
    'Rusty12321',
    'tech-n-code',
    'legacyunlimited',
]

gitHubUserNames.forEach(gitHubUserName =>{
    createCard(gitHubUserName);
})





//create card for each student
function createCard(gitHubUserName){
    let $cardEl = $(`<div class="card"><h2><a href="https://github.com/${gitHubUserName}/">${gitHubUserName}</a></h2></div>`)
    let $imgEl = $(`<img src=https://github.com/${gitHubUserName}.png?size=200 width="270px">`)
    let $pixelEl = $(`<a href='http://${gitHubUserName}.github.io/mcsp-project-pixel-art-maker/'> Pixel Art Maker </a>`) 
    $cardEl.append($imgEl)
    $cardEl.append($pixelEl);
    $cardEl.append(makeLinksToRepos(gitHubUserName));
    $container.append($cardEl);
    console.log
}
function makeLinksToRepos(gitHubUserName){
    let $reposEl = $('<div><h3>Repos</h3><div>')
    $.get(`https://api.github.com/users/${gitHubUserName}/repos`,(repos) =>{
        repos.forEach(repo => {
            console.log(repo);
            //currently rate limited on github api, have to wait till it will let me try again
            //let $repoEl = `<a href=''></a> `
        })
    })
    return $reposEl;
}