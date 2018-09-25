<template>
  <div class="navbar layout">
    <dl class="layoutContent">
      <dd class="iconfont icon-31fanhui1 pointer"></dd>
      <dd>{{title}}</dd>
      <dd>
        <router-link tag="span" to="/" class="icon-31shouyexuanzhong iconfont"></router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '首页'
    }
  }
}
</script>

<style lang="less" scoped>
  .navbar {
    height: .8rem;
    background: gray;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    dl {
      height: 0.8rem;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      font-size: .3rem;
      color: #fff;
      .iconfont {
        color: #fff;
        font-size: .36rem;
      }
    }
  }
</style>
