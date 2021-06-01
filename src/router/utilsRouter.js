
import asyncRoutes from "./asyncRoutes";
import loginState from "../vuex/modules/login";
let {state} = loginState;
// 重组后台返回的routes格式
function getAsyncRoutes(routes, rootRoutes) {
    if (!rootRoutes) {
        rootRoutes = {
            "path": "/admin",
            "component": asyncRoutes["admin"],
            "redirect": "/admin/home",
            "name": "admin",
            "meta": {
                "title": "首页",
            },
            "children": []
        }
    }
    // 定义路由中需要的自定名
    const keys = ['path', 'name', 'redirect', 'meta'];
    // 遍历路由数组去重组可用的路由
    routes.forEach(item => {
        if (item.component && asyncRoutes[item.component]) {
            const newItem = {};
            newItem.component = asyncRoutes[item.component];
            for (const key in item) {
                if (keys.includes(key)) {
                    newItem[key] = item[key]
                }
            }
            if(item.parentPath){
                item.link=`/admin/${item.parentPath}/${item.path}`
                rootRoutes.children.forEach(val=>{
                    if(val.name==item.parentPath){
                        if(!val.children) val.children=[];
                        val.children.push(newItem)
                    }
                })
            }else{
                item.link=`/admin/${item.path}`
                rootRoutes.children.push(newItem)
            }
        }
        // 递归遍历
        if (item.children && item.children.length) {
            getAsyncRoutes(item.children,rootRoutes)
        }
    })
    return [rootRoutes];
}
export default getAsyncRoutes(state.asyncRoutes);