import PropTypes from "prop-types";
import { TableBody, Td, Thead, TitleText, Tr, TransTable } from "./TransactionItem.styled";

export const TransactionHistory = ({ items }) => {
    return (<TransTable>
        <Thead>
            <tr>
                <TitleText>Type</TitleText>
                <TitleText>Amount</TitleText>
                <TitleText>Currency</TitleText>
            </tr>
        </Thead>

        <TableBody>
            {items.map(({ id, type, amount, currency }) => {
                return (
                    <Tr key={id}>
                        <Td>{type}</Td>
                        <Td>{amount}</Td>
                        <Td>{currency}</Td>
                    </Tr>
                );
            })}
        </TableBody>
    </TransTable>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};