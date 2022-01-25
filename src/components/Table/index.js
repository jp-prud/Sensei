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
            <td>
              <span>
                {client.name}
              </span>
            </td>

            <td>
              <span>
                {client.email}
              </span>
            </td>

            <td>
              <span>
                {formatPhone(client.phone)}
              </span>
            </td>

            <td>
              <span>
                {formatDate(client.created_at)}
              </span>
            </td>

            <td
              className="store"
            >
              <span>
                {client.store_name}
              </span>
            </td>

            <td>
              <span>
                {client.plan_name}
              </span>
            </td>

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
