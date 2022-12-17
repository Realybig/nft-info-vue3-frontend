<template>
  <div>
    <div class="nft-list">
      <!-- 数据表格 -->
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="nftID" label="编号" width="180" />
        <el-table-column prop="nftPic" label="图像" width="180" />
        <el-table-column prop="nftName" label="名称" width="180" />
        <el-table-column prop="nftQuantity" label="数量" width="180" />
        <el-table-column prop="nftAttribute" label="属性" />
        <el-table-column prop="nftSource" label="来源" />
        <el-table-column prop="nftMaterials" label="合成材料" />
        <el-table-column prop="activityNums" label="活动次数" />
      </el-table>
    </div>

    <!-- 分页栏 -->
    <div class="nft-list-page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        :page-size="pageSize"
        :current-page="curPage"
        @current-change="curChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 表格列数据
const NFTColumn = {};
// 表格数据 Mock
const tableData = [
  {
    nftID: '#3029',
    nftName: '白鹿见·鹿在朝',
    nftQuantity: '215',
    nftAttribute: '珍藏',
    nftSource: '消费打榜空投',
    nftMaterials: [],
    activityNums: 26,
  },
  {
    nftID: '#3286',
    nftName: '齐天大圣·红莲业火',
    nftQuantity: '467',
    nftAttribute: '合成',
    nftSource: '首发售出',
    nftMaterials: ['齐天大圣·烈火真金', '齐天大圣·玉成其美'],
    activityNums: 26,
  },
  {
    nftID: '#7130',
    nftName: '刘备',
    nftQuantity: '289',
    nftAttribute: '合成',
    nftSource: '合成',
    nftMaterials: ['关羽', '张飞', '赵云', '黄忠', '马超'],
    activityNums: 26,
  },
];

// 每页显示数据量
const pageSize = ref(10);
// 默认页及当前页数
const curPage = ref(1);

// 获取当前分页
const curChange = (val: number) => {
  curPage.value = val;
  console.log('curChange', val);
};
</script>

<style lang="scss">
.nft-list {
  margin-bottom: 40px;
}
.nft-list-page {
  overflow: hidden;

  & > div {
    float: right;
  }
}
</style>
