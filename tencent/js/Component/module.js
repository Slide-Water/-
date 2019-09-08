function click(li_, show) {
  li_.click(function () {
    var idx = $(this).index();
    sessionStorage.setItem("index", idx)
    $(this).addClass('active').siblings().removeClass('active');
    show.eq(idx).addClass('show').siblings().removeClass('show');
  })
}


//图片
function img_send(id_, imgId, date) {
  layui.use('upload', function () {
    var $ = layui.jquery
      , upload = layui.upload;
    //普通图片上传
    var uploadInst = upload.render({
      elem: id_ //绑定元素
      , auto: false
      , bindAction: '#cr'
      , choose: function (obj) {
        //预读本地文件示例，不支持ie8
        obj.preview(function (index, file, result) {    //在当前ID为“demo2”的区域显示图片
          layui.use(['jquery', 'layer'], function () {
            var $ = layui.$ //重点处
              , layer = layui.layer;
            $(imgId).attr('src', result)
          });
        });
      }
      , done: function (res) {
        //上传完毕回调
        if (res.code > 0) {
          return layer.msg('上传失败');
        } else {
          return layer.msg('上传成功');
        }
      }
      , error: function () {
        //请求异常回调
      }
    });
  })
}

//拖拽上传
function tuo_img(url) {
  layui.use('upload', function () {
   var upload = layui.upload;
    upload.render({
      elem: "#test10"
      ,url: url
      ,done: function(res){
        console.log(res)
      }
    });  
  });
}

//文件上传
function file_send() {
  layui.use('upload', function () {
    upload.render({
      elem: '#test4'
      , url: '/upload/'
      , accept: 'file' //普通文件
      , done: function (res) {
        console.log(res)
      }
    });
  });
}

//日期
function date(id_) {
  layui.use('laydate', function () {
    var laydate = layui.laydate;
    //日期
    laydate.render({
      elem: id_,
      trigger: 'click'
    });
  })
}

//省市联动
function get_address_json(obj_val, empty_obj, call_back) {
  $.getJSON('http://132.232.6.121:8000/user/get_address/', { 'parent_id': obj_val }, function (response_data) {
    empty_obj.empty();
    $.each(response_data.data, function (index, item) {
      empty_obj.append('<option value="' + item.id + '">' + item.name + '</option>')
    });
    if (call_back != undefined) {
      call_back()
    }
  })
}


//下拉框

function form() {
  layui.use(['form', 'layedit', 'laydate',"jquery"], function () {
    var form = layui.form
    var $ = layui.$
    form.render();
    form.on('select(name=quiz1)', function (data) {
      console.log(data)
    })
    
    form.on('select(cooperation)',function(data){
      console.log($('.t-tmt')[0])

      if(data.value == 1){
          $($('.t-person')[0]).html('<div class="left ib"><span>工人数量</span></div><div class="right-txt"><input type="text" placeholder="与职业.技能或行业相关的关键词"></div>')
          $($('.t-facility')[0]).html('<div class="left ib"><span>设备数量</span> </div><div class="right-txt"><input type="text" placeholder="与职业.技能或行业相关的关键词"></div>')
      }else{
          $($('.t-person')[0]).html('')
          $($('.t-facility')[0]).html('')
      }

    })
      get_address_json(0, $('select[name="city1"]'), function () {
          $('select[name="city2"]').change()
          form.render();
      })
      form.on('select(test1)', function (data) {
         get_address_json(data.value, $('select[name=city2]'), function () {
        $('select[name=city2]').change()
        form.render();
      })  
    })
      form.on('select(test2)', function (data) {
        get_address_json(data.value, $('select[name=city3]'), function () {
          $('select[name=city3]').change()
          form.render();
        })  
     })    
  });
}



export { img_send, tuo_img, file_send, date, form, click,get_address_json };