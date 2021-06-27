(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{d:()=>r});let t=(()=>{let e=()=>{let e=document.getElementById("buttonContainer");t(e);let n=document.createElement("form");n.setAttribute("id","buttonForm");let o=document.createElement("input");o.setAttribute("id","buttonFormInput"),o.type="text",o.name="taskName",n.appendChild(o),e.appendChild(n),o.focus()},t=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{makeButton:()=>{let n=document.getElementById("buttonContainer");t(n);let o=document.createElement("div"),a=document.createTextNode("+ New Task");o.appendChild(a),o.setAttribute("id","newTaskButton"),n.appendChild(o),o.addEventListener("click",e)},makeForm:e}})(),n=(()=>{let e=()=>{let e=document.getElementById("projectButtonContainer");t(e);let n=document.createElement("form");n.setAttribute("id","projectButtonForm");let o=document.createElement("input");o.setAttribute("id","projectButtonFormInput"),o.type="text",o.name="projectName",n.appendChild(o),e.appendChild(n),o.focus()},t=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{makeButton:()=>{let n=document.getElementById("projectButtonContainer");t(n);let o=document.createElement("div"),a=document.createElement("p");a.setAttribute("id","newProjectButtonText");let d=document.createTextNode("+ New Project");a.appendChild(d),o.appendChild(a),o.setAttribute("id","newProjectButton"),n.appendChild(o),o.addEventListener("click",e)},makeForm:e}})(),o=(()=>{let e=[];localStorage.getItem("taskArray")&&(e=JSON.parse(localStorage.getItem("taskArray")));let t=()=>{localStorage.setItem("taskArray",JSON.stringify(e))},n=()=>{let e=(new Date).toLocaleDateString(),t=e.split("/"),n=t[0],o=t[1];return n=n.padStart(3,"0").slice(-2),o=o.padStart(3,"0").slice(-2),t[0]=t[2],t[1]=n,t[2]=o,e=t.join("-"),e},o=e=>{let t=document.getElementById("taskContainer");console.log("active tasks >>>>",e),d(t);for(let n in e){let o=document.createElement("div");o.classList.add("task");let d=document.createElement("div");d.classList.add("taskStatus");let l=document.createElement("div");l.classList.add("notDone");let r=document.createElement("i");r.classList.add("far","fa-circle");let i=document.createElement("div");i.classList.add("taskTextContainer");let c=document.createElement("p");c.classList.add("taskText");let s=document.createTextNode(e[n][0]);console.log(s);let m=document.createElement("form");m.classList.add("taskDate");let u=document.createElement("label");u.for="dueDate";let p=document.createElement("input");p.type="date",p.classList.add("dueDate"),p.name="dueDate",e[n][1]&&(p.value=e[n][1]),m.appendChild(u),m.appendChild(p),l.prepend(r),c.appendChild(s),i.appendChild(c),a(i),d.appendChild(l),d.appendChild(i),o.appendChild(d),o.appendChild(m),t.appendChild(o)}console.log("loaded")},a=n=>{let o=n.firstChild,l=o.textContent;o.addEventListener("click",(()=>{o.remove();let r=document.createElement("form");r.classList.add("newTextForm");let i=document.createElement("input");i.type="text",i.name="newTaskName",i.classList.add("newTextInput"),r.appendChild(i),n.appendChild(r),r.addEventListener("submit",(()=>{let o=n.parentNode.parentNode,l=Array.from(o.parentNode.children).indexOf(o);e[l].shift(),e[l].unshift(i.value),d(n);let r=document.createElement("p");r.classList.add("taskText");let c=document.createTextNode(i.value);r.appendChild(c),n.appendChild(r),a(n),t()})),r.addEventListener("focusout",(()=>{d(n);let e=document.createElement("p");e.classList.add("taskText");let t=document.createTextNode(l);e.appendChild(t),n.appendChild(e),a(n)})),i.focus()}))},d=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{loadInbox:()=>{o(e)},loadToday:()=>{let t=[],a=n();for(let n in e)console.log("under"),e[n].length>1&&e[n][1]===a&&t.push(e[n]);console.log(t),o(t)},loadWeek:()=>{let t=[];for(let n in e)e[n][1]&&new Date(e[n][1]).getWeek()===(new Date).getWeek()&&(console.log("same week"),t.push(e[n]));o(t)},load:o,construct:o=>{"today"===r||"week"===r?e.push([o,n()]):e.push([o]),t()},taskArray:e,saveArray:t}})(),a=()=>{console.log("changes..."),document.querySelectorAll(".dueDate").forEach((e=>{e.addEventListener("change",(()=>{let t,n=e.value,a=e.parentNode.parentNode,d=Array.from(a.parentNode.children).indexOf(a);"inbox"===r||"today"===r||"week"===r?(t=o.taskArray[d],o.saveArray()):t=l.projectList[r][d],t.length>1&&t.pop(),t.push(n)}))}))},d={init:()=>{document.querySelectorAll(".notDone").forEach((e=>{e.addEventListener("click",(()=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(e);let t=document.createElement("i");t.classList.add("fas","fa-check-circle"),e.prepend(t);let n=e.parentNode.parentNode;"inbox"===r||"today"===r||"week"===r?(o.taskArray.splice(Array.from(n.parentNode.children).indexOf(n),1),o.saveArray()):(l.projectList[r].splice(Array.from(n.parentNode.children).indexOf(n),1),l.saveProjectList()),n.classList.add("fadingTask"),setTimeout((()=>{taskContainer.removeChild(e.parentNode.parentNode)}),500)}))}))}},l=(()=>{let e={},t=()=>{localStorage.getItem("projectList")&&(e=JSON.parse(localStorage.getItem("projectList")),console.log("taskarray detected!"))};t();let n=()=>{localStorage.setItem("projectList",JSON.stringify(e))},l=()=>{console.log("loading project");let t=e[r];o.load(t),console.log(t),n()},i=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{makeProject:t=>{e[t]?alert("You cannot have duplicate projects!"):e[t]=[]},loadProjectNames:()=>{let t=Object.keys(e),o=document.getElementById("projectContainer");console.log(t),i(o);for(let e in t){let n=document.createElement("div");n.classList.add("project");let a=document.createElement("p");a.classList.add("projectName");let d=document.createTextNode(t[e]);a.appendChild(d),n.appendChild(a),o.appendChild(n);let l="PROJ_"+t[e];n.setAttribute("id",l);let r=document.createElement("div");r.classList.add("class","trashContainer");let i=document.createElement("i");i.classList.add("fa","fa-trash-alt"),r.appendChild(i),n.appendChild(r)}n()},init:()=>{let t=document.getElementById("taskTabTitle");document.querySelectorAll(".project").forEach((n=>{n.addEventListener("click",(()=>{let o=Object.keys(e),c=document.getElementById("taskContainer");i(c);let s=o[Array.from(n.parentNode.children).indexOf(n)];t.textContent=s,r=n.id.slice(5),l(),a(),d.init()}))})),document.querySelectorAll(".trashContainer").forEach((t=>{t.addEventListener("click",(o=>{o.stopPropagation();let a=Object.keys(e),d=t.parentElement,l=a[Array.from(d.parentNode.children).indexOf(d)],r=document.getElementById("projectContainer");delete e[l],n(),d.classList.add("fadingProject"),setTimeout((()=>{r.removeChild(d)}),500)}))})),console.log(e)},load:l,construct:t=>{e[r].push([t]),n()},projectList:e,loadProjectList:t,saveProjectList:n}})(),r="inbox";Date.prototype.getWeek=function(){var e=new Date(this.setDate(1)).getDay(),t=new Date(this.getFullYear(),this.getMonth()+1,0).getDate();return Math.ceil((e+t)/7)};let i=()=>{document.getElementById("newTaskButton").addEventListener("click",(()=>{t.makeForm(),c()}))},c=()=>{let e=document.getElementById("buttonForm"),n=document.getElementById("buttonFormInput");e.addEventListener("submit",(()=>{let e=n.value;"inbox"===r||"today"===r||"week"===r?o.construct(e):l.construct(e),u(),d.init(),a(),t.makeButton(),i()})),e.addEventListener("focusout",(()=>{t.makeButton(),i()}))},s=()=>{document.getElementById("newProjectButton").addEventListener("click",(()=>{n.makeForm(),m()}))},m=()=>{let e=document.getElementById("projectButtonForm"),t=document.getElementById("projectButtonFormInput");e.addEventListener("submit",(()=>{let e=t.value;l.makeProject(e),l.loadProjectNames(),l.init(),n.makeButton(),s()})),e.addEventListener("focusout",(()=>{n.makeButton(),s()}))},u=()=>{"inbox"===r?o.loadInbox():"today"===r?o.loadToday():"week"===r?o.loadWeek():(console.log("desiredtask array & project list"),l.load())},p=e=>{document.getElementById("taskTabTitle").textContent=e},h=document.getElementById("inbox"),k=document.getElementById("today"),E=document.getElementById("week"),y=()=>{r="inbox",u(),d.init(),a(),p("Inbox")};h.addEventListener("click",(()=>{y()})),k.addEventListener("click",(()=>{r="today",u(),d.init(),a(),p("Today")})),E.addEventListener("click",(()=>{r="week",u(),d.init(),a(),p("This Week")})),localStorage.removeItem("projectList"),localStorage.removeItem("taskArray"),y(),l.loadProjectList(),l.loadProjectNames(),l.init(),t.makeButton(),i(),n.makeButton(),s()})();