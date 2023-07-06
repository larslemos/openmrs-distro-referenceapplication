"use strict";(globalThis.webpackChunk_openmrs_esm_patient_immunizations_app=globalThis.webpackChunk_openmrs_esm_patient_immunizations_app||[]).push([[392],{6741:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(272),r=t.n(i),a=t(2609),o=t.n(a)()(r());o.push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.-esm-patient-immunizations__immunizations-form__immunizationSequenceSelect___QTffN{margin:1rem 2rem 1rem}.-esm-patient-immunizations__immunizations-form__form___JmY4y{display:flex;flex-direction:column;justify-content:space-between;height:calc(100vh - 6rem)}.-esm-patient-immunizations__immunizations-form__button___MfHJO{height:4rem;display:flex;align-content:flex-start;align-items:baseline;min-width:50%}.-esm-patient-immunizations__immunizations-form__tablet___X_Hrs{padding:1.5rem 1rem;background-color:#fff}.-esm-patient-immunizations__immunizations-form__desktop___ZaD77{padding:0rem}","",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/immunizations/immunizations-form.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CCnDF,oFACE,qBAAA,CAGF,8DACE,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,yBAAA,CAGF,gEACE,WAAA,CACA,YAAA,CACA,wBAAA,CACA,oBAAA,CACA,aAAA,CAGF,gEACE,mBAAA,CACA,qBDxBM,CC2BR,iEACE,YAAA",sourceRoot:""}]),o.locals={immunizationSequenceSelect:"-esm-patient-immunizations__immunizations-form__immunizationSequenceSelect___QTffN",form:"-esm-patient-immunizations__immunizations-form__form___JmY4y",button:"-esm-patient-immunizations__immunizations-form__button___MfHJO",tablet:"-esm-patient-immunizations__immunizations-form__tablet___X_Hrs",desktop:"-esm-patient-immunizations__immunizations-form__desktop___ZaD77"};const u=o},4539:(e,n,t)=>{t.d(n,{V:()=>d,j:()=>v});var i=t(906),r=t(5961),a=t(772),o=t(8128),u=t(4402),c=t(3012),l=t(3211),s=function(e){var n,t,r=null==e?void 0:e.resource,a=null==r?void 0:r.id,o=null==r||null===(n=r.manufacturer)||void 0===n?void 0:n.display,u=null==r?void 0:r.lotNumber,c=(null==r||null===(t=r.protocolApplied)||void 0===t?void 0:t.length)>0&&(null==r?void 0:r.protocolApplied[0]);return{immunizationObsUuid:a,manufacturer:o,lotNumber:u,sequenceLabel:null==c?void 0:c.series,sequenceNumber:null==c?void 0:c.doseNumberPositiveInt,occurrenceDateTime:(0,i.formatDate)(new Date(null==r?void 0:r.occurrenceDateTime)),expirationDate:(0,i.formatDate)(new Date(null==r?void 0:r.expirationDate))}},m=function(e){var n;return(0,r.Z)(null==e||null===(n=e.vaccineCode)||void 0===n?void 0:n.coding,(function(e){return(0,u.Z)(e.system)}))},d=function(e){var n=(0,o.Z)(e.entry,(function(e){var n;return null===(n=m(e.resource))||void 0===n?void 0:n.code}));return(0,c.Z)(n,(function(e){var n,t=(0,c.Z)(e,s),i=m(null===(n=e[0])||void 0===n?void 0:n.resource);return{vaccineName:null==i?void 0:i.display,vaccineUuid:null==i?void 0:i.code,existingDoses:(0,l.Z)(t,[function(e){return(0,a.Z)(e,"occurrenceDateTime")}],["desc"])}}))};function f(e,n){return{type:e,reference:"".concat(e,"/").concat(n)}}var v=function(e,n,t,r){return{resourceType:"Immunization",status:"completed",id:e.immunizationObsUuid,vaccineCode:{coding:[{code:e.vaccineUuid,display:e.vaccineName}]},patient:f("Patient",e.patientUuid),encounter:f("Encounter",n),occurrenceDateTime:(0,i.parseDate)(e.vaccinationDate),expirationDate:(0,i.parseDate)(e.expirationDate),location:f("Location",t),performer:[{actor:f("Practitioner",r)}],manufacturer:{display:e.manufacturer},lotNumber:e.lotNumber,protocolApplied:[{doseNumberPositiveInt:e.currentDose.sequenceNumber,series:e.currentDose.sequenceLabel}]}}},4672:(e,n,t)=>{t.d(n,{s:()=>i});var i=new(t(2444).BehaviorSubject)(null)},8392:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});var i=t(268),r=t.n(i),a=t(4924),o=t(924),u=t(906),c=t(7123),l=t(4539),s=t(4672),m=t(1354),d=t.n(m),f=t(1583),v=t.n(f),p=t(7378),b=t.n(p),A=t(5993),y=t.n(A),_=t(4154),g=t.n(_),h=t(8141),S=t.n(h),C=t(6741),D={};D.styleTagTransform=S(),D.setAttributes=y(),D.insert=b().bind(null,"head"),D.domAPI=v(),D.insertStyleElement=g(),d()(C.Z,D);const z=C.Z&&C.Z.locals?C.Z.locals:void 0;function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){N(e,n,t[n])}))}return e}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,r,a=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(i=t.next()).done)&&(a.push(i.value),!n||a.length!==n);o=!0);}catch(e){u=!0,r=e}finally{try{o||null==t.return||t.return()}finally{if(u)throw r}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const x=function(e){var n,t,m=e.patientUuid,d=e.closeWorkspace,f=w((0,i.useState)({vaccineName:"",vaccineUuid:"",immunizationObsUuid:"",vaccinationDate:null,sequences:[],currentDose:{},expirationDate:null,lotNumber:"",manufacturer:"",formChanged:!1}),2),v=f[0],p=f[1],b=function(e,n){return p((function(t){return i=O({},t),r=null!=(r=N({},e,n))?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t.push.apply(t,i)}return t}(Object(r)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(r,e))})),i;var i,r}))},A=(0,a.useTranslation)().t,y=(0,u.useSession)(),_=(0,u.useVisit)(m).currentVisit,g="tablet"===(0,u.useLayoutType)(),h=!!v.immunizationObsUuid,S=!h&&!!v.vaccinationDate,C=h&&v.formChanged;(0,i.useEffect)((function(){var e=s.s.subscribe((function(e){return e&&p(e)}));return function(){return e.unsubscribe()}}),[]);var D,E=r().useCallback((function(e){var n,t;e.preventDefault();var i=null==_?void 0:_.uuid,r=null==y||null===(n=y.sessionLocation)||void 0===n?void 0:n.uuid,a=null==y||null===(t=y.currentProvider)||void 0===t?void 0:t.uuid,o=O({patientUuid:m},v),s=new AbortController;return(0,c.eu)((0,l.j)(o,i,r,a),m,v.immunizationObsUuid,s).then((function(e){201===e.status&&d(),(0,u.showToast)({kind:"success",description:A("vaccinationSaved","Vaccination saved successfully")})}),(function(e){(0,u.showNotification)({title:A("errorSaving","Error saving vaccination"),kind:"error",critical:!0,description:null==e?void 0:e.message})})),function(){return s.abort()}}),[null==y||null===(n=y.sessionLocation)||void 0===n?void 0:n.uuid,d,v,m,null==y||null===(t=y.currentProvider)||void 0===t?void 0:t.uuid,null==_?void 0:_.uuid,A]);return r().createElement(o.l09,{className:z.form,onSubmit:E,"data-testid":"immunization-form"},r().createElement("div",null,r().createElement("h4",{className:z.immunizationSequenceSelect},"".concat(A("vaccine","Vaccine")," : ").concat(null==v?void 0:v.vaccineName)," "),(D=v.sequences)&&(null==D?void 0:D.length)>0&&r().createElement("div",{className:z.immunizationSequenceSelect},r().createElement(o.PhF,{id:"sequence",name:"sequence",value:v.currentDose.sequenceNumber,onChange:function(e){var n=v.sequences.find((function(n){return t=e.target.value,!isNaN(t)&&n.sequenceNumber===parseInt(e.target.value);var t}))||{};b("currentDose",n)},className:"immunizationSequenceSelect",labelText:A("sequence","Sequence")},r().createElement(o.QlF,{text:A("pleaseSelect","Please select"),value:"DEFAULT"},A("pleaseSelect","Please select")),v.sequences.map((function(e){return r().createElement(o.QlF,{key:e.sequenceNumber,text:e.sequenceLabel,value:e.sequenceNumber},A(e.sequenceLabel,e.sequenceLabel))})))),r().createElement("div",{className:z.immunizationSequenceSelect},r().createElement(o.Mtg,{id:"vaccinationDate",className:"vaccinationDate",maxDate:(new Date).toISOString(),dateFormat:"d/m/Y",datePickerType:"single",value:v.vaccinationDate,onChange:function(e){var n=w(e,1)[0];return b("vaccinationDate",n.toISOString())}},r().createElement(o.aj6,{id:"date-picker-calendar-id",placeholder:"dd/mm/yyyy",labelText:A("vaccinationDate","Vaccination Date"),type:"text"}))),r().createElement("div",{className:z.immunizationSequenceSelect},r().createElement(o.Mtg,{id:"vaccinationExpiration",className:"vaccinationExpiration",minDate:(new Date).toISOString(),dateFormat:"d/m/Y",datePickerType:"single",value:v.expirationDate,onChange:function(e){var n=w(e,1)[0];return b("expirationDate",n.toISOString())}},r().createElement(o.aj6,{id:"date-picker-calendar-id",placeholder:"dd/mm/yyyy",labelText:A("expirationDate","Expiration Date"),type:"text"}))),r().createElement("div",{className:z.immunizationSequenceSelect},r().createElement(o.oil,{type:"text",id:"lotNumber",labelText:A("lotNumber","Lot Number"),value:v.lotNumber,onChange:function(e){return b("lotNumber",e.target.value)}})),r().createElement("div",{className:z.immunizationSequenceSelect},r().createElement(o.oil,{type:"text",id:"manufacturer",labelText:A("manufacturer","Manufacturer"),value:v.manufacturer,onChange:function(e){return b("manufacturer",e.target.value)}}))),r().createElement(o.uVA,{className:g?z.tablet:z.desktop},r().createElement(o.zxk,{className:z.button,kind:"secondary",onClick:function(){return d()}},A("cancel","Cancel")),r().createElement(o.zxk,{className:z.button,kind:"primary",disabled:h?!C:!S},A("save","Save"))))}},7123:(e,n,t)=>{t.d(n,{dv:()=>l,eu:()=>s,iX:()=>c}),t(5047);var i=t(3255),r=t(906),a=t(4185),o=t(4539);function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function c(){var e,n,t,o=(0,r.useConfig)().immunizationsConfig,c=null==o?void 0:o.vaccinesConceptSet,l=(n=c.split(":"),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,r,a=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(i=t.next()).done)&&(a.push(i.value),!n||a.length!==n);o=!0);}catch(e){u=!0,r=e}finally{try{o||null==t.return||t.return()}finally{if(u)throw r}}return a}}(n,t)||function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=l[0],m=l[1],d="/ws/rest/v1/concept?source=".concat(s,"&code=").concat(m,"&v=full"),f="/ws/rest/v1/concept/".concat(c,"?v=full"),v=(0,i.ZP)((e=c,(0,a.Z)(e,":")?d:f),r.openmrsFetch),p=v.data,b=v.error,A=v.isLoading;return{data:p?p.data.results[0]:null,isError:b,isLoading:A}}function l(e){var n="".concat(r.fhirBaseUrl,"/Immunization?patient=").concat(e),t=(0,i.ZP)(n,r.openmrsFetch),a=t.data,u=t.error,c=t.isLoading,l=t.isValidating,s=a?(0,o.V)(a.data):null;return{data:a?s:null,isError:u,isLoading:c,isValidating:l}}function s(e,n,t,i){var a="".concat(r.fhirBaseUrl,"/Immunization");return t&&(a="".concat(a,"/").concat(t)),(0,r.openmrsFetch)(a,{headers:{"Content-Type":"application/json"},method:"POST",body:e,signal:i.signal})}}}]);