(()=>{"use strict";const e=()=>Math.floor(1e3*Math.random()),t=class{constructor(t,i,o,l,c,r,s=!1){this.title=t,this.description=i,this.dueDate=o,this.priority=l,this.folderID=c,this.id=e()}changeComplete(){this.complete=!this.complete}changePriority(){"low"===this.priority?this.priority="high":"high"===this.priority&&(this.priority="low")}},i=class{constructor(t,i,o){this.title=t,this.id=e(),this.tasks=[]}addTask(e){this.tasks.push(e)}};let o=[];const l=document.querySelector("#folder-form"),c=document.querySelector("#submit-folder"),r=document.querySelector("#folder-select").options,s=()=>{console.log(r);for(let e=r.length-1;e>=0;e--)r[e]=null;o.map((e=>{r.add(new Option(e.title))}))};function n(){document.querySelector("#tasklist").innerHTML="",o.map((e=>{e.tasks.map((e=>{const t=document.createElement("li");t.innerHTML=e.title,document.querySelector("#tasklist").appendChild(t)}))}))}c.addEventListener("click",(e=>{e.preventDefault();let t=document.querySelector("#folder-title"),c=new i(t.value);o.push(c),document.querySelector("#sidebar-container").innerHTML="",o.forEach((e=>{const t=document.createElement("li");t.innerHTML=e.title,document.querySelector("#sidebar-container").appendChild(t)})),t.value="",l.style.visibility="hidden",console.log(o),s()}));const d=document.querySelector("#task-form");document.querySelector("#submit-task").addEventListener("click",(e=>{e.preventDefault();let i,l=document.querySelector("#task-title").value,c=document.querySelector("#task-description").value,s=document.querySelector("#task-due-date").value,a=document.querySelector("#task-priority-high"),u=document.querySelector("#task-priority-low"),h=r[r.selectedIndex].innerHTML,y=o.find((e=>e.title===h)),m=y.id;a.checked?i="high":u.checked&&(i="low");let p=new t(l,c,s,i,m);y.addTask(p),console.log(p,y),l="",c="",s="",a="",u="",d.style.visibility="hidden",n()}));const a=new t("Test","This is a test",Date.now(),"high");console.log(a),a.changeComplete(),a.changePriority(),console.log(a);const u=new i("Test Project");console.log(u),u.addTask(a),console.log(u),o.push(u),console.log(o),n(),document.querySelector("#create-folder").addEventListener("click",(()=>l.style.visibility="visible")),document.querySelector("#cancel-folder").addEventListener("click",(()=>l.style.visibility="hidden")),document.querySelector("#create-task").addEventListener("click",(()=>d.style.visibility="visible")),document.querySelector("#cancel-task").addEventListener("click",(()=>d.style.visibility="hidden")),s()})();