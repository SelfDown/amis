export default {
  title: '用户管理',
  remark: '用户增删改查',
  toolbar: [
    {
      type: 'button',
      actionType: 'dialog',
      label: '新增',
      icon: 'fa fa-plus pull-left',
      primary: true,
      dialog: {
        title: '新增',
        body: {
          type: 'form',
          name: 'sample-edit-form',
          api: "post:/template_data/data[hrm.create_user]",
          body: [

            {
              type: 'input-text',
              name: 'nick',
              label: '昵称',
              required: true
            },
            {
              type: 'input-text',
              name: 'username',
              label: '用户名',
              required: true
            },

            {
              type: 'input-text',
              name: 'address',
              label: '地址',
              required: true
            },

            {
              type: 'input-text',
              name: 'tel',
              label: '电话'
            },

            {
              type: 'input-text',
              name: 'statu',
              label: '状态'
            }
          ]
        }
      }
    }
  ],
  body: {
    type: 'crud',
    draggable: true,
    autoFillHeight: true,
    api: 'post:/template_data/data[hrm.user_list]',
    primaryField:"userid",
    perPage: 20,
    perPageField: 'size',
    keepItemSelectionOnPageChange: true,

    labelTpl: '${nick} (${username})',
    orderBy: 'id',
    orderDir: 'asc',
    filter: {
      title: '用户搜索',
      submitText: '搜索',
      'mode': 'horizontal',
      'columnCount': 3,
      body: [
        {
          type: 'input-text',
          name: 'search',
          placeholder: '搜索用户名、登录名',
          addOn: {
            label: '搜索',
            type: 'submit'
          }
        },
        {
          'label': '性别',
          'type': 'select',
          'name': 'sex',
          'multiple': true,
          clearable: true,
          'options': [
            {
              'label': '男',
              'value': '1'
            },
            {
              'label': '女',
              'value': '2'

            }
          ]
        }
      ]
    },
    bulkActions: [
      {
        label: '批量删除',
        actionType: 'ajax',
        api: {
          url:'/template_data/data',
          service:"hrm.delete_user_by_userid_list",
          data:{
            "ids":"${ids}",
          }

        },
        confirmText: '确定要批量删除?'
      },
      {
        label: '批量修改',
        actionType: 'dialog',
        dialog: {
          title: '批量编辑',
          name: 'sample-bulk-edit',
          body: {
            type: 'form',
            api: '/api/sample/bulkUpdate2',
            body: [
              {
                type: 'hidden',
                name: 'userid'
              },
              {
                type: 'input-text',
                name: 'nick',
                label: '姓名'
              }
            ]
          }
        }
      }
    ],
    quickSaveApi: '/api/sample/bulkUpdate',
    quickSaveItemApi: '/api/sample/$id',
    filterTogglable: true,
    headerToolbar: [
      'filter-toggler',
      'bulkActions',
      {
        type: 'tpl',
        tpl: '总共 ${count} 条数据。',
        className: 'v-middle'
      },

      {
        type: 'columns-toggler',
        align: 'right'
      },
      {
        type: 'drag-toggler',
        align: 'right'
      },
      {
        type: 'pagination',
        align: 'right'
      }
    ],
    footerToolbar: ['statistics', 'switch-per-page', 'pagination'],
    // rowClassNameExpr: '<%= data.id == 1 ? "bg-success" : "" %>',
    columns: [

      {
        name: 'nick',
        label: '姓名',
        sortable: true,
        searchable: true,
        type: 'text',
        toggled: true
      },
      {
        name: 'username',
        label: '登录名',
        sortable: true,
        type: 'text'

      },
      {
        name: 'statu',
        label: '状态',
        sortable: true,
        type: 'text'
      },
      {
        name: 'email',
        label: '邮箱',
        sortable: true,
        type: 'text'
      },
      {
        name: 'create_time',
        label: '创建日期',
        sortable: true,
        type: 'text'
      },
      {
        name: 'modify_time',
        label: '修改日期',
        sortable: true,
        type: 'text'
      },
      {
        type: 'operation',
        label: '操作',
        width: 100,
        buttons: [
          {
            type: 'button',
            icon: 'fa fa-eye',
            actionType: 'dialog',
            tooltip: '查看',
            dialog: {
              title: '查看',
              body: {
                type: 'form',
                body: [
                  {
                    type: 'static',
                    name: 'engine',
                    label: 'Engine'
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'static',
                    name: 'browser',
                    label: 'Browser'
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'static',
                    name: 'platform',
                    label: 'Platform(s)'
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'static',
                    name: 'version',
                    label: 'Engine version'
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'static',
                    name: 'grade',
                    label: 'CSS grade'
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'html',
                    html: '<p>添加其他 <span>Html 片段</span> 需要支持变量替换（todo）.</p>'
                  }
                ]
              }
            }
          },
          {
            type: 'button',
            icon: 'fa fa-pencil',
            tooltip: '编辑',
            actionType: 'drawer',
            drawer: {
              position: 'left',
              size: 'lg',
              title: '编辑',
              body: {
                type: 'form',
                name: 'sample-edit-form',
                api: '/api/sample/$id',
                body: [
                  {
                    type: 'input-text',
                    name: 'engine',
                    label: 'Engine',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'browser',
                    label: 'Browser',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'platform',
                    label: 'Platform(s)',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'version',
                    label: 'Engine version'
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'select',
                    name: 'grade',
                    label: 'CSS grade',
                    options: ['A', 'B', 'C', 'D', 'X']
                  }
                ]
              }
            }
          },
          {
            type: 'button',
            icon: 'fa fa-times text-danger',
            actionType: 'ajax',
            tooltip: '删除',
            confirmText: '您确认要删除【${nick}(${username})】?',
            api: 'delete:/api/sample/$id'
          }
        ],
        toggled: true
      }
    ]
  }
};
