import { api } from "../../shared/services/api";

export async function listar(mappingController) {

    const response = await api.get(mappingController);
    return response.data;
}

export async function buscarPorId(mappingController, id) {

    const response = await api.get(mappingController+'/'+id);
    return response.data;
}

export async function cadastrar(mappingCnotroller, obj) {

    const response = await api.post(mappingCnotroller, obj);
    return response.data;
}

export async function atualizar(mappingController, obj) {

    const response = await api.put(mappingController, obj);
    return response.data;
}

export async function remover(mappingController, id) {

    await api.delete(mappingController+'/'+id);
}