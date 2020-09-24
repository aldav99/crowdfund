import React from 'react';

import Layout from '../../shared/Layout.js'

import useBooks from '../../hooks/useBooks.js'

import { TrOfTable } from '../../TrOfTable'

import { Helmet } from 'react-helmet';

import { TableBooks, TheadBooks, Tbody } from '../../Table';

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

import { createBook } from '../../lib/client.js'
import { uploadFile } from '../../lib/filestack.js'

import cx from "classnames";

import { bookPath } from '../../helpers/routes';

import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

const schema = yup.object().shape({
    Title: yup.string().required(),
    Brief: yup.string().required(),
    Page: yup.number().positive().integer().required(),
    Lang: yup.string().min(2).max(5).required(),
    MinCost: yup.number().positive().integer().required(),
    NeededCost: yup.number().positive().integer().required(),
    FundedSum: yup.number().positive().integer().required(),
    NeededSum: yup.number().positive().integer().required(),
    Subscriber: yup.number().positive().integer().required()
});



const NewBook = () => {
    const { errors, register, handleSubmit, formState: { isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const history = useHistory();

    const onSubmit = async ({ Cover, ...fields }) => {
        const formData = new FormData()
        formData.append('fileUpload', Cover[0]);
        const uploadResult = await uploadFile(formData);

        const res = await createBook({
            ...fields,
            Cover: [
                { url: uploadResult.url }
            ],
            Page: parseFloat(fields.Page),
            MinCost: parseFloat(fields.MinCost),
            NeededCost: parseFloat(fields.NeededCost),
            FundedSum: parseFloat(fields.FundedSum),
            NeededSum: parseFloat(fields.NeededSum),
            Subscriber: parseFloat(fields.Subscriber)
        })

        const newBook = res.records[0]
        const redirectUri = bookPath(newBook.id);

        history.push(redirectUri);
    };

    return (<Layout>
        <h1 className='text-3xl font-bold'>New Book</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='nt-3'>
            <Field errors={errors} name='Title' label='Title' register={register} />
            <Field errors={errors} type='textarea' name='Brief' className='w-full' label='Brief' register={register} />
            <Field errors={errors} type='number' name='Page' label='Page' register={register} />
            <Field errors={errors} name='Lang' label='Lang' register={register} />
            <Field errors={errors} type='number' name='MinCost' label='MinCost' register={register} />
            <Field errors={errors} type='number' name='NeededCost' label='NeededCost' register={register} />
            <Field errors={errors} type='number' name='FundedSum' label='FundedSum' register={register} />
            <Field errors={errors} type='number' name='NeededSum' label='NeededSum' register={register} />
            <Field errors={errors} type='number' name='Subscriber' label='Subscriber' register={register} />
            <Field type='file' name='Cover' label='Upload Cover' register={register} />
            <button disabled={isSubmitting} className='nt-3 bg-gray-900 px-3 py-2'>{isSubmitting ? 'Submitting' : 'Add Book'}</button>
        </form>
    </Layout>)
}

const Field = ({ errors, register, label, type, className, ...inputProps }) => {
    const Component = type === 'textarea' ? 'textarea' : 'input';
    return (
        <div>
            <label className='block' htmlFor={inputProps.name}>{label}</label>
            <Component className={cx('border border-gray-500 rounded px-2 py-3 w-full', className)} ref={register} type={type} {...inputProps} />
            {errors && errors[inputProps.name] && <span>{errors[inputProps.name].message}</span>}
        </div>
    )
}

export default NewBook;