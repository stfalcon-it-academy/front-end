var png100 = document.getElementById('png100');
var list1 = document.getElementById('list1');
list1.onclick = function(e) {
  var target = e.target;
  while (target != this) {
    if (target.nodeName == 'A') {
      showThumbnail(target.href, target.title);
      return false;
    }
    target = target.parentNode;
  }
}

function showThumbnail(href, title) {
  png100.src = href;
  png100.alt = title;
}
/* предзагрузка */
var imgs = list1.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
  var url = imgs[i].parentNode.href;

  var img = document.createElement('img');
  img.src = url;
}
