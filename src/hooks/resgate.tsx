/* eslint-disable react/jsx-no-undef */
import React, {createContext, useCallback, useState} from 'react';

import {CardInvestimentProps} from '../components/CardInvestiments';
import {api} from '../services/api';

interface AcoesProps {
  id: number;
  nome: string;
  percentual: string;
}

export interface TransactionProps extends CardInvestimentProps {
  nome: string;
  valorTotal: string;
  acao: AcoesProps;
}

interface Transaction {
  transaction: TransactionProps[];
  getLockList(): Promise<void>;
}

export const TransactionContext = createContext<Transaction>({} as Transaction);

export const TransactionProvider: React.FC = ({children}) => {
  const [transaction, setTransaction] = useState<TransactionProps[]>([]);

  const getTransactionList = useCallback(async () => {
    const {data, status} = await api.get<TransactionProps[]>('/');
    if (status === 200) {
      setTransaction(data);
    }
  }, []);

  return (
    <TransactionContext.Provider value={{transaction, getTransactionList}}>
      {children}
    </TransactionContext.Provider>
  );
};
