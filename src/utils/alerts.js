import Swal from 'sweetalert2'

export const valuesAlert={
    title: "",
    text: "",
    icon: "",
};

export const alertModal = (values)=>{
    Swal.fire({
        width:"20rem",
        title: values.title,
        text: values.text,
        icon: values.icon,
        showConfirmButton: values.showConfirmButton,
        timer: values.timer,
        didClose:values.didClose,
    });    
}

