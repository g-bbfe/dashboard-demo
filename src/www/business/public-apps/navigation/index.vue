<template>
  <div class="app-style">
    <el-row class="top-nav">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark top-menu">
        </div>
      </el-col>
    </el-row>
  <div class="main">
      <div class="main-menu">
        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu class="small-menu" index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </div>
      <div class="main-content">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
  import 'static/styles/main.css';

  export default {
    name: 'Layout',
    data () {
      return {
        isCollapse: true
      };
    },
    methods: {
      // menu
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style scope>
  .fade-enter-active, .fade-leave-active {
    transition : opacity .5s;

    & .hot {
      background : red;
    }
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
