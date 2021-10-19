<template>
  <div>
    <h1>
      <el-radio-button>click</el-radio-button>
      <el-row>
        <el-col :span="24">24</el-col>
      </el-row>
      <!-- 一列占满 18 -->
      <el-row>
        <el-col :span="18">18</el-col>
      </el-row>
      <!--一行4列  -->
      <el-row>
        <el-col :span="6">6</el-col>
        <el-col :span="6">6</el-col>
        <el-col :span="6">6</el-col>
        <el-col :span="6">6</el-col>
      </el-row>

      <!-- 通过flex -->
      <el-row type="flex" justify="center">
        <el-col :span="3">6</el-col>
        <el-col :span="3">6</el-col>
        <el-col :span="3">6</el-col>
      </el-row>

        <el-row type="flex" justify="center">
        <el-col :span="3" :offset="2">6</el-col>
        <el-col :span="3">6</el-col>
        <el-col :span="3">6</el-col>
      </el-row>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-row {
  background-color: aquamarine;
  color: white;
  margin: 20px 0;
}
.el-col {
  background-color: rgb(184, 122, 184);
  border: 1px solid white;
  box-sizing: border-box;
}
</style>
