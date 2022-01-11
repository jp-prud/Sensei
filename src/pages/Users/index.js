import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';

import {
  List,
  ListFilter,
} from './style';

import ArrowIcon from '../../assets/images/icons/Arrow.svg';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Table from '../../components/Table';
import Button from '../../components/Button';

import UserCard from './UserCard';
// import Loader from '../../components/Loaders';
// import Modal from '../../components/Modal';

export default function Users() {
  const [clients, setClients] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/clients?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setClients(json);
      })
      .catch((error) => `error: ${error}`);
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (
      prevState === 'asc' ? 'desc' : 'asc'
    ));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const filteredClients = clients.filter(
    (client) => (
      client.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  );

  return (
    <>
      <PageHeader
        title={
          `
          ${filteredClients.length}
          ${filteredClients.length === 1 ? 'cliente cadastrado' : 'clientes cadastrados'}`
        }
      />
      {/* <Loader /> */}
      {/* <Modal danger /> */}

      <List>
        <ListFilter orderBy={orderBy}>
          <Input
            type="text"
            placeholder="Pesquise pelo numero:"
            onChange={(event) => handleChangeSearchTerm(event)}
            value={searchTerm}
          />

          <div>
            <Button
              type="button"
              onClick={() => handleToggleOrderBy()}
              outline
            >
              Nome

              <img src={ArrowIcon} alt="Arrow Icon" />
            </Button>

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
              content={filteredClients}
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
