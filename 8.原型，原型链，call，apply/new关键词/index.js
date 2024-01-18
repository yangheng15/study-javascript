function Demo(result) {}

const demo = new Demo(
    function (a, b, c) {
        console.log(a, b, c);
    },
    1,
    2,
    3,
);
console.log(demo);
