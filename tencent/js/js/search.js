import { myPutAjax , getAjax ,myPutAjax_415} from "../Component/ajax.js";

$(function(){
    $('#head').load('./head.html')
    $('#footer').load('./footer.html')
    var role = sessionStorage.role;
    var search_text = sessionStorage.search;
    var page = 1;
    //工人搜建筑商
    if(role == 0){
        console.log('ok0')
        $('.search-list').eq(1).remove()
        $('.search-list').eq(0).html('<div class="search-neir tit"><ul><li>建筑商</li><li>性别</li><li>学历</li><li>工作年限</li><li>工种</li><li>薪水类型</li><li>期望薪水</li><li>更新时间</li><li>更多详情</li></ul></div>')
        myPutAjax('GET',"builder/home_page_builder_search/",{
            search:search_text,
            page:page
        },worker)

        function worker(res){
            data_0(res[0].data.results)
            //
            $('.click_2').click(function(){
                sessionStorage.setItem('build',this.getAttribute("developers_info_id"))
            })
        }
    }
    //建筑商搜索工人和开发商
    else if(role == 1){
        $('.search-list').eq(0).html('<div class="search-neir tit"><ul><li>工人</li><li>性别</li><li>学历</li><li>工作年限</li><li>工种</li><li>薪水类型</li><li>期望薪水</li><li>更新时间</li><li>更多详情</li></ul></div>')
        $('.search-list').eq(1).html('<div class="search-neir tit"><ul><li>开发商</li><li>性别</li><li>学历</li><li>工作年限</li><li>工种</li><li>薪水类型</li><li>期望薪水</li><li>更新时间</li><li>更多详情</li></ul></div>')
        console.log('ok1')
         
        //搜工人
        myPutAjax('GET',"workman/WorkmanSearchPageFilter/",{
            search:search_text,
            page:page
            },builder)

        function builder(res){
           data_1(res[0].data.results)
           //
           $('.click_').click(function(){
            sessionStorage.setItem('workman',this.getAttribute("developers_info_id"))
        })

       }
        //搜开发商
        myPutAjax('GET',"developers/home_page_developers_search/",{
            search:search_text,
            page:page
        },builder_1)

        function builder_1(res){
            data_0(res[0].data.results)
            //
            $('.click_2').click(function(){ 
                sessionStorage.setItem('developers',this.getAttribute("developers_info_id"))
            })
        }
    }

    //开发商搜建筑商
    else if(role == 2){
        $('.search-list').eq(1).remove()
        $('.search-list').eq(0).html('<div class="search-neir tit"><ul><li>建筑商</li><li>性别</li><li>学历</li><li>工作年限</li><li>工种</li><li>薪水类型</li><li>期望薪水</li><li>更新时间</li><li>更多详情</li></ul></div>')
        
        //搜建筑商
        myPutAjax('GET',"builder/home_page_builder_search/",{
            search:search_text,
            page:page
        },developers)
        
        function developers(res){
            data_0(res[0].data.results)
            console.log(res)
            $('.click_2').click(function(){
                sessionStorage.setItem('build',this.getAttribute("developers_info_id"))
            })
        }
    }
    else if(!role){
        $('.search-list').eq(1).remove();
        $('.search-list').eq(0).html('<div class="power"><p>您还没有登录</p><a href="./login.html">请登录</a></div>')
    }
})


////建筑商搜索工人和开发商 拼接
function data_1(data_1){
    var str_1 = '';
    for(var j = 0; j < data_1.length;j++){
        str_1 += ` 
        <div class="search-neir">
        <ul>
            <li>${data_1[j].name}</li>
            <li>${data_1[j].sex}</li>
            <li>${data_1[j].cur_state}</li>
            <li>${data_1[j].date_of_birth}</li>
            <li>${data_1[j].type_of_work}</li>
            <li>${data_1[j].exp_type}</li>
            <li>${data_1[j].exp_type}</li>
            <li>${data_1[j].exp_salary}</li>
            <li><a href="resume_details.html" class='click_' developers_info_id =${data_1[j].id}>详情>></a></li>
        </ul>
    </div>  
        `
    }
    $('.tit').eq(0).after(str_1);

}

//工人 开发商搜建筑商  拼接
function data_0(data_1){
    let str_0 = '';
    for(var i = 0; i < data_1.length;i++){
        str_0 += ` 
        <div class="search-neir">
        <ul>
            <li>${data_1[i].com_name}</li>
            <li>${data_1[i].address_area}</li>
            <li>${data_1[i].com_scale}</li>
            <li>${data_1[i].certificate_description}</li>
            <li>${data_1[i].com_address}</li>
            <li>${data_1[i].com_profile}</li>
            <li>${data_1[i].register_time}</li>
            <li>${data_1[i].legal_rep}</li>
            <li><a href="firm_details.html" developers_info_id =${data_1[i].id} class = 'click_2'>详情>></a></li>
        </ul>
    </div>  
        `
    }
    $('.tit').after(str_0);
}




$('.click_').click(function(){
    console.log(this.getAttribute("developers_info_id"))
    myPutAjax_415('post',"builder/dev_browsing_history_builder_info/",{builder_info_id:this.getAttribute("developers_info_id")},builder)
    function builder(res){
        sessionStorage.setItem('developers_info',res[0].data.builder_info.id)
    }
})