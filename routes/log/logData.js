const logs = [
  {
    version: '1.3.3',
    time: '2017-12-19',
    updates: [
      {
        id: '1',
        content: '可编译服务新增功能：增量编译',
      },
    ],
  },
  {
    version: '1.3.2',
    time: '2017-11-13',
    updates: [
      {
        id: '1',
        content: '组件化重构',
      },
      {
        id: '2',
        content: '回滚只开放给短服务部署',
      },
    ],
  },
  {
    version: '1.2.1',
    time: '2017-11-13',
    updates: [
      {
        id: '1',
        content: '修改了服务列表页面和部署页面表格默认显示的数据量',
      },
    ],
  },
  {
    version: '1.2.0',
    time: '2017-09-20',
    updates: [
      {
        id: '1',
        content: '新增部署/重启状态获取，每次进入生产环境部署TAB都会重新拉取最新的信息（包括部署/重启状态',
      },
      {
        id: '2',
        content: '服务列表按照权重进行排序',
      },
    ],
  },
  {
    version: '1.1.4',
    time: '2017-09-19',
    updates: [
      {
        id: '1',
        content: '修复差异日志提示service_id should be a int的问题',
      },
    ],
  },
  {
    version: '1.1.3',
    time: '2017-09-12',
    updates: [
      {
        id: '1',
        content: '修复组件无法批量选中节点的问题',
      },
    ],
  },
  {
    version: '1.1.2',
    time: '2017-09-12',
    updates: [
      {
        id: '1',
        content: '热修复 先进入生产环境部署页面，然后再进行打包时无法及时获取打包版本信息的问题',
      },
    ],
  },
  {
    version: '1.1.1',
    time: '2017-09-04',
    updates: [
      {
        id: '1',
        content: '修复打包分支缺省不是填入的值的问题',
      },
      {
        id: '2',
        content: '修复重启长时间卡住的问题',
      },
    ],
  },
  {
    version: '1.1.0',
    time: '2017-08-30',
    updates: [
      {
        id: '1',
        content: '添加更新日志',
      },
      {
        id: '2',
        content: '异步任务改为轮询方式获取状态（主要包含部署，刷新，重启，差异日志，抹除改动，回滚)',
      },
      {
        id: '3',
        content: 'CMDB拆分出去，作为一个独立平台',
      },
      {
        id: '4',
        content: '添加平台权限支持',
      },
    ],
  },
  {
    version: '1.0.0',
    time: '2017-06-30',
    updates: [
      {
        id: '1',
        content: '发布第一版上线发布系统',
      },
    ],
  },
];

export default logs;
