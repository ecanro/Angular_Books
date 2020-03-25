interface BooksDictionary{ 
    [id: string]: Book;
}

interface Book {
    id: string;
    title: string;
    author: string[];

}

interface Docs {
    id: string;
    title: string;
    author: string
}

interface DocsServer {
    docs: any[];
}

interface ResumeDictionary {
    [id: string]: Resume
}

interface Resume {
    title: string;
    info: string;
    resume?: string;
    resume2?: string;
    cover: string
}


//las exporto para poder usarlas en mis componentes o mi apiService
export { BooksDictionary, Book, Docs, DocsServer, Resume, ResumeDictionary }
