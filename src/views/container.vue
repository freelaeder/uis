<template>
  <div>
    <el-container>
      <!-- 此时没有合并在一起 -->
      <el-header>header</el-header>
      <el-aside>aside</el-aside>
      <el-main>main</el-main>
      <el-footer>footer</el-footer>
    </el-container>
    <!-- 加入container -->
<hr>
<hr>
    <el-container>
      <el-header>header</el-header>

      <el-container>  
        <el-aside>aside</el-aside>
        <el-main>main</el-main>
      </el-container>

      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.el-container {
  .el-header {
    background: red;
    height: 100px;
    line-height: 50px;
  }
  .el-footer {
    background: aqua;
  }
  .el-aside {
    background: pink;
    height: 300px;
  }
  .el-main {
    background: gold;
  }
}
</style>
