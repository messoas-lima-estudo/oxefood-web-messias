export function formatarData(data) {

    if (!data) return "";
    return new Intl.DateTimeFormat("pt-BR").format(new Date(data));

}