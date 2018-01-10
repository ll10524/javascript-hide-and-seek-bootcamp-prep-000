function getFirstSelector(selector) {
  return document.querySelector(selector);
} 

function nestedTarget() {
  let ret = 
  document.querySelector('#nested div div div .target');
  return ret;
}

function increaseRankBy(n) {
  const list =
  document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n).toString();
  }
}

function deepestChild() {
  let child = document.querySelectorAll('div#grand-node div');
  // while (child.hasChildNodes() == 'true') {
  //   console.log(child);
  //   child = child.querySelector('div');
  // }
  return child[child.length - 1];
}