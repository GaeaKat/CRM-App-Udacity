import {Customer} from './types'
import {LoadingState} from "../../components/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const name = 'customer'


export interface CustomerState {
    regions: {
        regions: Array<string>,
        status: LoadingState,
    }
    list: {
        customers: Array<Customer>,
        status: LoadingState,
    },
    create: {
        status: LoadingState,
    }
    error: {
        message: string|null|undefined;
    }
}

const initialState: CustomerState = {
    error: {
        message: undefined
    },
    regions: {
        regions: [],
        status: LoadingState.Pending,
    },
    list: {
        customers: [],
        status: LoadingState.Pending
    },
    create: {
        status: LoadingState.Pending
    }
}



const slice = createSlice({
    name,
    initialState,
    reducers: {
        createCustomer: (state) => {
            state.create.status = LoadingState.Requesting
        },
        loadRegions: (state) => {
            state.regions.status=LoadingState.Requesting
        },
        setRegions: (state, {payload}) => {
            state.regions.regions=payload;
            state.regions.status=LoadingState.Success
        }
    }
});

export const {
    createCustomer,
    loadRegions,
    setRegions,
} = slice.actions;

export default slice.reducer;
