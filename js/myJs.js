$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: '<span style="color: black;">embechitdangiu!</span>', // Đổi màu tiêu đề
        html: '<span style="color: black;">anh bin xin loi vi lam chit bun.</span>', // Đổi màu text, dùng html thay vì text
        imageUrl: "../img/cuteCat.jpg", // Giữ nguyên đường dẫn ảnh, cần đảm bảo đúng
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("../img/iput-bg.jpg")', // Giữ nguyên đường dẫn ảnh, cần đảm bảo đúng
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio("../sound/duck.mp3"); // Đường dẫn này ĐÚNG với cấu trúc thư mục của bạn
    audio.play().catch(function(error) {
        console.error("Lỗi phát âm thanh duck.mp3:", error); // Thêm log lỗi
    });
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio("../sound/Swish1.mp3"); // Đường dẫn này ĐÚNG với cấu trúc thư mục của bạn
    audio.play().catch(function(error) {
        console.error("Lỗi phát âm thanh Swish1.mp3:", error); // Thêm log lỗi
    });
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n_text_gen = ""; // Đổi tên biến n để tránh xung đột với biến n toàn cục
    var text_content = "tai vi e xinh loi a :33";
    var a = Array.from(text_content);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 0; i < count; i++) { // Sửa vòng lặp, mảng bắt đầu từ 0
            if (a[i]) { // Kiểm tra xem a[i] có tồn tại không
                 n_text_gen = n_text_gen + a[i];
            } else {
                // Nếu gõ dài hơn text_content, có thể reset hoặc dừng lại
                // ở đây đang để cho nó không cộng thêm ký tự không xác định
            }
        }
        // Giới hạn độ dài của input bằng độ dài của text_content
        if (n_text_gen.length > text_content.length) {
             n_text_gen = text_content;
        }
    } else {
      n_text_gen = ""; // Nếu xóa hết input thì reset n_text_gen
    }

    // Chỉ cập nhật nếu giá trị mới khác giá trị cũ để tránh vòng lặp setTimeout vô hạn khi input trống
    if ($('#txtReason').val() !== n_text_gen) {
        $('#txtReason').val(n_text_gen);
    }
    
    // Nếu input đang được focus và có nội dung thì mới gọi lại setTimeout
    // Hoặc bạn có thể bỏ điều kiện này nếu muốn nó chạy liên tục khi có onmousemove
    if ($('#txtReason').is(':focus') && textVal.length > 0 && textVal.length <= text_content.length) {
        setTimeout(textGenerate, 50); // Tăng thời gian delay một chút
    } else if (textVal.length > text_content.length) {
        $('#txtReason').val(text_content); // Nếu gõ quá dài, đặt lại bằng text_content
    }
}


// show popup
$('#yes').click(function() {
    var audio = new Audio("../sound/tick.mp3"); // Đường dẫn này ĐÚNG với cấu trúc thư mục của bạn
    audio.play().catch(function(error) {
        console.error("Lỗi phát âm thanh tick.mp3:", error); // Thêm log lỗi
    });
    Swal.fire({
        title: '<span style="color: black;">mong e be tha loi cho anh</span>', // Đổi màu tiêu đề
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' oninput='textGenerate()' placeholder='Whyyy'>", // Đổi onmousemove thành oninput
        background: '#fff url("../img/iput-bg.jpg")', // Giữ nguyên đường dẫn ảnh
        backdrop: `
              rgba(0,0,123,0.4)
              url("../img/giphy2.gif") 
              left top
              no-repeat
            `, // Giữ nguyên đường dẫn ảnh
        showCancelButton: true,
        cancelButtonText: "Thôi ngại lém :<<",
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'okii <3'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Okiiiii lun <3',
                background: '#fff url("../img/iput-bg.jpg")', // Giữ nguyên đường dẫn ảnh
                title: '<span style="color: black;">anh iu be nhieu :3 </span>',
                html: '<span style="color: black;">toi nay vao sky voi anh nhaaanhaaa</span>',
                confirmButtonColor: '#7c2f36',
                onClose: () => {
                    window.location = 'http://fb.com';
                  }
            })
        }
    })
})