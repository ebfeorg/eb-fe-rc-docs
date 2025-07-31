"use strict";(self.webpackChunkebaoferc=self.webpackChunkebaoferc||[]).push([[653],{88944:function(a,_,n){n.r(_);var i=n(76311),u=n(93359),c=n(61788),m=n(19977),h=n(91558),d=n(24268),f=n(96057),x=n(85939),s=n(53683),l=n(64389),o=n(67294),r=n(65576),e=n(85893);function t(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"sliderverify",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sliderverify",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SliderVerify"]}),(0,e.jsx)("p",{children:r.texts[0].value}),(0,e.jsxs)("h2",{id:"\u5B89\u88C5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5B89\u88C5"]}),(0,e.jsx)(d.Z,{lang:"bash",children:r.texts[1].value}),(0,e.jsxs)("h2",{id:"\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,e.jsx)("p",{children:r.texts[2].value}),(0,e.jsx)(d.Z,{lang:"tsx",children:r.texts[3].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(s.Dl,{demo:{id:"sliderverify-demo-0"},previewerProps:{}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"props",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#props",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Props"]}),(0,e.jsx)(d.Z,{lang:"typescript",children:r.texts[4].value})]})]})})})}_.default=t},65576:function(a,_,n){n.r(_),n.d(_,{texts:function(){return i}});const i=[{value:"\u6ED1\u5757\u9A8C\u8BC1\u7801\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:`npm install ebaoferc
`,paraId:1,tocIndex:1},{value:"\u5BFC\u5165\u5BF9\u5E94\u7EC4\u4EF6",paraId:2,tocIndex:2},{value:`import { SliderVerify } from 'ebaoferc';
`,paraId:3,tocIndex:2},{value:`interface SliderVerifyProps {\r
  className?: string;\r
  // \u5173\u95ED\u56DE\u8C03\r
  onClose?: () => void;\r
  // \u6210\u529F\u56DE\u8C03\r
  onSuccess?: (result: any) => void;\r
  // \u6821\u9A8C\u5931\u8D25\u56DE\u8C03\r
  onFail?: () => void;\r
  // \u83B7\u53D6\u9A8C\u8BC1\u7684\u56FE\u7247\u63A5\u53E3\uFF0C\u9700\u8981\u7B26\u5408\u63A5\u53E3\u5B9A\u4E49\r
  getVerifyCode: () => Promise<{\r
    id: string;\r
    captcha: {\r
      backgroundImage: string;\r
      sliderImage: string;\r
      backgroundImageWidth: number;\r
      backgroundImageHeight: number;\r
      sliderImageWidth: number;\r
      sliderImageHeight: number;\r
    };\r
  }>;\r
  // \u9A8C\u8BC1\u6ED1\u52A8\u7ED3\u679C\u7ED3\u679C\uFF0C\u9700\u8981\u7B26\u5408\u63A5\u53E3\u5B9A\u4E49\r
  checkVerifyCode: (\r
    params?: Partial<ICurrentCaptchaConfig> & { id: string },\r
  ) => Promise<{\r
    matching: boolean;\r
    smsSendKey: string;\r
  }>;\r
}
`,paraId:4,tocIndex:4}]}}]);
