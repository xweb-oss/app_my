// 判断设备类型
export const judgeDeviceType = () => {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);
    return {
      isIOS,
      isAndroid,
    };
  };
  
  /**
   * 安卓获取到焦点元素滚动到可视区
   * @param {*} activeElement
   * @param {*} delay
   */
  export const activeElementScrollIntoView = (activeElement, delay) => {
    const editable = activeElement.getAttribute('contenteditable');
  
    // 输入框、textarea或富文本获取焦点后没有将该元素滚动到可视区
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || editable === '' || editable) {
      setTimeout(() => {
        activeElement.scrollIntoView();
      }, delay);
    }
  };
  
  /**
   * 监听输入框的软键盘弹起和收起事件
   * @param {*} $input
   */
  export const listenKeyboard = ($input) => {
    const { isIOS, isAndroid } = judgeDeviceType();
    if (isIOS) {
      $input.addEventListener('focus', () => {
        // console.log('IOS 键盘弹起');
      }, false);
  
      // IOS 键盘收起：IOS 点击输入框以外区域或点击收起按钮，输入框都会失去焦点，键盘会收起
      $input.addEventListener('blur', () => {
        // console.log('IOS 键盘收起');
        // 微信浏览器版本6.7.4+IOS12会出现键盘收起后，视图被顶上去了没有下来
        const wechatInfo = window.navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
        if (!wechatInfo) return;
  
        const wechatVersion = wechatInfo[1];
        const version = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
  
        if (+wechatVersion.replace(/\./g, '') >= 674 && +version[1] >= 12) {
          setTimeout(() => {
            window.scrollTo(0, Math.max(document.body.clientHeight, document.documentElement.clientHeight));
          });
        }
      }, false);
    }
  
    // Andriod 键盘收起：Andriod 键盘弹起或收起页面高度会发生变化，以此为依据获知键盘收起
    if (isAndroid) {
      let originHeight = document.documentElement.clientHeight || document.body.clientHeight;
  
      window.addEventListener('resize', () => {
        const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if (originHeight < resizeHeight) {
          // console.log('android 键盘收起了');
        } else {
          // console.log('android 键盘弹起了');
          // activeElementScrollIntoView($input, 500);
        }
        originHeight = resizeHeight;
      }, false);
    }
  };
  
  // 解决mint-ui的popup滑动穿透的问题
  export const touchController = (bool, $el) => {
    if (bool) {
      $el.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
    } else {
      $el.removeEventListener('touchmove', e => e.preventDefault(), { passive: false });
    }
  };
  