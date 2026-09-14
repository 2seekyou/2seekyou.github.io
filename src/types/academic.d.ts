export interface Profile {nameZh:string;nameEn:string;roleZh:string;roleEn:string;affiliation:string;email:string;github:string;dblp:string;avatar:string;bio:string;}
export interface ResearchInterest {title:string;english:string;description:string;keywords:string[];}
export interface Publication {id:string;year?:number;yearLabel?:string;type:'Journal'|'Conference';status:'Published'|'Accepted'|'Second Review'|'Submitted';statusLabel:string;title:string;authors:string;venue:string;note?:string;links:{label:string;url:string}[];}
export interface Project {title:string;period:string;organization:string;description:string;highlights:string[];}
export interface Experience {period:string;organization:string;role:string;description:string;}
export interface Award {date:string;title:string;level:'国际级'|'国家级'|'校级';}
