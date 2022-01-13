import React from 'react';

import {
  Container,
  TableHeader,
  TableBody,
  Row,
} from './style';

import MoreItems from '../../assets/images/icons/MoreItems.svg';

import formatPhone from '../../utils/formatPhone';
import formatDate from '../../utils/formatDate';

export default function Table({ header, content }) {
  return (
    <Container>
      <TableHeader>
        { header.map((element) => (
          <td key={element.length}>{element}</td>
        ))}
      </TableHeader>

      <TableBody>
        {
        content.map((client) => (
          <Row key={client.id}>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{formatPhone(client.phone)}</td>
            <td>{formatDate(client.created_at)}</td>
            <td>{client.store_name}</td>
            <td>{client.plan_name}</td>

            <td>
              <button type="button">
                <img src={MoreItems} alt="Action Button" />
              </button>
            </td>
          </Row>
        ))
        }
      </TableBody>
    </Container>
  );
}
