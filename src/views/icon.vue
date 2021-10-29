<template>
  <div>
    <i class="el-icon-edit"></i>
    <el-button class="el-icon-search">搜索</el-button>
    <i class="el-icon-delete"></i>
    <i class="el-icon-loading"></i>
    <el-button round type="info">信息按钮</el-button>
    <el-button circle type="danger">圆</el-button>
    <el-link type="warning">警告连接</el-link>
    <el-link type="success" href="https://www.freelaeder.cn">跳转连接</el-link>
    <!-- 禁用状态 -->
    <el-link disabled type="info">禁用连接</el-link>
    <!-- 下划线 -->
    <div>
      <el-link>有下划线</el-link>
      <el-link :underline="false"> 无划线</el-link>
    </div>
    <!-- 图标 -->
    <div>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link type="info"
        >查看<i class="el-icon-view" el-icon-right></i
      ></el-link>
    </div>
    <!-- button -->
    <el-row>
      <el-button type="primary">按钮</el-button>
      <el-button type="danger">按钮</el-button>
      <el-button type="warning">按钮</el-button>
      <el-button type="success">按钮</el-button>
      <el-button type="info">按钮</el-button>
    </el-row>
    <br />
    <!-- 楼空效果  plain -->
    <el-row>
      <el-button type="primary" plain>按钮</el-button>
      <el-button type="danger" plain>按钮</el-button>
      <el-button type="warning" plain>按钮</el-button>
      <el-button type="success" plain>按钮</el-button>
      <el-button type="info" plain>按钮</el-button>
    </el-row>
    <!-- 椭圆效果 round -->
    <br />
    <el-row>
      <el-button type="primary" round plain> 按钮</el-button>
      <el-button type="danger" round>按钮</el-button>
      <el-button type="warning" round>按钮</el-button>
      <el-button type="success" round>按钮</el-button>
      <el-button type="info" round>按钮</el-button>
    </el-row>
    <br />
    <el-button circle class="el-icon-user"></el-button>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
.el-icon-edit {
  font-size: 30px;
  color: blue;
}
</style>
