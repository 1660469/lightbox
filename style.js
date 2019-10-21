
var arrayNotice = [{
    image: "image/hoang-tu-ech-va-giac-mo-tai-tao-nong-nghiep-truyen-thong1.jpg",
    content: "                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date:"8/10/2019",
    views: "23",

},
{
    image: "image/hoang-tu-ech-va-giac-mo-tai-tao-nong-nghiep-truyen-thong1.jpg",
    content: "                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date:"8/10/2019",
    views: "23",

},
{
    image: "image/hoang-tu-ech-va-giac-mo-tai-tao-nong-nghiep-truyen-thong1.jpg",
    content: "                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date:"9/10/2019",
    views: "23",

},
{
    image: "image/hoang-tu-ech-va-giac-mo-tai-tao-nong-nghiep-truyen-thong1.jpg",
    content: "                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date:"9/10/2019",
    views: "23",

},

]
$(document).ready(function (){
    appendNotice();
})
$(window).resize(function (){
    appendNotice();
});
function appendNotice(){
    var width = $(window).width();
    var number = 0;
    if( width >=768)
        number = 4;
    
    if(width <768)
        number = 2;
    var code =" ";
    for(var i = 0;i < number;i++)
    {
        code+= '<div class="panel panel-default col-4 col-md-3 col-sm-4 col-lg-3 ">\
        <div class="panel-heading">\
            <img src="'+arrayNotice[i].image+'" class="img-fluid">\
            <label class="textdm">Top Left</label>\
        </div>\
        <h6 class="text py-2"> '+arrayNotice[i].content+'</h6>\
        <div class="panel-body icon">\
            <i class="fas fa-history"></i></i> '+arrayNotice[i].date+' <i class="fas fa-eye" style="margin-left: 20px;"></i> '+arrayNotice[i].date+'\
        </div>\
    </div>';
    }
    $('#list-notice').html(code);
}
