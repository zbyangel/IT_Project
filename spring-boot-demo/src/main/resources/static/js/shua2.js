function searchBook() {
    var key=$('#choose').val();
    var text=$('#keyboard').val();
    $.ajax({
        async: false,
        type: "GET",
        url:"/searchBook?key="+key+"&text="+text,
        data:{},
        dataType: "JSON",
        success: function (data) {
            var i;
            var a=JSON.stringify(data);
            var b=eval("("+a+")");

            var result=b.result;
            //用一个变量来存储json中的数据
            for (i = 0; i < result.length; i++) { //用for循环遍历数组将数据存入html变量中

                var id=result[i].BookId;

                var id=result[i].bookId;
                var len=length(id);
                for(var j=0;j<8-len;j++)
                {
                    id="0"+id;
                }

                var isbn=result[i].ISBN;
                var pri=result[i].price;
                var loa=result[i].location;
                var bn=result[i].bookname;
                var aut=result[i].author;
                var pre=result[i].press;
                var des=result[i].description;
                var pub=result[i].publishYear;
                var tex=result[i].textLanguage;
                var sta=result[i].copyNumbers;
                if(sta == "1" || sta =="2") {
                    var html = "\t<th>" + id + "</th>\n" +
                        "\t\t\t<th>" + isbn + "</th>\n" +
                        "\t\t\t<th>" + pri + "</th>\n" +
                        "\t\t\t<th>" + loa + "</th>\n" +
                        "\t\t\t<th>" + bn + "</th>\n" +
                        "\t\t\t<th>" + aut + "</th>\n"
                        // + "\t\t\t<th>"+pre+"</th>\n"
                        + "\t\t\t<th>" + des + "</th>\n" +
                        // "\t\t\t<th>"+pub+"</th>\n" +
                        // "\t\t\t<th>"+tex+"</th>\n" +
                        "\t\t\t<th>" + 'none' + "</th>";
                    document.getElementById("tbody").innerHTML =document.getElementById("tbody").innerHTML+ html;
                }
                else if(sta == "0" ){
                    var html = "\t<th>" + id + "</th>\n" +
                        "\t\t\t<th>" + isbn + "</th>\n" +
                        "\t\t\t<th>" + pri + "</th>\n" +
                        "\t\t\t<th>" + loa + "</th>\n" +
                        "\t\t\t<th>" + bn + "</th>\n" +
                        "\t\t\t<th>" + aut + "</th>\n"
                        // + "\t\t\t<th>"+pre+"</th>\n"
                        + "\t\t\t<th>" + des + "</th>\n" +
                        // "\t\t\t<th>"+pub+"</th>\n" +
                        // "\t\t\t<th>"+tex+"</th>\n" +
                        "\t\t\t<th><a href ='#'><input class='reserve' type='button'style='color:white;height:30px;border-bottom-left-radius:0.5px;background-color:#734e55;font-size:15px'value=" + 'reserve' + "></a></th>";
                    document.getElementById("tbody").innerHTML =document.getElementById("tbody").innerHTML+ html;
                }

            }

        }

    })
}

function length(str){
    var i = 0;
    while(str[i] !== undefined){
        i++;
    }
    return i;
}
function ReadCookie(cookieName)
{
    var theCookie=""+document.cookie;
    var ind=theCookie.indexOf(cookieName);
    if(ind==-1||cookieName=="")return"";
    var ind1=theCookie.indexOf(';',ind);
    if(ind1==-1) ind1=theCookie.length;
    return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
};


$('#tbody').on('click','.reserve', function () {
    // window.location.reload();
    var ide=ReadCookie("rtele");
    trIndex = $('.reserve', '#tbody').index($(this));
    addEnter = false;
    var bookId = $(this).parents().children("th:eq(0)").text();
    // var $tr = $(this).parents('tr');
    $.ajax({
        type: "post",
        url: "/addReservation?userId="+ide+"&bookId="+bookId,
        success: function(data) {            //成功后直接移除当前行
            // $tr.remove();
            alert("success！");
            windows.location.reload();
        },
        error: function() {
        }
    });
    // $(this).parents('tr').remove();
})