/* eslint-disable no-bitwise */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-shadow */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import {StatusBar, Modal, Alert, TextInput as RNTextInput} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {useFormik} from 'formik';
import CurrencyInput from 'react-native-currency-input';
import {isTemplateLiteral} from '@babel/types';
import Button from '../../../components/Button';
import {
  Container,
  Content,
  Title,
  TextResgate,
  Header,
  SubHeader,
  ResgateWrapper,
  SpaceBetween,
  TextBetween,
  TransactionList,
} from './styles';
import {Confirmation} from '../Confirmation';
import {Error} from '../Error';
import {HighlightCard} from '../../../components/HighlightCard';
import {api} from '../../../services/api';
import Input from '../../../components/Input';
import {formatNumber} from '../../../services/number';

interface FormData {
  amount: number;
  amount1: string;
  amount2: string;
  amount3: string;
}

// value => setDocument(formatNumber(value))

export const SimulationResgate = ({route, props}) => {
  const valorTeste = route.params.saldoTotal;

  const schema = Yup.object().shape({
    amount: Yup.number()
      .required('Por favor informe o valor que deseja resgatar')
      .positive('deve ser um número positivo')
      .typeError('Informe um valor númerico')
      .lessThan(
        valorTeste,
        `Valor deve ser menor que R$ ${Number(valorTeste).toFixed(
          2,
        )}`.toString(),
      ),
  });

  const valorRef = useRef<RNTextInput>(null);
  const [valorResgate, setValorResgate] = useState('');
  const [confirmationTransation, setConfirmationTransation] = useState(false);
  const [data, setData] = useState([]);
  const [simulation, setSimulation] = useState('');
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();

  const [valor1, setValor1] = useState([]);
  const [valor2, setValor2] = useState([]);
  const [valor3, setValor3] = useState([]);
  const [valor4, setValor4] = useState([]);
  const [valor5, setValor5] = useState([]);

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    handleBlur,
    touched,
    isValid,
    setFieldValue,
  } = useFormik({
    validationSchema: schema,
    initialValues: {
      amount: '',
    },
    onSubmit: data => handleOpenConfirmationModal(data),
    // onSubmit: data => navigation.navigate('DoorsList', {data}),
  });

  function handleOpenConfirmationModal(data) {
    setConfirmationTransation(true);
  }
  function handleCloseConfirmationModal() {
    setConfirmationTransation(false);
  }

  const acao = async () => {
    // const item = JSON.parse(JSON.stringify(route.params.data));
    const dadosApi = await api.get('/');
    const obj = JSON.parse(
      JSON.stringify(dadosApi.data.response.data.listaInvestimentos[0].acoes),
    );

    console.log('O que vem da api:', obj[0]);
    console.log('O que vem da api:', obj[1]);
    console.log('O que vem da api:', obj[2]);
    console.log('O que vem da api:', obj[3]);
    console.log('O que vem da api:', obj[4].id);
    setData(obj);

    setValor1(obj[0]);
    setValor2(obj[1]);
    setValor3(obj[2]);
    setValor4(obj[3]);
    setValor5(obj[4].id);
  };

  useEffect(() => {
    acao();
  }, []);

  // async function handleRegister(form: FormData) {
  //   const newTransaction = {
  //     amount: form.amount,
  //   };

  //   try {
  //     const dataFormatted = [newTransaction];

  //     setValorResgate(JSON.stringify(dataFormatted));

  //     // reset();
  //     setValorResgate('');
  //     setConfirmationTransation(true);
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert('Nao foi possivel Resgatar o valor');
  //   }

  // }

  return (
    <Container>
      <StatusBar translucent backgroundColor="#2342a8" />
      <Content>
        <Header>
          <Title>Resgate</Title>
        </Header>
        <SubHeader />
        <Content>
          <ResgateWrapper>
            <TextResgate>DADOS DO INVESTIMENTO</TextResgate>
          </ResgateWrapper>
          <HighlightCard title="Nome" value={route.params.nome} />
          <HighlightCard
            title="Saldo total disponível"
            value={`R$ ${route.params.saldoTotal}`}
          />
          <ResgateWrapper>
            <TextResgate>RESGATE DO SEU JEITO </TextResgate>
          </ResgateWrapper>

          <TransactionList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <>
                  <HighlightCard title="Ação" value={item.nome} />
                  <HighlightCard
                    title="Saldo Acumulado"
                    value={`R$ ${Number(
                      (route.params.saldoTotal * item.percentual) / 100,
                    ).toFixed(2)}`.toString()}
                  />
                  {data.map(item => {
                    <>
                      <Input
                        title="Valor a resgatar"
                        ref={valorRef}
                        onChangeText={handleChange('amount')}
                        onBlur={handleBlur('amount')}
                        value={values.amount}
                        error={errors.amount}
                        touched={touched.amount}
                        placeholder="Digite o valor que deseja resgatar"
                        keyboardType="number-pad"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => handleSubmit()}

                      />
                      <SpaceBetween>
                        <TextBetween />
                      </SpaceBetween>
                    </>;
                  })}
                </>
              );
            }}
          />
          <HighlightCard
            title="Valor total a resgatar"
            value={`R$ ${Number(values.amount * valor5).toFixed(2)}`.toString()}
          />
          <SpaceBetween>
            <TextBetween />
          </SpaceBetween>
          <Button
            text="CONFIRMAR RESGATE"
            onPress={() => handleSubmit()}
            disabled={loading || !isValid}
          />
        </Content>
      </Content>
      <Modal visible={confirmationTransation}>
        {valorTeste <= values.amount ? (
          <Confirmation />
        ) : (
          <Error closeError={handleCloseConfirmationModal} />
        )}
      </Modal>
    </Container>
  );
};
