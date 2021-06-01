
let state = {
    asyncRoutes: [ // 模拟后端返回的路由数据
        {
            "id":'1',
            "path": "home",
            "component": "home",
            "name": "home",
            "icon": 'el-icon-s-home',
            "meta": { "title": "首页" }
        },
        {
            "id":'2',
            "path": "example",
            "redirect": "/admin/example/richText",
            "folder": "example",
            'icon': 'el-icon-location',
            "component": "floder",
            "name": "example",
            "meta": { "title": "演示案例" },
            "children": [
                {
                    "id":'3',
                    "parentPath": "example",
                    "path": "tableExample",
                    "component": "tableExample",
                    "name": "tableExample",
                    "meta": { "title": "综合演示" }
                },
                {
                    "id":'4',
                    "parentPath": "example",
                    "path": "richText",
                    "component": "richText",
                    "name": "RichText",
                    "meta": { "title": "富文本" }
                }
            ]
        },
        {
            "id":'5',
            "path": "charts",
            "redirect": "/admin/charts/richText",
            "folder": "charts",
            'icon': 'el-icon-s-help',
            "component": "floder",
            "name": "charts",
            "meta": { "title": "图表事例" },
            "children": [
                {
                    "id":'6',
                    "parentPath": "charts",
                    "path": "lineMarker",
                    "component": "lineMarker",
                    "name": "lineMarker",
                    "meta": { "title": "折线图" }
                },
                {
                    "id":'7',
                    "parentPath": "charts",
                    "path": "mixChart",
                    "component": "mixChart",
                    "name": "mixChart",
                    "meta": { "title": "混合图" }
                }
            ]
        },
    ],
    routeCrumbs:[
        {
            path:'/admin/home',
            title:'首页'
        }
    ]
}

const getters = {
    getCrumbs: state => {
        return state.routeCrumbs
    }
}

const mutations = {
    updateCrumbs(state,payload){
        if(!state.routeCrumbs.some(item=> item.path==payload.crumbs.path)){
            state.routeCrumbs.push(payload.crumbs);
        }
    },
    mapDelCrumbs(state,payload){
        let i=state.routeCrumbs.findIndex(item=> item.path==payload.path)
        state.routeCrumbs.splice(i,1);
    }
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}
