export interface ILibroApi {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
}

export interface IRespuestaLibros {
  docs: ILibroApi[];
}
