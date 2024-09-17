"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[174],{3735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const l={id:"runtime_internals",title:"Runtime Internals",sidebar_position:9},r="Runtime Internals",a={id:"paraflow/runtime_internals",title:"Runtime Internals",description:"Planner",source:"@site/paranet/paraflow/runtime_internals.md",sourceDirName:"paraflow",slug:"/paraflow/runtime_internals",permalink:"/paraflow/runtime_internals",draft:!1,unlisted:!1,editUrl:"https://github.com/your-org/your-project/edit/main/paranet/paraflow/runtime_internals.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"runtime_internals",title:"Runtime Internals",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Bindings",permalink:"/paraflow/bindings"},next:{title:"Debugger",permalink:"/paraflow/debugging"}},o={},c=[{value:"Planner",id:"planner",level:2},{value:"Intent States",id:"intent-states",level:3},{value:"Execution",id:"execution",level:2},{value:"Planning/Execution Algorithm",id:"planningexecution-algorithm",level:2},{value:"Definitions",id:"definitions",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"runtime-internals",children:"Runtime Internals"})}),"\n",(0,i.jsx)(n.h2,{id:"planner",children:"Planner"}),"\n",(0,i.jsx)(n.h3,{id:"intent-states",children:"Intent States"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"internal state",src:t(6280).A+"",width:"750",height:"472"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pending"}),": The planner has determined to execute this intent, but it may have sequence dependencies on other intents that are not yet complete."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ready"}),": All sequence dependencies are satisfied, and the intent is ready to execute when resources are available."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"active"}),": Currently executing, which means:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For rules: waiting for sub-intents."}),"\n",(0,i.jsx)(n.li,{children:"For tasks: executing the task body."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"complete"}),": Successfully completed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"failed"}),": Abandoned due to failure of the task or 1+ sub-intents in the case of rules."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"execution",children:"Execution"}),"\n",(0,i.jsx)(n.p,{children:"Certain goals are designated as top-level goals. An instance of an agent corresponds to exactly one top-level goal instance. Each agent (i.e., top-level goal) instance is independent of any other instance and is planned and executed in a single logical container. The entire instance state is persistent, and the actual execution will be performed by one or more running processes on one or more machines over time, but never more than one process or machine at the same time."}),"\n",(0,i.jsx)(n.h2,{id:"planningexecution-algorithm",children:"Planning/Execution Algorithm"}),"\n",(0,i.jsx)(n.p,{children:"Rules support concurrent sub-tasks, so this is similar to HTN (Hierarchical Task Network) algorithms for partially-ordered tasks."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"An outside event triggers the creation of a new top-level goal."}),"\n",(0,i.jsx)(n.li,{children:"Depth-first planning is performed."}),"\n",(0,i.jsx)(n.li,{children:"Initialize planning state with the current state of static relations."}),"\n",(0,i.jsx)(n.li,{children:"Non-deterministically select an unplanned goal."}),"\n",(0,i.jsxs)(n.li,{children:["If the goal is primitive, then:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Determine eligible and potential tasks."}),"\n",(0,i.jsxs)(n.li,{children:["If no eligible tasks:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If at least one potential task exists, return to step 5, otherwise fail."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Calculate costs associated with eligible tasks."}),"\n",(0,i.jsx)(n.li,{children:"Non-deterministically select one eligible task with minimal cost."}),"\n",(0,i.jsx)(n.li,{children:"Apply static behavior to the planning state."}),"\n",(0,i.jsx)(n.li,{children:"Add the selected task to the plan."}),"\n",(0,i.jsx)(n.li,{children:"Transfer goal sequence constraints to the selected task."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If the goal is not primitive, then:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Determine eligible and potential rules."}),"\n",(0,i.jsxs)(n.li,{children:["If no eligible rules:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If at least one potential rule exists, return to step 5, otherwise fail."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Calculate costs associated with eligible rules."}),"\n",(0,i.jsx)(n.li,{children:"Non-deterministically select one eligible rule with minimal cost."}),"\n",(0,i.jsx)(n.li,{children:"Execute the rule with the planning state and collect resulting sub-goals with their sequence constraints."}),"\n",(0,i.jsx)(n.li,{children:"Recursively plan sub-goals."}),"\n",(0,i.jsx)(n.li,{children:"If sub-goals fail to plan, remove them from eligible rules and return to step 6."}),"\n",(0,i.jsx)(n.li,{children:"Add sub-goals and their sequence constraints to the plan."}),"\n",(0,i.jsx)(n.li,{children:"Transfer goal sequence constraints to each of the added sub-goals that are initial within the added sub-goals."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"While there remain unplanned goals, return to step 4."}),"\n",(0,i.jsx)(n.li,{children:"Create an intent in the pending state for each task in the plan."}),"\n",(0,i.jsx)(n.li,{children:"Execute intents."}),"\n",(0,i.jsx)(n.li,{children:"While there remain unfulfilled goals, return to step 5."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Eligible rule (or task)"}),": A rule (or task) is eligible with respect to a goal for planning if:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"It does not have a precondition that depends on a dynamic relation, or all the target goal\u2019s support goals have been achieved."}),"\n",(0,i.jsx)(n.li,{children:"Any preconditions are true."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Potential rule (or task)"}),": A rule (or task) is potential with respect to a goal for planning if its precondition depends on a dynamic relation and at least one of the target goal\u2019s support goals is not complete."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Support goal"}),": Goal A is a support for goal B if there is a sequence constraint that A precedes B."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6280:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/internal_state-c2e89dddc548fa3403952bf7407ac174.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);