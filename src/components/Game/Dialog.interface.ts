export interface DialogInterface {
    message: string;
    resolve: ()=>void;
    reject: ()=>void;
}
