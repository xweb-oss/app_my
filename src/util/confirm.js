
import { MessageBox, Loadmore, Toast, Popup, Indicator } from 'mint-ui';

export const mesBox=(val,path,_this)=>{
    // this只能是指向vue事例的this
    MessageBox.confirm('', {
        title: '提示',
        message: val,    // val接收的参数
        confirmButtonText: '确认',
        cancelButtonText: '取消'
    }).then(action => {
        // debugger;
        console.log(this)
        console.log(23);
        if (action == 'confirm') {
            console.log('点击确认');
            _this.$router.push(path);
        }
    }).catch(error => {
        if (error == 'cancel') {
            console.log(6666)
            console.log('点击取消');
        }
    });
}

export function showtoast(val,pos,dur){
    return Toast({
        message:val,
        position: pos,
        duration: dur,
        className: 'toasts'
    });
}
// export const showToast = (message, position = 'center', className = 'toast-primary') => {
//     Toast({
//       message,
//       position,
//       className,
//       duration: 2500,
//     });
//   };