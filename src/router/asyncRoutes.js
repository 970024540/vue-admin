

const admin = () => import('@/components/adminBox')
const floder = () => import('@/components/floderSlot')

const home = () => import(/* webpackChunkName: "home" */ '@/pages/Home')

const richText = () => import(/* webpackChunkName: "richText" */ '@/pages/example/RichText')
const tableExample = () => import(/* webpackChunkName: "tableExample" */ '@/pages/example/TableExample')

const lineMarker = () => import(/* webpackChunkName: "lineMarker" */ '@/pages/charts/LineMarker')
const mixChart = () => import(/* webpackChunkName: "mixChart" */ '@/pages/charts/MixChart')

export default {
    admin,
    floder,
    home,
    richText,
    tableExample,
    lineMarker,
    mixChart
}