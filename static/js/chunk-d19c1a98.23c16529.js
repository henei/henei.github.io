(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d19c1a98"],{bfc4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"字典名称"}},[a("el-select",{attrs:{filterable:"",size:"small"},model:{value:t.queryParams.dictType,callback:function(e){t.$set(t.queryParams,"dictType",e)},expression:"queryParams.dictType"}},t._l(t.typeOptions,(function(t){return a("el-option",{key:t.dictId,attrs:{label:t.dictName,value:t.dictType}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"字典标签"}},[a("el-input",{attrs:{placeholder:"请输入字典标签",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.dictLabel,callback:function(e){t.$set(t.queryParams,"dictLabel",e)},expression:"queryParams.dictLabel"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{filterable:"",placeholder:"数据状态",clearable:"",size:"small"},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},t._l(t.statusOptions,(function(t){return a("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),t._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:dict:add"],expression:"['system:dict:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.handleAdd}},[t._v("新增")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList}},[a("el-table-column",{attrs:{label:"字典编码",align:"center",prop:"dictCode"}}),t._v(" "),a("el-table-column",{attrs:{label:"字典标签",align:"center",prop:"dictLabel"}}),t._v(" "),a("el-table-column",{attrs:{label:"字典键值",align:"center",prop:"dictValue"}}),t._v(" "),a("el-table-column",{attrs:{label:"字典排序",align:"center",prop:"dictSort"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center",prop:"status",formatter:t.statusFormat}}),t._v(" "),a("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.parseTime(e.row.createTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:dict:edit"],expression:"['system:dict:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:dict:remove"],expression:"['system:dict:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.open,width:"500px"},on:{"update:visible":function(e){t.open=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"字典类型"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.form.dictType,callback:function(e){t.$set(t.form,"dictType",e)},expression:"form.dictType"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"数据标签",prop:"dictLabel"}},[a("el-input",{attrs:{placeholder:"请输入数据标签"},model:{value:t.form.dictLabel,callback:function(e){t.$set(t.form,"dictLabel",e)},expression:"form.dictLabel"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"数据键值",prop:"dictValue"}},[a("el-input",{attrs:{placeholder:"请输入数据键值"},model:{value:t.form.dictValue,callback:function(e){t.$set(t.form,"dictValue",e)},expression:"form.dictValue"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"显示排序",prop:"dictSort"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:t.form.dictSort,callback:function(e){t.$set(t.form,"dictSort",e)},expression:"form.dictSort"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.statusOptions,(function(e){return a("el-radio",{key:e.dictValue,attrs:{label:e.dictValue}},[t._v(t._s(e.dictLabel))])})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")]),t._v(" "),a("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)},r=[],s=a("aa3a"),n=a("ed45"),l={data:function(){return{loading:!0,total:0,dataList:[],title:"",open:!1,statusOptions:[],typeOptions:[],queryParams:{pageNum:1,pageSize:10,dictName:void 0,dictType:void 0,status:void 0},form:{},rules:{dictLabel:[{required:!0,message:"数据标签不能为空",trigger:"blur"}],dictValue:[{required:!0,message:"数据键值不能为空",trigger:"blur"}],dictSort:[{required:!0,message:"数据顺序不能为空",trigger:"blur"}]}}},created:function(){var t=this,e=this.$route.params&&this.$route.params.dictId;this.getType(e),this.getTypeList(),this.getDicts({dictType:"sys_normal_disable"}).then((function(e){t.statusOptions=e.data}))},methods:{getType:function(t){var e=this;Object(n["c"])(t).then((function(t){e.queryParams.dictType=t.data.dictType,e.getList()}))},getTypeList:function(){var t=this;Object(n["d"])().then((function(e){t.typeOptions=e.rows}))},getList:function(){var t=this;this.loading=!0,Object(s["e"])(this.queryParams).then((function(e){t.dataList=e.rows,t.total=e.total,t.loading=!1}))},statusFormat:function(t,e){return this.selectDictLabel(this.statusOptions,t.status)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={dictCode:void 0,dictLabel:void 0,dictValue:void 0,dictSort:0,status:"0",remark:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleAdd:function(){this.reset(),this.open=!0,this.title="添加字典数据",this.form.dictType=this.queryParams.dictType},handleUpdate:function(t){var e=this;this.reset(),Object(s["c"])(t.dictCode).then((function(t){e.form=t.data,e.open=!0,e.title="修改字典数据"}))},submitForm:function(){var t=this;this.$refs["form"].validate((function(e){e&&(void 0!=t.form.dictCode?Object(s["f"])(t.form).then((function(e){200===e.code?(t.msgSuccess("修改成功"),t.open=!1,t.getList()):t.msgError(e.msg)})):Object(s["a"])(t.form).then((function(e){200===e.code?(t.msgSuccess("新增成功"),t.open=!1,t.getList()):t.msgError(e.msg)})))}))},handleDelete:function(t){var e=this;this.$confirm('是否确认删除名称为"'+t.dictLabel+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(s["b"])(t.dictCode)})).then((function(){e.getList(),e.msgSuccess("删除成功")})).catch((function(t){}))}}},o=l,c=a("2877"),u=Object(c["a"])(o,i,r,!1,null,null,null);e["default"]=u.exports},ed45:function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n})),a.d(e,"e",(function(){return l})),a.d(e,"b",(function(){return o}));var i=a("b775");function r(t){return Object(i["a"])({url:"/permission/system/dict/type/list",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/permission/system/dict/type/"+t,method:"get"})}function n(t){return Object(i["a"])({url:"/permission/system/dict/type",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/permission/system/dict/type",method:"put",data:t})}function o(t){return Object(i["a"])({url:"/permission/system/dict/type/"+t,method:"delete"})}}}]);