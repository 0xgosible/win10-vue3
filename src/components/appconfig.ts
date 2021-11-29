/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-11-29 16:35:30
 * @Description: 
 * @FilePath: /myindex/src/components/appconfig.ts
 */
import { defineComponent, shallowReactive } from "vue";
// import testicon from "../assets/computer.ico"

import { UnwrapNestedRefs } from "@vue/reactivity";
import { DragWindow } from "./window/libs/DragWindow";
interface appInfo{
    name: string,
    icon:string,
    window:DragWindow,
}

let appList:UnwrapNestedRefs<Array<appInfo>> = shallowReactive([

])

// interface plug_option_finnal{
//     start_time:number,
//     if_logo_show:boolean
// }
type to_opt_map<T>={
    [P in keyof T]?:T[P];
}

interface plug_option_finnal{
    start_time:number,
    if_logo_show:boolean,
    start_menu_logo:string,
    backimg:string,
}
type plug_option=to_opt_map<plug_option_finnal>

let appconfig:plug_option_finnal={
    start_time:2000,
    if_logo_show:true,
    start_menu_logo:'default',
    backimg:'default',
    // start_menu_logo:testicon
    
}
export {appList,appconfig,appInfo,plug_option,plug_option_finnal}