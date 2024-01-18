this.onmessage = function (e) {
    // console.log(e);
    // var len = e.data.sum;
    // var result = 0;
    // for (var i = 0; i < len; i++) {
    //     result += i;
    // }
    // this.postMessage(result)
    let startTime = e.data.startTime;
    // setInterval(() => {
    //     const endTime = Date.now();
    //     this.postMessage(endTime - startTime);
    //     startTime = endTime;
    // }, 1000);
};
