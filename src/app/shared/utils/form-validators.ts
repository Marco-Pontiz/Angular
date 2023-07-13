import { ValidationErrors, AbstractControl, ValidatorFn, FormControl } from "@angular/forms";

export function noNombreValidator(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {

    if(control instanceof FormControl) {
        if(typeof control.value === 'string' && control.value?.includes('Sebastian')) {
            return{
                noNombre: true,
        }
        }
    }
      return null //Null sería el caso en el que el control sea Valido.. en resumen no hay error
    };
}

export function nombreValidator(): ValidatorFn {
    return(control: AbstractControl): ValidationErrors | null => {
        if(control instanceof FormControl) {
            const regex = /[A-Z]/;
            if(!regex.test(control.value)) {
                return {
                    noUpperCase: true
        };
    }
    }
    return null;
    };
}