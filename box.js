var arrayTeamWeb =
    [
        {
            "key": "1",
            "value": "Đặng Bảo Quyền",
        },
        {
            "key": "2",
            "value": "Đinh Thị Thanh Vân",
        },
        {
            "key": "3",
            "value": "Bùi Thị Ngọc Phúc",
        },
        {
            "key": "4",
            "value": "Trần Văn Đạt",
        },
        {
            "key": "5",
            "value": "Nguyễn Đăng Thiện Tâm",
        },
        {
            "key": "6",
            "value": "Võ Văn Quang",
        },
    ];
var array =
    [
       

    ];
var generate = show();
function show() {
    var code = "";
    for (i = 0; i < arrayTeamWeb.length; i++) {
        code += '<option>' + arrayTeamWeb[i].value + '</option>';
    }
    document.getElementById("showbox").innerHTML = code;
}
function showBoxSelected() {
    var code = "";
    for (i = 0; i < array.length; i++) {
        code += '<option>' + array[i].value + '</option>';
    }
    document.getElementById("showBoxSelected").innerHTML = code;
}
function getdata() {
    var e = document.getElementById("showbox");
    var getdata = e.options[e.selectedIndex].text;
    for (i = 0; i < arrayTeamWeb.length; i++) {
        if (getdata === arrayTeamWeb[i].value) {
            arrayTeamWeb.splice(i, 1);
        }
    }
    show();
    array.push({
        "value": getdata,
    });
    showBoxSelected();
    //document.getElementById("showBoxSelected").innerHTML += "<option>"+getdata+"</option>";
    // console.log("a");
}
function getdataback() {
    var e = document.getElementById("showBoxSelected");
    var getdataback = e.options[e.selectedIndex].text;
    for (i = 0; i < array.length; i++) {
        if (getdataback === array[i].value) {
            array.splice(i, 1);
        }
    }
    showBoxSelected();
    arrayTeamWeb.push({
        "value": getdataback,
    });
    show();
    
}
// function getall(){
//     var e = document.getElementById("showBoxSelected");
//     for (i = 0; i < array.length; i++) {
//         if()
//         arrayTeamWeb.push({
//             "value": e.options[i].value,
//         });
//     }
// }