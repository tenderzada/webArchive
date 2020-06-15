// 1.
document.write("hello world<br>");

// 2.
var x1 = "WQ";
var x2 = 10;
var x3 = true;
divcontent = document.getElementById("demo");
p1 = divcontent.getElementsByTagName("p");
p1[0].innerHTML = x1;
p1[1].innerHTML = x2;
p1[2].innerHTML = x3;

// 3.
var x_ = 10;
var y_ = 200;
var res = x_ * y_;

// 4.
var x = 100;
var y = 90;
if (x > y) {
    window.alert(true);
} else {
    windows.alert(false);
}

// 5.
document.write('<br>')
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 1) {
        document.write(i + '<br>')
    }
}