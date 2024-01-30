class News {
    private id :number = 0;
    private title :string = '';
    private description :string = '';
    private image :string = ''; 

    constructor(id:number, title:string, description:string, image:string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
    }

    getId(){
        return this.id;
    }

    setId(id:number){
        this.id = id;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title:string){
        this.title = title;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description:string){
        this.description = description;
    }

    getImage(){
        return this.image;
    }

    setImage(image:string){
        this.image = image;
    }
}