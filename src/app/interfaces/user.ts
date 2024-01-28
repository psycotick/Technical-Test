export interface User {
    id?: number; 
    document: string; 
    firstName: string;
    lastName: string; 
    phone: string;
    email: string;
    foto: string;
    idTipoDocumento: number;
    idSexo: number; 
    fechaCreacion?: string; 
}

export interface TipoDocumento {
    idTipoDocumento?: number;
    nombre: string;
    fechaCreacion?: string;
}

export interface Sexo {
    idSexo?: number;
    nombre: string;
    fechaCreacion?: string;
}

export interface ControlAsistencia {
    idEvento?: number;
    documento: string;
    fechaEvento: string;
    tipoEvento: string;
    fechaCreacion?: string;
}