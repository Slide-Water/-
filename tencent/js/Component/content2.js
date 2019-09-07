var dstr1=` <form id='form_data' method='post' enctype='multipart/form-data'> <div class="mess">
<div class="mess-nav">
  <span>1.基本信息</span>
  <span
    >团队资料对用户公开，注册成功后，信息将不可更改，请如实填写。</span
  >
</div>
<div class="mess-content">
  <div class="mess-left">
    <div class="mess-left-top">
      <div>
        <label for="">团队/企业名称</label><span>*</span
        ><input type="text" placeholder="请输入团队名称" class="com_name"/>
      </div>
      <div>
        <label for="">注册日期</label><span>*</span
        ><input type="text" class="register_time" />
      </div>
      <div>
          <label for="">营业执照号</label><span>*</span
          ><input type="text" class="business_license" />
        </div>
        <div>
            <label for="">联系电话</label><span>*</span
            ><input type="text" class="telephone"/>
          </div>
      <div>
          <label for="">公司规模</label><span>*</span>
          <select class="com_scale">
            <option value="0">小于20人</option>
            <option value="1">20-99人</option>
            <option value="2">100-499人</option>
            <option value="3">500-999人</option>
            <option value="3">1000人以上</option>
          </select>
        </div>
    </div>
    <div class="mess-left-bottom">
      <div>
        <div class="sect">
          <label for="">办公地点</label><span>*</span>
        </div>
        <div class="sect1">
          <select name="provence">
          </select>
          <select name="area">
          </select>
          <select name="city" class="address_area_id" id="cityId">
          </select>
        </div>
      </div>
      <div><textarea placeholder="具体地址" class="com_address"></textarea></div>
      <div class="apt-check">
        <div class="intro-ab">
            <label for="">资质说明</label><span>*</span
            ><textarea class="certificate_description"></textarea>
          </div>
          <div class="intro-ab">
          <label for="">公司简介</label><span>*</span
          ><textarea class="com_profile"></textarea>
        </div>
      </div>
    </div>
  </div>
  <div class="mess-blank"></div>
  <div class="mess-right">
    <div>
      <div class="sumit1">
        <label for="">资质图片</label><span>*</span>
      </div>
      <div class="layui-upload pic-give">
      <div class="find-this">
        <div class="layui-upload-list" id="test1">
          <img class="layui-upload-img" id="demo1">
        </div>
        </div>
      </div>
    </div>
    <div>
        <div class="sumit1">
          <label for="">LOGO图片</label><span>*</span>
        </div>
        <div class="layui-upload pic-give">
          <div class="layui-upload-list" id="test4">
            <img class="layui-upload-img" id="demo4">
          </div>
        </div>
      </div>
      <div>
          <div class="sumit1">
            <label for="">营业执照</label><span>*</span>
          </div>
          <div class="layui-upload pic-give">
            <div class="layui-upload-list" id="test5">
              <img class="layui-upload-img" id="demo5">
            </div>
          </div>
        </div>
  </div>
</div>
</div>
<!-- 负责人认证 -->
<div class="approve">
<div class="approve-nav">
  <span>2.法人代表</span>
</div>
<!-- 头部以下 -->
<div class="approve-content">
  <div class="approve-pub">
    <div class="toib">
      <div class="toib">
        <div class="toib title-wh">
          <label for="">真实姓名</label><span>*</span>
        </div>
      </div>
      <input type="text" class="legal_rep" />
    </div>
  </div>
  <div class="approve-pub id-card-3">
    <div class="toib">
      <div class="toib title-wh">
        <label for="">身份证号</label><span>*</span>
      </div>
      <input type="text" class="legal_rep_id" />
    </div>
  </div>
  <div class="approve-pub">
    <div>
      <div class="toib title-wh send-id">
        <label for="">上传手持身份证明</label><span>*</span>
      </div>
    </div>
    <div class="id-card-box">
    <div class="id-card  id-card1">
      <!-- 上传身份证明 -->
      <div class="layui-upload send-myhead">
          <button type="button" class="layui-btn" id="test2">
              <span>请上传手持身份证正面照</span></button>
          <img class="layui-upload-img" id="demo2">  
    </div>
    </div>
    <div class="id-card  id-card2">
        <div class="layui-upload send-myhead">
            <button type="button" class="layui-btn" id="test3">
                <span>请上传手持身份证正面照</span></button>
            <img class="layui-upload-img" id="demo3">  
      </div>
    </div>
  </div>
  </div>
</div>
</div>
<!-- 确认提交 -->
<div>
<input type="button" value="确认提交" class="btn-mess" id='create'/>
</div>
</form>`
//发布任务
var dstr2=`<form id='form_data2' method='post' enctype='multipart/form-data'>
<div class="part2">
<div class="part3-left">
  <div class="pro-nav">
    <span>1.发布项目</span>
    <span class="issue"
      >全国<span>14771</span>名专业工程师和<span>569</span>家企业/团队为您服务</span
    >
  </div>
  <!-- 发布任务具体内容 -->
  <div>
    <p class="ineed give-time">
      <label for="">项目名称<span>*</span></label>
      <input type="text" class="project_name">
      <label for="">项目简介<span>*</span></label>
      <input type="text" class="project_profile">
    </p>
    <p class="give-time">
      <label for="">工程地址<span>*</span></label>
      <input type="text" class="engineering_address"/>
      <label for="">合同金额<span>*</span></label>
      <input type="text" class="contract_amount"/>
    </p>
    <p class="give-time">
    <label for="">建筑公司资质<span>*</span></label>
    <input type="text" class="building_certificate"/>
   </p>
    <p class="type-check project_state">
      <label for="">项目状态</label>
      <input type="radio" name="group" value="0"/>暂未开工
      <input type="radio" name="group" value="1"/>正在建设
    </p>
    <p class="give-time">
        <label for="">工程类型<span>*</span></label>
        <select class="project_type_id">
            <option value="0">土木工程</option>
            <option value="1">市政工程</option>
            <option value="2">铁路/公路工程</option>
            <option value="3">水利工程</option>
            <option value="4">农业工程</option>
          </select>
      </p>
    <div>
      <input
        type="button"
        value="确认提交"
        class="btn-mess btn-mess2"
      />
    </div>
  </div>
</div>
<div>
  <div class="part3-right1">
    <img src="../../image/logo与图片素材/logo (1).png" alt="">
    <p>认证企业</p>
    <p>北京嘉富润工程管理有限公司</p>
  </div>
  <div class="part3-right2">
    <div class="contact-comp1">
      <div>
        <h3>联系客服</h3>
        <p>联系平台客服免费咨询相关内容</p>
      </div>
      <div>
        <div class="toib">x</div>
        <div class="toib">
          <p>409938200</p>
          <p>（8：30-17：30）</p>
        </div>
      </div>
      <div>
          <div class="toib">x</div>
          <div class="toib">
            <p>15313187185</p>
            <p>（8：00-20：00）</p>
          </div>
      </div>
    </div>
  </div>
</div>
</div></form>`;
//我的项目
var dstr3=`<div class="part3">
<div class="part3-left">
  <div class="pro-nav pro_top">
    <span>1.已发布项目</span>
  </div>
  <div class="sc-cont">
  <div class="sc-title">
      <div class="sc-bh">
          <p>项目编号</p>
      </div>
      <div class="sc-j">
          <div class="d-flex justify-content-around">
              <p>公司名称</p>
              <p>工程类型</p>
              <p>工程地址</p>
              <p>合同金额</p>
              <p>项目状态</p>
          </div>
      </div>
      <div class="sc-xg">
          <span>查看</span>
          <span>更新</span>
      </div>
  </div>
</div>
<div class="sc-content">
  <div class="sc-c1">
  </div>
</div>
<div class="sc-foot d-flex justify-content-between align-items-center">
  <div class="sc-left">
      <label><input name="all" type="checkbox" value="" class="all" />全选</label>
  </div>
</div>
<div id="demo0"></div>
  <!-- 我的项目的具体内容 -->
  <div class="pro-nav collect">
    <span>2.收藏建筑商</span>
  </div>
        <div class="sc-cont">
                    <div class="sc-title">
                        <div class="sc-bh">
                            <p>项目编号</p>
                        </div>
                        <div class="sc-j">
                            <div class="d-flex justify-content-around">
                                <p>公司名称</p>
                                <p>项目名称</p>
                                <p>工程类型</p>
                                <p>单位资质</p>
                                <p>合同金额</p>
                            </div>
                        </div>
                        <div class="sc-xg">
                            <a href="javascricp:void(0)">查看</a>
                            <a href="javascricp:void(0)">更新</a>
                        </div>
                    </div>
                </div>
                <div class="sc-content">
                    <div class="sc-c2">
                     
                    </div>
                </div>
                <div class="sc-foot d-flex justify-content-between align-items-center">
                    <div class="sc-left">
                        <label><input name="all" type="checkbox" value="" class="all" />全选</label>
                    </div>
                </div>
                <div id="demo6"></div>
</div>
<div>
  <div class="part3-right1">
    <img src="../../image/logo与图片素材/logo (1).png" alt="">
    <p>认证企业</p>
    <p>北京嘉富润工程管理有限公司</p>
  </div>
</div>
</div>
</form>`;
export{dstr1,dstr2,dstr3};