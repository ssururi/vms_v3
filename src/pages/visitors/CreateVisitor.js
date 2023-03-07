import React from 'react';
import { Box } from '@mui/material';
import { useGetGuestsQuery } from 'store/api';
import { DataGrid } from '@mui/x-data-grid';

const CreateVisitor = () => {
    const { data, isLoading } = useGetGuestsQuery();
    console.log(data);

    return <div>CreateVisitor</div>;
};

export default CreateVisitor;
