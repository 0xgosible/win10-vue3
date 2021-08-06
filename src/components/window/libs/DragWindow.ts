/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-05 11:28:20
 * @Description: 
 * @FilePath: /myindex/src/components/window/libs/DragWindow.ts
 */
import { createApp, reactive, ref } from "@vue/runtime-dom";
import { DragElement } from "./DragElement";
import WindowTmpVue from "./WindowTmp.vue";

import {WindowIPC} from "./WindowIPC"


class DragWindow extends DragElement{
    zindex:number;
    
    constructor(x:number,y:number,title:string,width:number,height:number,content:Object){
        
        
        let div = document.createElement('div')
        div.className='dragwin'

        let id= "dragwinelementhash89103"+WindowIPC.getInstance().getWinnum();//获得一个id
        div.id=id
        document.body.appendChild(div);

        let app:any ={}
        let pageInfo = WindowIPC.getInstance().registerWindow(id,title);//在IPC中注册
        
        app.zindex=pageInfo.zindex
        app.value = createApp(WindowTmpVue,{title:title,width,height,app:app})
        
        app.content = content
        app.IPC=pageInfo
        
        app.value.mount("#"+id)

        super(x,y,div)

        this.zindex=WindowIPC.getInstance().winnum;

    }
}
export{
    DragWindow
}