<template>
  <div class="home">
    <div class="month" ref="month"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$echarts.init(document.querySelector('.month')).setOption({
      title: { text: '季度统计' },
      tooltip: {},
      xAxis: {
        data: ['第一季', '第二季', '第三季', '第四季']
      },
      yAxis: {},
      series: [{
        name: '完成百分比',
        type: 'bar',
        data: [50, 20, 36, 90]
      }]
    })
  }
}
</script>

<style lang="less">
.home {
  .month {
    height: 5.26rem;
    width: 7.02rem;
    margin: 0 auto;
  }
}
</style>
