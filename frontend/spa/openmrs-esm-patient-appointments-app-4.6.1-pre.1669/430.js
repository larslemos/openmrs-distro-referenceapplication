(globalThis.webpackChunk_openmrs_esm_patient_appointments_app=globalThis.webpackChunk_openmrs_esm_patient_appointments_app||[]).push([[430,660],{9430:(e,n,t)=>{"use strict";t.r(n),t.d(n,{backendDependencies:()=>p,importTranslation:()=>r,setupOpenMRS:()=>m,version:()=>s});var o=t(906),a=t(6217),i={slot:"patient-chart-appointments-dashboard-slot",columns:1,title:"Appointments",path:"Appointments"},s="4.6.1-pre.1669",r=t(3979),p={"webservices.rest":"^2.2.0"};function m(){var e="@openmrs/esm-patient-appointments-app",n={featureName:"patient-appointments",moduleName:e};return(0,o.defineConfigSchema)(e,{}),{extensions:[{name:"appointments-overview-widget",order:(0,a.getPatientSummaryOrder)("Appointments"),load:(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(707),t.e(900),t.e(924),t.e(565),t.e(917),t.e(902)]).then(t.bind(t,6902))}),n),meta:{columnSpan:4}},{name:"appointments-details-widget",slot:i.slot,load:(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(707),t.e(900),t.e(924),t.e(565),t.e(917),t.e(222)]).then(t.bind(t,7222))}),n),meta:{columnSpan:1}},{name:"appointments-summary-dashboard",slot:"patient-chart-dashboard-slot",order:11,load:(0,o.getSyncLifecycle)((0,a.createDashboardLink)(i),n),meta:i},{name:"appointments-form-workspace",load:(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(707),t.e(900),t.e(924),t.e(565),t.e(354)]).then(t.bind(t,354))}),n)},{name:"appointment-cancel-confirmation-dialog",load:(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(707),t.e(900),t.e(924),t.e(565),t.e(945)]).then(t.bind(t,7945))}),n),online:!0,offline:!1},{id:"upcoming-appointment-widget",slot:"upcoming-appointment-slot",load:(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(707),t.e(314),t.e(900),t.e(924),t.e(565),t.e(541)]).then(t.bind(t,2541))}),n)}]}}},3979:(e,n,t)=>{var o={"./en.json":[3574,574],"./fr.json":[2757,757],"./he.json":[5833,833],"./km.json":[7807,807]};function a(e){if(!t.o(o,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],a=n[0];return t.e(n[1]).then((()=>t(a)))}a.keys=()=>Object.keys(o),a.id=3979,e.exports=a}}]);