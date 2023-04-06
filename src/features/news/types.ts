export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
    descripcion: string;
    fecha: number | string;
  }
  
export interface IModal {
    visible: boolean;
    noticia: INoticiasNormalizadas | null;
  }