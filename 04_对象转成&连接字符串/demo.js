let obj = {
  a: 1,
  b: 'b',
  c: [33, 44],
  d:{_m:55, _n:66}
}

function queryString(obj) {
  let str = '';
  for (let k in obj) {
    if (typeof obj[k] === 'string' || typeof obj[k] === 'number') {
      str += '&'+k+'='+obj[k]
    } else if (Array.isArray(obj[k])) {  //先于对象判断是否是数组,因为数组也是对象类型
      str += obj[k].map(item=>'&'+k+'='+item).join('')
    } else if (typeof obj[k] === 'object') {
      for (let kk in obj[k]) {
        str += '&' + k+kk+'='+obj[k][kk]
      }
    }
  }
  return console.log(str);
}

queryString(obj);

