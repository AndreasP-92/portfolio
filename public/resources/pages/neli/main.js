
$(function(){
    var min_Antal_Tegn = true;
    $('input.clear, textarea').each(function(index,elm){
//         console.log(index)
        $(this)
        .data('default',$(this).val())
        .addClass('inactive')
        .focus(function(){
console.log( $(this).val() == $(this).data('default'))
            $(this).removeClass('inactive');
            $(this).next('span').remove();
            if($(this).val() == $(this).data('default') || $(this).val() == '') {
            $(this).val('')    
            }
        })
        .blur(function(){
            if($(this).val() == ''){
                $(this)
                .addClass('inactive')
                .val($(this).data('default'))
            }
            if($(this).attr('name') == 'email'){
                if(!isEmail($(this))){
                    $(this).addClass('error')
                    .after("<span class='error'> Insert a valid unicorn E-mail </span>")
                } else{
                    $(this)
                    .addClass('ok')
                    .removeClass('error')
                    .after("<span class='ok'> &radic;</span>")
                }
            }
        });
    })
    function isEmail(obj){
        if($.inArray("@",obj.val()) == -1  || $.inArray(".",obj.val())  ==  -1){
            return false;
        }else {
            return true
        }
    }
    function isCode(obj){
        if(obj.val().length <6 ){
            return false
        } else{
            return true
        }
    }
    function conf(obj){
        if(obj.val() !=$('#password').data('passval')){
            return false
        } else{
            return true
        }
    }
    $('form').submit(function(){
                     var error = false
                     $(this).find("text, :password, textarea").each(function(){
                            //Hvis feltet ikke indeholder noget tekst
                        if($(this).val().length == 0 ){
                            error = true
                            return false;
                            }
                        });
                    if(error){
                        return false;
                    }
                    alert("THANKS FOR YOUR MESSAGE")
                    return true;
                     })
});

$(function(){
    $('#cookies').on('click',function(){
        $(this).fadeOut(500);
    })
});


//BURGER MENU

$(function(){
    $('#burger').on('click',function(){
        $('#a1').toggleClass('show')
    })
});


//BOX MODEL

$(function(){
    var box     =   $('#box')
    var UL_elm      =   $('#img_preview')
    var LI_elm      =   $('#img_preview li')
    var IMG_elm     =   $('img_preview li p')
    
    UL_elm.css('position','absolute');
    
    var img_width   =   IMG_elm.outerWidth();
    var img_height  =   IMG_elm.outerHeight();
    
    console.log(LI_elm.outerWidth())
    
    box.css({'height':img_height+'px'});
    box.css({'width':img_width+'px'})
    
    var li_width    =   LI_elm.outerWidth();
    var li_number   =   LI_elm.length;
    var ul_length   =   li_number * li_width;
    var ul_width    =   ul_length+'px';
    UL_elm.css('width',ul_width);
    var speed       =   1000;
    var ani_style   =   "swing";
    
    $('.first').on('click',function(e){
        $("#img_preview").animate(
        {left:-li_width},
            {
            duration:speed,
            easing: ani_style,
            complete:function()
            {
                $("#img_preview").clearQueue();
                $('#img_preview li:last-child').after($('#img_preview li:first'));
                UL_elm.css('left',0);
            }
        }
        );return false;
    })
    // tilbage
$('.last').on('click',function(e){
    var q   =   $("#img_preview").queue('fx');
    // q indeholder en ref til køen
    if(q.toString() == ""){
        // hvis der ikke er trykket på knappen tilbage i forvejen
        //byt om på liste (img) element
        $('#img_preview li:first').before($('#img_preview li:last'));
        //placer element
        UL_elm.css('left',-LI_elm.outerWidth());
        
        $("#img_preview").animate(
    {left:'0px',top:'0px'},
    {
        duration:speed,
        easing:ani_style,
        complete:function(){
            $("#img_preview").clearQueue();
            //fjerner køen hvis der er nogen
            console.log("JEP")
        }
    }
    );
    }
    //animer element
    
    return false;
    })
})
