(self.webpackChunk_openmrs_esm_dispensing_app=self.webpackChunk_openmrs_esm_dispensing_app||[]).push([[299],{9299:(e,n,t)=>{"use strict";t.r(n),t.d(n,{backendDependencies:()=>r,importTranslation:()=>a,setupOpenMRS:()=>l,version:()=>s});var i=t(3907),o={appName:{_type:i.Type.String,_default:"Pharmacy"},actionButtons:{pauseButton:{enabled:{_type:i.Type.Boolean,_description:"Enabled/Disable including a Pause button in the button action bar",_default:!0}},closeButton:{enabled:{_type:i.Type.Boolean,_description:"Enabled/Disable including a Close button in the button action bar",_default:!0}}},dispenseBehavior:{allowModifyingPrescription:{_type:i.Type.Boolean,_description:"Enable/Disable editing the prescription. If Disabled, Quantity will be he only editable field on prescription form",_default:!1},restrictTotalQuantityDispensed:{_type:i.Type.Boolean,_description:"Enable/Disable restricting dispensing quantity greater than total quantity ordered. Marks prescription as complete when total quantity dispensed. If true, allowModifyingPrescription *must* be false, as this functionality relies solely on numeric quantity and assumes no change in formulation, dosage, unit, etc",_default:!1}},medicationRequestExpirationPeriodInDays:{_type:i.Type.Number,_description:"Medication Requests older that this will be considered expired",_default:90},locationBehavior:{locationColumn:{enabled:{_type:i.Type.Boolean,_description:"Enabled/Disable including a Location column in the main prescriptions table showing ordering location",_default:!1}},locationFilter:{enabled:{_type:i.Type.Boolean,_description:"Enable/Disable Location filter on main prescriptions page",_default:!1},tag:{_type:i.Type.String,_description:"Name of the location tag to use when fetching locations to populate filter",_default:"Login Location"}}},valueSets:{reasonForPause:{uuid:{_type:i.Type.UUID,_description:"UUID for the Value Set of valid answers to the 'Reason for Pause' question.",_default:""}},reasonForClose:{uuid:{_type:i.Type.UUID,_description:"UUID for the Value Set of valid answers to the 'Reason for Close' question.",_default:""}},substitutionReason:{uuid:{_type:i.Type.UUID,_description:"UUID for the Value Set of valid answers to the 'Reason for Substitution' question. Sample CIEL concept: https://app.openconceptlab.org/#/orgs/CIEL/sources/CIEL/concepts/167862/",_default:""}},substitutionType:{uuid:{_type:i.Type.UUID,_description:"UUID for the Value Set of valid answers to the 'Type of Substitution' question. Sample CIEL concept: https://app.openconceptlab.org/#/orgs/CIEL/sources/CIEL/concepts/167859/",_default:""}}}},s="1.0.1-pre.196",a=t(3979),r={fhir2:"^1.2.0","webservices.rest":"^2.2.0"};function l(){var e="@openmrs/esm-dispensing-app",n={featureName:"dispensing",moduleName:e};return(0,i.defineConfigSchema)(e,o),{pages:[{route:"dispensing",load:(0,i.getAsyncLifecycle)((function(){return Promise.all([t.e(672),t.e(49)]).then(t.bind(t,1049))}),n),online:!0,offline:!0}],extensions:[{id:"dispensing-link",slot:"app-menu-slot",load:(0,i.getAsyncLifecycle)((function(){return Promise.all([t.e(672),t.e(397),t.e(641)]).then(t.bind(t,9641))}),n),online:!0,offline:!1},{name:"dispensing-dashboard",slot:"dispensing-dashboard-slot",load:(0,i.getAsyncLifecycle)((function(){return Promise.all([t.e(720),t.e(672),t.e(397),t.e(135)]).then(t.bind(t,8236))}),n),online:!0,offline:!0}]}}},3979:(e,n,t)=>{var i={"./en.json":[3574,574]};function o(e){if(!t.o(i,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],o=n[0];return t.e(n[1]).then((()=>t(o)))}o.keys=()=>Object.keys(i),o.id=3979,e.exports=o}}]);