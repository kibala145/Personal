(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playground"],{"08ad":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"playground"},[n("h1",[e._v("Playground")]),n("h2",[e._v("Pair element transitions: ")]),n("span",[e._v("Transition name:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.paired.transitionName,expression:"paired.transitionName"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.paired,"transitionName",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"fade"}},[e._v("Fade")]),n("option",{attrs:{value:"bounce"}},[e._v("Bounce")])]),n("br"),n("span",[e._v("Transition mode:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.paired.transitionMode,expression:"paired.transitionMode"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.paired,"transitionMode",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"out-in"}},[e._v("Out-in")]),n("option",{attrs:{value:"in-out"}},[e._v("In-out")])]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.paired.checked,expression:"paired.checked"}],attrs:{id:"checkboxPaired",type:"checkbox"},domProps:{checked:Array.isArray(e.paired.checked)?e._i(e.paired.checked,null)>-1:e.paired.checked},on:{change:function(t){var n=e.paired.checked,a=t.target,i=!!a.checked;if(Array.isArray(n)){var r=null,o=e._i(n,r);a.checked?o<0&&e.$set(e.paired,"checked",n.concat([r])):o>-1&&e.$set(e.paired,"checked",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.paired,"checked",i)}}}),n("custom-transition",{attrs:{"transition-name":e.paired.transitionName,"transition-mode":e.paired.transitionMode}},[e.paired.checked?n("div",{key:1},[n("label",{attrs:{for:"checkboxPaired"}},[e._v("Checked")])]):e._e(),e.paired.checked?e._e():n("div",{key:2},[n("label",{attrs:{for:"checkboxPaired"}},[e._v("Not checked")])])]),n("h2",[e._v("Single element transitions: ")]),n("h3",[e._v('Note: this transition only works when target is a "block" typed element')]),n("span",[e._v("Transition name:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.single.transitionName,expression:"single.transitionName"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.single,"transitionName",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"expand"}},[e._v("Expand")])]),n("br"),n("span",[e._v("Transition mode:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.single.transitionMode,expression:"single.transitionMode"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.single,"transitionMode",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"out-in"}},[e._v("Out-in")]),n("option",{attrs:{value:"in-out"}},[e._v("In-out")])]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.single.checked,expression:"single.checked"}],attrs:{id:"checkboxSingle",type:"checkbox"},domProps:{checked:Array.isArray(e.single.checked)?e._i(e.single.checked,null)>-1:e.single.checked},on:{change:function(t){var n=e.single.checked,a=t.target,i=!!a.checked;if(Array.isArray(n)){var r=null,o=e._i(n,r);a.checked?o<0&&e.$set(e.single,"checked",n.concat([r])):o>-1&&e.$set(e.single,"checked",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.single,"checked",i)}}}),n("custom-transition",{attrs:{"transition-name":e.single.transitionName,"transition-mode":e.single.transitionMode}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.single.checked,expression:"single.checked"}],key:1},[n("label",{attrs:{for:"checkboxSingle"}},[e._v("Checked")])])])],1)},i=[],r=n("d651"),o={name:"Playground",data:function(){return{single:{checked:!1,transitionName:"expand",transitionMode:"out-in"},paired:{checked:!1,transitionName:"fade",transitionMode:"out-in"}}},components:{CustomTransition:r["a"]}},s=o,c=n("6f85"),l=Object(c["a"])(s,a,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=playground.4e0886f8.js.map