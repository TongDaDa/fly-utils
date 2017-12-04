import get from '../../lib/get';

const o = {p:[{l:{i:{ a: 12 }}}]}

console.log(get(o,"p[0].l.i.a"))