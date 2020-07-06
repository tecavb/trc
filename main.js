import Tcr from "./Trc.js";
// let all = new Set();
// let e1 = new Tcr('1',all);
// let e2 = new Tcr('2',all);
// let e3 = new Tcr('3',all);
// let e4 = new Tcr('4',all);
// let e5 = new Tcr('5',all);
// let e6 = new Tcr('6',all);
// new Tcr('A',all).add(e1,e2,e3,e4);
// new Tcr('B',all).add(e1,e4,e5,e6);
// new Tcr('C',all).add(e3,e4,e6);
// new Tcr('D',all).add(e2,e1,e5);
// new Tcr('E',all).add(e5,e6);
// new Tcr('F',all).add(e2,e3);
let n = Tcr.create({ A: [{ ke: '1' }, '2', '3'], B: ['2', { key: '3' }, '4'], C: ['3', '4', '5'] })
console.log(n)