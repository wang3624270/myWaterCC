import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage';
import WaterAllData from '@/components/dataShow/waterAllData';
import WaterMonth from '@/components/dataShow/waterMonth';
import WaterTarget from '@/components/dataShow/waterTarget';
import DataAcquisition from '@/components/dataCollection/dataAcquisition';
import DataList from '@/components/dataCollection/dataList';
import SurfaceWater from '@/components/evaluationAnalysis/surfaceWater';
import TasteIndex from '@/components/evaluationAnalysis/tasteIndex';
import HealthRisk from '@/components/overallEvaluation/healthRisk';
import RealDisplay from '@/components/realTimeData/realDisplay';
import GroundWater from '@/components/dataShow/groundWater';
import PrincipalAnalysis from '@/components/overallEvaluation/principalAnalysis';
import SingleFactor from '@/components/evaluationAnalysis/singleFactor';

Vue.use(Router);
const Framepage = resolve => require(['@/components/framepage'], resolve);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/index',
            component: Framepage,
            children: [
                {
                    path: '/index/waterAllData',
                    name: 'waterAllData',
                    component: WaterAllData
                },
                {
                    path: '/index/waterMonth',
                    name: 'waterMonth',
                    component: WaterMonth
                },
                {
                    path: '/index/waterTarget',
                    name: 'waterTarget',
                    component: WaterTarget
                },
                {
                    path: '/index/dataAcquisition',
                    name: 'dataAcquisition',
                    component: DataAcquisition
                },
                {
                    path: '/index/dataList',
                    name: 'dataList',
                    component: DataList
                },
                {
                    path: '/index/surfaceWater',
                    name: 'surfaceWater',
                    component: SurfaceWater
                },
                {
                    path: '/index/tasteIndex',
                    name: 'tasteIndex',
                    component: TasteIndex
                },
                {
                    path: '/index/healthRisk',
                    name: 'healthRisk',
                    component: HealthRisk
                },
                {
                    path: '/index/realDisplay',
                    name: 'realDisplay',
                    component: RealDisplay
                },
                {
                    path: '/index/groundWater',
                    name: 'groundWater',
                    component: GroundWater
                },
                {
                    path: '/index/principalAnalysis',
                    name: 'principalAnalysis',
                    component: PrincipalAnalysis
                },
                {
                    path: '/index/singleFactor',
                    name: 'singleFactor',
                    component: SingleFactor
                }
            ]
        },
        {
            path:'*',
            redirect:'/index'
        }
    ]
})
