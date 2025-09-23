"use strict";(self.webpackChunkebaoferc=self.webpackChunkebaoferc||[]).push([[518],{44314:function(z,v,e){e.r(v),e.d(v,{demos:function(){return I}});var K=e(15009),r=e.n(K),H=e(99289),j=e.n(H),F=e(67294),I={"src-hooks-demo-0":{component:F.memo(F.lazy(j()(r()().mark(function t(){return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",{default:function(){return F.createElement("span",null,"1")}});case 1:case"end":return y.stop()}},t)})))),asset:{type:"BLOCK",id:"src-hooks-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`// import { Foo22 } from 'ebaoferc';\r
\r
export default () => <span>1</span>;`}},entry:"index.jsx"},context:{},renderOpts:{compile:function(){var t=j()(r()().mark(function y(){var b,N=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(862).then(e.bind(e,16862));case 2:return l.abrupt("return",(b=l.sent).default.apply(b,N));case 3:case"end":return l.stop()}},y)}));function $(){return t.apply(this,arguments)}return $}()}}}},81204:function(z,v,e){e.r(v),e.d(v,{demos:function(){return t}});var K=e(15009),r=e.n(K),H=e(99289),j=e.n(H),F=e(67294),I=e(63245),t={"src-hooks-use-bi-hooks-demo-0":{component:F.memo(F.lazy(j()(r()().mark(function $(){var y,b;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,63245));case 2:return y=i.sent,b=y.useHandleWindowResize,i.abrupt("return",{default:function(){var a=b(),u=a.scale;return F.createElement("div",{style:{transform:"scale(".concat(u,")"),background:"#ddd"}})}});case 5:case"end":return i.stop()}},$)})))),asset:{type:"BLOCK",id:"src-hooks-use-bi-hooks-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useHandleWindowResize } from 'ebaoferc';\r
\r
export default () => {\r
  const { scale } = useHandleWindowResize();\r
  return (\r
    <div style={{ transform: \`scale(\${scale})\`, background: '#ddd' }}></div>\r
  );\r
};`},ebaoferc:{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{ebaoferc:I},renderOpts:{compile:function(){var $=j()(r()().mark(function b(){var N,i=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(862).then(e.bind(e,16862));case 2:return a.abrupt("return",(N=a.sent).default.apply(N,i));case 3:case"end":return a.stop()}},b)}));function y(){return $.apply(this,arguments)}return y}()}},"src-hooks-use-bi-hooks-demo-1":{component:F.memo(F.lazy(j()(r()().mark(function $(){var y,b;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,63245));case 2:return y=i.sent,b=y.useTime,i.abrupt("return",{default:function(){var a=b();return F.createElement("div",null,a&&F.createElement(F.Fragment,null,F.createElement("p",null,"dateStr: ",a==null?void 0:a.dateStr),F.createElement("p",null,"weekStr: ",a==null?void 0:a.weekStr),F.createElement("p",null,"timeStr: ",a==null?void 0:a.timeStr)))}});case 5:case"end":return i.stop()}},$)})))),asset:{type:"BLOCK",id:"src-hooks-use-bi-hooks-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useTime } from 'ebaoferc';\r
\r
export default () => {\r
  const date = useTime();\r
  return (\r
    <div>\r
      {date && (\r
        <>\r
          <p>dateStr: {date?.dateStr}</p>\r
          <p>weekStr: {date?.weekStr}</p>\r
          <p>timeStr: {date?.timeStr}</p>\r
        </>\r
      )}\r
    </div>\r
  );\r
};`},ebaoferc:{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{ebaoferc:I},renderOpts:{compile:function(){var $=j()(r()().mark(function b(){var N,i=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(862).then(e.bind(e,16862));case 2:return a.abrupt("return",(N=a.sent).default.apply(N,i));case 3:case"end":return a.stop()}},b)}));function y(){return $.apply(this,arguments)}return y}()}}}},21697:function(z,v,e){e.r(v),e.d(v,{demos:function(){return N}});var K=e(15009),r=e.n(K),H=e(19632),j=e.n(H),F=e(99289),I=e.n(F),t=e(67294),$=e(43781),y=e(63245),b=e(37678),N={"src-hooks-use-enhance-pagination-demo-0":{component:t.memo(t.lazy(I()(r()().mark(function i(){var l,a,u,h,S,n,P,W;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,43781));case 2:return l=p.sent,a=l.Button,p.next=6,Promise.resolve().then(e.bind(e,63245));case 6:return u=p.sent,h=u.StyledTable,p.next=10,Promise.resolve().then(e.bind(e,37678));case 10:return S=p.sent,n=S.useEnhancePagination,P={1:Array.from({length:10}).map(function(M,s){return{id:"\u7B2C\u4E00\u9875".concat(s)}}),2:Array.from({length:10}).map(function(M,s){return{id:"\u7B2C\u4E8C\u9875".concat(s)}}),3:Array.from({length:2}).map(function(M,s){return{id:"\u7B2C\u4E09\u9875".concat(s)}})},W=function(s){return new Promise(function(w){var o=Object.values(P).reduce(function(U,C){return U+=C.length},0);setTimeout(function(){w({data:j()(P==null?void 0:P[s==null?void 0:s.current]),total:o})},1e3)})},p.abrupt("return",{default:function(){var s=n(function(){var R=I()(r()().mark(function g(m){var x,d,E,O,T=arguments;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:for(x=T.length,d=new Array(x>1?x-1:0),E=1;E<x;E++)d[E-1]=T[E];return console.log("params rest",m,d),f.next=4,W(m);case 4:return O=f.sent,f.abrupt("return",O);case 6:case"end":return f.stop()}},g)}));return function(g){return R.apply(this,arguments)}}(),{defaultCurrent:3}),w=s.data,o=w===void 0?{}:w,U=s.run,C=s.pagination,L=s.loading,B=s.refresh,c=s.listData,_=function(){var R=I()(r()().mark(function g(m){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",new Promise(function(E){setTimeout(function(){for(var O=0,T=Object.values(P);O<T.length;O++){var D=T[O],f=D.findIndex(function(k){return k.id==m});f!=-1&&D.splice(f,1)}E(!0)},200)}));case 1:case"end":return d.stop()}},g)}));return function(m){return R.apply(this,arguments)}}(),A=function(){var R=I()(r()().mark(function g(m){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,_(m==null?void 0:m.id);case 2:return d.next=4,B();case 4:case"end":return d.stop()}},g)}));return function(m){return R.apply(this,arguments)}}();return t.createElement("main",null,JSON.stringify(o),t.createElement(h,{className:"mt-20",scroll:{x:"max-content"},rowKey:"id",loading:L,columns:[{title:"\u6D4B\u8BD5\u6570\u636E",dataIndex:"id"},{title:"\u64CD\u4F5C",render:function(g,m,x){return t.createElement(a,{type:"link",onClick:function(){return A(m)}},"\u5220\u9664")}}],dataSource:c,pagination:C}))}});case 15:case"end":return p.stop()}},i)})))),asset:{type:"BLOCK",id:"src-hooks-use-enhance-pagination-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'antd';\r
import { StyledTable } from 'ebaoferc';\r
import { useEnhancePagination } from './index';\r
\r
const store = {\r
  1: Array.from({ length: 10 }).map((_, index) => ({\r
    id: \`\u7B2C\u4E00\u9875\${index}\`,\r
  })),\r
  2: Array.from({ length: 10 }).map((_, index) => ({\r
    id: \`\u7B2C\u4E8C\u9875\${index}\`,\r
  })),\r
  3: Array.from({ length: 2 }).map((_, index) => ({\r
    id: \`\u7B2C\u4E09\u9875\${index}\`,\r
  })),\r
};\r
const getOrderList = (params) => {\r
  return new Promise((r) => {\r
    const total = Object.values(store).reduce(\r
      (sum, arr) => (sum += arr.length),\r
      0,\r
    );\r
    setTimeout(() => {\r
      r({\r
        data: [...store?.[params?.current]],\r
        total: total,\r
      });\r
    }, 1e3);\r
  });\r
};\r
export default function () {\r
  const {\r
    data = {},\r
    run,\r
    pagination,\r
    loading,\r
    refresh,\r
    listData,\r
  } = useEnhancePagination(\r
    async (params, ...rest) => {\r
      console.log('params rest', params, rest);\r
      const res = await getOrderList(params);\r
      return res as any;\r
    },\r
    {\r
      defaultCurrent: 3,\r
    },\r
  );\r
\r
  const deleteRecord = async (id) => {\r
    return new Promise((resolve) => {\r
      setTimeout(() => {\r
        for (const page of Object.values(store)) {\r
          const findIndex = page.findIndex((item) => item.id == id);\r
          if (findIndex != -1) {\r
            page.splice(findIndex, 1);\r
          }\r
        }\r
        resolve(true);\r
      }, 200);\r
    });\r
  };\r
\r
  const triggerDelete = async (record) => {\r
    await deleteRecord(record?.id);\r
    await refresh();\r
  };\r
\r
  return (\r
    <main>\r
      {JSON.stringify(data)}\r
      <StyledTable\r
        className="mt-20"\r
        scroll={{ x: 'max-content' }}\r
        rowKey="id"\r
        loading={loading}\r
        columns={[\r
          { title: '\u6D4B\u8BD5\u6570\u636E', dataIndex: 'id' },\r
          {\r
            title: '\u64CD\u4F5C',\r
            render(value, record, index) {\r
              return (\r
                <Button type="link" onClick={() => triggerDelete(record)}>\r
                  \u5220\u9664\r
                </Button>\r
              );\r
            },\r
          },\r
        ]}\r
        dataSource={listData}\r
        pagination={pagination}\r
      />\r
    </main>\r
  );\r
}`},antd:{type:"NPM",value:"5.26.4"},ebaoferc:{type:"NPM",value:"2.0.0"},"./index.ts":{type:"FILE",value:e(20939).Z}},entry:"index.tsx"},context:{"./index.ts":b,antd:$,ebaoferc:y,"D:/work/fe/ebao-fe-rc/src/hooks/useEnhancePagination/index.ts":b},renderOpts:{compile:function(){var i=I()(r()().mark(function a(){var u,h=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(862).then(e.bind(e,16862));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,h));case 3:case"end":return n.stop()}},a)}));function l(){return i.apply(this,arguments)}return l}()}},"src-hooks-use-enhance-pagination-demo-1":{component:t.memo(t.lazy(I()(r()().mark(function i(){var l,a,u,h,S,n,P,W;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,43781));case 2:return l=p.sent,a=l.Button,p.next=6,Promise.resolve().then(e.bind(e,63245));case 6:return u=p.sent,h=u.StyledTable,p.next=10,Promise.resolve().then(e.bind(e,37678));case 10:return S=p.sent,n=S.useEnhancePagination,P={1:Array.from({length:10}).map(function(M,s){return{id:"\u7B2C\u4E00\u9875".concat(s)}}),2:Array.from({length:10}).map(function(M,s){return{id:"\u7B2C\u4E8C\u9875".concat(s)}}),3:Array.from({length:2}).map(function(M,s){return{id:"\u7B2C\u4E09\u9875".concat(s)}})},W=function(s){return new Promise(function(w){var o=Object.values(P).reduce(function(U,C){return U+=C.length},0);setTimeout(function(){w({deep:{data:j()(P==null?void 0:P[s==null?void 0:s.current])},total:o})},1e3)})},p.abrupt("return",{default:function(){var s=n(function(){var R=I()(r()().mark(function g(m){var x,d,E,O,T=arguments;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:for(x=T.length,d=new Array(x>1?x-1:0),E=1;E<x;E++)d[E-1]=T[E];return console.log("params rest",m,d),f.next=4,W(m);case 4:return O=f.sent,f.abrupt("return",O);case 6:case"end":return f.stop()}},g)}));return function(g){return R.apply(this,arguments)}}(),{dataPropPath:"deep.data",defaultCurrent:3}),w=s.data,o=w===void 0?{}:w,U=s.run,C=s.pagination,L=s.loading,B=s.refresh,c=s.listData,_=function(){var R=I()(r()().mark(function g(m){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",new Promise(function(E){setTimeout(function(){for(var O=0,T=Object.values(P);O<T.length;O++){var D=T[O],f=D.findIndex(function(k){return k.id==m});f!=-1&&D.splice(f,1)}E(!0)},200)}));case 1:case"end":return d.stop()}},g)}));return function(m){return R.apply(this,arguments)}}(),A=function(){var R=I()(r()().mark(function g(m){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,_(m==null?void 0:m.id);case 2:return d.next=4,B();case 4:case"end":return d.stop()}},g)}));return function(m){return R.apply(this,arguments)}}();return t.createElement("main",null,JSON.stringify(o),t.createElement(h,{className:"mt-20",scroll:{x:"max-content"},rowKey:"id",loading:L,columns:[{title:"\u6D4B\u8BD5\u6570\u636E",dataIndex:"id"},{title:"\u64CD\u4F5C",render:function(g,m,x){return t.createElement(a,{type:"link",onClick:function(){return A(m)}},"\u5220\u9664")}}],dataSource:c,pagination:C}))}});case 15:case"end":return p.stop()}},i)})))),asset:{type:"BLOCK",id:"src-hooks-use-enhance-pagination-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'antd';\r
import { StyledTable } from 'ebaoferc';\r
import { useEnhancePagination } from './index';\r
\r
const store = {\r
  1: Array.from({ length: 10 }).map((_, index) => ({\r
    id: \`\u7B2C\u4E00\u9875\${index}\`,\r
  })),\r
  2: Array.from({ length: 10 }).map((_, index) => ({\r
    id: \`\u7B2C\u4E8C\u9875\${index}\`,\r
  })),\r
  3: Array.from({ length: 2 }).map((_, index) => ({\r
    id: \`\u7B2C\u4E09\u9875\${index}\`,\r
  })),\r
};\r
const getOrderList = (params) => {\r
  return new Promise((r) => {\r
    const total = Object.values(store).reduce(\r
      (sum, arr) => (sum += arr.length),\r
      0,\r
    );\r
    setTimeout(() => {\r
      r({\r
        deep: {\r
          data: [...store?.[params?.current]],\r
        },\r
        total: total,\r
      });\r
    }, 1e3);\r
  });\r
};\r
export default function () {\r
  const {\r
    data = {},\r
    run,\r
    pagination,\r
    loading,\r
    refresh,\r
    listData,\r
  } = useEnhancePagination(\r
    async (params, ...rest) => {\r
      console.log('params rest', params, rest);\r
      const res = await getOrderList(params);\r
      return res as any;\r
    },\r
    { dataPropPath: 'deep.data', defaultCurrent: 3 },\r
  );\r
\r
  const deleteRecord = async (id) => {\r
    return new Promise((resolve) => {\r
      setTimeout(() => {\r
        for (const page of Object.values(store)) {\r
          const findIndex = page.findIndex((item) => item.id == id);\r
          if (findIndex != -1) {\r
            page.splice(findIndex, 1);\r
          }\r
        }\r
        resolve(true);\r
      }, 200);\r
    });\r
  };\r
\r
  const triggerDelete = async (record) => {\r
    await deleteRecord(record?.id);\r
    await refresh();\r
  };\r
\r
  return (\r
    <main>\r
      {JSON.stringify(data)}\r
      <StyledTable\r
        className="mt-20"\r
        scroll={{ x: 'max-content' }}\r
        rowKey="id"\r
        loading={loading}\r
        columns={[\r
          { title: '\u6D4B\u8BD5\u6570\u636E', dataIndex: 'id' },\r
          {\r
            title: '\u64CD\u4F5C',\r
            render(value, record, index) {\r
              return (\r
                <Button type="link" onClick={() => triggerDelete(record)}>\r
                  \u5220\u9664\r
                </Button>\r
              );\r
            },\r
          },\r
        ]}\r
        dataSource={listData}\r
        pagination={pagination}\r
      />\r
    </main>\r
  );\r
}`},antd:{type:"NPM",value:"5.26.4"},ebaoferc:{type:"NPM",value:"2.0.0"},"./index.ts":{type:"FILE",value:e(20939).Z}},entry:"index.tsx"},context:{"./index.ts":b,antd:$,ebaoferc:y,"D:/work/fe/ebao-fe-rc/src/hooks/useEnhancePagination/index.ts":b},renderOpts:{compile:function(){var i=I()(r()().mark(function a(){var u,h=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(862).then(e.bind(e,16862));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,h));case 3:case"end":return n.stop()}},a)}));function l(){return i.apply(this,arguments)}return l}()}}}},49859:function(z,v,e){e.r(v),e.d(v,{demos:function(){return N}});var K=e(15009),r=e.n(K),H=e(5574),j=e.n(H),F=e(99289),I=e.n(F),t=e(67294),$=e(40391),y=e(43781),b=e(63245),N={"src-hooks-use-tabs-table-pagination-demo-0":{component:t.memo(t.lazy(I()(r()().mark(function i(){var l,a,u,h,S,n,P,W,Q,p,M,s;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,40391));case 2:return l=o.sent,a=l.ProFormDateRangePicker,u=l.ProFormText,o.next=7,Promise.resolve().then(e.bind(e,43781));case 7:return h=o.sent,S=h.Form,o.next=11,Promise.resolve().then(e.bind(e,63245));case 11:return n=o.sent,P=n.StyledQueryFilter,W=n.TabSearchTools,Q=n.StyledTable,o.next=17,Promise.resolve().then(e.bind(e,63245));case 17:return p=o.sent,M=p.useTabsTablePagination,s=function(C){var L=C.tabState;return new Promise(function(B){var c=100;setTimeout(function(){B({data:Array.from({length:c}).map(function(_,A){return{id:"$".concat(A,"_tabState: ").concat(L)}}),total:c})},1e3)})},o.abrupt("return",{default:function(){var C=S.useForm(),L=j()(C,1),B=L[0],c=M({defaultTabKey:1,service:function(D){return s(D)}}),_=c.data,A=c.run,R=c.loading,g=c.pagination,m=c.onChangeTab,x=c.processQueryFilterOnReset,d=c.filterConditions,E=c.listData,O=function(){var T=I()(r()().mark(function D(f){return r()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:A(f);case 1:case"end":return J.stop()}},D)}));return function(f){return T.apply(this,arguments)}}();return t.createElement("div",null,t.createElement(P,{labelWidth:100,form:B,onFinish:O,onReset:x},t.createElement(u,{label:"\u9879\u76EE\u540D\u79F0",name:"projectName"}),t.createElement(u,{label:"\u4F01\u4E1A\u540D\u79F0",name:"companyName"}),t.createElement(a,{label:"\u670D\u52A1\u65E5\u671F\u8303\u56F4",name:"time"})),t.createElement(W,{options:[{label:"\u5F85\u5904\u7406",key:1},{label:"\u67E5\u770B",key:2}],onChange:m}),t.createElement("div",null,"\u641C\u7D22\u6761\u4EF6",JSON.stringify(d)),t.createElement(Q,{rowKey:"id",loading:R,columns:[{title:"\u6D4B\u8BD5\u6570\u636E",dataIndex:"id"}],dataSource:E,pagination:g}))}});case 21:case"end":return o.stop()}},i)})))),asset:{type:"BLOCK",id:"src-hooks-use-tabs-table-pagination-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {\r
  ProFormDateRangePicker,\r
  ProFormText,\r
} from '@ant-design/pro-components';\r
import { Form } from 'antd';\r
import { StyledQueryFilter, TabSearchTools, StyledTable } from 'ebaoferc';\r
import { useTabsTablePagination } from 'ebaoferc';\r
\r
const getOrderList = (params) => {\r
  const { tabState } = params;\r
  return new Promise((r) => {\r
    const total = 100;\r
    setTimeout(() => {\r
      r({\r
        data: Array.from({ length: total }).map((_, index) => ({\r
          id: \`$\${index}_tabState: \${tabState}\`,\r
        })),\r
        total: total,\r
      });\r
    }, 1e3);\r
  });\r
};\r
\r
export default () => {\r
  const [searchForm] = Form.useForm();\r
\r
  const {\r
    data: result,\r
    run,\r
    loading,\r
    pagination,\r
    onChangeTab,\r
    processQueryFilterOnReset,\r
    filterConditions,\r
    listData,\r
  } = useTabsTablePagination({\r
    defaultTabKey: 1,\r
    service: (params) => getOrderList(params),\r
  });\r
\r
  const onFinish = async (params) => {\r
    run(params);\r
  };\r
  return (\r
    <div>\r
      <StyledQueryFilter\r
        labelWidth={100}\r
        form={searchForm}\r
        onFinish={onFinish}\r
        onReset={processQueryFilterOnReset}\r
      >\r
        <ProFormText label="\u9879\u76EE\u540D\u79F0" name="projectName" />\r
        <ProFormText label="\u4F01\u4E1A\u540D\u79F0" name="companyName" />\r
        <ProFormDateRangePicker label="\u670D\u52A1\u65E5\u671F\u8303\u56F4" name="time" />\r
      </StyledQueryFilter>\r
\r
      <TabSearchTools\r
        options={[\r
          { label: '\u5F85\u5904\u7406', key: 1 },\r
          { label: '\u67E5\u770B', key: 2 },\r
        ]}\r
        onChange={onChangeTab}\r
      />\r
      <div>\u641C\u7D22\u6761\u4EF6{JSON.stringify(filterConditions)}</div>\r
      <StyledTable\r
        rowKey="id"\r
        loading={loading}\r
        columns={[{ title: '\u6D4B\u8BD5\u6570\u636E', dataIndex: 'id' }]}\r
        dataSource={listData}\r
        pagination={pagination}\r
      />\r
    </div>\r
  );\r
};`},"@ant-design/pro-components":{type:"NPM",value:"2.8.9"},antd:{type:"NPM",value:"5.26.4"},ebaoferc:{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@ant-design/pro-components":$,antd:y,ebaoferc:b},renderOpts:{compile:function(){var i=I()(r()().mark(function a(){var u,h=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(862).then(e.bind(e,16862));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,h));case 3:case"end":return n.stop()}},a)}));function l(){return i.apply(this,arguments)}return l}()}},"src-hooks-use-tabs-table-pagination-demo-1":{component:t.memo(t.lazy(I()(r()().mark(function i(){var l,a,u,h,S,n,P,W,Q,p,M,s;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,40391));case 2:return l=o.sent,a=l.ProFormDateRangePicker,u=l.ProFormText,o.next=7,Promise.resolve().then(e.bind(e,43781));case 7:return h=o.sent,S=h.Form,o.next=11,Promise.resolve().then(e.bind(e,63245));case 11:return n=o.sent,P=n.StyledQueryFilter,W=n.TabSearchTools,Q=n.StyledTable,o.next=17,Promise.resolve().then(e.bind(e,63245));case 17:return p=o.sent,M=p.useTabsTablePagination,s=function(C){var L=C.tabState;return new Promise(function(B){var c=100;setTimeout(function(){B({data:Array.from({length:c}).map(function(_,A){return{id:"$".concat(A,"_tabState: ").concat(L)}}),total:c})},1e3)})},o.abrupt("return",{default:function(){var C=S.useForm(),L=j()(C,1),B=L[0],c=2,_=M({defaultTabKey:c,service:function(D){return s(D)}}),A=_.data,R=_.run,g=_.loading,m=_.pagination,x=_.onChangeTab,d=_.processQueryFilterOnReset,E=_.filterConditions,O=function(){var T=I()(r()().mark(function D(f){return r()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:R(f);case 1:case"end":return J.stop()}},D)}));return function(f){return T.apply(this,arguments)}}();return t.createElement("div",null,t.createElement(P,{labelWidth:100,form:B,onFinish:O,onReset:d},t.createElement(u,{label:"\u9879\u76EE\u540D\u79F0",name:"projectName"}),t.createElement(u,{label:"\u4F01\u4E1A\u540D\u79F0",name:"companyName"}),t.createElement(a,{label:"\u670D\u52A1\u65E5\u671F\u8303\u56F4",name:"time"})),t.createElement(W,{options:[{label:"\u5F85\u5904\u7406",key:1},{label:"\u67E5\u770B",key:2}],onChange:x,tabsProps:{defaultActiveKey:c}}),t.createElement("div",null,"\u641C\u7D22\u6761\u4EF6",JSON.stringify(E)),t.createElement(Q,{rowKey:"id",loading:g,columns:[{title:"\u6D4B\u8BD5\u6570\u636E",dataIndex:"id"}],dataSource:A==null?void 0:A.data,pagination:m}))}});case 21:case"end":return o.stop()}},i)})))),asset:{type:"BLOCK",id:"src-hooks-use-tabs-table-pagination-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {\r
  ProFormDateRangePicker,\r
  ProFormText,\r
} from '@ant-design/pro-components';\r
import { Form } from 'antd';\r
import { StyledQueryFilter, TabSearchTools, StyledTable } from 'ebaoferc';\r
import { useTabsTablePagination } from 'ebaoferc';\r
\r
const getOrderList = (params) => {\r
  const { tabState } = params;\r
  return new Promise((r) => {\r
    const total = 100;\r
    setTimeout(() => {\r
      r({\r
        data: Array.from({ length: total }).map((_, index) => ({\r
          id: \`$\${index}_tabState: \${tabState}\`,\r
        })),\r
        total: total,\r
      });\r
    }, 1e3);\r
  });\r
};\r
\r
export default () => {\r
  const [searchForm] = Form.useForm();\r
  const defaultTabKey = 2;\r
  const {\r
    data: result,\r
    run,\r
    loading,\r
    pagination,\r
    onChangeTab,\r
    processQueryFilterOnReset,\r
    filterConditions,\r
  } = useTabsTablePagination({\r
    defaultTabKey,\r
    service: (params) => getOrderList(params),\r
  });\r
\r
  const onFinish = async (params) => {\r
    run(params);\r
  };\r
  return (\r
    <div>\r
      <StyledQueryFilter\r
        labelWidth={100}\r
        form={searchForm}\r
        onFinish={onFinish}\r
        onReset={processQueryFilterOnReset}\r
      >\r
        <ProFormText label="\u9879\u76EE\u540D\u79F0" name="projectName" />\r
        <ProFormText label="\u4F01\u4E1A\u540D\u79F0" name="companyName" />\r
        <ProFormDateRangePicker label="\u670D\u52A1\u65E5\u671F\u8303\u56F4" name="time" />\r
      </StyledQueryFilter>\r
\r
      <TabSearchTools\r
        options={[\r
          { label: '\u5F85\u5904\u7406', key: 1 },\r
          { label: '\u67E5\u770B', key: 2 },\r
        ]}\r
        onChange={onChangeTab}\r
        tabsProps={{ defaultActiveKey: defaultTabKey }}\r
      />\r
      <div>\u641C\u7D22\u6761\u4EF6{JSON.stringify(filterConditions)}</div>\r
      <StyledTable\r
        rowKey="id"\r
        loading={loading}\r
        columns={[{ title: '\u6D4B\u8BD5\u6570\u636E', dataIndex: 'id' }]}\r
        dataSource={result?.data}\r
        pagination={pagination}\r
      />\r
    </div>\r
  );\r
};`},"@ant-design/pro-components":{type:"NPM",value:"2.8.9"},antd:{type:"NPM",value:"5.26.4"},ebaoferc:{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@ant-design/pro-components":$,antd:y,ebaoferc:b},renderOpts:{compile:function(){var i=I()(r()().mark(function a(){var u,h=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(862).then(e.bind(e,16862));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,h));case 3:case"end":return n.stop()}},a)}));function l(){return i.apply(this,arguments)}return l}()}},"src-hooks-use-tabs-table-pagination-demo-2":{component:t.memo(t.lazy(I()(r()().mark(function i(){var l,a,u,h,S,n,P,W,Q,p,M,s;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,40391));case 2:return l=o.sent,a=l.ProFormDateRangePicker,u=l.ProFormText,o.next=7,Promise.resolve().then(e.bind(e,43781));case 7:return h=o.sent,S=h.Form,o.next=11,Promise.resolve().then(e.bind(e,63245));case 11:return n=o.sent,P=n.StyledQueryFilter,W=n.TabSearchTools,Q=n.StyledTable,o.next=17,Promise.resolve().then(e.bind(e,63245));case 17:return p=o.sent,M=p.useTabsTablePagination,s=function(C){var L=C.tabState;return new Promise(function(B){var c=100;setTimeout(function(){B({data:Array.from({length:c}).map(function(_,A){return{id:"$".concat(A,"_tabState: ").concat(L)}}),total:c})},1e3)})},o.abrupt("return",{default:function(){var C=S.useForm(),L=j()(C,1),B=L[0],c=M({defaultTabKey:1,tabKeyMaps:{1:[3,4]},service:function(T){return s(T)}}),_=c.data,A=c.run,R=c.loading,g=c.pagination,m=c.onChangeTab,x=c.processQueryFilterOnReset,d=c.filterConditions,E=function(){var O=I()(r()().mark(function T(D){return r()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:A(D);case 1:case"end":return k.stop()}},T)}));return function(D){return O.apply(this,arguments)}}();return t.createElement("div",null,t.createElement(P,{labelWidth:100,form:B,onFinish:E,onReset:x},t.createElement(u,{label:"\u9879\u76EE\u540D\u79F0",name:"projectName"}),t.createElement(u,{label:"\u4F01\u4E1A\u540D\u79F0",name:"companyName"}),t.createElement(a,{label:"\u670D\u52A1\u65E5\u671F\u8303\u56F4",name:"time"})),t.createElement(W,{options:[{label:"\u5F85\u5904\u7406",key:1},{label:"\u67E5\u770B",key:2}],onChange:m}),t.createElement("div",null,"\u641C\u7D22\u6761\u4EF6",JSON.stringify(d)),t.createElement(Q,{rowKey:"id",loading:R,columns:[{title:"\u6D4B\u8BD5\u6570\u636E",dataIndex:"id"}],dataSource:_==null?void 0:_.data,pagination:g}))}});case 21:case"end":return o.stop()}},i)})))),asset:{type:"BLOCK",id:"src-hooks-use-tabs-table-pagination-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {\r
  ProFormDateRangePicker,\r
  ProFormText,\r
} from '@ant-design/pro-components';\r
import { Form } from 'antd';\r
import { StyledQueryFilter, TabSearchTools, StyledTable } from 'ebaoferc';\r
import { useTabsTablePagination } from 'ebaoferc';\r
\r
const getOrderList = (params) => {\r
  const { tabState } = params;\r
  return new Promise((r) => {\r
    const total = 100;\r
    setTimeout(() => {\r
      r({\r
        data: Array.from({ length: total }).map((_, index) => ({\r
          id: \`$\${index}_tabState: \${tabState}\`,\r
        })),\r
        total: total,\r
      });\r
    }, 1e3);\r
  });\r
};\r
\r
export default () => {\r
  const [searchForm] = Form.useForm();\r
  const {\r
    data: result,\r
    run,\r
    loading,\r
    pagination,\r
    onChangeTab,\r
    processQueryFilterOnReset,\r
    filterConditions,\r
  } = useTabsTablePagination({\r
    defaultTabKey: 1,\r
    tabKeyMaps: { 1: [3, 4] },\r
    service: (params) => getOrderList(params),\r
  });\r
\r
  const onFinish = async (params) => {\r
    run(params);\r
  };\r
  return (\r
    <div>\r
      <StyledQueryFilter\r
        labelWidth={100}\r
        form={searchForm}\r
        onFinish={onFinish}\r
        onReset={processQueryFilterOnReset}\r
      >\r
        <ProFormText label="\u9879\u76EE\u540D\u79F0" name="projectName" />\r
        <ProFormText label="\u4F01\u4E1A\u540D\u79F0" name="companyName" />\r
        <ProFormDateRangePicker label="\u670D\u52A1\u65E5\u671F\u8303\u56F4" name="time" />\r
      </StyledQueryFilter>\r
\r
      <TabSearchTools\r
        options={[\r
          { label: '\u5F85\u5904\u7406', key: 1 },\r
          { label: '\u67E5\u770B', key: 2 },\r
        ]}\r
        onChange={onChangeTab}\r
      />\r
      <div>\u641C\u7D22\u6761\u4EF6{JSON.stringify(filterConditions)}</div>\r
      <StyledTable\r
        rowKey="id"\r
        loading={loading}\r
        columns={[{ title: '\u6D4B\u8BD5\u6570\u636E', dataIndex: 'id' }]}\r
        dataSource={result?.data}\r
        pagination={pagination}\r
      />\r
    </div>\r
  );\r
};`},"@ant-design/pro-components":{type:"NPM",value:"2.8.9"},antd:{type:"NPM",value:"5.26.4"},ebaoferc:{type:"NPM",value:"2.0.0"}},entry:"index.tsx"},context:{"@ant-design/pro-components":$,antd:y,ebaoferc:b},renderOpts:{compile:function(){var i=I()(r()().mark(function a(){var u,h=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(862).then(e.bind(e,16862));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,h));case 3:case"end":return n.stop()}},a)}));function l(){return i.apply(this,arguments)}return l}()}}}},55101:function(z,v,e){e.r(v),e.d(v,{texts:function(){return K}});const K=[{value:"todo",paraId:0,tocIndex:0},{value:`$ npm i ebaoferc
`,paraId:1,tocIndex:2}]},43900:function(z,v,e){e.r(v),e.d(v,{texts:function(){return K}});const K=[{value:"\u5927\u5C4F\u4F7F\u7528\u3002 useHandleWindowResize \u6839\u636E\u8BBE\u8BA1\u7A3F 1920 * 1080 \u548C\u5F53\u524D\u5C4F\u5E55\u5927\u5C0F\u3002\u7B97\u51FA\u7F29\u653E\u6BD4\u4F8B\u3002\u7136\u540E\u53EF\u4EE5\u901A\u8FC7 transform scale\u3002\u8FDB\u884C\u6574\u4F53\u7F29\u653E\u3002\uFF08\u6CE8\u610F Echarts \u5728\u7F29\u653E\u65F6\uFF0C\u9700\u8981\u7528 svg \u6E32\u67D3\u6A21\u5F0F\uFF09",paraId:0,tocIndex:1},{value:"\u5BFC\u5165\u5BF9\u5E94 hooks",paraId:1,tocIndex:2},{value:`import { useHandleWindowResize } from 'ebaoferc';
`,paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"width",paraId:3,tocIndex:4},{value:"\u8BBE\u8BA1\u7A3F\u5BBD\u5EA6",paraId:3,tocIndex:4},{value:"\xA0number",paraId:3,tocIndex:4},{value:"1920",paraId:3,tocIndex:4},{value:"height",paraId:3,tocIndex:4},{value:"\u8BBE\u8BA1\u7A3F\u9AD8\u5EA6",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"1080",paraId:3,tocIndex:4},{value:"useTime \u8FD4\u56DE\u4E00\u4E2A TimeValue \u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:4,tocIndex:5},{value:'dateStr (string): \u683C\u5F0F\u5316\u540E\u7684\u65E5\u671F\u5B57\u7B26\u4E32\uFF0C\u4F8B\u5982 "2024 \u5E74 07 \u6708 22 \u65E5"\u3002',paraId:5,tocIndex:5},{value:'weekStr (string): \u683C\u5F0F\u5316\u540E\u7684\u661F\u671F\u5B57\u7B26\u4E32\uFF0C\u4F8B\u5982 "\u661F\u671F\u4E00"\u3002',paraId:5,tocIndex:5},{value:'timeStr (string): \u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4\u5B57\u7B26\u4E32\uFF0C\u4F8B\u5982 "14:30:45"\u3002',paraId:5,tocIndex:5},{value:"\u5BFC\u5165\u5BF9\u5E94 hooks",paraId:6,tocIndex:6},{value:`import { useTime } from 'ebaoferc';
`,paraId:7,tocIndex:6}]},68707:function(z,v,e){e.r(v),e.d(v,{texts:function(){return K}});const K=[{value:"useEnhancePagination \u662F\u57FA\u4E8E ahooks \u4E2D\u7684 usePagination \u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u7684\u3002\u7528\u4E8E\u589E\u5F3A\u5904\u7406\u8868\u683C\u5206\u9875\u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u589E\u5F3A\u884C\u4E3A\uFF1A",paraId:1,tocIndex:0},{value:"\u76F4\u63A5\u66B4\u9732\u5217\u8868\u6570\u636E\u6E90\uFF0C\u65B9\u4FBF\u4F7F\u7528\u3002",paraId:2,tocIndex:0},{value:"\u81EA\u52A8\u5904\u7406\uFF1A\u5237\u65B0\u5F53\u524D\u9875\u6570\u7684\u8868\u683C\uFF0C\u6570\u636E\u5217\u8868\u7684\u957F\u5EA6\u4E3A 0 \uFF0C\u81EA\u52A8\u5207\u6362\u5230\u7B2C\u4E00\u9875\u3002",paraId:2,tocIndex:0},{value:"\u50CF\u5F80\u5E38\u4F7F\u7528 usePagination \u4E00\u6837\uFF0C\u53BB\u4F7F\u7528 useEnhancePagination \u5373\u53EF",paraId:3,tocIndex:2},{value:"\u989D\u5916\u66B4\u9732\u4E86 ",paraId:4,tocIndex:2},{value:"listData",paraId:4,tocIndex:2},{value:"\uFF0C\u80FD\u591F\u81EA\u52A8\u7D22\u5F15\u5217\u8868\u6570\u636E\u6E90\u3002",paraId:4,tocIndex:2},{value:"\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u7684\u5217\u8868\u6570\u636E\u4E0D\u662F\u5728 ",paraId:5,tocIndex:3},{value:"'data'",paraId:5,tocIndex:3},{value:" \u5C5E\u6027\u4E2D\uFF0C\u8FD8\u652F\u6301\u914D\u7F6E ",paraId:5,tocIndex:3},{value:"dataPropPath",paraId:5,tocIndex:3},{value:" \u81EA\u52A8\u67E5\u8BE2\u5217\u8868\u6570\u636E\u6E90",paraId:5,tocIndex:3},{value:"\u5728 usePagination \u7684\u57FA\u7840\u4E0A\u65B0\u589E\u4E86 \u{1F447}",paraId:6,tocIndex:5},{value:"\u53C2\u6570",paraId:7,tocIndex:5},{value:"\u8BF4\u660E",paraId:7,tocIndex:5},{value:"\u7C7B\u578B",paraId:7,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:7,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:5},{value:"dataPropPath",paraId:7,tocIndex:5},{value:"\u5217\u8868\u6570\u636E\u6E90\u7684\u5C5E\u6027\u8DEF\u5F84",paraId:7,tocIndex:5},{value:"string",paraId:7,tocIndex:5},{value:" \uFF08\u5982\u679C\u9700\u8981\u6DF1\u5C42\u67E5\u8BE2\u6570\u636E\u6E90,\u53EF\u914D\u7F6E\u683C\u5F0F\u4E3A ",paraId:7,tocIndex:5},{value:"a.b.c",paraId:7,tocIndex:5},{value:" \u7684\u5B57\u7B26\u4E32\u5B9E\u73B0\u67E5\u8BE2\uFF09",paraId:7,tocIndex:5},{value:"\u5426",paraId:7,tocIndex:5},{value:"'data'",paraId:7,tocIndex:5},{value:"\u5728 usePagination \u7684\u57FA\u7840\u4E0A\u65B0\u589E\u4E86 \u{1F447}",paraId:8,tocIndex:6},{value:"\u5C5E\u6027",paraId:9,tocIndex:6},{value:"\u8BF4\u660E",paraId:9,tocIndex:6},{value:"\u7C7B\u578B",paraId:9,tocIndex:6},{value:"listData",paraId:9,tocIndex:6},{value:"\u5217\u8868\u6570\u636E\u6E90",paraId:9,tocIndex:6},{value:"Array<any>",paraId:9,tocIndex:6}]},12521:function(z,v,e){e.r(v),e.d(v,{texts:function(){return K}});const K=[{value:"useTabsTablePagination \u662F\u57FA\u4E8E useEnhancePagination \u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u7684\u3002\u7528\u4E8E\u5904\u7406\u540C\u65F6\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"StyledQueryFilter",paraId:0,tocIndex:1},{value:" \u4E0E Tab \u7EC4\u4EF6\uFF08",paraId:0,tocIndex:1},{value:"TabSearchTools",paraId:0,tocIndex:1},{value:" \uFF09\u5BF9\u8868\u683C\u8FDB\u884C\u7B5B\u9009\u7684\u4E1A\u52A1\u573A\u666F\u3002",paraId:0,tocIndex:1},{value:"\u8BBE\u7F6E tabState \u7684\u9ED8\u8BA4\u503C(",paraId:1,tocIndex:3},{value:"defaultTabKey",paraId:1,tocIndex:3},{value:") ; \u4F20\u5165\u8C03\u7528\u63A5\u53E3\u7684\u51FD\u6570(",paraId:1,tocIndex:3},{value:"service",paraId:1,tocIndex:3},{value:")",paraId:1,tocIndex:3},{value:`\u4ECE\u8FD4\u56DE\u7ED3\u679C\u4E2D\u53D6\u51FA\uFF1A
`,paraId:1,tocIndex:3},{value:"onChangeTab",paraId:2,tocIndex:3},{value:" \u7ED1\u5B9A\u5230 Tab \u7EC4\u4EF6\u7684 change \u4E8B\u4EF6\u4E0A",paraId:2,tocIndex:3},{value:"processQueryFilterOnReset",paraId:2,tocIndex:3},{value:" \u7ED1\u5B9A\u5230 StyledQueryFilter \u7EC4\u4EF6\u7684 onReset \u4E8B\u4EF6\u4E0A",paraId:2,tocIndex:3},{value:"loading",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"pagination",paraId:2,tocIndex:3},{value:" \u50CF\u5F80\u5E38\u4F7F\u7528 ",paraId:2,tocIndex:3},{value:"useEnhancePagination",paraId:2,tocIndex:3},{value:" \u4E00\u6837\uFF0C\u8BBE\u7F6E\u5230 Table \u4E0A",paraId:2,tocIndex:3},{value:"\u5C06 hooks \u4E2D\u7684 defaultTabKey \u7684\u503C\u8BBE\u7F6E\u6210\u4F60\u671F\u671B\u9ED8\u8BA4\u9009\u4E2D tab \u9879\u7684\u503C",paraId:3,tocIndex:4},{value:"\u7ED9 Tab \u7EC4\u4EF6\u8BBE\u7F6E defaultActiveKey\uFF08\u9ED8\u8BA4\u6D3B\u8DC3\u72B6\u6001\u7684 key\uFF09",paraId:3,tocIndex:4},{value:"\u7ED9 hooks \u8BBE\u7F6E defaultTabKey\uFF0C\u662F\u903B\u8F91\u5C42\u7684\u9ED8\u8BA4\u503C\uFF1B\u8981\u5C06\u5176\u8868\u73B0\u5230\u89C6\u56FE\u4E0A\uFF0C\u9700\u8981\u7ED9 Tab \u7EC4\u4EF6\u8BBE\u7F6E defaultActiveKey\u3002",paraId:4,tocIndex:4},{value:"\u5982\u679C\u67D0\u4E9B tabState \u7684\u679A\u4E3E\u5728\u540E\u7AEF\u662F\u805A\u5408\u7684\uFF0C\u5E76\u4E14\u540E\u7AEF\u671F\u671B\u524D\u7AEF\u81EA\u5DF1\u6620\u5C04\u597D\u5B9E\u9645\u7684\u5168\u91CF\u679A\u4E3E\uFF0C\u90A3\u4E48 useTabsTablePagination \u4E5F\u80FD\u591F\u5E2E\u5230\u4F60\u3002",paraId:5,tocIndex:5},{value:"\u914D\u7F6E ",paraId:6,tocIndex:5},{value:"tabKeyMaps: { [key: string]: any[] }",paraId:6,tocIndex:5},{value:" \u5373\u53EF",paraId:6,tocIndex:5},{value:`  const { \u2026\u2026 } = useTabsTablePagination({\r
    \u2026\u2026,\r
    tabKeyMaps: { 1: [3, 4] },\r
  });
`,paraId:7,tocIndex:5},{value:"\u805A\u5408\uFF1F",paraId:8,tocIndex:5},{value:"\u4F8B\u5982\u9875\u9762\u5C55\u793A\u7684 ",paraId:9,tocIndex:5},{value:"\u5F85\u5904\u7406",paraId:9,tocIndex:5},{value:" \u53EF\u80FD\u662F\u72B6\u6001 ",paraId:9,tocIndex:5},{value:"\u5DF2\u521B\u5EFA(value:3)",paraId:9,tocIndex:5},{value:" \u548C ",paraId:9,tocIndex:5},{value:"\u672A\u5206\u914D(value:4)",paraId:9,tocIndex:5},{value:" \u4E24\u4E2A\u72B6\u6001\u7684\u805A\u5408\u3002",paraId:9,tocIndex:5},{value:"\u53C2\u6570",paraId:10,tocIndex:7},{value:"\u8BF4\u660E",paraId:10,tocIndex:7},{value:"\u7C7B\u578B",paraId:10,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B",paraId:10,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:7},{value:"defaultTabKey",paraId:10,tocIndex:7},{value:"tab \u7684\u9ED8\u8BA4\u503C",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:" | ",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"\u662F",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"tabKeyAlias",paraId:10,tocIndex:7},{value:"\u6807\u8BB0 tab \u72B6\u6001\u7684\u5B57\u6BB5\u540D\u79F0\uFF0C\u4F1A\u81EA\u52A8\u5C06\u5176\u66F4\u65B0\u5230\u7B5B\u9009\u6761\u4EF6\u4E2D\uFF0C\u4F20\u9012\u7ED9\u540E\u7AEF",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"tabState",paraId:10,tocIndex:7},{value:"service",paraId:10,tocIndex:7},{value:"usePagination \u7684 service",paraId:10,tocIndex:7},{value:"function",paraId:10,tocIndex:7},{value:"\u662F",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"tabKeyMaps",paraId:10,tocIndex:7},{value:"tabState \u7684\u6620\u5C04\u503C",paraId:10,tocIndex:7},{value:"{ [key: string]: any[] }",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"options",paraId:10,tocIndex:7},{value:"usePagination \u7684 options",paraId:10,tocIndex:7},{value:"PaginationOptions<any, any>",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"\u9664\u4E86 useEnhancePagination \u8FD4\u56DE\u7684 api \u4E4B\u5916\uFF0C\u8FD8\u989D\u5916\u63D0\u4F9B\u4E86\u4EE5\u4E0B api",paraId:11,tocIndex:8},{value:"processQueryFilterOnReset\uFF08reset form \u56DE\u8C03\u51FD\u6570\uFF09",paraId:12,tocIndex:8},{value:"onChangeTab tab \u5207\u6362\u56DE\u8C03\u51FD\u6570",paraId:12,tocIndex:8},{value:"filterConditions \u5B58\u50A8\u7684 search params",paraId:12,tocIndex:8},{value:"\u5C5E\u6027",paraId:13,tocIndex:8},{value:"\u8BF4\u660E",paraId:13,tocIndex:8},{value:"\u7C7B\u578B",paraId:13,tocIndex:8},{value:"processQueryFilterOnReset",paraId:13,tocIndex:8},{value:"\u81EA\u52A8\u5904\u7406\u7B5B\u9009\u8868\u5355\u70B9\u51FB ",paraId:13,tocIndex:8},{value:"\u91CD\u7F6E",paraId:13,tocIndex:8},{value:" \u6309\u94AE\u7684\u903B\u8F91",paraId:13,tocIndex:8},{value:"function",paraId:13,tocIndex:8},{value:"onChangeTab",paraId:13,tocIndex:8},{value:"\u81EA\u52A8\u5904\u7406 Tab \u7EC4\u4EF6\u7684 change \u4E8B\u4EF6\u4E0E\u7B5B\u9009\u7684\u8054\u52A8\u903B\u8F91",paraId:13,tocIndex:8},{value:"function",paraId:13,tocIndex:8},{value:"filterConditions",paraId:13,tocIndex:8},{value:"\u66B4\u9732\u5B9E\u65F6\u7684\u7B5B\u9009\u6761\u4EF6",paraId:13,tocIndex:8},{value:"\u4E00\u4E2A\u5FC5\u7136\u5305\u542B ",paraId:13,tocIndex:8},{value:"page\u3001limit\u3001tabKey",paraId:13,tocIndex:8},{value:" \u7684\u5BF9\u8C61",paraId:13,tocIndex:8}]},20939:function(z,v){v.Z=`import { usePagination } from 'ahooks';\r
import {\r
  Data,\r
  PaginationOptions,\r
  PaginationResult,\r
  Params,\r
  Service,\r
} from 'ahooks/lib/usePagination/types';\r
import { isNullOrUndefined } from 'ebaoferc/utils';\r
import { useMemo } from 'react';\r
const deepSearchProp = (current, path: string[]) => {\r
  if (path?.length === 1) return current?.[path?.[0]];\r
  return deepSearchProp(current?.[path?.[0]], path.slice(1));\r
};\r
const getPropByPath = (target: object, path: string) => {\r
  const pathArr = path.split('.');\r
  return deepSearchProp(target, pathArr);\r
};\r
\r
export type TUseEnhancePaginationOptions<\r
  TData extends Data,\r
  TParams extends Params,\r
> = PaginationOptions<TData, TParams> & {\r
  dataPropPath?: string;\r
};\r
export type TUseEnhancePaginationOutput<\r
  TData extends Data,\r
  TParams extends Params,\r
> = PaginationResult<TData, TParams> & {\r
  listData: Array<any>;\r
};\r
export function useEnhancePagination<\r
  TData extends Data,\r
  TParams extends Params,\r
>(\r
  service: Service<TData, TParams>,\r
  options?: TUseEnhancePaginationOptions<TData, TParams>,\r
): TUseEnhancePaginationOutput<TData, TParams> {\r
  const { dataPropPath = 'data' } = options ?? {};\r
\r
  const paginationHookRes = usePagination(service, {\r
    ...options,\r
    onSuccess: (result: TData, args: TParams) => {\r
      if (!isNullOrUndefined(options?.onSuccess))\r
        options?.onSuccess?.(result, args);\r
      const data = getPropByPath(result, dataPropPath);\r
      const params = args?.[0];\r
      if (Array.isArray(data) && !data?.length && params?.current > 1)\r
        paginationHookRes.pagination.changeCurrent(1);\r
    },\r
  });\r
\r
  const listData = useMemo(() => {\r
    return getPropByPath(paginationHookRes.data ?? {}, dataPropPath) ?? [];\r
  }, [paginationHookRes.data, dataPropPath]);\r
\r
  return {\r
    listData,\r
    ...paginationHookRes,\r
  };\r
}\r
`}}]);
