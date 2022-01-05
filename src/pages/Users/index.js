import React from 'react';

import PageHeader from '../../components/PageHeader';

import {
  List,
  ListFilter,
} from './style';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Table from '../../components/Table';

import UserCard from './UserCard';
// import Loader from '../../components/Loaders';
// import Modal from '../../components/Modal';

export default function Users() {
  return (
    <>
      <PageHeader title="Todos os usuários" />
      {/* <Loader /> */}
      {/* <Modal danger /> */}

      <List>
        <ListFilter>
          <Input type="text" placeholder="Buscar pelo nome:" />

          <div>
            <Select>
              <option value="1" defaultValue>Todas as Datas</option>
              <option value="2">Últimos 7 dias</option>
              <option value="3">Últimos 7 dias</option>
              <option value="4">Últimos 15 dias</option>
            </Select>

            <Select>
              <option value="1" defaultValue>Todas os Planos</option>
              <option value="2">Normal</option>
              <option value="3">Premium</option>
            </Select>
          </div>
        </ListFilter>

        {window.innerWidth > 780
          && (
            <Table
              header={[
                'Nome', 'Email', 'Telefone', 'Criado em:', 'Loja', 'Plano', 'Ações',
              ]}
              rows={[
                {
                  id: '1',
                  name: 'Joao Pedro',
                  email: 'joao@email.com',
                  phone: '123-456-1234',
                  date: '2017-01-91',
                  company: 'Modular',
                  plan: 'Pro',
                },
                {
                  id: '2',
                  name: 'Clara Luiza',
                  email: 'joao@email.com',
                  phone: '123-456-1234',
                  date: '2017-01-91',
                  company: 'Modular',
                  plan: 'Pro',
                },
              ]}
            />
          )}

        {window.innerWidth < 780
        && (
          <UserCard />
        )}
      </List>
    </>
  );
}
