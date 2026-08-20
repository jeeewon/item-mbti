const url = 'https://llprn.github.io/itemTest/';
function setShare(){
    var resultAlt = resultImg.firstElementChild.alt;
    const shareURL = url + 'page/result-'+resultAlt+'.html';
    window.open(shareURL);
}
