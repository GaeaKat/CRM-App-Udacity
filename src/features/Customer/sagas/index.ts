import {watchLoadRegions} from "./listRegions";
import { all } from 'redux-saga/effects'

export default function* customer() {
    yield all([
        watchLoadRegions(),

    ])
}
