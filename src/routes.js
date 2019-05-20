import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Tab from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

import Ho from './views/Ho.vue'
import Info from './components/Student/InfoEntry.vue'
import infoModify from './components/Student/infoModify.vue'
import studentEvaluation from './components/Student/studentEvaluation.vue'
import teacherEvaluation from './components/Student/teacherEvaluation.vue'
import reExam from './components/Exam/reExam.vue'
import arranExam from './components/Exam/arranExam.vue'
import resultQuery from './components/Exam/resultQuery.vue'
import resultInput from './components/Exam/resultInput'
import classroomApp from './components/Exam/classroomApp'
import equipmentRepair from './components/Exam/equipmentRepair.vue'
import addingCourses from './components/Curriculum/addingCourses.vue'
import cancelClass from './components/Curriculum/cancelClass.vue'
import courseSelection from './components/Curriculum/courseSelection.vue'
import studentCredit from './components/Curriculum/studentCredit.vue'
import teacherScheduling from './components/Curriculum/teacherScheduling.vue'
import teachersRetire from './components/Curriculum/teachersRetire.vue'
import clubActivities from './components/Association/clubActivities.vue'
import clubMembers from './components/Association/clubMembers.vue'
import comAudit from './components/Association/comAudit.vue'
import comEvaluation from './components/Association/comEvaluation.vue'
import empInfo from './components/People/empInfo.vue'
import evaStaff from './components/People/evaStaff.vue'
import payScale from './components/People/payScale.vue'
import teacherTraining from './components/People/teacherTraining.vue'
import consumablesReport from './components/Finance/consumablesReport.vue'
import grantAudit from './components/Finance/grantAudit.vue'
import paymentRecord from './components/Finance/paymentRecord.vue'
import salaryExpend from './components/Finance/salaryExpend.vue'
import studentPayment from './components/Finance/studentPayment.vue'
import energyCon from './components/General/energyCon.vue'
import equipmentManage from './components/General/equipmentManage.vue'
import apartManage from './components/Logistics/apartManage.vue'
import busInfo from './components/Logistics/busInfo.vue'
import canteenInfo from './components/Logistics/canteenInfo.vue'
import Announcement from './components/Notice/Announcement.vue'
import appNotice from './components/Notice/appNotice.vue'
import maintenanceNotice from './components/Notice/maintenanceNotice.vue'
import pictureManage from './components/Notice/pictureManage.vue'
import writingNotice from './components/Notice/writingNotice.vue'



let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-home',
        leaf: true,//只有一个节点
        children: [
            { path: '/Ho', component: Ho, name: '首页' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '学生管理',
        iconCls: 'fa fa-user-circle-o',//图标样式class
        children: [
            
            { path: '/infoModify', component: infoModify, name: '信息录入' },
            { path: '/Info', component: Info, name: '信息修改' },
            { path: '/studentEvaluation', component: studentEvaluation, name: '学生评价' },
            { path: '/teacherEvaluation', component: teacherEvaluation, name: '教师评价' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '考试管理',
        iconCls: 'fa fa-search',
        children: [
            { path: '/reExam', component: reExam, name: '重考申请' },
            { path: '/arranExam', component: arranExam, name: '考试安排' },
            { path: '/resultQuery', component: resultQuery, name: '结果查询' },
            { path: '/resultInput', component: resultInput, name: '成绩录入' },
            { path: '/classroomApp', component: classroomApp, name: '教室申请' },
            { path: '/equipmentRepair', component: equipmentRepair, name: '设备保修' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '课程管理',
        iconCls: 'fa fa-line-chart',
        children: [
            { path: '/teachersRetire', component: teachersRetire, name: '教师退课' },
            { path: '/teacherScheduling', component: teacherScheduling, name: '教师排课' },
            { path: '/addingCourses', component: addingCourses, name: '课程添加' },
            { path: '/studentCredit', component: studentCredit, name: '学生学分' },
            { path: '/courseSelection', component: courseSelection, name: '选课申请' },
            { path: '/cancelClass', component: cancelClass, name: '学生退课' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '社团管理',
        iconCls: 'fa fa-suitcase',
        children: [
            { path: '/clubActivities', component: clubActivities, name: '社团活动' },
            { path: '/clubMembers', component: clubMembers, name: '成员信息' },
            { path: '/comAudit', component: comAudit, name: '社团审核' },
            { path: '/comEvaluation', component: comEvaluation, name: '社团评优' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '人事管理',
        iconCls: 'fa fa-eye',//图标样式class
        children: [
            { path: '/empInfo', component: empInfo, name: '员工信息' },
            { path: '/evaStaff', component: evaStaff, name: '教职工评级' },
            { path: '/payScale', component: payScale, name: '薪酬等级' },
            { path: '/teacherTraining', component: teacherTraining, name: '教师培训' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '财务管理',
        iconCls: 'fa fa-dollar',//图标样式class
        children: [
            { path: '/consumablesReport', component: consumablesReport, name: '耗材报告' },
            { path: '/studentPayment', component: studentPayment, name: '学生缴费' },
            { path: '/salaryExpend', component: salaryExpend, name: '工薪支出' },
            { path: '/grantAudit', component: grantAudit, name: '助学金审核' },
            { path: '/paymentRecord', component: paymentRecord, name: '缴费记录' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '总务管理',
        iconCls: 'fa fa-server',//图标样式class
        children: [
           
            { path: '/energyCon', component: energyCon, name: '能源消耗' },
            { path: '/equipmentManage', component: equipmentManage, name: '器材管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '后勤管理',
        iconCls: 'fa fa-support',//图标样式class
        children: [
            { path: '/apartManage', component: apartManage, name: '公寓管理' },
            { path: '/canteenInfo', component: canteenInfo, name: '餐厅信息' },
            { path: '/busInfo', component: busInfo, name: '公车信息' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '公告管理',
        iconCls: 'fa fa-bullhorn',//图标样式class
        children: [
            
            { path: '/writingNotice', component: writingNotice, name: '撰写公告' },
            { path: '/appNotice', component: appNotice, name: '申请公告' },
            { path: '/Announcement', component: Announcement, name: '发布公告' },
            { path: '/maintenanceNotice', component: maintenanceNotice, name: '维护公告' },
            { path: '/pictureManage', component: pictureManage, name: '图片管理' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;