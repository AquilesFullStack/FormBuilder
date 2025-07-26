import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useGetCepQuery } from "../api";
import { Stepper } from 'react-form-stepper';
import { motion } from "framer-motion";

import { Button, Input, ErrorMessage, Label, FormContainer, Form, StepContainer, StepTitle, StepButton, BackButton, SummaryItem, Summary, SuccessMessage } from "../pages/styles";


const schema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    cpf: Yup.string().required("CPF é obrigatório"),
    dateBirth: Yup.date().required("Data de Nascimento é obrigatória"),
    cep: Yup.string().required("CEP é obrigatório"),
    rua: Yup.string().required("Rua é obrigatória"),
    numero: Yup.string().required("Número é obrigatório"),
    bairro: Yup.string().required("Bairro é obrigatório"),
    cidade: Yup.string().required("Cidade é obrigatória"),
    estado: Yup.string().required("Estado é obrigatório"),
    cargo: Yup.string().required("Cargo é obrigatório"),
    departamento: Yup.string().required("Departamento é obrigatório"),
    tipoContrato: Yup.string().required("Tipo de Contrato é obrigatório")
});

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm({
        resolver: yupResolver(schema)
    });

    const [users, setUsers] = useState<any[]>([]);
    const [activeStep, setActiveStep] = useState(0);
    const cepValue = watch("cep") || "";
    const { data } = useGetCepQuery(cepValue.replace(/\D/g, ""), {
        skip: !cepValue || cepValue.length < 8
    });

    useEffect(() => {
        if (data) {
            setValue("rua", data.logradouro || "");
            setValue("bairro", data.bairro || "");
            setValue("cidade", data.localidade || "");
            setValue("estado", data.uf || "");
            setValue("numero", data.complemento || "");
        }
    }, [data, setValue]);

    const onSubmit = (formData: any) => {
        setUsers((prevUsers) => [...prevUsers, formData]);
        console.log(formData);
        setActiveStep(4);
    };

    const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, 4));
    const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

    return (
        <>
            <Stepper
                steps={[
                    { label: 'Etapa 1' },
                    { label: 'Etapa 2' },
                    { label: 'Etapa 3' },
                    { label: 'Revisão' },
                    { label: 'Finalizado' }
                ]}
                activeStep={activeStep}
            />

            <FormContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {activeStep === 0 && (
                        <StepContainer className="etapa1">
                            <StepTitle>Dados Pessoais</StepTitle>
                            <Label>Nome</Label>
                            <Input type="text" {...register("name")} />
                            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                            <Label>E-mail</Label>
                            <Input type="email" {...register("email")} />
                            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                            <Label>CPF</Label>
                            <Input type="text" {...register("cpf")} />
                            {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}

                            <Label>Data de Nascimento</Label>
                            <Input type="date" {...register("dateBirth")} />
                            {errors.dateBirth && <ErrorMessage>{errors.dateBirth.message}</ErrorMessage>}

                            <StepButton type="button" onClick={handleNext}>Próximo</StepButton>                        </StepContainer>
                    )}

                    {activeStep === 1 && (
                        <StepContainer className="etapa2">
                            <StepTitle>Endereço</StepTitle>

                            <Label>CEP</Label>
                            <Input type="text" {...register("cep")} />
                            {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}

                            <Label>Rua</Label>
                            <Input type="text" {...register("rua")} />
                            {errors.rua && <ErrorMessage>{errors.rua.message}</ErrorMessage>}

                            <Label>Número</Label>
                            <Input type="text" {...register("numero")} />
                            {errors.numero && <ErrorMessage>{errors.numero.message}</ErrorMessage>}

                            <Label>Bairro</Label>
                            <Input type="text" {...register("bairro")} />
                            {errors.bairro && <ErrorMessage>{errors.bairro.message}</ErrorMessage>}

                            <Label>Cidade</Label>
                            <Input type="text" {...register("cidade")} />
                            {errors.cidade && <ErrorMessage>{errors.cidade.message}</ErrorMessage>}

                            <Label>Estado</Label>
                            <Input type="text" {...register("estado")} />
                            {errors.estado && <ErrorMessage>{errors.estado.message}</ErrorMessage>}

                            <div style={{ marginTop: "1rem" }}>
                                <BackButton type="button" onClick={handleBack}>Voltar</BackButton>
                                <StepButton type="button" onClick={handleNext}>Próximo</StepButton>
                            </div>
                        </StepContainer>
                    )}

                    {activeStep === 2 && (
                        <StepContainer className="etapa3">
                            <StepTitle>Informações do Cargo</StepTitle>

                            <Label>Cargo</Label>
                            <Input type="text" {...register("cargo")} />
                            {errors.cargo && <ErrorMessage>{errors.cargo.message}</ErrorMessage>}

                            <Label>Departamento</Label>
                            <Input type="text" {...register("departamento")} />
                            {errors.departamento && <ErrorMessage>{errors.departamento.message}</ErrorMessage>}

                            <Label>Tipo de Contrato</Label>
                            <select {...register("tipoContrato")}>
                                <option value="">Selecione...</option>
                                <option value="CLT">CLT</option>
                                <option value="PJ">PJ</option>
                                <option value="Estágio">Estágio</option>
                            </select>
                            {errors.tipoContrato && <ErrorMessage>{errors.tipoContrato.message}</ErrorMessage>}

                            <div style={{ marginTop: "1rem" }}>
                                <BackButton type="button" onClick={handleBack}>Voltar</BackButton>
                                <StepButton type="button" onClick={handleNext}>Próximo</StepButton>
                            </div>
                        </StepContainer>
                    )}

                    {activeStep === 3 && (
                        <Summary className="etapa4">
                            <StepTitle>Resumo do Cadastro</StepTitle>
                            <SummaryItem>Nome:{watch("name")}</SummaryItem>
                            <SummaryItem>E-mail: {watch("email")}</SummaryItem>
                            <SummaryItem>CPF: {watch("cpf")}</SummaryItem>
                            <SummaryItem>Data de Nascimento: {watch("dateBirth")
                                ? new Date(watch("dateBirth")).toLocaleDateString("pt-BR")
                                : "Não informado"}</SummaryItem>
                            <SummaryItem>CEP: {watch("cep")}</SummaryItem>
                            <SummaryItem>Rua: {watch("rua")}</SummaryItem>
                            <SummaryItem>Número:{watch("numero")}</SummaryItem>
                            <SummaryItem>Bairro:{watch("bairro")}</SummaryItem>
                            <SummaryItem>Cidade:{watch("cidade")}</SummaryItem>
                            <SummaryItem>Estado:{watch("estado")}</SummaryItem>
                            <SummaryItem>Cargo:{watch("cargo")}</SummaryItem>
                            <SummaryItem>Departamento:{watch("departamento")}</SummaryItem>
                            <SummaryItem>Tipo de Contrato:{watch("tipoContrato")}</SummaryItem>

                            <div style={{ marginTop: "1rem" }}>
                                <BackButton type="button" onClick={handleBack}>Voltar</BackButton>
                                <Button type="submit">Enviar</Button>
                            </div>
                        </Summary>
                    )}

                    {activeStep === 4 && (
                        <StepContainer className="etapa5">
                            <StepTitle>Cadastro Finalizado!</StepTitle>
                            <SuccessMessage>Os dados foram enviados com sucesso.</SuccessMessage>
                            <Button type="button" onClick={() => setActiveStep(0)}>Cadastrar Novo</Button>
                        </StepContainer>
                    )}
                </Form>
            </FormContainer>
            <StepContainer>
                <h2>Lista de usuários cadastrados</h2>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            <strong>Nome:</strong> {user.name} <br />
                            <strong>Email:</strong> {user.email}
                        </li>
                    ))}
                </ul>
            </StepContainer>
        </>
    );
};

export default Home;
