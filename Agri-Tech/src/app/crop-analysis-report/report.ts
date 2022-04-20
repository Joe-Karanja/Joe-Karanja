export class Report {
    analysis_REF_No: string | ArrayBuffer | null | undefined;
    crop: string;
    status: string | ArrayBuffer | null | undefined;
    disease_Name: string | ArrayBuffer | null | undefined;
    probability: string | ArrayBuffer | null | undefined;
    date_Created:string | ArrayBuffer | null | undefined;

    constructor(analysis_Ref_No:undefined,crop:undefined,status:undefined,disease_Name:undefined,probability:undefined,date_Created:undefined){
        this.analysis_REF_No = analysis_Ref_No;
        this.crop = crop;
        this.status = status;
        this.disease_Name = disease_Name;
        this.probability = probability;
        this.date_Created = date_Created
    }
}
