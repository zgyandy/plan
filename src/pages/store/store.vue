<template>
  <div class="store">
    <ul class="list">
      <li @click.self = 'add' class="add">减</li>
      <li>{{$store.state.test}}</li>&nbsp;&nbsp;
      <li>{{$store.getters.testFilter}}</li>
      <li @click.self = 'sub' class="sub">加</li>
    </ul>
    <div class="mapGetters">{{testFilter}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  methods: {
    add () {
      this.$store.dispatch('TEST')
    },
    sub () {
      this.$store.dispatch('TEST', true)
    }
  },
  computed: {
    ...mapGetters(['testFilter'])
  }
}
</script>

<style lang="less" scoped>
  .store {
    .list {
      height: .50rem;
      width: 100%;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      align-items: center;
      li {
        width: .6rem;
        text-align: center;
        line-height: .5rem;
        font-size: .26rem;
        user-select: none;
      }
      .add, .sub {
        color: #fff;
        width: .8rem;
        cursor: pointer;
      }
      .add {
        background: green;
      }
      .sub {
        background: red;
      }
    }
    .mapGetters {
      text-align: center;
    }
  }
</style>
