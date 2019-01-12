(function () {
    function jQuery (selector) {
        return new jQuery.prototype.init(selector);
    }
    jQuery.prototype.init = function (selector) {
        //var this = {};
        //选出dom 封装成jq对象返回
        //id class
        this.length = 0;
        //排除undefined null 空dom
        if(selector == null) {
            return this;
        }
        if(typeof selector == 'string' && selector.indexOf('.') != -1) {
            var dom = document.getElementsByClassName(selector.slice(1));

        }else if(typeof selector == 'string' && selector.indexOf('#') != -1){
            var dom = document.getElementById(selector.slice(1));
        }

        if(selector instanceof Element || dom.length == undefined ) {
            this[0] = selector || dom;
            this.length ++;
        }else {
            for(var i = 0;i < dom.length;i ++ ) {
                this[i] = dom[i];
                this.length++;
            }
        }
        return this;//return jQuery.prototype.init.prototype change to jQuery.prototype at line22
    }

    jQuery.prototype.css = function (config) {
        for(var i = 0;i < this.length;i ++) {
            for(var attr in config) {
                console.log(this);
                this[i].style[attr] = config[attr];
            }
        }
        //链式操作
        return this;//retrun jQuery.prototype
    }
   
    jQuery.prototype.get = function (num) {
        return num != null ? (num >= 0 ? this[num] : this[this.length + num]) : [].slice.call(this);
    }

    jQuery.prototype.eq = function (num) {
        var dom = num != null ? (num >= 0 ? this[num] : this[this.length + num]) : null;
        return jQuery(dom);
    }

    jQuery.prototype.add = function (selector) {
        var curObj = jQuery(selector);
        var baseObj = this;
        var newObj = jQuery();
        console.log(curObj);
    

        for(var i = 0;i < curObj.length;i ++) {
            newObj[this.length++] = curObj[i];
        }
        console.log(newObj);

        // for(var i = 0;i < baseObj.length;i ++) {
        //     newObj[this.length++] = curObj[i];
        // }

        return newObj;
    }

    jQuery.prototype.end = function () {
        
    }

    //只对自定义事件进行了绑定
    jQuery.prototype.myOn = function (type,handel) {
        jqLen = this.length;
        for(var i = 0;i < jqLen;i ++) {
            this[i].cacheEvent != undefined ? '' :  this[i].cacheEvent = {};
            this[i].cacheEvent[type] != undefined ? this[i].cacheEvent[type].push(handel) : this[i].cacheEvent[type] = [handel];
        }

        // console.log(this[0].cacheEvent[type]);
    }

    jQuery.prototype.myTrigger = function (type) {
        var params = arguments.length > 1 ? [].slice.call(arguments,1) : [];
        var self = this;
        for(var i = 0;i < this.length; i ++) {
            if(this[i].cacheEvent[type]) {
                this[i].cacheEvent[type].forEach(function (ele,index) {
                    ele.apply(self[i],params);  
                })
            }
        }
    }

    
 


    jQuery.prototype.init.prototype = jQuery.prototype;
    window.$ = window.jQuery = jQuery;
}());