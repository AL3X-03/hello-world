var p1 = 0;
var p2 = 1;

for (var i = 1; i < 10; i++) {
    var temp = p1 + p2;
    console.log(temp);

    p1 = p2;
    p2 = p1 + p2;
}