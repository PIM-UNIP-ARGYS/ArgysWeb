import React, { useState } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormSwitch,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import axios from '../../../services/axios.service'

const PersonalDataForm = () => {
  const [codigo, setCodigo] = useState(null)
  const [nome, setNome] = useState(null)
  const [nomeSocial, setNomeSocial] = useState(null)
  const [sexo, setSexo] = useState(null)
  const [raca, setRaca] = useState(null)
  const [estadoCivil, setEstadoCivil] = useState(null)
  const [dataNascimento, setDataNascimento] = useState(null)
  const [grauInstituicao, setGrauInstituicao] = useState(null)
  const [deficiencia, setDeficiencia] = useState(null)
  const [nacionalidade, setNacionalidade] = useState(null)
  const [cotaDeficiencia, setCotaDeficiencia] = useState(false)
  const [proprietario, setProprietario] = useState(false)
  const [mae, setMae] = useState(null)
  const [pai, setPai] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [pisNis, setPisNis] = useState(null)
  const [rg, setRg] = useState(null)
  const [rgDigito, setRgDigito] = useState(null)
  const [ufRg, setUfRg] = useState(null)
  const [dataEmissaoRg, setDataEmissaoRg] = useState(null)
  const [orgaoExpedidorRg, setOrgaoExpedidorRg] = useState(null)
  const [tituloEleitor, setTituloEleitor] = useState(null)
  const [secao, setSecao] = useState(null)
  const [zonaEleitoral, setZonaEleitoral] = useState(null)
  const [numeroCnh, setNumeroCnh] = useState(null)
  const [categoriaCnh, setCategoriaCnh] = useState(null)
  const [dataPrimeiraCnh, setDataPrimeiraCnh] = useState(null)
  const [ufCnh, setUfCnh] = useState(null)
  const [expedicaoCnh, setExpedicaoCnh] = useState(null)
  const [dataValidadeCnh, setDataValidadeCnh] = useState(null)
  const [numeroCtps, setNumeroCtps] = useState(null)
  const [serieCtps, setSerieCtps] = useState(null)
  const [expedicaoCtps, setExpedicaoCtps] = useState(null)
  const [ufCtps, setUfCtps] = useState(null)
  const [numeroPassaporte, setNumeroPassaporte] = useState(null)
  const [validadePassaporte, setValidadePassaporte] = useState(null)
  const [cep, setCep] = useState(null)
  const [uf, setUf] = useState(null)
  const [cidade, setCidade] = useState(null)
  const [bairro, setBairro] = useState(null)
  const [logradouro, setLogradouro] = useState(null)
  const [numero, setNumero] = useState(null)
  const [complemento, setComplemento] = useState(null)
  const [tipoEndereco, setTipoEndereco] = useState(null)
  const [contatoTelefone, setContatoTelefone] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [tipoTelefone, setTipoTelefone] = useState(null)
  const [contatoEmail, setContatoEmail] = useState(null)
  const [email, setEmail] = useState(null)

  const backToPersonalData = () => {
    window.location.href = '#/trabalhador/dados_pessoais'
  }

  const handleSubmit = async () => {
    const data = {
      nome: nome,
      nomeSocial: nomeSocial,
      informacoesPessoais: {
        sexo: sexo,
        raca: raca,
        estadoCivil: estadoCivil,
        dataNascimento: dataNascimento,
        grauInstituicao: grauInstituicao,
        deficiencia: deficiencia,
        nacionalidade: nacionalidade,
        cotaDeficiencia: cotaDeficiencia,
        proprietario: proprietario,
        mae: mae,
        pai: pai,
      },
      documentos: {
        cpf: cpf,
        pisNis: pisNis,
        rg: rg,
        rgDigito: rgDigito,
        ufRg: ufRg,
        dataEmissaoRg: dataEmissaoRg,
        orgaoExpedidorRg: orgaoExpedidorRg,
      },
      tituloEleitor: {
        tituloEleitor: tituloEleitor,
        secao: secao,
        zonaEleitoral: zonaEleitoral,
      },
      cnh: {
        numero: numeroCnh,
        categoria: categoriaCnh,
        dataPrimeiraCnh: dataPrimeiraCnh,
        uf: ufCnh,
        expedicao: expedicaoCnh,
        dataValidade: dataValidadeCnh,
      },
      ctps: {
        numero: numeroCtps,
        serie: serieCtps,
        expedicao: expedicaoCtps,
        uf: ufCtps,
      },
      passaporte: { numero: numeroPassaporte, validade: validadePassaporte },
      endereco: {
        cep: cep,
        uf: uf,
        cidade: cidade,
        bairro: bairro,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        tipo: tipoEndereco,
      },
      email: {
        contato: contatoEmail,
        email: email,
      },
      telefone: {
        contato: contatoTelefone,
        telefone: telefone,
        tipo: tipoTelefone,
      },
    }

    const result = await axios.post('/pessoa', data)

    if (result.status === 200) {
      backToPersonalData()
    }
  }

  return (
    <CContainer>
      <CRow>
        <CCol md="12">
          <CForm>
            <CCard className="p-1 mb-3">
              <CCardBody className="row">
                <div className="mb-2 col-3">
                  <CFormLabel htmlFor="codigoInput">Código</CFormLabel>
                  <CFormInput
                    id="codigoInput"
                    placeholder="Código"
                    onChange={(e) => setCodigo(e.target.value)}
                    disabled
                  />
                </div>
                <div className="mb-2 col-9">
                  <CFormLabel htmlFor="nomeInput">Nome</CFormLabel>
                  <CFormInput
                    id="nomeInput"
                    placeholder="Nome"
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="mb-2 col-12">
                  <CFormLabel htmlFor="nomeSocialInput">Nome Social</CFormLabel>
                  <CFormInput
                    id="nomeSocialInput"
                    placeholder="Nome Social"
                    onChange={(e) => setNomeSocial(e.target.value)}
                  />
                </div>
              </CCardBody>
            </CCard>
            <CCard className="p-1 mb-3">
              <CAccordion>
                <CAccordionItem>
                  <CAccordionHeader>Dados Principais</CAccordionHeader>
                  <CAccordionBody>
                    <CAccordion className="p-1">
                      <CAccordionItem>
                        <CAccordionHeader>Informações Pessoais</CAccordionHeader>
                        <CAccordionBody className="row">
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="sexoInput">Sexo</CFormLabel>
                            <CFormSelect
                              id="sexoInput"
                              className="mb-3"
                              aria-label="Selecione o Banco"
                              onChange={(e) => setSexo(e.target.value)}
                            >
                              <option></option>
                              <option value="masculino">Masculino</option>
                              <option value="feminino">Feminino</option>
                              <option value="outros">Outros</option>
                            </CFormSelect>
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="racaInput">Raça</CFormLabel>
                            <CFormSelect
                              id="racaInput"
                              className="mb-2"
                              aria-label="Selecione o Agência"
                              onChange={(e) => setRaca(e.target.value)}
                            >
                              <option></option>
                              <option value="branco">Branco</option>
                              <option value="negro">Negro</option>
                              <option value="pardo">Pardo</option>
                            </CFormSelect>
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="estadoCivilInput">Estado Civil</CFormLabel>
                            <CFormSelect
                              id="estadoCivilInput"
                              className="mb-2"
                              aria-label="Selecione o Tipo da Conta"
                              onChange={(e) => setEstadoCivil(e.target.value)}
                            >
                              <option></option>
                              <option value="solteiro">Solteiro</option>
                              <option value="casado">Casado</option>
                              <option value="viúvo">Viúvo</option>
                            </CFormSelect>
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="dataNascimentoInput">
                              Data de Nascimento
                            </CFormLabel>
                            <CFormInput
                              id="dataNascimentoInput"
                              placeholder="__/__/____"
                              onChange={(e) => setDataNascimento(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="grauInstrucaoInput">Grau de Instrução</CFormLabel>
                            <CFormSelect
                              id="grauInstrucaoInput"
                              className="mb-2"
                              aria-label="Selecione o Grau de Instrução"
                              onChange={(e) => setGrauInstituicao(e.target.value)}
                            >
                              <option></option>
                              <option value="ensino fundamental">Ensino Fundamental</option>
                              <option value="ensino médio">Ensino Médio</option>
                              <option value="ensino superior">Ensino Superior</option>
                            </CFormSelect>
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="deficienciaInput">Deficiência</CFormLabel>
                            <CFormSelect
                              id="deficienciaInput"
                              className="mb-2"
                              aria-label="Selecione a Deficiência"
                              onChange={(e) => setDeficiencia(e.target.value)}
                            >
                              <option></option>
                              <option value="deficiência visual">Deficiência Visual</option>
                              <option value="deficiência motora">Deficiência Motora</option>
                              <option value="deficiência mental">Deficiência Mental</option>
                              <option value="deficiência auditiva">Deficiência Auditiva</option>
                            </CFormSelect>
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="nacionalidadeInput">Nacionalidade</CFormLabel>
                            <CFormSelect
                              id="nacionalidadeInput"
                              className="mb-2"
                              aria-label="Selecione a Nacionalidade"
                              onChange={(e) => setNacionalidade(e.target.value)}
                            >
                              <option></option>
                              <option value="brasileiro">Brasileiro(a)</option>
                            </CFormSelect>
                          </div>
                          <div className="mb-2 col-6">
                            <CFormSwitch
                              label="Preenche cota de pessoas com deficiência"
                              id="disabilityquotaChecked"
                              onChange={(e) => setCotaDeficiencia(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-6">
                            <CFormSwitch
                              label="Proprietário"
                              id="ownerChecked"
                              onChange={(e) => setProprietario(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-6">
                            <CFormLabel htmlFor="nomeMaeInput">Nome da Mãe</CFormLabel>
                            <CFormInput
                              id="nomeMaeInput"
                              placeholder="Nome da Mãe"
                              onChange={(e) => setMae(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-6">
                            <CFormLabel htmlFor="nomePaiInput">Nome do Pai</CFormLabel>
                            <CFormInput
                              id="nomePaiInput"
                              placeholder="Nome do Pai"
                              onChange={(e) => setPai(e.target.value)}
                            />
                          </div>
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                    <CAccordion className="p-1">
                      <CAccordionItem>
                        <CAccordionHeader>Documentos</CAccordionHeader>
                        <CAccordionBody className="row">
                          <div className="row col-12">
                            <div className="mb-2 col-3">
                              <CFormLabel htmlFor="cpfInput">CPF</CFormLabel>
                              <CFormInput
                                id="cpfInput"
                                placeholder="CPF"
                                onChange={(e) => setCpf(e.target.value)}
                              />
                            </div>
                            <div className="mb-2 col-3">
                              <CFormLabel htmlFor="pisNisInput">PIS/NIS</CFormLabel>
                              <CFormInput
                                id="pisNisInput"
                                placeholder="PIS/NIS"
                                onChange={(e) => setPisNis(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="row col-12">
                            <div className="mb-2 col-3">
                              <CFormLabel htmlFor="rgInput">Número de Identidade</CFormLabel>
                              <CFormInput
                                id="rgInput"
                                placeholder="Número de Identidade"
                                onChange={(e) => setRg(e.target.value)}
                              />
                            </div>
                            <div className="mb-2 col-2">
                              <CFormLabel htmlFor="digitoInput">Digito</CFormLabel>
                              <CFormInput
                                id="digitoInput"
                                placeholder="Digito"
                                onChange={(e) => setRgDigito(e.target.value)}
                              />
                            </div>
                            <div className="mb-2 col-2">
                              <CFormLabel htmlFor="ufRgInput">UF</CFormLabel>
                              <CFormSelect
                                id="ufRgInput"
                                className="mb-2"
                                aria-label="Selecione a UF de emissão"
                                onChange={(e) => setUfRg(e.target.value)}
                              >
                                <option></option>
                                <option value="sp">SP</option>
                              </CFormSelect>
                            </div>
                            <div className="mb-2 col-2">
                              <CFormLabel htmlFor="dataEmissaoInput">Data de Emissão</CFormLabel>
                              <CFormInput
                                id="dataEmissaoInput"
                                placeholder="__/__/____"
                                onChange={(e) => setDataEmissaoRg(e.target.value)}
                              />
                            </div>
                            <div className="mb-2 col-3">
                              <CFormLabel htmlFor="orgaoExpedidorInput">Órgão Expedidor</CFormLabel>
                              <CFormInput
                                id="orgaoExpedidorInput"
                                placeholder="Órgão Expedidor"
                                onChange={(e) => setOrgaoExpedidorRg(e.target.value)}
                              />
                            </div>
                          </div>
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                    <CAccordion className="p-1">
                      <CAccordionItem>
                        <CAccordionHeader>Título de Eleitor</CAccordionHeader>
                        <CAccordionBody className="row">
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="tituloEleitorInput">Título de Eleitor</CFormLabel>
                            <CFormInput
                              id="tituloEleitorInput"
                              placeholder="Título de Eleitor"
                              onChange={(e) => setTituloEleitor(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="secaoInput">Seção</CFormLabel>
                            <CFormInput
                              id="secaoInput"
                              placeholder="Seção"
                              onChange={(e) => setSecao(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="zonaEleitoralInput">Zona Eleitoral</CFormLabel>
                            <CFormInput
                              id="zonaEleitoralInput"
                              placeholder="Zona Eleitoral"
                              onChange={(e) => setZonaEleitoral(e.target.value)}
                            />
                          </div>
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                    <CAccordion className="p-1">
                      <CAccordionItem>
                        <CAccordionHeader>Carteira de Habilitação</CAccordionHeader>
                        <CAccordionBody className="row">
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="numeroCnhInput">Número</CFormLabel>
                            <CFormInput
                              id="numeroCnhInput"
                              placeholder="Número"
                              onChange={(e) => setNumeroCnh(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="categoriaCnhInput">Categoria</CFormLabel>
                            <CFormInput
                              id="categoriaCnhInput"
                              placeholder="Categoria"
                              onChange={(e) => setCategoriaCnh(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="dataPrimeiraHabilitaCnhInput">
                              Dt. Primeira Habilitação
                            </CFormLabel>
                            <CFormInput
                              id="dataPrimeiraHabilitaCnhInput"
                              placeholder="Dt. Primeira Habilitação"
                              onChange={(e) => setDataPrimeiraCnh(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="ufCnhInput">UF Expedidor</CFormLabel>
                            <CFormSelect
                              id="ufCnhInput"
                              className="mb-2"
                              aria-label="Selecione a UF Expedidor"
                              onChange={(e) => setUfCnh(e.target.value)}
                            >
                              <option></option>
                              <option value="sp">SP</option>
                            </CFormSelect>
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="expedicaoCnhInput">Expedição</CFormLabel>
                            <CFormInput
                              id="expedicaoCnhInput"
                              placeholder="__/__/____"
                              onChange={(e) => setExpedicaoCnh(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="dataValidadeCnhInput">Dt. Validade</CFormLabel>
                            <CFormInput
                              id="dataValidadeCnhInput"
                              placeholder="Dt. Validade"
                              onChange={(e) => setDataValidadeCnh(e.target.value)}
                            />
                          </div>
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                    <CAccordion className="p-1">
                      <CAccordionItem>
                        <CAccordionHeader>Carteira de Trabalho</CAccordionHeader>
                        <CAccordionBody className="row">
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="numeroCtpsInput">Número</CFormLabel>
                            <CFormInput
                              id="numeroCtpsInput"
                              placeholder="Número"
                              onChange={(e) => setNumeroCtps(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="serieCtpsInput">Série</CFormLabel>
                            <CFormInput
                              id="serieCtpsInput"
                              placeholder="Categoria"
                              onChange={(e) => setSerieCtps(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="expedicaoCtpsInput">Expedição</CFormLabel>
                            <CFormInput
                              id="expedicaoCtpsInput"
                              placeholder="__/__/____"
                              onChange={(e) => setExpedicaoCtps(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="ufCtpsInput">UF Expedidor</CFormLabel>
                            <CFormSelect
                              id="ufCtpsInput"
                              className="mb-2"
                              aria-label="Selecione a UF Expedidor CTPS"
                              onChange={(e) => setUfCtps(e.target.value)}
                            >
                              <option></option>
                              <option value="sp">SP</option>
                            </CFormSelect>
                          </div>
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                    <CAccordion className="p-1">
                      <CAccordionItem>
                        <CAccordionHeader>Passaporte</CAccordionHeader>
                        <CAccordionBody className="row">
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="numeroPassaporteInput">Número</CFormLabel>
                            <CFormInput
                              id="numeroPassaporteInput"
                              placeholder="Número"
                              onChange={(e) => setNumeroPassaporte(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="validadePassaporteInput">
                              Validade do Visto
                            </CFormLabel>
                            <CFormInput
                              id="validadePassaporteInput"
                              placeholder="__/__/____"
                              onChange={(e) => setValidadePassaporte(e.target.value)}
                            />
                          </div>
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </CCard>
            <CCard className="p-1 mb-3">
              <CAccordion>
                <CAccordionItem>
                  <CAccordionHeader>Dados Complementares</CAccordionHeader>
                  <CAccordionBody>
                    <CAccordion className="p-1">
                      <CAccordionItem>
                        <CAccordionHeader>Endereço</CAccordionHeader>
                        <CAccordionBody className="row">
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="cepInput">CEP</CFormLabel>
                            <CFormInput
                              id="cepInput"
                              placeholder="CEP"
                              onChange={(e) => setCep(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="ufInput">UF</CFormLabel>
                            <CFormInput
                              id="ufInput"
                              placeholder="UF"
                              onChange={(e) => setUf(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="cidadeInput">Cidade</CFormLabel>
                            <CFormInput
                              id="cidadeInput"
                              placeholder="Cidade"
                              onChange={(e) => setCidade(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="bairroInput">Bairro</CFormLabel>
                            <CFormInput
                              id="bairroInput"
                              placeholder="Bairro"
                              onChange={(e) => setBairro(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="logradouroInput">Logradouro</CFormLabel>
                            <CFormInput
                              id="logradouroInput"
                              placeholder="Logradouro"
                              onChange={(e) => setLogradouro(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="numeroInput">Número</CFormLabel>
                            <CFormInput
                              id="numeroInput"
                              placeholder="Número"
                              onChange={(e) => setNumero(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="complementoInput">Complemento</CFormLabel>
                            <CFormInput
                              id="complementoInput"
                              placeholder="Complemento"
                              onChange={(e) => setComplemento(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="tipoEnderecoInput">Tipo do Endereço</CFormLabel>
                            <CFormSelect
                              id="tipoEnderecoInput"
                              className="mb-2"
                              aria-label="Selecione o Tipo do Endereço"
                              onChange={(e) => setTipoEndereco(e.target.value)}
                            >
                              <option></option>
                              <option value="principal">Principal</option>
                              <option value="residencial">Residencial</option>
                              <option value="cobrança">Cobrança</option>
                              <option value="comercial">Comercial</option>
                            </CFormSelect>
                          </div>
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                    <CAccordion className="p-1">
                      <CAccordionItem>
                        <CAccordionHeader>Telefone</CAccordionHeader>
                        <CAccordionBody className="row">
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="contatoTelefoneInput">Contato</CFormLabel>
                            <CFormInput
                              id="contatoTelefoneInput"
                              placeholder="Contato"
                              onChange={(e) => setContatoTelefone(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="telefoneInput">Telefone</CFormLabel>
                            <CFormInput
                              id="telefoneInput"
                              placeholder="Telefone"
                              onChange={(e) => setTelefone(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-4">
                            <CFormLabel htmlFor="tipoInput">Tipo</CFormLabel>
                            <CFormSelect
                              id="tipoInput"
                              className="mb-2"
                              aria-label="Selecione o Tipo do Telefone"
                              onChange={(e) => setTipoTelefone(e.target.value)}
                            >
                              <option></option>
                              <option value="principal">Principal</option>
                              <option value="celular">Celular</option>
                              <option value="residencial">Residencial</option>
                              <option value="comercial">Comercial</option>
                              <option value="fax">Fax</option>
                            </CFormSelect>
                          </div>
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                    <CAccordion className="p-1">
                      <CAccordionItem>
                        <CAccordionHeader>Email</CAccordionHeader>
                        <CAccordionBody className="row">
                          <div className="mb-2 col-6">
                            <CFormLabel htmlFor="contatoEmailInput">Contato</CFormLabel>
                            <CFormInput
                              id="contatoEmailInput"
                              placeholder="Contato"
                              onChange={(e) => setContatoEmail(e.target.value)}
                            />
                          </div>
                          <div className="mb-2 col-6">
                            <CFormLabel htmlFor="emailInput">E-mail</CFormLabel>
                            <CFormInput
                              id="emailInput"
                              placeholder="E-mail"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </CCard>
            <CCard>
              <CCardBody>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <CButton color="success" className="me-md-2" onClick={handleSubmit}>
                    Salvar <CIcon icon={cilPlus} />
                  </CButton>
                  <CButton color="dark" className="me-md-2" onClick={backToPersonalData}>
                    Voltar <CIcon icon={cilPlus} />
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default PersonalDataForm
