<!-- eslint-disable max-len -->
<template>
  <div class='text-white header'>
    <img :src="t('logo')" alt="TRTC" style='height: 100%'/>
    <div style='flex-direction: row;display: flex;justify-content: center;align-items: center'>
      <div id='language' @click='toggleLanguage'>中/En</div>
      <div class='github' @click="goToGithub">
        <svg aria-hidden='true' class='octicon octicon-mark-github v-align-middle' data-view-component='true'
             height='32' version='1.1' viewBox='0 0 16 16'
             width='32'>
          <path
            d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
            fill-rule='evenodd'></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useI18n } from 'vue-i18n';
import { getCurrentInstance } from 'vue';

const { proxy } : any = getCurrentInstance();
const { locale, t } = useI18n({ useScope: 'global' });

function toggleLanguage() {
  switch (locale.value) {
    case 'zh-cn':
      locale.value = 'en';
      localStorage.setItem('trtc-v5-quick-demo-vue3-ts', 'en');
      document.title = 'Quick demo Vue 3 | Tencent RTC';
      break;
    case 'en':
    default:
      locale.value = 'zh-cn';
      localStorage.setItem('trtc-v5-quick-demo-vue3-ts', 'zh-cn');
      document.title = 'Quick demo Vue 3 | TRTC 实时音视频';
      break;
  }
}

function goToGithub() {
  proxy.$aegis.reportEvent({
    name: 'jumpGithub',
    ext1: 'jumpGithub',
    ext2: 'webrtcQuickDemoVue3',
    // ext3: sdkAppId,
  });
  window.open('https://github.com/LiteAVSDK/TRTC_Web', '_blank');
}
</script>

<style lang="stylus" scoped>
.container
  padding 0
  width 100%

.header
  color white
  height 50px
  transparent 10%
  padding 10px 10px
  background-color #00182F
  display flex
  justify-content space-between

.content
  padding 20px 0;

.github
  color rgb(255, 255, 255)
  fill rgb(255, 255, 255)
  padding 10px

#language
  cursor pointer

</style>
