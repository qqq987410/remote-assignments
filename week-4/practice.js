/*========================================================
                        Assignment 1
==========================================================*/
// Callback Function
// Complete the function below to show a delayed result in the console.

function delayedResult(n1, n2, delayTime, callback) {
    window.setTimeout(function () {
        callback(n1 + n2);
    }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
});// 9 (4+5) will be shown in the console after 3 seconds


delayedResult(-5, 10, 2000, function (result) {
    window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds



/*========================================================
                        Assignment 2
==========================================================*/
// Callback Function and Advanced HTML DOM
// Complete the functions below to make AJAX call to a URL by GET method, and show theresponse data in the page.
// You may render UI with any style.

function ajax(src, callback) {
    // your code here
    let xhr = new XMLHttpRequest();
    xhr.open("get", src);
    xhr.onload = function () {
        callback(JSON.parse(this.responseText));
    };
    xhr.send();
}

function render(data) {
    // your code here.
    // ​document.createElement()​ & ​appendChild()​ are preferred. No ​innerHTML​ or something alike
    let div = document.createElement('div');
    document.body.appendChild(div);
    data.map((phone) => {
        return div.append(`產品：${phone.name} 價格：${phone.price} 描述：${phone.description}`);
    });
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
});// you should get product information in JSON format and render data in the page
