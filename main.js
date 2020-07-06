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
let n = Tcr.create({ 'h6 1.5': [{ key: '机滤 20', 机滤: '20' }, { key: '空滤 46', 空滤: '46' }, { key: '燃滤 35', 燃滤: '35' }], 'h6c 2.0': [{ key: '机滤 48', 机滤: '48' }, { key: '空滤 46', 空滤: '46' }, { key: '燃滤 29', 燃滤: '29' }] })
console.log(n)