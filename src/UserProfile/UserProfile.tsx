import React from 'react'
import { Stack, Alert, Grid } from '@mui/material';
import { FiChevronRight } from "react-icons/fi";
import General from './General';


interface Props {

}
interface BreadCrumbs {
    label: string
}
const UserProfile = (props: Props) => {

    const BreadCrumbs = (props: BreadCrumbs) => {
        const { label } = props
        return (
            <button className="font-normal bg-neutral-50 border-solid border-black border-0 shadow-md px-2 py-1 rounded text-center" >{label}</button>
        )
    }
    return (
        <main className="bg-gray-50 mx-4 pt-5">
            <div>
                <Stack
                    direction="row"
                    divider={<div className="flex items-center"><FiChevronRight /></div>}
                    spacing={2}>
                    <BreadCrumbs label={'Profile'} />
                    <BreadCrumbs label={'Settings'} />
                </Stack>
            </div>
            <br />
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <nav className="w-64 bg-gray-50 row-span-3 pr-4">
                        <a className="block px-2 py-2 my-1 font-bold rounded bg-slate-200">General</a>
                        <a className="block px-2 py-2 my-1 font-semibold">Account Settings</a>
                        <a className="block px-2 py-2 my-1 font-semibold">Security</a>
                        <a className="block px-2 py-2 my-1 font-semibold">Notifications</a>
                    </nav>
                </Grid>
                <Grid item xs={10}>
                    <div className="border-solid border-red-500 border-2 font-medium rounded mb-4 mt-1">
                        <Alert severity="error"><p className="h-34 font-semibold ">Email Address verification is pending</p></Alert>
                    </div>
                    <General />
                </Grid>
            </Grid>
        </main>
    )
}

export default UserProfile
