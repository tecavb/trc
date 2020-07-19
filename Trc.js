class Tcr {
    constructor(val, all) {//val:可以是字符串,也可以是对象，但必须含有key这个键名.
        //all:大杂烩，包含所有节点，构建实例的时候必须传进去
        let temp = Object.prototype.toString.call(val) == '[object Object]';
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
        all[val.key] = this
        this.$all = all;
    }
    forEach(callbackfn) {//寻找实例中的每一项，不包括含'$'的
        Object.keys(this).forEach((item, index) => {
            /^\$.*/.test(item) ? null : callbackfn(this[item], index, this)
        })
    }
    include(searchElement) {//检测实例中是否包含选项
        let temp = false;
        Object.keys(this).forEach(item => {
            item == searchElement ? temp = true : null;
        })
        return temp;
    }
    add() {//参数只能是Tcr实例
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
    static create(...name) {//库，库内不能重名（key相同
        let obj = {};
        name.forEach(item => {
            obj[item] = new Proxy({}, {
                get: function (target, key, receiver) {
                    return target[key]
                },
                set: function (target, key, value, receiver) {
                    new Tcr(value, target)//利用proxy简化过程，不在需要一直创建实例，像对象一样
                    return target
                }
            });
        })
        return obj
    }
}
export default Tcr
