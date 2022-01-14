import React, { useState, useEffect, useMemo } from 'react';

import {
  List,
  ListFilter,
} from './style';

import ArrowIcon from '../../assets/images/icons/Arrow.svg';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Table from '../../components/Table';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loaders';
import UserCard from './UserCard';
// import Modal from '../../components/Modal';

import UsersService from '../../services/UsersService';

export default function Users() {
  const [clients, setClients] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredClients = useMemo(() => (
    clients.filter(
      (client) => (
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    )
  ), [clients, searchTerm]);

  useEffect(() => {
    setIsLoading(true);

    async function getUsers() {
      try {
        setIsLoading(true);

        const listUsers = await UsersService.listUsers(orderBy);

        setClients(listUsers);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (
      prevState === 'asc' ? 'desc' : 'asc'
    ));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      {isLoading && <Loader />}
      {/* <Modal danger /> */}

      <PageHeader
        title={
          `
          ${filteredClients.length}
          ${filteredClients.length === 1 ? 'cliente cadastrado' : 'clientes cadastrados'}`
        }
      />

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
