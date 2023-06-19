import { ResponseApi } from "@/app/models";

export const validacionRespuesta = (responseApi: ResponseApi) => {
    if (responseApi.state === 'Error') {
        return false
    } else if (responseApi.state === 'Ok') {
        return true
    } else {
        return false
    }
}