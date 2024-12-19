import { Placeholder } from "semantic-ui-react";

export const Formconfig =[
    {
        id:1,
        type:"text",
        name:"Username",
        Placeholder:"enter username",
        lable:"username",
        value:'',
        error:false,
        validation:{
            required:true,
            minlength:5
        }
        
    },
    {
        id:2,
        type:"email",
        name:"email",
        Placeholder:"enter email",
        lable:"email",
        value:'',
        error:false,
        validation:{
            required:true,
            minlength:5
        }
    },
    {
        id:3,
        type:"Number",
        name:"mobile no",
        Placeholder:"enter phone no.",
        lable:"mobile no",
        value:'',
        error:false,
        validation:{
            required:true,
            minlength:5
        }
    },
    {
        id:4,
        type:"text",
        name:"country",
        Placeholder:"enter country",
        lable:"country",
        value:'',
        error:false,
        validation:{
            required:true,
            minlength:5
        }
        
    },
    {
        id:5,
        type:"checkbox",
        name:"checkbox",
        Placeholder:"enter country",
        lable:"Accept term and condition",
        value:false,
        error:false,
        validation:{
            required:true,
            minlength:5
        }
        
    }
]