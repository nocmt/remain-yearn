$(document).ready(function () {
    // 判断登录按钮可否点击--第一种方式
    // $("#input-key").on("change", function () {
    //     let key = $(this).val();
    //     console.log(key);
    //     if (key) {
    //         $("#btn-login").toggleClass("btn-off").removeAttr("disabled");
    //     } else {
    //         $("#btn-login").toggleClass("btn-off").attr("disabled", "true");
    //     }
    // });
    // 判断登录按钮可否点击--第二种方式
    $("#input-key").on("keyup", function () {
        let key = $(this).val();
        // console.log(key);
        if (key) {
            $("#btn-login").removeClass("btn-off").removeAttr("disabled");
        } else {
            $("#btn-login").addClass("btn-off").attr("disabled", "true");
        }
    });

    // 登录事件
    function sendkey() {
        // 此处应该有Ajax事件
        alert('登录成功！');
    }

    // 登录回车事件
    $(window).keydown(function (event) {
        if (event.keyCode === 13) {
            let key = $("#input-key").val();
            if (key) {
                sendkey();
            } else {
                alert('口令不能为空！请重新填写！')
            }
        }
    });

    $("#btn-login").on("click", function () {
        sendkey();
    });
});