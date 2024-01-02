(this.webpackJsonpui_v2=this.webpackJsonpui_v2||[]).push([[8],{1035:function(e,t,n){"use strict";n.d(t,"b",(function(){return d.a}));var a=n(0),i=n.n(a),c=n(863),r=n(5),o=n(12),s=n(19),l=n(17),d=n(835);var u=function(e){var t=i.a.useRef(d.a).current,n=t.experimentContributionsState((function(e){return e}));return i.a.useEffect((function(){n.data||t.fetchExperimentContributions(e)}),[n.data]),i.a.useEffect((function(){return function(){t.destroy()}}),[]),{experimentContributionsState:n}},m=(n(1532),n(1));function v(e){var t,n,a=e.experimentId,i=e.experimentName,d=u(a).experimentContributionsState;var v=new Date;return Object(m.jsx)(o.a,{children:Object(m.jsxs)("div",{className:"ExperimentContributions",children:[Object(m.jsx)(r.n,{component:"h2",size:18,weight:600,tint:100,children:"Contributions"}),Object(m.jsx)("div",{className:"ExperimentContributions__HeatMap",children:Object(m.jsx)(c.a,{startDate:function(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}(v,-300),endDate:v,onCellClick:function(){Object(l.b)(s.a.dashboard.activityCellClick)},additionalQuery:' and run.experiment == "'.concat(i,'"'),data:Object.keys(null!==(t=null===(n=d.data)||void 0===n?void 0:n.activity_map)&&void 0!==t?t:{}).map((function(e){var t;return[new Date(e),null===(t=d.data)||void 0===t?void 0:t.activity_map[e]]}))})})]})})}var j=i.a.memo(v);t.a=j},1532:function(e,t,n){},1533:function(e,t,n){},1534:function(e,t,n){},1535:function(e,t,n){},1536:function(e,t,n){},1537:function(e,t,n){},1538:function(e,t,n){},1551:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n(0),c=n.n(i),r=n(19),o=n(17),s=n(1035),l=n(16),d=n.n(l),u=n(92),m=n(141),v=n(5),j=(n(1533),n(1));var p=function(e){var t,n=e.sidebarRef,i=e.overviewSectionRef,r=e.setContainerHeight,o=e.overviewSectionContentRef,s=e.description,l=Object(u.j)().url,p=c.a.useRef(null),b=c.a.useState(!1),f=Object(a.a)(b,2),h=f[0],x=f[1],_=c.a.useState(0),O=Object(a.a)(_,2),g=O[0],C=O[1];return c.a.useEffect((function(){var e;C(null===p||void 0===p||null===(e=p.current)||void 0===e?void 0:e.offsetHeight)}),[null===p||void 0===p||null===(t=p.current)||void 0===t?void 0:t.offsetHeight,h]),c.a.useEffect((function(){var e,t,a;(null===o||void 0===o||null===(e=o.current)||void 0===e?void 0:e.offsetHeight)>(null===n||void 0===n||null===(t=n.current)||void 0===t?void 0:t.childNodes[0].offsetHeight)?r("100%"):r((null===n||void 0===n||null===(a=n.current)||void 0===a?void 0:a.childNodes[0].offsetHeight)+40)}),[g]),Object(j.jsx)("div",{className:"ExperimentOverviewSidebar ScrollBar__hidden",ref:n,onScroll:function(e){var t;null===i||void 0===i||null===(t=i.current)||void 0===t||t.scrollTo(0,e.target.scrollTop)},children:Object(j.jsx)("div",{className:"ExperimentOverviewSidebar__wrapper",children:Object(j.jsxs)("div",{className:"ExperimentOverviewSidebar__section ExperimentOverviewSidebar__section__descriptionBox",children:[Object(j.jsxs)("div",{className:"ExperimentOverviewSidebar__section__descriptionBox__header",children:[Object(j.jsx)(v.n,{weight:600,size:18,tint:100,component:"h3",children:"Description"}),Object(j.jsx)(m.c,{to:"".concat(l.split("/").slice(0,-1).join("/"),"/settings"),children:Object(j.jsx)(v.c,{withOnlyIcon:!0,size:"small",color:"secondary",children:Object(j.jsx)(v.f,{name:"edit"})})})]}),Object(j.jsx)("div",{className:d()("ExperimentOverviewSidebar__section__descriptionBox__description",{showAll:h},{hasMore:g>=72&&!h}),ref:p,children:Object(j.jsx)(v.n,{tint:70,children:s||"No description"})}),g>=72&&Object(j.jsx)("div",{className:"ExperimentOverviewSidebar__section__descriptionBox__seeMoreButtonBox",onClick:function(){x(!h)},children:Object(j.jsx)(v.n,{size:12,weight:600,children:h?"See less":"See more"})})]})})})},b=n(910),f=n(914),h=n(21),x=n(835);n(1534);function _(e){var t=e.experimentName,n=i.useState({source:"",id:""}),c=Object(a.a)(n,2),r=c[0],o=c[1],s=i.useRef(x.a).current.experimentContributionsState((function(e){return e})),l=i.useMemo((function(){var e,t;return{totalRunsCount:(null===(e=s.data)||void 0===e?void 0:e.num_runs)||0,archivedRuns:(null===(t=s.data)||void 0===t?void 0:t.num_archived_runs)||0}}),[s]),d=l.totalRunsCount,u=l.archivedRuns,m=i.useMemo((function(){return{runs:{label:"runs",icon:"runs",count:d-u,iconBgColor:"#1473E6",navLink:"/runs?select=".concat(Object(h.c)({query:"run.experiment == '".concat(t,"'")}))},archived:{label:"archived",icon:"archive",count:u,iconBgColor:"#606986",navLink:"/runs?select=".concat(Object(h.c)({query:"run.archived == True and run.experiment == '".concat(t,"'")}))}}}),[d,u,t]),p=i.useMemo((function(){var e,n;return{active:{label:"Active",count:(null===(e=s.data)||void 0===e?void 0:e.num_active_runs)||0,icon:"runs",iconBgColor:"#18AB6D",navLink:"/runs?select=".concat(Object(h.c)({query:"run.active == True and run.experiment == '".concat(t,"'")}))},finished:{label:"Finished",icon:"runs",count:d-((null===(n=s.data)||void 0===n?void 0:n.num_active_runs)||0),iconBgColor:"#83899e",navLink:"/runs?select=".concat(Object(h.c)({query:"run.active == False and run.experiment == '".concat(t,"'")}))}}}),[s,t,d]),_=i.useMemo((function(){return Object.values(p).map((function(e){var t=e.label,n=e.iconBgColor,a=void 0===n?"#000":n,i=e.count;return{highlighted:r.id===t,label:t,color:a,percent:0===d?0:i/d*100}}))}),[p,d,r]),O=i.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";o({source:t,id:e})}),[]),g=i.useCallback((function(){o({source:"",id:""})}),[]);return Object(j.jsxs)("div",{className:"ExperimentStatistics",children:[Object(j.jsxs)(v.n,{className:"ExperimentStatistics__totalRuns",component:"p",tint:100,weight:700,size:14,children:["Total runs: ",d]}),Object(j.jsx)("div",{className:"ExperimentStatistics__cards",children:Object.values(m).map((function(e){var t=e.label,n=e.icon,a=e.count,i=e.iconBgColor,c=e.navLink;return Object(j.jsx)(b.a,{label:t,icon:n,count:a,navLink:c,iconBgColor:i,onMouseOver:O,onMouseLeave:g,highlighted:!!c&&r.id===t,isLoading:s.loading},t)}))}),Object(j.jsx)(v.n,{className:"ExperimentStatistics__trackedSequences",component:"p",tint:100,weight:700,size:14,children:"Runs status"}),Object(j.jsx)("div",{className:"ExperimentStatistics__cards",children:Object.values(p).map((function(e){var t=e.label,n=e.icon,a=e.count,i=e.iconBgColor,c=e.navLink;return Object(j.jsx)(b.a,{label:t,icon:n,count:a,navLink:c,iconBgColor:i,onMouseOver:O,onMouseLeave:g,highlighted:!!c&&"card"===r.source&&r.id===t,outlined:r.id===t,isLoading:s.loading},t)}))}),Object(j.jsx)("div",{className:"ExperimentStatistics__bar",children:Object(j.jsx)(f.a,{data:_,onMouseOver:O,onMouseLeave:g})})]})}_.displayName="ExperimentStatistics";var O=i.memo(_),g=n(2),C=n(908),N=n(6),y=n(74),S=n.n(y),w=n(69),E=n(82),R=n(8),k=n.n(R),M=n(26),D=n(838),B=n(741);var T=function(){var e=Object(D.a)().call,t=Object(B.a)(function(){var t=Object(M.a)(k.a.mark((function t(n,a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(n,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),n=t.fetchData;return{fetchExperimentContributionsFeed:function(e,t){return n({experimentId:e,queryParams:t})},experimentContributionsFeedState:t.state,destroy:t.destroy}}();var H=function(e,t){var n,i,r=c.a.useState([]),o=Object(a.a)(r,2),s=o[0],l=o[1],d=c.a.useRef(T).current,u=d.experimentContributionsFeedState((function(e){return e})),m=c.a.useRef(x.a).current.experimentContributionsState((function(e){return e}));c.a.useEffect((function(){return w.a.isEmpty(u.data)&&d.fetchExperimentContributionsFeed(e,{limit:25}),function(){return d.destroy()}}),[]),c.a.useEffect((function(){var e;if(null===(e=u.data)||void 0===e?void 0:e.length){var t=[].concat(Object(N.a)(s),Object(N.a)(u.data));l(t)}}),[u.data]);var v=c.a.useMemo((function(){var n={};s.length&&((null===s||void 0===s?void 0:s.reduce((function(e,t){var n=S()(1e3*t.creation_time).format(E.h);return e.includes(n)||t.archived||e.push(n),e}),[])).forEach((function(e){n[e]={}})),null===s||void 0===s||s.forEach((function(a){if(!a.archived){var i,c,r=S()(1e3*a.creation_time).format(E.h),o=S()(1e3*a.creation_time).format(E.g),s={name:a.name,date:S()(1e3*a.creation_time).format(E.i),hash:a.run_id,creation_time:a.creation_time,experiment:t,experimentId:e};(null===(i=n[r])||void 0===i||null===(c=i[o])||void 0===c?void 0:c.length)?n[r][o].push(s):n[r][o]=[s]}})));return n}),[s,t,e]);return{isLoading:u.loading,data:v,totalRunsCount:null===(n=m.data)||void 0===n?void 0:n.num_runs,archivedRunsCount:null===(i=m.data)||void 0===i?void 0:i.num_archived_runs,fetchedCount:s.length,loadMore:function(){u.data&&!u.loading&&d.fetchExperimentContributionsFeed(e,{limit:25,offset:s[s.length-1].run_id})}}};function F(e){var t=e.experimentId,n=e.experimentName,a=H(t,n);return Object(j.jsx)(C.a,Object(g.a)({},a))}var I=c.a.memo(F);n(1535);var L=function(e){var t=c.a.useRef(null),n=c.a.useRef(null),i=c.a.useRef(null),l=c.a.useState(0),d=Object(a.a)(l,2),u=d[0],m=d[1];return c.a.useEffect((function(){o.a(r.a.experiment.tabs.overview.tabView)}),[]),Object(j.jsxs)("div",{className:"ExperimentOverviewTab",ref:n,onScroll:function(e){var n;null===t||void 0===t||null===(n=t.current)||void 0===n||n.scrollTo(0,e.target.scrollTop)},children:[Object(j.jsx)("div",{className:"ExperimentOverviewTab__content",ref:i,style:{height:u},children:Object(j.jsxs)("div",{className:"ExperimentOverviewTab__content__section",children:[Object(j.jsx)(O,{experimentName:e.experimentName}),Object(j.jsx)(s.a,{experimentId:e.experimentId,experimentName:e.experimentName}),Object(j.jsx)(I,{experimentId:e.experimentId,experimentName:e.experimentName})]})}),Object(j.jsx)(p,{sidebarRef:t,overviewSectionRef:n,setContainerHeight:m,overviewSectionContentRef:i,description:e.description})]})};t.default=L},1553:function(e,t,n){"use strict";n.r(t),n.d(t,"experimentRunsEngine",(function(){return z}));var a=n(0),i=n.n(a),c=n(12),r=n(69),o=n(16),s=n.n(o),l=n(618),d=n(5),u=n(373),m=n(14),v=n(378),j=n(53),p=(n(1536),n(1));var b=function(e){var t=e.experimentName,n=e.experimentId,a=A(t,n),i=a.tableRef,c=a.tableColumns,o=a.tableData,b=a.loading,f=a.selectedRows,h=a.comparisonQuery,x=a.onRowSelect,_=a.loadMore,O=a.isInfiniteLoading,g=a.totalRunsCount;return Object(p.jsxs)("div",{className:"ExperimentRunsTable",children:[Object(p.jsxs)("div",{className:"ExperimentRunsTable__header",children:[Object(p.jsxs)("div",{className:"ExperimentRunsTable__header__titleBox",children:[Object(p.jsx)(d.n,{className:"ExperimentRunsTable__header__titleBox__title",component:"h3",size:14,weight:700,tint:100,children:r.a.isEmpty(f)?"Experiment Runs":"Selected Runs (".concat(Object.values(f).length,")")}),r.a.isEmpty(f)?b?Object(p.jsx)(l.a,{variant:"rect",height:17,width:50}):Object(p.jsx)(d.n,{component:"h3",size:14,weight:700,tint:100,children:r.a.isEmpty(o)?"(0)":" (".concat(null===o||void 0===o?void 0:o.length,"/").concat(g,")")}):null]}),(null===o||void 0===o?void 0:o.length)>0?Object(p.jsx)("div",{className:"ExperimentRunsTable__header__comparisonPopover",children:Object(p.jsx)(v.a,{appName:"experiment",query:h,disabled:0===Object.keys(f).length})}):null]}),Object(p.jsxs)("div",{className:s()("ExperimentRunsTable__table",{"ExperimentRunsTable__table--loading":b,"ExperimentRunsTable__table--empty":0===o.length}),children:[r.a.isEmpty(o)&&b?Object(p.jsx)(d.l,{}):Object(p.jsx)(u.a,{custom:!0,allowInfiniteLoading:!0,isInfiniteLoading:!1,showRowClickBehaviour:!1,infiniteLoadHandler:_,showResizeContainerActionBar:!1,ref:i,data:o,columns:c,appName:j.b.RUNS,multiSelect:!0,topHeader:!0,noColumnActions:!0,hideHeaderActions:!0,isLoading:!1,height:"100%",rowHeight:m.e.sm,illustrationConfig:{size:"large",title:"No experiment runs"},selectedRows:f,onRowSelect:x}),O&&Object(p.jsx)("div",{className:"Infinite_Loader",children:Object(p.jsx)(d.l,{})})]})]})},f=n(2),h=n(4),x=n(6),_=n(7),O=n(74),g=n.n(O),C=n(215),N=n(82),y=n(1035),S=n(93),w=n(112),E=n(58),R=n(91),k=n(33),M=n(166),D=n(21),B=n(8),T=n.n(B),H=n(26),F=n(375),I=n(741),L=n(142);var z=function(){var e=Object(F.d)().call,t=Object(I.a)(function(){var t=Object(H.a)(T.a.mark((function t(n){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=L.d,t.next=3,e(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n=t.fetchData;return{fetchExperimentRuns:function(e){return n(e)},experimentRunsState:t.state,destroy:t.destroy}}();var A=function(e,t){var n,a,c,o,s=i.a.useRef(null),l=i.a.useRef(null),u=i.a.useState([]),m=Object(_.a)(u,2),v=m[0],j=m[1],b=i.a.useState(!1),O=Object(_.a)(b,2),B=O[0],T=O[1],H=i.a.useRef(z).current,F=i.a.useRef(y.b).current,I=F.experimentContributionsState((function(e){return e})),L=H.experimentRunsState((function(e){return e})),A=i.a.useState({}),q=Object(_.a)(A,2),P=q[0],J=q[1],W=i.a.useState(""),Y=Object(_.a)(W,2),Q=Y[0],V=Y[1];i.a.useEffect((function(){return r.a.isEmpty(L.data)&&H.fetchExperimentRuns({limit:50,exclude_params:!0,q:"run.experiment == '".concat(e,"'")}),function(){H.destroy(),F.destroy()}}),[]),i.a.useEffect((function(){r.a.isEmpty(I.data)&&F.fetchExperimentContributions(t)}),[I.data]),i.a.useEffect((function(){L.data&&H.destroy(),I.data&&F.destroy()}),[t]),i.a.useEffect((function(){var e;if(null===(e=L.data)||void 0===e?void 0:e.length){var t=[].concat(Object(x.a)(v),Object(x.a)(L.data));j(t),l.current=t}}),[L.data]);var K=i.a.useMemo((function(){if(v){var e=[],t=[],n={};return v.forEach((function(a){var i=a.hash;a.traces.metric.forEach((function(a){var c=Object(S.a)(a.name,a.context);if(n.hasOwnProperty(c))n[c][i]=[a.last_value.last_step,a.last_value.last];else{n[c]=Object(h.a)({},i,[a.last_value.last_step,a.last_value.last]);var r=Object(w.a)(a.context),o=Object(E.a)(a.name),s={key:c,content:Object(p.jsx)(d.b,{monospace:!0,size:"xSmall",label:""===r?"Empty context":r}),topHeader:o?Object(R.a)(a.name):a.name,name:a.name,context:r,isSystem:o};o?t.push(s):e.push(s)}}))})),{columns:r.a.orderBy(e,["name","context"],["asc","asc"]).concat(r.a.orderBy(t,["name","context"],["asc","asc"])),values:n}}return{columns:[],values:[]}}),[v]),G=i.a.useMemo((function(){return v?v.map((function(e,t){var n=e.props,a=e.hash,i=Object(D.c)({hash:a}),c={key:i,selectKey:i,index:t,run:{content:Object(p.jsx)(C.a,{run:n.name,runHash:a,active:n.active})},date:g()(1e3*n.creation_time).format(N.f),duration:Object(M.a)(1e3*n.creation_time,n.end_time?1e3*n.end_time:Date.now())};return K.columns.forEach((function(e){var t,n=null!==(t=K.values[e.key][a])&&void 0!==t?t:[null,null],i=Object(_.a)(n,2),r=i[0],o=i[1];c[e.key]={content:null===r?"--":e.isSystem?Object(k.a)(o):"step: ".concat(null!==r&&void 0!==r?r:"-"," / value: ").concat(Object(k.a)(o))}})),c})):[]}),[v,K]),U=i.a.useMemo((function(){return[{key:"run",content:Object(p.jsx)("span",{children:"Name"}),topHeader:"Run",pin:"left"},{key:"date",content:Object(p.jsx)("span",{children:"Date"}),topHeader:"Run"},{key:"duration",content:Object(p.jsx)("span",{children:"Duration"}),topHeader:"Run"}].concat(K.columns)}),[K]),X=i.a.useCallback((function(t){var n=t.actionType,a=t.data,i=Object(f.a)({},P);switch(n){case"single":P[a.key]?i=r.a.omit(P,a.key):i[a.key]=!0;break;case"selectAll":Array.isArray(a)?a.forEach((function(e){P[e.key]||(i[e.key]=!0)})):Object.values(a).reduce((function(e,t){return e.concat(t.items)}),[]).forEach((function(e){P[e.selectKey]||(i[e.selectKey]=!0)}));break;case"removeAll":Array.isArray(a)&&(i={})}J(i),V("run.hash in [".concat(Object.keys(i).map((function(e){return'"'.concat(JSON.parse(Object(D.b)(e)).hash,'"')})).join(", "),'] and run.experiment == "').concat(e,'"'))}),[P,G]);return i.a.useEffect((function(){var e;null===(e=s.current)||void 0===e||e.updateData({newData:G,newColumns:U})}),[G,U]),{data:v,tableData:G,tableColumns:U,tableRef:s,loading:L.loading,isInfiniteLoading:B,selectedRows:P,comparisonQuery:Q,onRowSelect:X,loadMore:function(){var t;L.data&&!L.loading&&(T(!0),H.fetchExperimentRuns({limit:50,exclude_params:!0,offset:null===(t=l.current[l.current.length-1])||void 0===t?void 0:t.hash,q:"run.experiment == '".concat(e,"'")}).finally((function(){return T(!1)})))},totalRunsCount:(null!==(n=null===I||void 0===I||null===(a=I.data)||void 0===a?void 0:a.num_runs)&&void 0!==n?n:0)-(null!==(c=null===I||void 0===I||null===(o=I.data)||void 0===o?void 0:o.num_archived_runs)&&void 0!==c?c:0)}},q=b;n(1537);function P(e){var t=e.experimentName,n=e.experimentId;return Object(p.jsx)(c.a,{children:Object(p.jsx)("div",{className:"ExperimentRunsTab",children:Object(p.jsx)("div",{className:"ExperimentRunsTab__content",children:Object(p.jsx)(q,{experimentName:t,experimentId:n})})})})}var J=Object(a.memo)(P);t.default=J},1556:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n(0),c=n.n(i),r=n(92),o=n(724),s=n(12),l=n(912),d=n(5),u=n(19),m=n(17),v=(n(1538),n(1));function j(e){var t=e.experimentName,n=e.description,i=e.updateExperiment,j=e.deleteExperiment,p=Object(r.g)(),b=c.a.useState(!1),f=Object(a.a)(b,2),h=f[0],x=f[1];return c.a.useEffect((function(){m.a(u.a.experiment.tabs.settings.tabView)}),[]),Object(v.jsx)(s.a,{children:Object(v.jsxs)("div",{className:"ExperimentSettingsTab",children:[Object(v.jsxs)("div",{className:"ExperimentSettingsTab__actionCardsCnt",children:[Object(v.jsx)(l.a,{title:"Experiment Properties",defaultName:null!==t&&void 0!==t?t:"",defaultDescription:null!==n&&void 0!==n?n:"",onSave:function(e,t){i(e,t)}}),Object(v.jsx)(d.a,{title:"Delete Experiment",description:"Once you delete an experiment, there is no going back. Please be certain.",btnTooltip:"Delete Experiment",btnText:"Delete",onAction:function(){x(!0)},btnProps:{variant:"contained",className:"ExperimentSettingsTab__actionCardsCnt__btn__delete"}})]}),Object(v.jsx)(o.a,{open:h,onCancel:function(){x(!1)},onSubmit:function(){j((function(){p.push("/experiments")}))},text:"Are you sure you want to delete this experiment?",icon:Object(v.jsx)(d.f,{name:"delete"}),title:"Delete experiment",statusType:"error",confirmBtnText:"Delete"})]})})}var p=Object(i.memo)(j);t.default=p},724:function(e,t,n){"use strict";var a=n(0),i=n.n(a),c=n(695),r=n(5),o=n(208),s=(n(728),n(1));function l(e){return Object(s.jsx)(o.a,{children:Object(s.jsxs)(c.a,{open:e.open,onClose:e.onCancel,"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",PaperProps:{elevation:10},className:"ConfirmModal ConfirmModal__".concat(e.statusType),children:[Object(s.jsxs)("div",{className:"ConfirmModal__Body",children:[Object(s.jsx)(r.c,{size:"small",className:"ConfirmModal__Close__Icon",color:"secondary",withOnlyIcon:!0,onClick:e.onCancel,children:Object(s.jsx)(r.f,{name:"close"})}),Object(s.jsxs)("div",{className:"ConfirmModal__Title__Container",children:[Object(s.jsx)("div",{className:"ConfirmModal__Icon",children:e.icon}),e.title&&Object(s.jsx)(r.n,{size:16,tint:100,component:"h4",weight:600,children:e.title})]}),Object(s.jsxs)("div",{children:[e.description&&Object(s.jsx)(r.n,{className:"ConfirmModal__description",weight:400,component:"p",id:"dialog-description",children:e.description}),Object(s.jsxs)("div",{children:[e.text&&Object(s.jsx)(r.n,{className:"ConfirmModal__text",weight:400,component:"p",size:14,id:"dialog-description",children:e.text||""}),e.children&&e.children]})]})]}),Object(s.jsxs)("div",{className:"ConfirmModal__Footer",children:[Object(s.jsx)(r.c,{onClick:e.onCancel,className:"ConfirmModal__CancelButton",children:e.cancelBtnText}),Object(s.jsx)(r.c,{onClick:e.onSubmit,color:"primary",variant:"contained",className:"ConfirmModal__ConfirmButton",autoFocus:!0,children:e.confirmBtnText})]})]})})}l.defaultProps={confirmBtnText:"Confirm",cancelBtnText:"Cancel",statusType:"info"},l.displayName="ConfirmModal",t.a=i.a.memo(l)},728:function(e,t,n){},835:function(e,t,n){"use strict";var a=n(838),i=n(741);t.a=function(){var e=Object(i.a)(a.d),t=e.fetchData;return{fetchExperimentContributions:function(e){return t(e)},experimentContributionsState:e.state,destroy:e.destroy}}()},863:function(e,t,n){"use strict";var a=n(6),i=(n(0),n(74)),c=n.n(i),r=n(92),o=n(349),s=n(5),l=n(12),d=n(19),u=n(82),m=n(17),v=n(21),j=(n(864),n(1)),p=[0,1,2,3,4];t.a=function(e){var t=e.data,n=e.startDate,i=e.endDate,b=e.cellSize,f=void 0===b?12:b,h=e.cellSpacing,x=void 0===h?4:h,_=e.scaleRange,O=void 0===_?4:_,g=e.onCellClick,C=e.additionalQuery,N=void 0===C?"":C,y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S=Object(r.g)();n=new Date(n.getFullYear(),n.getMonth(),n.getDate()),i=new Date(i.getFullYear(),i.getMonth(),i.getDate());for(var w=n;0!==w.getDay();)w=H(w,-1);for(var E=i;0!==E.getDay();)E=H(E,1);0===E.getDay()&&(E=H(E,7));var R=Math.floor(Math.abs((w-E)/864e5)),k=function(){var e=0;return Object(a.a)(Array(R).keys()).forEach((function(t){var n=M(t);e=n>e?n:e})),e}();function M(e){for(var n=F(e),a=0,i=0;i<t.length;i++){var c,r,o;(null===(c=t[i])||void 0===c?void 0:c[0].getFullYear())===n.getFullYear()&&(null===(r=t[i])||void 0===r?void 0:r[0].getMonth())===n.getMonth()&&(null===(o=t[i])||void 0===o?void 0:o[0].getDate())===n.getDate()&&(a+=t[i][1])}return a}var D=[].concat(Object(a.a)(y.slice(w.getMonth())),Object(a.a)(y.slice(0,w.getMonth()))),B={width:"".concat(R/7*f+(R/7-1)*x-50,"px")},T={gridTemplateColumns:"repeat(".concat(R/7,", 1fr)"),gridTemplateRows:"repeat(7, 1fr)",width:"".concat(R/7*f+(R/7-1)*x,"px"),height:"".concat(7*f+6*x,"px"),gridColumnGap:"".concat(x,"px"),gridRowGap:"".concat(x,"px")};function H(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}function F(e){var t=Math.floor(e/7);return H(w,7*t+e%7)}function I(e){var t,n=M(e),a=F(e),r=n?(t=n,Math.ceil(t/k*O)):0,s=" ".concat(n," tracked run").concat(1!==n?"s":""," on ").concat(y[a.getMonth()]," ").concat(a.getDate(),", ").concat(a.getFullYear());return Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{className:"CalendarHeatmap__cell__wrapper",children:+i<+F(e)?Object(j.jsx)("div",{className:"CalendarHeatmap__cell CalendarHeatmap__cell--dummy"}):Object(j.jsx)(o.a,{title:s,children:Object(j.jsx)("div",{className:"CalendarHeatmap__cell CalendarHeatmap__cell--scale-".concat(r||0),onClick:function(e){if(e.stopPropagation(),g(),r){var t=a.getTime(),n=Object(v.c)({query:"datetime(".concat(c()(t).format(u.d),") <= run.created_at < datetime(").concat(c()(t).add(1,"day").format(u.d),") ").concat(N)});m.b(d.a.dashboard.activityCellClick),S.push("/runs?select=".concat(n))}},role:"navigation"})})})},e)}return Object(j.jsxs)("div",{className:"CalendarHeatmap",children:[Object(j.jsxs)("div",{className:"CalendarHeatmap__map",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{className:"CalendarHeatmap__map__axis CalendarHeatmap__map__axis--x",style:B,children:D.slice(0,10).map((function(e,t){return Object(j.jsx)("div",{className:"CalendarHeatmap__map__axis__tick--x",children:e},t)}))}),Object(j.jsx)("div",{className:"CalendarHeatmap__map__axis CalendarHeatmap__map__axis--y",children:["S","M","T","W","T","F","S"].map((function(e,t){return Object(j.jsx)("div",{className:"CalendarHeatmap__map__axis__tick--y",children:e},t)}))}),Object(j.jsx)("div",{className:"CalendarHeatmap__map__grid",style:T,children:Object(a.a)(Array(R).keys()).map((function(e){return I(e)}))})]}),Object(j.jsxs)("div",{className:"CalendarHeatmap__cell__info",children:[Object(j.jsx)(s.n,{weight:400,size:12,children:"Less"}),p.map((function(e){return Object(j.jsx)("div",{style:{width:f,height:f},className:"CalendarHeatmap__cell__wrapper",children:Object(j.jsx)("div",{className:"CalendarHeatmap__cell CalendarHeatmap__cell--scale-".concat(e)})},e)})),Object(j.jsx)(s.n,{weight:400,size:12,children:"More"})]})]})}},864:function(e,t,n){},865:function(e,t,n){},866:function(e,t,n){},867:function(e,t,n){},868:function(e,t,n){},906:function(e,t,n){},908:function(e,t,n){"use strict";var a=n(0),i=n.n(a),c=n(69),r=n(5),o=n(141),s=n(349),l=n(617),d=n(382),u=n(212),m=n(70),v=(n(865),n(1));function j(e){return Object(v.jsxs)("div",{className:"FeedItem",children:[Object(v.jsxs)("div",{className:"FeedItem__title",children:[Object(v.jsx)(r.f,{name:"calendar",fontSize:10,box:!0}),Object(v.jsx)(r.n,{tint:50,size:10,weight:700,children:e.date.split("_").join(" ")})]}),Object(v.jsx)("div",{className:"FeedItem__content",children:e.data.map((function(e){return Object(v.jsxs)("div",{className:"FeedItem__content__item",children:[Object(v.jsxs)("div",{className:"FeedItem__content__item__leftBox",children:[Object(v.jsx)(r.n,{tint:50,size:12,className:"FeedItem__content__item__leftBox__date",children:e.date}),Object(v.jsx)(r.n,{size:12,tint:100,className:"FeedItem__content__item__leftBox__label",children:"Started a run:"}),Object(v.jsx)(s.a,{title:e.active?"In Progress":"Finished",children:Object(v.jsx)("div",{className:"FeedItem__content__item__leftBox__indicatorBox",children:Object(v.jsx)(d.a,{className:"Table__status_indicator",status:e.active?"success":"alert"})})})]}),Object(v.jsxs)("div",{className:"FeedItem__content__item__itemBox",children:[Object(v.jsx)(u.a,{experimentName:e.experiment,experimentId:e.experimentId}),Object(v.jsx)(r.n,{size:10,children:"/"}),Object(v.jsx)(s.a,{title:e.name,children:Object(v.jsx)("div",{className:"FeedItem__content__item__itemBox__runName",children:Object(v.jsx)(l.a,{to:m.a.Run_Detail.replace(":runHash",e.hash),component:o.b,children:e.name})})})]})]},e.name)}))})]})}var p=i.a.memo(j);n(866);function b(e){var t=e.data,n=e.loadMore,a=e.isLoading,i=e.totalRunsCount,o=void 0===i?0:i,s=e.fetchedCount,l=void 0===s?0:s,d=e.archivedRunsCount,u=void 0===d?0:d;return o&&o!==u?Object(v.jsxs)("div",{className:"ContributionsFeed",children:[Object(v.jsx)(r.n,{size:14,component:"h3",tint:100,weight:700,children:"Activity"}),a&&c.a.isEmpty(t)?Object(v.jsx)("div",{className:"flex fac fjc",children:Object(v.jsx)(r.l,{size:"24px"})}):Object(v.jsxs)(v.Fragment,{children:[Object.keys(t).map((function(e){return Object(v.jsxs)("div",{className:"ContributionsFeed__content",children:[Object(v.jsx)(r.n,{className:"ContributionsFeed__content-title",component:"h3",tint:100,weight:700,children:e.split("_").join(" ")}),Object.keys(t[e]).map((function(n){return Object(v.jsx)(p,{date:n,data:t[e][n]},n)}))]},e)})),l<o-u?Object(v.jsx)(r.c,{variant:"outlined",fullWidth:!0,size:"small",onClick:a?void 0:n,children:a?"Loading...":"Show more activity"}):null]})]}):null}var f=i.a.memo(b);t.a=f},910:function(e,t,n){"use strict";var a=n(0),i=n(92),c=n(16),r=n.n(c),o=n(5);var s=function(e,t){var n=null===e||void 0===e?void 0:e.substring(1).split("");3===n.length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]);var a=+("0x"+n.join(""));return"rgba("+[a>>16&255,a>>8&255,255&a].join(",")+","+t||!1},l=(n(867),n(1));function d(e){var t=e.label,n=e.badge,c=void 0===n?{value:""}:n,d=e.count,u=e.icon,m=e.iconBgColor,v=void 0===m?"#000000":m,j=e.cardBgColor,p=void 0===j?s(v,.1):j,b=e.onMouseOver,f=e.onMouseLeave,h=e.navLink,x=e.highlighted,_=e.outlined,O=void 0!==_&&_,g=e.isLoading,C=void 0!==g&&g,N=Object(i.g)(),y=a.useCallback((function(e){"function"===typeof b&&b(e,"card")}),[b]),S={card:{borderColor:O?v:"transparent",backgroundColor:x?v:p},iconWrapper:{backgroundColor:x?"#fff":v},iconColor:x?v:"#fff",label:x?{color:"#fff"}:{},count:x?{color:"#fff"}:{}};return Object(l.jsxs)("div",{onClick:function(){return h&&N.push(h)},onMouseLeave:f,onMouseOver:function(){return y(t)},className:r()("StatisticsCard",{highlighted:x}),style:S.card,children:[(null===c||void 0===c?void 0:c.value)&&Object(l.jsx)(o.n,{component:"p",className:"StatisticsCard__badge",weight:600,size:8,style:c.style,children:c.value}),u&&Object(l.jsx)("div",{className:"StatisticsCard__iconWrapper",style:S.iconWrapper,children:Object(l.jsx)(o.f,{name:u,color:S.iconColor})}),Object(l.jsxs)("div",{className:"StatisticsCard__info",children:[Object(l.jsx)(o.n,{className:"StatisticsCard__info__label",size:10,weight:600,style:S.label,children:t}),Object(l.jsx)(o.n,{className:"StatisticsCard__info__count",size:16,weight:600,style:S.count,children:Object(l.jsx)("span",{children:C?"--":d})})]})]})}d.displayName="StatisticsCard";var u=a.memo(d);t.a=u},912:function(e,t,n){"use strict";var a=n(0),i=n(853),c=n(69),r=n(855),o=n(693),s=n(702),l=n(5),d=n(12),u=(n(906),n(1));function m(e){var t=e.title,n=void 0===t?"Run Properties":t,a=e.defaultName,m=e.defaultDescription,v=e.onSave,j=Object(r.a)({initialValues:{name:null!==a&&void 0!==a?a:"",description:null!==m&&void 0!==m?m:""},onSubmit:c.a.noop,validationSchema:i.a({name:i.b().required("Name is a required field")})}),p=j.values,b=j.errors,f=j.touched,h=j.setFieldValue,x=j.setFieldTouched;function _(e,t){var n;h(t,null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value,!0).then((function(){x(t,!0)}))}return Object(u.jsx)(d.a,{children:Object(u.jsxs)("div",{className:"NameAndDescriptionCard",children:[Object(u.jsxs)("div",{className:"NameAndDescriptionCard__header",children:[Object(u.jsx)(l.n,{component:"h4",weight:600,size:14,tint:100,children:n}),Object(u.jsx)(o.a,{onClick:function(){v(p.name,p.description)},disabled:!c.a.isEmpty(b)||p.name===a&&p.description===m,variant:"contained",color:"primary",className:"NameAndDescriptionCard__saveBtn",children:"Save"})]}),Object(u.jsxs)("div",{className:"NameAndDescriptionCard__content",children:[Object(u.jsx)("div",{className:"NameAndDescriptionCard__content__nameBox",children:Object(u.jsx)(s.a,{variant:"outlined",className:"TextField__OutLined__Medium NameAndDescriptionCard__content__nameBox__nameInput",value:p.name,onChange:function(e){return _(e,"name")},error:!(!f.name||!b.name),helperText:f.name&&b.name,label:"Name"})}),Object(u.jsx)("div",{className:"NameAndDescriptionCard__content__descriptionBox",children:Object(u.jsx)(s.a,{variant:"outlined",multiline:!0,label:"Description",type:"textarea",className:"NameAndDescriptionCard__content__descriptionBox__descriptionInput",value:p.description,onChange:function(e){return _(e,"description")},error:!(!f.description||!b.description),helperText:f.description&&b.description})})]})]})})}var v=Object(a.memo)(m);t.a=v},914:function(e,t,n){"use strict";var a=n(2),i=n(0),c=n(16),r=n.n(c),o=n(349),s=(n(868),n(1));function l(e){var t=e.data,n=void 0===t?[]:t,c=e.width,l=void 0===c?"100%":c,d=e.height,u=void 0===d?8:d,m=e.onMouseOver,v=e.onMouseLeave,j=i.useCallback((function(e){"function"===typeof m&&m(e,"bar")}),[m]),p=i.useMemo((function(){for(var e=[],t=0;t<n.length;t++){var a,i,c=n[t],r=(null===(a=e[t-1])||void 0===a?void 0:a.left)||0,o=(null===(i=n[t-1])||void 0===i?void 0:i.percent)||0,s={width:"".concat(c.percent.toFixed(2),"%"),left:0===t?0:r+o,backgroundColor:c.color};e.push(s)}return e}),[n]);return Object(s.jsx)("div",{className:"StatisticsBar",style:{width:l,height:u},children:Object.values(n).map((function(e,t){var n=e.percent,i=e.color,c=e.label,l=void 0===c?"":c,d=e.highlighted;return n?Object(s.jsx)(o.a,{title:l,children:Object(s.jsx)("div",{className:r()("StatisticsBar__item",{highlighted:d}),style:Object(a.a)(Object(a.a)({},p[t]),{},{left:p[t].left+"%"}),onMouseLeave:v,onMouseOver:function(){return j(l)}})},"".concat(l,"-").concat(i)):null}))})}l.displayName="StatisticsBar";var d=i.memo(l);t.a=d}}]);