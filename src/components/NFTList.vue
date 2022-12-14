<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="nftID" label="编号" width="180" />
      <el-table-column prop="nftPic" label="图像" width="180" />
      <el-table-column prop="nftTitle" label="名称" width="180" />
      <el-table-column prop="nftNums" label="数量" width="180" />
      <el-table-column prop="nftProps" label="属性" />
      <el-table-column prop="nftSource" label="来源" />
      <el-table-column prop="nftMaterials" label="合成材料" />
      <el-table-column prop="activityNums" label="活动次数" />
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      :page-size="pageSize"
      :current-page="curPage"
      @current-change="curChange(e)"
      @prev-click="preBtn(e)"
      @next-click="nextBtn(e)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const NFTColumn = {};
const tableData = [
  {
    nftID: '#3029',
    nftTitle: '白鹿见·鹿在朝',
    nftNums: '215',
    nftProps: '珍藏',
    nftSource: '消费打榜空投',
    nftMaterials: [],
    activityNums: 26,
  },
  {
    nftID: '#3286',
    nftTitle: '齐天大圣·红莲业火',
    nftNums: '467',
    nftProps: '合成',
    nftSource: '首发售出',
    nftMaterials: ['齐天大圣·烈火真金', '齐天大圣·玉成其美'],
    activityNums: 26,
  },
  {
    nftID: '#7130',
    nftTitle: '刘备',
    nftNums: '289',
    nftProps: '合成',
    nftSource: '合成',
    nftMaterials: ['关羽', '张飞', '赵云', '黄忠', '马超'],
    activityNums: 26,
  },
];

const pageSize = ref(10);
const curPage = ref(1);
function curChange(e) {
  console.log('curChange', e);
}

function preBtn(e) {
  console.log('preBtn', e);
}

function nextBtn(e) {
  console.log('nextBtn', e);
}
</script>

<style></style>
