export interface ExperienceModel {
  puesto: string;                     
  empresa: string;                    
  fecha: string;                      
  ubicacion: string;                 
  responsabilidades: string[];        
  tags?: string[];                   
  links?: {                         
    label: string;
    url: string;
  }[];
}