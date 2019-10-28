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

var array =[];


var generate = show();
function show() {
    // sort by name
    var byName = arrayTeamWeb.slice(0);
    byName.sort(function (a, b) {
        var x = a.value.toLowerCase();
        var y = b.value.toLowerCase();
        return x.localeCompare(y);
    });
    var code = "";
    for (i = 0; i < byName.length; i++) {
        code += '<option value="' + byName[i].key + '">' + byName[i].value + '</option>';
    }
    document.getElementById("showbox").innerHTML = code;
}
function showBoxSelected() {
    var byName = array.slice(0);
    byName.sort(function (a, b) {
        var x = a.value.toLowerCase();
        var y = b.value.toLowerCase();
        return x.localeCompare(y);
    });
    var code = "";
    for (i = 0; i < byName.length; i++) {
        code += '<option value="' + byName[i].key + '">' + byName[i].value + '</option>';
    }
    document.getElementById("showBoxSelected").innerHTML = code;
}
// function getdata() {
//     var e = document.getElementById("showbox");
//     var getkey = e.options[e.selectedIndex].value;
//     var getdata = e.options[e.selectedIndex].text;
//     for (i = 0; i < arrayTeamWeb.length; i++) {
//         if (getdata === arrayTeamWeb[i].value) {
//             arrayTeamWeb.splice(i, 1);
//         }
//     }
//     show();
//     array.push({
//         "key": getkey,
//         "value": getdata,
//     });
//     showBoxSelected();
//     //document.getElementById("showBoxSelected").innerHTML += "<option>"+getdata+"</option>";
//     // console.log("a");
// }
// function getdataback() {
//     var e = document.getElementById("showBoxSelected");
//     var getkey = e.options[e.selectedIndex].value;
//     var getdataback = e.options[e.selectedIndex].text;
//     for (i = 0; i < array.length; i++) {
//         if (getdataback === array[i].value) {
//             array.splice(i, 1);
//         }
//     }
//     showBoxSelected();
//     arrayTeamWeb.push({
//         "key": getkey,
//         "value": getdataback,
//     });
//     show();

// }
function click2() {
    var element = document.getElementById('showbox');
    getSelectValues(element);
    showBoxSelected();
    show();
}
function getSelectValues(select) {
    var options = select && select.options;
    var opt;
    for (var i = 0; i < options.length; i++) {
        opt = options[i];
        if (opt.selected) {
            array.push({
                "key": opt.value,
                "value": opt.text,
            });
            arrayTeamWeb.splice(arrayTeamWeb.indexOf(arrayTeamWeb.find(x => x.key == opt.value)), 1);
        }
    }
}
function click3() {
    var element = document.getElementById('showBoxSelected');
    getSelectValuesBack(element);
    showBoxSelected();
    show();
}
function getSelectValuesBack(select) {
    var options = select && select.options;
    var opt;
    var arrayIndex = [];
    for (var i = 0; i < options.length; i++) {
        opt = options[i];
        if (opt.selected) {
            arrayIndex.push(i);
            arrayTeamWeb.push({
                "key": opt.value,
                "value": opt.text,
            });
        }
    }
    for (var i = arrayIndex.length - 1; i >= 0; i--) {
        array.splice(arrayIndex[i], 1);
    }
}
function getall() {
    array = arrayTeamWeb.concat(array);
    arrayTeamWeb = [];
    show();
    showBoxSelected();
}
function getall1() {
    arrayTeamWeb = arrayTeamWeb.concat(array);
    array = [];
    show();
    showBoxSelected();
}