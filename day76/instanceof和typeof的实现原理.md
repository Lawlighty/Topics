## instanceof和typeof的实现原理

* instanceof
    * 返回 boolean
    * 通过调用 class 的 [Symbol.hasInstance] static method 来判断一个 object 是否是一个 class 的 instance
缺省行为：判断 object 的 prototype chain 中是否有任意一个 prototype 与 class 的 prototype 相等
    * polyfill:
  
    ````
    interface IConstructor<T> {
    new(...args: any[]): T
    }
    

    function isObject(o: any) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
    }

    function instanceOf<T>(obj: any, cls: IConstructor<T>): obj is T {
    if (isObject(cls)) {
        if (typeof cls[Symbol.hasInstance] === 'function')
        return cls[Symbol.hasInstance](obj)
        else if (typeof cls === 'function') {
        if (isObject(cls.prototype))
            return cls.prototype.isPrototypeOf(obj)
        else return false
        } else throw new TypeError('cls is not callable')
    } else throw new TypeError('cls is not an object')
    }

    ````


* typeof
    * 返回 'string', 'number', 'undefined', 'boolean', 'object', 'function', 'symbol'
    * 获取数据底层的类型标签。