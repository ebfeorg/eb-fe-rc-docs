"use strict";(self.webpackChunkebaoferc=self.webpackChunkebaoferc||[]).push([[484],{99066:function(r,n,_){_.r(n);var d=_(76311),u=_(93359),c=_(61788),h=_(19977),x=_(91558),s=_(24268),m=_(96057),f=_(85939),o=_(53683),t=_(64389),i=_(67294),a=_(29123),e=_(85893);function l(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(t.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"tabsearchtools",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tabsearchtools",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"TabSearchTools"]}),(0,e.jsx)("p",{children:a.texts[0].value}),(0,e.jsxs)("h2",{id:"\u5B89\u88C5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5B89\u88C5"]}),(0,e.jsx)(s.Z,{lang:"bash",children:a.texts[1].value}),(0,e.jsxs)("h2",{id:"\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,e.jsx)("p",{children:a.texts[2].value}),(0,e.jsx)(s.Z,{lang:"tsx",children:a.texts[3].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(o.Dl,{demo:{id:"tabsearchtools-demo-0"},previewerProps:{}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"props",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#props",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"props"]}),(0,e.jsx)(s.Z,{lang:"typescript",children:a.texts[4].value})]})]})})})}n.default=l},29123:function(r,n,_){_.r(n),_.d(n,{texts:function(){return d}});const d=[{value:"\u5C01\u88C5\u7684 Antd \u7684 Tab \u7EC4\u4EF6\uFF0C\u914D\u5408\u641C\u7D22\u8868\u5355\u548C\u8868\u683C\u4F7F\u7528",paraId:0,tocIndex:0},{value:`npm install ebaoferc
`,paraId:1,tocIndex:1},{value:"\u5BFC\u5165\u5BF9\u5E94\u7EC4\u4EF6",paraId:2,tocIndex:2},{value:`import { TabSearchTools } from 'ebaoferc';
`,paraId:3,tocIndex:2},{value:`import { TabsProps } from 'antd';\r
\r
type TabSearchToolOption = Required<TabsProps>['items'][0];\r
type OptionAliasMap<T> = {\r
  [key in keyof T]: keyof TabSearchToolOption;\r
};\r
export type TTabSearchToolsProps<T = any> = {\r
  // tab \u7684\u9009\u9879\u5217\u8868\r
  options: T[];\r
  // \u652F\u6301\u4E3A\u5217\u8868\u9009\u9879\u7684\u5C5E\u6027\u540D\u8BBE\u7F6E\u522B\u540D\uFF08\u6709\u7C7B\u578B\u63D0\u793A\uFF09\r
  alias?: OptionAliasMap<T>;\r
  // \u6539\u53D8\u9009\u9879\u89E6\u53D1\u7684 change \u4E8B\u4EF6\r
  onChange: (activeKey: string) => any;\r
  // antd tab props\r
  tabsProps?: TabsProps;\r
};
`,paraId:4,tocIndex:4}]}}]);
