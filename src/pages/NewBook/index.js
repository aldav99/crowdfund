import React from 'react';

import Layout from '../../shared/Layout.js'

import useBooks from '../../hooks/useBooks.js'

import { TrOfTable } from '../../TrOfTable'

import { Helmet } from 'react-helmet';

import { TableBooks, TheadBooks, Tbody } from '../../Table';

import { useHistory } from "react-router";

import { useForm } from "react-hook-form";

import { createBook } from '../../lib/client.js'

import cx from "classnames";


const NewBook = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (fields) => {
        return createBook({
            ...fields,
            Page: parseFloat(fields.Page),
            MinCost: parseFloat(fields.MinCost),
            NeededCost: parseFloat(fields.NeededCost),
            FundedSum: parseFloat(fields.FundedSum),
            NeededSum: parseFloat(fields.NeededSum),
            Subscriber: parseFloat(fields.Subscriber),
        }).then((res) => {
            console.log(res);
            return res;
        })
    };

    return (<Layout>
        <h1 className='text-3xl font-bold'>New Book</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='nt-3'>
            <Field name='Title' label='Title' register={register} />
            <Field type='textarea' name='Brief' className='w-full' label='Brief' register={register} />
            <Field type='number' name='Page' label='Page' register={register} />
            <Field name='Lang' label='Lang' register={register} />
            <Field type='number' name='MinCost' label='MinCost' register={register} />
            <Field type='number' name='NeededCost' label='NeededCost' register={register} />
            <Field type='number' name='FundedSum' label='FundedSum' register={register} />
            <Field type='number' name='NeededSum' label='NeededSum' register={register} />
            <Field type='number' name='Subscriber' label='Subscriber' register={register} />
            <Field name='Cover[0].url' label='Cover' register={register} />
            <button className='nt-3 bg-gray-900 px-3 py-2'>Add Book</button>
        </form>
    </Layout>)
}

const Field = ({ register, label, type, className, ...inputProps }) => {
    const Component = type === 'textarea' ? 'textarea' : 'input';
    return (
        <div>
            <label className='block' htmlFor={inputProps.name}>{label}</label>
            <Component className={cx('border border-gray-500 rounded px-2 py-3 w-full', className)} ref={register} {...inputProps} />
        </div>
    )
}

export default NewBook;