export interface Profile {nameZh:string;nameEn:string;roleZh:string;roleEn:string;affiliation:string;email:string;github:string;avatar:string;bio:string;}
export interface ResearchInterest {title:string;english:string;description:string;keywords:string[];}
export interface Publication {id:string;year:number;type:'Journal'|'Conference';status:'Published'|'Accepted';title:string;authors:string;venue:string;note?:string;links:{label:string;url:string}[];}
export interface Project {title:string;period:string;organization:string;description:string;highlights:string[];}
export interface Experience {period:string;organization:string;role:string;description:string;}
export interface Award {year:string;title:string;level:string;}
