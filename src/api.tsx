import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Cep = {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    estado: string
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://viacep.com.br/ws/"
    }),
    endpoints: (builder) => ({
        getCep: builder.query<Cep, string>({
            query: (cep) => `${cep}/json/`
        })
    })  
});

export const { useGetCepQuery } = api;

export default api;

