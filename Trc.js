class Tcr {
    constructor(val, all) {//val:可以是字符串,也可以是对象，但必须含有key这个键名，all:大杂烩，包含所有节点，构建实例的时候必须传进去
        let temp = Object.prototype.toString.call(val) == '[object Object]';
        debugger;
        if (temp) {
            if (!val.key) {
                throw Error('The object must contain the key name "key"')
            }
        } else if (typeof (val) == "string") {
            val = { key: val };
        } else {
            throw Error('This argument can only be a string or an object')
        }
        this.$val = val;
        all.add(this)
        this.$all = all;
    }
    forEach(callbackfn) {//寻找实例中的每一项，不包括含'$'的
        Object.keys(this).forEach((item, index) => {
            /^\$.*/.test(item) ? null : callbackfn(item, index, this)
        })
    }
    include(searchElement) {//检测实例中是否包含选项
        let temp = false;
        Object.keys(this).forEach(item => {
            item == searchElement ? temp = true : null;
        })
        return temp;
    }
    add() {
        [...arguments].forEach(val => {
            if (!(val instanceof Tcr)) {
                throw Error('Arguments can only be Tcr')
            }
            val[this.$val.key] = this;
            this[val.$val.key] = val;
        })
        return this;
    }
    move(key) {
        if (!(key instanceof Tcr) && key != undefined) {
            throw Error('Arguments can only be Tcr')
        }
        let temp = null;
        !key ? this.forEach(item => { temp = item }) : null
        return this[key] ? this[key] : temp//当前实例存在目标是移动到目标，不存在时返回原实例
    }
    find(tar) {//在all中找目标
        let temp = [];
        this.$all.forEach(item => {
            item.$val.key == tar ? temp.push(item) : null;
        })
        return temp
    }
    static create(obj) {//直接传入对象，就可以直接生成Tcr链
        !obj && console.log('e.g:{key1:[val1,val2,val3],key2:[val2,val3,val4]}');
        let ary = {}, all = new Set;
        Object.keys(obj).forEach(item => {
            obj[item].forEach(it => {
                typeof it == 'object' ? it = it.key : null
                let temp = Object.keys(ary).some(item => {
                    return ary[item].$val.key == it
                })
                temp ? null : ary[it] = new Tcr(it, all);
            })
        })
        Object.keys(obj).forEach(item => {
            let temp = new Tcr(item, all)
            obj[item].forEach(it => {
                typeof it == 'object' ? it = it.key : null
                temp.add(ary[it])
            })
        })
        return all
    }
}
export default Tcr
