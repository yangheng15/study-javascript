function getStyle (elem,prop) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(elem,null)[prop];
    }else {
        return elem.currentStyle[prop];
    }
}

function startMove (obj,json,callback) {
    clearInterval(obj.timer);
    var iSpeed,
        iCur;
    obj.timer = setInterval(function () {
        var bStop = true;                
        for(var prop in json) {
            if(prop == 'opacity') {
                iCur = getStyle(obj,prop) *100;
                // console.log(iCur);

            }else {
                iCur = parseInt(getStyle(obj,prop));
                // console.log(iCur);
            }
            iSpeed = (json[prop] - iCur) / 7;//400 - 100 = 300/7 =42.8 36.7
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            // console.log(iSpeed);
            if(prop == 'opacity') {
                obj.style.opacity = (iCur + iSpeed) / 100;
            }else {
                obj.style[prop] = iCur + iSpeed + 'px';//142.8 
                // console.log(obj.style[prop]);
            }
            if(iCur != json[prop]) {
                bStop = false;
            }
            // console.log('a');

            if(bStop) {
                clearInterval(obj.timer);
                typeof callback  == 'function' ? callback() : ''; 
            }
        }
    },30)
}