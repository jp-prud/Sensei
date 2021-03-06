import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';

import {
  Container,
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
import UserCard from '../../components/UserCard';
import ErrorContainer from '../../components/ErrorContainer';
import EmptyContainer from '../../components/EmptyContainer';
import SearchErrorContainer from '../../components/SearchErrorContainer';
// import Modal from '../../components/Modal';

import UsersService from '../../services/UsersService';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredUsers = useMemo(() => (
    users.filter(
      (user) => (
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    )
  ), [users, searchTerm]);

  const getUsers = useCallback(async () => {
    try {
      setIsLoading(true);

      const listUsers = await UsersService.listUsers(orderBy);

      setHasError(false);
      setUsers(listUsers);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    setIsLoading(true);

    getUsers();
  }, [getUsers]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (
      prevState === 'asc' ? 'desc' : 'asc'
    ));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container
      hasError={hasError}
    >
      {isLoading && <Loader />}

      {hasError && (
        <ErrorContainer
          message="Ocorreu um erro ao obter os Usu??rios."
        >
          <Button
            onClick={() => getUsers()}
          >
            Tente Novamente
          </Button>
        </ErrorContainer>
      )}

      {(!hasError && users.length === 0) && (
        <EmptyContainer
          context="usu??rio"
          redirectTo="users/new-user"
        />
      )}

      {(!hasError && users.length > 0) && (
        <>
          <PageHeader
            title={`
              ${filteredUsers.length}
              ${filteredUsers.length === 1 ? 'Usu??rio cadastrado' : 'Usu??rios cadastrados'}
            `}
            redirectTo="users/new-user"
            button
          />

          <List>
            <ListFilter orderBy={orderBy}>
              <Input
                type="text"
                placeholder="Pesquise pelo nome:"
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
                  <option value="2">??ltimos 7 dias</option>
                  <option value="3">??ltimos 7 dias</option>
                  <option value="4">??ltimos 15 dias</option>
                </Select>

                <Select>
                  <option value="1" defaultValue>Todas os Planos</option>
                  <option value="2">Gr??tis</option>
                  <option value="3">Premium</option>
                </Select>
              </div>
            </ListFilter>

            {(users.length > 0 && filteredUsers.length === 0) && (
              <SearchErrorContainer context={searchTerm} />
            )}

            {(users.length > 0 && filteredUsers.length > 0) && (
              <>
                {window.innerWidth > 780 && (
                  <Table
                    header={[
                      'Nome', 'Email', 'Telefone', 'Criado em:', 'Loja', 'Plano', 'A????es',
                    ]}
                    content={filteredUsers}
                  />
                )}

                {window.innerWidth < 780 && (
                  <>
                    {(filteredUsers.map((user) => (
                      <UserCard user={user} />
                    ))
                    )}
                  </>
                )}
              </>
            )}
          </List>
        </>
      )}
    </Container>
  );
}
