/*手机号码 */
function istelephone(str) {
	var reg= /^1[3456789]\d{9}$/;
	return reg.test(str);
}
 
 /*密码 */
 function ispass(str) {
     var reg=/^[\w@#*]{1,6}$/;   
     return reg.test(str);     
 }
 //onblur事件
 function Onblur(id_,verify){
    id_.onblur=function(){
        if(verify(id_.value)){
             this.style.border = '1px solid green';
        }else{
           this.style.border = '1px solid red';
        }
    }
 }

 export {istelephone,ispass,Onblur};