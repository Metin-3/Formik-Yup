import React from 'react';
import './form.css';
import { useFormik } from 'formik';
import { formSchema } from '../../Schema/registerSchema';

const RegisterForm = () => {

    const submit = (value, action) => {
        setTimeout(() => {
            console.log(value)
            action.resetForm()
        }, 1000)
    }

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            surname: "",
            age: "",
            email: "",
            password: "",
            confirmPassword: "",
            term: ""
        },

        validationSchema: formSchema,
        onSubmit: submit
    });

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='form-item'>
                <label htmlFor="name">Name :</label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='Enter name...'
                    onChange={handleChange}
                    value={values.name}
                />
                {errors.name && <p className='input-error'>{errors.name}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="surname">Surname :</label>
                <input
                    type="text"
                    id='surname'
                    name='surname'
                    placeholder='Enter surname...'
                    onChange={handleChange}
                    value={values.surname}
                />
                {errors.surname && <p className='input-error'>{errors.surname}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="age">Age :</label>
                <input
                    type="number"
                    id='age'
                    name='age'
                    placeholder='Enter age...'
                    onChange={handleChange}
                    value={values.age}
                />
                {errors.age && <p className='input-error'>{errors.age}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter E-mail...'
                    onChange={handleChange}
                    value={values.email}
                />
                {errors.email && <p className='input-error'>{errors.email}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="password">Password :</label>
                <input
                    type="password"
                    id='password'
                    name='password'
                    placeholder='Enter password...'
                    onChange={handleChange}
                    value={values.password}
                />
                {errors.password && <p className='input-error'>{errors.password}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="confirmPassword">Confirm password :</label>
                <input
                    type="password"
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Enter confirm password...'
                    onChange={handleChange}
                    value={values.confirmPassword}
                />
                {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
            </div>
            <div>
                <input
                    type="checkbox"
                    id='term'
                    name='term'
                    onChange={handleChange}
                    value={values.term}
                />
                <label htmlFor="term"> İstifadəçi sözləşməsini qəbul edin</label>
                {errors.term && <p className='input-error'>{errors.term}</p>}
            </div>
            <div className='form-btn'>
                <button type='submit'>Submit</button>
            </div>

        </form>
    )
}

export default RegisterForm