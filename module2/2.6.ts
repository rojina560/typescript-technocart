{
    // constraints in typeScript----contraints hocsse nirdisto kre property bole deya 

    interface Student{
        name:string;
        email: string;
        id:number
    }

    const addCourseToStudent =<T extends Student>(student:T)=>{
        const course = 'next level web developer'
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({name: 'fjk',email:'jdfbh', id:8})
    const student2 = addCourseToStudent({name: 'fjk',email:'jdfbh', id:8,watch:'kfjdgh'})
    const student3 = addCourseToStudent({ name:'fhfcg',email:'ruiyh',id:68,watch:'bk'})
    
}