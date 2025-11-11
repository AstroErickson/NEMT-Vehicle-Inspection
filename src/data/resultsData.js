var inspectionResult = '';
var inspectionPictures = '';
var noPicturesReason = '';
var providerSignature = '';
var signatureDate = ''; 
var transdevSignature = '';
var transdevSignatureDate = '';
var reinspectionDate = '';
var providerSignatureUrl = '';
var transdevSignatureUrl = '';

export function setProviderSignatureUrl(value) {
    console.log('Setting Provider Signature URL:', value);
    providerSignatureUrl = value;
}
export function getProviderSignatureUrl() {
    console.log('Getting Provider Signature URL:', providerSignatureUrl);
    return providerSignatureUrl;
}
export function setTransdevSignatureUrl(value) {
    console.log('Setting Transdev Signature URL:', value);
    transdevSignatureUrl = value;
}
export function getTransdevSignatureUrl() {
    console.log('Getting Transdev Signature URL:', transdevSignatureUrl);
    return transdevSignatureUrl;
}
export function setInspectionResult(value) {
    inspectionResult = value;
}
export function getInspectionResult() {
    return inspectionResult;
}
export function setInspectionPictures(value) {
    inspectionPictures = value;
}
export function getInspectionPictures() {
    return inspectionPictures;
}
export function setNoPicturesReason(value) {
    noPicturesReason = value;
}
export function getNoPicturesReason() {
    return noPicturesReason;
}
export function setProviderSignature(value) {
    providerSignature = value;
}
export function getProviderSignature() {
    return providerSignature;
}
export function setSignatureDate(value) {
    signatureDate = value;
}
export function getSignatureDate() {
    return signatureDate;
}
export function setTransdevSignature(value) {   
    transdevSignature = value;
}
export function getTransdevSignature() {
    return transdevSignature;
}
export function setTransdevSignatureDate(value) {
    transdevSignatureDate = value;
}
export function getTransdevSignatureDate() {
    return transdevSignatureDate;
}
export function setReinspectionDate(value) {
    reinspectionDate = value;
}
export function getReinspectionDate() {
    return reinspectionDate;
}       

