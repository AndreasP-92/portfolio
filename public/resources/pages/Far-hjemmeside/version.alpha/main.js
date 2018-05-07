                                //BILLEDVISNING 01
$(function(){
    var box     =   $('#box1')
    var UL_elm      =   $('#img_preview1')
    var LI_elm      =   $('#img_preview1 li')
    var IMG_elm     =   $('img_preview1 li img')
    
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
    
    $('.first1').on('click',function(e){
        $("#img_preview1").animate(
        {left:-li_width},
            {
            duration:speed,
            easing: ani_style,
            complete:function()
            {
                $("#img_preview1").clearQueue();
                $('#img_preview1 li:last-child').after($('#img_preview1 li:first'));
                UL_elm.css('left',0);
            }
        }
        );return false;
    })
    // tilbage
$('.last1').on('click',function(e){
    var q   =   $("#img_preview1").queue('fx');
    // q indeholder en ref til køen
    if(q.toString() == ""){
        // hvis der ikke er trykket på knappen tilbage i forvejen
        //byt om på liste (img) element
        $('#img_preview1 li:first').before($('#img_preview1 li:last'));
        //placer element
        UL_elm.css('left',-LI_elm.outerWidth());
        
        $("#img_preview1").animate(
    {left:'0px',top:'0px'},
    {
        duration:speed,
        easing:ani_style,
        complete:function(){
            $("#img_preview1").clearQueue();
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





                            //BILLEDVISNING 02
$(function(){
    var box     =   $('#box')
    var UL_elm      =   $('#img_preview')
    var LI_elm      =   $('#img_preview li')
    var IMG_elm     =   $('img_preview li img')
    
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
