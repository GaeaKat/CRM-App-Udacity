import {watchLoadRegions} from "./listRegions";
import { all } from 'redux-saga/effects'
import {watchCreateCustomer} from "./create";
import {watchLoadCustomers} from "./load";
import {watchEditCustomer} from "./edit";

export default function* customer() {
    yield all([
        watchLoadRegions(),
        watchCreateCustomer(),
        watchLoadCustomers(),
        watchEditCustomer(),
    ])
}
