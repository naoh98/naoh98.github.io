var question = [
    {
        q: "Đâu là thủ đô của Việt Nam ?",
        a: ["A. Sài Gòn",
            "B. Nam Định",
            "C. Đà Nẵng",
            "D. Hà Nội"],
        r: 3
    },
    {
        q: "Nhà Xanh nằm ở đâu ?",
        a: ["A. Nga",
            "B. Hàn Quốc",
            "C. Nhật Bản",
            "D. Mỹ"],
        r: 1
    },
    {
        q: "Lần thứ 3 liên tiếp Real Madrid vô địch Champions League là mùa giải nào ?",
        a: ["A. 2017 / 2018",
            "B. 2016 / 2017",
            "C. 2015 /2016",
            "D. 2018 / 2019"],
        r: 0
    },
    {
        q: "Thành Tây Đô được xây dựng ở thời nào ?",
        a: ["A. Thời kỳ Bắc thuộc",
            "B. Thời nhà Đinh",
            "C. Thời nhà Hồ",
            "D. Thời nhà Trần"],
        r: 2
    },
    {
        q: "Meaning of yellow in Vietnamese ?",
        a: ["A. Màu đỏ",
            "B. Màu tím",
            "C. Màu trắng",
            "D. Màu vàng"],
        r: 3
    },
    {
        q: "Răng khôn hay còn được gọi với cái tên ?",
        a: ["A. Răng số 1",
            "B. Răng số 3",
            "C. Răng số 8",
            "D. Răng số 6"],
        r: 2
    },
    {
        q: "Lúc Hoàn nặng nhất là 55kg nhưng lúc nhẹ nhất chỉ 2kg. Hỏi lúc Hoàn nhẹ nhất là lúc nào ?",
        a: ["A. Lúc mới ăn xong",
            "B. Lúc mới sinh",
            "C. Lúc trưởng thành",
            "D. Lúc về già"],
        r: 1
    },
    {
        q: "Bức tượng Le penseur được khắc bằng chất liệu gì ?",
        a: ["A. Đồng",
            "B. Gỗ",
            "C. Sắt",
            "D. Thạch cao"],
        r: 0
    },
    {
        q: "1 + 1 = 2, 2 + 2 = 4. Vậy 4 + 4 bằng bao nhiêu ?",
        a: ["A. 16",
            "B. 8",
            "C. 0",
            "D. 1"],
        r: 1
    },
    {
        q: "Tủ lạnh tiếng Anh là gì",
        a: ["A. Elevator",
            "B. Air conditioner",
            "C. Fridge",
            "D. Bridge"],
        r: 2
    },
];
var count=0;
var score=0;
var obj = question[count];
var time = 900;
var cau =  1;

function load(){
    $(".answer").empty();
    //
    $(".score span").text(score);
    $(".question p").text((count+1)+". "+obj.q);
    $(".answer").attr("r",obj.r);
    for(let i =0; i<obj.a.length;i++){
        $(".answer").append("<p data-index='"+i+"'>"+obj.a[i]+"</p>");
    }
    $(".answer p").on("click", function () {
        let a = parseInt($(".answer").attr("r"));
        let r = parseInt($(this).attr("data-index"));
       if(a==r){
           score+=10;
           $(".score span").text(score);
           count++;
           cau++;
           obj=question[count];
           $(".number").text(cau);
           if(count>=question.length){
               $(".container").empty();
               $(".container").append("<h1 class='tb'>You Win !!</h1>");
               $(".container").append("<a href='' class='replay'>Play Again</a>");
               return;
           }
           load();
       } else{
           score-=10;
           $(".score span").text(score);
           count--;
           cau--;
           $(".number").text(cau);
           obj=question[count];
           if(score<0){
               $(".container").empty();
               $(".container").append("<h1 class='tb'>You Lose !!</h1>");
               $(".container").append("<a href='' class='replay'>Play Again</a>");
               return;
           }
           load();
       }
    });
}
$(document).ready(function () {
    load();
    $(".replay").on("click", function (e) {
        e.preventDefault();
        location.reload();
    });
    $(".wrap>div>a").on("click", function (e) {
        e.preventDefault();
        $(".wrap").fadeOut(900, function () {
            let x = setInterval( function () {
                time--;
                let min = Math.floor(time/60);
                let sec = time%60;
                $(".time span").text(min+" : "+sec);
                if(time<=0){
                    if(count<question.length){
                        clearInterval(x);
                        $(".container").empty();
                        $(".container").append("<h1 class='tb'>You Lose !!</h1>");
                        $(".container").append("<a href='' class='replay'>Play Again</a>");
                    }else{
                        clearInterval(x);
                        $(".container").empty();
                        $(".container").append("<h1 class='tb'>You Win !!</h1>");
                        $(".container").append("<a href='' class='replay'>Play Again</a>");
                    }
                }
            }, 1000);
        });
    });
});