import React from 'react';

import {
  Container,
  TableHeader,
  TableBody,
  Row,
} from './style';

import MoreItems from '../../assets/images/icons/MoreItems.svg';

export default function Table({ header, rows }) {
  return (
    <Container>
      <TableHeader>
        { header.map((children) => (
          <td key={children.length}>{children}</td>
        ))}
      </TableHeader>

      <TableBody>
        {
          rows.map((row) => (
            <Row key={row.id}>
              {Object.keys(row).map((key) => (
                key !== 'id'
                  && (
                    <td>{row[key]}</td>
                  )
              ))}

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
