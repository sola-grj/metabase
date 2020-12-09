/*
 * @Author: Dongge
 * @Date: 2019-10-14 15:06:00
 * @LastEditTime: 2019-10-15 15:37:55
 * @Description: file content
 */
var __index = 0;
var __title = '自助分析平台';

var titleMessage = window.setInterval(function () {
    __index++;
    initHtml();
}, 10);

function initHtml(index) {

    if (index > 100) {
        // 去除定时器
        window.clearInterval(titleMessage);
        document.getElementById('root').style.visibility = 'visible';
    }

    if (document.title.indexOf('Meta') > -1) {
        document.title = __title;

        var _class = document.getElementById('root').children[0].getAttribute('class');

        if (_class == 'relative spread flex flex-column') {
            if(typeof(document.form) == 'undefined'){

            }else{
                if(document.form.children.length > 0 ){
                    document.form.children[0].innerHTML = '';
                    document.getElementsByTagName('section')[0].style.height = "100%";
                    document.getElementsByTagName('section')[0].innerHTML = '<div style="width:100%;height:100%;background:#f1f6f8;"></div>';

                    document.getElementsByName('username')[0].setAttribute('placeholder', '邮箱');
                    $("input[name='username']").parent("div").find('label').html("");
                    $("input[name='username']").css({"background":"url(app/custom_img/user.png) no-repeat","background-position":"5px","text-indent":"25px"})
                    $("input[name='username']").parent("div").css({"margin-bottom":"40px"});
                    document.getElementsByName('password')[0].setAttribute('placeholder', '密码');
                    $("input[name='password']").parent("div").find('label').html("");
                    $("input[name='password']").css({"background":"url(app/custom_img/password.png) no-repeat","background-position":"5px","text-indent":"25px"});
                    $('#root').find(".Login-wrapper").css({"height":"450px","width":"914px","margin":"0","max-width":"100%","box-sizing":"border-box","padding":"0"});


                    $('.Login-wrapper').children("div:first").css({"background":"#509ee3","flex":"0 0 56%","height":"100%","box-shadow":"0 2px 2px rgba(0, 0, 0, .30)"})
                    $('.Login-wrapper').children("div:last").css({"flex":"0 0 44%","height":"100%"})
                    $('.Login-wrapper').children("div:last").find("form").css({"height":"100%","border-radius":"0","background":"#eef2f8"})
                    $('form').children("div").css({"margin-top":"20px"});
                    if($('#forget_password').length==0){
                        $('form').children("div").append($('<div style="color:rgb(218, 218, 218);font-size:12px;text-align:center;margin-top:10px;" id="forget_password">忘记密码请联系系统管理员<div>'))
                    }
                    $('.Login-header').text("用户登录").css({"font-size":"24px","color":"#aeaeae","text-align":"center","margin-top":"20px"});
                    document.getElementById('root').children[0].children[0].children[0].children[0].innerHTML = '<img id="img-logo" src="app/custom_img/left.png">';
                    // document.getElementsByClassName('Form-label Form-offset')[0].style.fontSize = '16px';
                    // document.getElementsByClassName('Form-label Form-offset')[1].style.fontSize = '16px';
                    document.getElementsByName('username')[0].style.fontSize = '14px';
                    document.getElementsByName('password')[0].style.fontSize = '14px';
                    document.form.children[1].children[4].innerHTML = '<button class="Button sc-htpNat KtFsv " style="margin-top:30px;width:100%;color:white;background:#509ee3;text-align:center;font-size:16px"><div class="flex layout-centered">登     录</div></button>';
                    document.getElementById('root').style.visibility = 'visible';
                }
            }
        }

        if (_class == 'relative') {
            if (document.getElementById('root').children[0].children[0].children[1] != null) {
                var _width = document.getElementById('root').offsetWidth - 700;
                //document.getElementById('root').children[0].children[0].children[1].children[0].style.marginLeft = '300px';
                //document.getElementById('root').children[0].children[0].children[1].children[0].style.width = _width + 'px';
                $("#root").find("input").attr("placeholder","");
                $("#root").find("input").parent("div").css({"flex-grow":'1',"max-width":"100%"})
                //document.getElementById('root').children[0].children[0].children[1].children[0].children[0].children[1].setAttribute('placeholder', '');
                document.getElementById('root').children[0].children[0].children[0].innerHTML = '<img src="app/custom_img/custom_home.png" width="300px" height="48px"/>';
                var aHtml ='<a id="zzjm" target="_blank" class="flex align-center rounded transition-background " style="margin-right:16px" href="http://10.126.2.209:8089/home/main"><svg class="Icon Icon-bolt flex-no-shrink text-white Icon-cxuQhR kTAgZA" viewBox="0 0 32 32" width="20" height="20" fill="currentcolor"><path d="M21.697 0L8 16.809l7.549 2.538L11.687 32l12.652-16.6-7.695-2.317z"></path></svg><h4 class="hide sm-show ml1 text-nowrap">自助建模</h4></a>'
						if($('#zzjm').length == 0 ){
								$('#root').find('.Nav').find('div').eq(1).prepend(aHtml)
            }
            }
        }
    }
}

$(function () {
    var visibleDiv = window.setInterval(function () {
        var _class = document.getElementById('root').children[0].getAttribute('class');

        if (_class == 'relative spread flex flex-column') {
            if ($('svg').length > 1) {
                __index++;
                if(__index > 500){
                    document.getElementById('root').style.visibility = 'visible';
                    window.clearInterval(visibleDiv);
                }
            } else {
                document.getElementById('root').style.visibility = 'visible';
                window.clearInterval(visibleDiv);
            }
        } else {
            document.getElementById('root').style.visibility = 'visible';
            window.clearInterval(visibleDiv);
        }
    }, 500);


});

$(window).resize(function () {
    var _class = document.getElementById('root').children[0].getAttribute('class');
    if (_class == 'relative') {
        if (document.getElementById('root').children[0].children[0].children[1] != null) {
            var _width = document.getElementById('root').offsetWidth - 700;
            //document.getElementById('root').children[0].children[0].children[1].children[0].style.marginLeft = '300px';
            //document.getElementById('root').children[0].children[0].children[1].children[0].style.width = _width + 'px';
            $("#root").find("input").attr("placeholder","");
            $("#root").find("input").parent("div").css({"flex-grow":'1',"max-width":"100%"});
            document.getElementById('root').children[0].children[0].children[0].innerHTML = '<img src="app/custom_img/custom_home.png" width="300px" height="48px"/>';
        }
    }
});
