import Tcr from "./Trc.js";//车型，发动机，材料
let id = [
    {
        'key': 'h6',
        'jyjl': 131,
        'ql': 78,
        'kl': 78,
        'zdy': 183,
        'zly': 105,
        'hhs': 183,
        'qzdk': 183,
        'hzdk': 210,
        'ktl': 78,
        'bsx': 131,
        'fdy': 131,
        'd': 20,
        'hq': 78,
        'qq': 0,
        'jysl': 210
    },
    {
        'key': 'm6',
        'jyjl': 131,
        'ql': 78,
        'kl': 78,
        'zdy': 183,
        'zly': 105,
        'hhs': 183,
        'qzdk': 183,
        'hzdk': 210,
        'ktl': 78,
        'bsx': 131,
        'fdy': 131,
        'd': 20,
        'hq': 78,
        'qq': 0,
        'jysl': 210
    },
    {
        'key': 'h6n',
        'jyjl': 147,
        'ql': 176,
        'kl': 88,
        'zdy': 205,
        'zly': 0,
        'hhs': 205,
        'qzdk': 264,
        'hzdk': 264,
        'ktl': 88,
        'bsx': 176,
        'fdy': 176,
        'd': 20,
        'hq': 0,
        'qq': 0,
        'jysl': 210
    },
    {
        'key': 'h4',
        'jyjl': 147,
        'ql': 176,
        'kl': 88,
        'zdy': 205,
        'zly': 0,
        'hhs': 205,
        'qzdk': 264,
        'hzdk': 264,
        'ktl': 88,
        'bsx': 176,
        'fdy': 176,
        'd': 20,
        'hq': 0,
        'qq': 0,
        'jysl': 210
    },
    {
        'key': 'f5',
        'jyjl': 147,
        'ql': 176,
        'kl': 88,
        'zdy': 205,
        'zly': 0,
        'hhs': 205,
        'qzdk': 264,
        'hzdk': 264,
        'ktl': 88,
        'bsx': 176,
        'fdy': 176,
        'd': 20,
        'hq': 0,
        'qq': 0,
        'jysl': 210
    },
    {
        'key': 'f7',
        'jyjl': 147,
        'ql': 176,
        'kl': 88,
        'zdy': 205,
        'zly': 0,
        'hhs': 205,
        'qzdk': 264,
        'hzdk': 264,
        'ktl': 88,
        'bsx': 176,
        'fdy': 176,
        'd': 20,
        'hq': 0,
        'qq': 0,
        'jysl': 210
    }
]
let di = ['4B15', '4B15A', '4C20', '4G15', '4G15F', '4C20B']
let dd = [
    { key: '1', name: '空气1', num: 121 },
    { key: '2', name: '空气2', num: 121 },
    { key: '3', name: '空气3', num: 121 },
    { key: '4', name: '空气4', num: 121 },
    { key: '5', name: '空气5', num: 121 },
    { key: '6', name: '空气6', num: 121 }
]
let t = Tcr.create('e1', 'e2', 'e3')
let { e1, e2, e3 } = t;
id.forEach(item => {
    e1.q = item
})
di.forEach(item => {
    e2.q = item
})
dd.forEach(item => {
    e3.q = item
})
e1.h6.add(e2['4G15'], e3['2'])
e2['4G15'].add(e3['3'])
function en(id, di, tar) {
    let { e1, e2, e3 } = tar;
    let ary = [];
    e1[id].forEach(item => {
        let temp = e3[item.$val.key]
        temp && ary.push(temp.$val)
        if (e2[di] == item) {
            item.forEach(item => {
                let temp = e3[item.$val.key]
                temp && ary.push(temp.$val)
            })
        }
    })
    return ary;
}
console.log(en('h6', '4G15', t))
// console.log(e1.h6)