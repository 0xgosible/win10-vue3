<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-04 15:45:06
 * @Description: 
 * @FilePath: /myindex/src/components/window/MenuList.vue
  Need CodeReview 
-->
<template>
    <div class="menu_outer" :style="cusStyle" :class="{ defOver: IPC.ifTopDown }">
        <div class="menulist" v-for="item in IPC.menuList" @click="callFunc(item)">{{ item.name }}</div>
    </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { MenuCtrl } from "../libs/MenuCtrl";
import type {menuItem}from "../libs/MenuCtrl";

let IPC = MenuCtrl.getInstance()

let IPClist = computed(() => {
    return MenuCtrl.getInstance().menuList
})

let cusStyle = ref<any>({
})
cusStyle.value.left = computed(() => MenuCtrl.getInstance().x.value + 'px')
cusStyle.value.top = computed(() => MenuCtrl.getInstance().y.value + 'px')

cusStyle.value.visibility = computed(() => MenuCtrl.getInstance().ifShow.value?"visible":"hidden" )

function callFunc(item:menuItem) {
    item.func()
}
</script>
<style scoped>
@import '../../main.css';
.menu_outer {
    position: absolute;
    background-color: rgb(230, 230, 230);
    color: rgb(41, 41, 41);
    border: 0.5px solid rgba(0, 0, 0, 0.418);
    
    z-index: 102;
}
.defOver {
    transform: translateY(-100%);
}
.menulist{
    cursor: pointer;
    width: 80px;
    
    /* padding: 4px; */
    padding: 4px 30px;
    font-size: 12px;
}
.menulist:hover{
    background-color: white;
    color: black;
}
</style>