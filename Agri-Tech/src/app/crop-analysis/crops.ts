export class Crops {
    id:string | ArrayBuffer | null | undefined;s
    cropType:string | ArrayBuffer | null | undefined;
    cropAccuracy:string | ArrayBuffer | null | undefined;
    cropDisease:string | ArrayBuffer | null | undefined;
    diseaseAccuracy: string | ArrayBuffer | null | undefined;
    recommendation:string | ArrayBuffer | null | undefined

    constructor(id:undefined,cropType: undefined,cropAccuracy:undefined,cropDisease: undefined,diseaseAccuracy:undefined, recommendation: undefined){

        this.id=id; 
        this.cropType=cropType;
        this.cropAccuracy=cropAccuracy;
        this.cropDisease=cropDisease;
        this.diseaseAccuracy = diseaseAccuracy;
        this.recommendation=recommendation
        
    } 
}
