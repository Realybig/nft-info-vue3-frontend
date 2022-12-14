# Vue 3 + TypeScript + Vite

## 备忘

### Vue 3 Watch 使用方法

```js
// 导入 watch 模块
import { watch } from 'vue';

// 一、监听一个 ref 数据
watch( data, ( newValue, oldValue ) => {
  console.log( newValue, oldValue );
});

// 二、监听多个 ref 数据
watch( [data1, data2], ( newValue, oldValue ) => {
  console.log( newValue, oldValue );
});

// 三、监听整个 reactive 响应式数据变化（只能监听到最新结果，无法得到上一次结果）
const data = reactive({
  name: 'pi',
  age: {
    num: 11
  }
})
watch( data, ( newValue, oldValue ) => {
  console.log( newValue, oldValue );
});

// 四、监听 reactive 响应式数据中某一个值的变化（最新的结果和上一次的结果都可以得到）
const data = reactive({
  name: 'pi',
  age: {
    num: 11
  }
})
watch( () => data.age.num , ( newValue, oldValue ) => {
  console.log( newValue, oldValue );
}, { immediate: true });
// immediate 进入页面立即开始监听
```


### Vue 3 watchEffect 使用方法

```js
import { watchEffect } from 'vue'

// 进入页面后立即开始监听
const res = watchEffect(() => {
  cosole.log('watchEffect')
})

// 停止监听
res()
```