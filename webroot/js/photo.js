jQuery(document).ready(function() {

var CAP_LINKS = [
  { 
    'name': 'ニッシ〜', 
    'url': 'http://www.h6.dion.ne.jp/~sacana/', 
    'title': '西脇画伯のページ' 
  },
  { 
    'name': 'ス〜ジ〜', 
    'url': 'http://www.h7.dion.ne.jp/~poe/newpage8.htm', 
    'title': '伊藤画伯のページ' 
  }
];
var MAX_IDX = CAP_LINKS.length;
var MAX_IMG_NUM = 3;

function getIdx(){
  var ratio = 12;
  var num = getRandom( ratio + 1 );
  if ( num == ratio ) return MAX_IDX;
  return num % 2;
}

function getCaptionHtml( idx ) {
  var html, name;
  if ( idx < MAX_IDX ) {
    name = CAP_LINKS[idx].name;
    html = '目指せ！<a href="' + CAP_LINKS[idx].url + '" title="' + CAP_LINKS[idx].title + '">' + name + '！！ </a>';
    html += '<span>いや、それはちょっと w</span>';
  }
  else {
    html =  '目指せ！日本代表！！ ';
  }

  return html;
}

function getImgHtml( idx ) {
  var dir = './images/photos/';
  var src = dir + 'shota.gif';
  if ( idx < MAX_IDX ) {
    var num = getRandom( MAX_IMG_NUM ) + 1;
    src = dir + 'shota' + num + '.jpg';
  }
  return '<img src="' + src + '" width="160" height="120" alt="" />';
}

function getRandom( num ) {
  return  Math.floor( Math.random() * num );
}

var idx = getIdx();
$('#photo-link .photo').empty().append(getImgHtml(idx));
$('#photo-link .caption').empty().append(getCaptionHtml(idx));

});
