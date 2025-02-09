/*
 * @Description: 通用函数
 * @Date: 2022-03-10 15:17:05
 * @LastEditTime: 2022-03-29 15:20:26
 */

/**
 * 从 window.location.href 中获取指定key的value
 * @param {*} key 要获取的 key
 * @returns window.location.href 中指定key对应的value
 * @example
 * const value = getUrlParam(key);
 */
export function getUrlParam(key) {
  const url = decodeURI(window.location.href.replace(/^[^?]*\?/, ''));
  const regexp = new RegExp(`(^|&)${key}=([^&#]*)(&|$|)`, 'i');
  const paramMatch = url.match(regexp);

  return paramMatch ? paramMatch[2] : null;
}

export function clearUrlParam() {
  location.href = location.href.slice(0, location.href.indexOf('?') > 0 ? location.href.indexOf('?') : location.href.length);
}

export function isUndefined(value) {
  return value === 'undefined';
}

/**
 * 获取语言
 * @returns language
 */
export function getLanguage(localStorageLangId = 'trtc-v5-quick-demo-vue2-js') {
  let lang = getUrlParam('lang') || localStorage.getItem(localStorageLangId) || window.navigator.language?.toLowerCase();
  lang = lang.indexOf('zh') > -1 ? 'zh-cn' : 'en';
  return lang;
}

/**
 * 当前浏览器是否为移动端浏览器
 */
export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
