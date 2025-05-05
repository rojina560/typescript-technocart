{
    // union types
    type FrontendDeveloper = 'junior'|'senior';
    type BackendDeveloper = 'fakibaj'|'serious';
    type developer = FrontendDeveloper | BackendDeveloper
    const newDeveloper : FrontendDeveloper = 'junior'

    type User = {
        name: string;
        number?: number;
        gender: 'male'|'female';
        bloodGroup :'ab+'|'ab-'|'o+'
    }
    const user1: User = {
        name :'rojina',
        gender:'male',
        bloodGroup: 'o+'
    }

    type FrontendDeveloper1 = {
        skills: string[];
        designation1: 'frontendDeveloper'
    }
    type BackendDeveloper1 = {
        skills : string[];
        designation2 : 'backenDeveloper'
    }
    type FullstackDeveloper = FrontendDeveloper1 & BackendDeveloper1
    const fullstackDeveloper : FullstackDeveloper ={
        skills: ['html','css'],
        designation1: 'frontendDeveloper',
        designation2:'backenDeveloper'
    }

    // | ai or symbol take union type bola hoi & ai and symbol aitare intersection type bola hoi
}