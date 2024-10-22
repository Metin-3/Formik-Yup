import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("Adınızı daxil edin"),

    surname: Yup
        .string()
        .required("Soyadınızı daxil edin"),

    age: Yup
        .number()
        .required("Yaşınızı daxil eidin")
        .positive("Yaşınızı düzgün daxil edin")
        .integer("Yaşınızı tam ədəd olaraq daxil edin"),

    email: Yup
        .string()
        .email("E-mail ünvanınızı düzgün daxil edin.")
        .required("E-mail ünvanınızı mütləq daxil edin"),

    password: Yup
        .string()
        .required("Passwordu mütləq daxil edin"),

    confirmPassword: Yup
        .string()
        .required("Passwordu mütləq yenidən daxil edin")
        .oneOf([Yup.ref("password", Yup.password)], "Parolunnuzu duzgun yeniden daxil edin"),

    term: Yup
        .boolean()
        .required("Zehmet olmasa müqaviləni təstiqləyin")
})