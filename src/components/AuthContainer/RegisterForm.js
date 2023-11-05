import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {registerValidator} from "../../validators/registerValidator";
import {authService} from "../../services";

const RegisterForm = () => {

    const [serverError, setServerError] = useState(null);

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'onBlur',
        resolver: joiResolver(registerValidator)
    });

    const save = async (user) => {

        try {
            await authService.register(user);
            setServerError(null)
        } catch (e) {
            setServerError(e.response.data)
        }
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <div>Username: <input type="text" {...register('username')}/></div>
            {errors.username && <div>{errors.username.message}</div>}
            {serverError && <div>User name already exist</div>}

            <div>Password: <input type="text" {...register('password')}/></div>
            {errors.password && <div>{errors.password.message}</div>}

            <div>Confirm Password: <input type="text" {...register('re_password')}/></div>
            {errors.re_password && <div>{errors.re_password.message}</div>}

            <button disabled={!isValid}>register</button>
        </form>
    );
};

export {RegisterForm}