import PropTypes from "prop-types";
import { StatisticSection, StatTitle, StatList, StatListItem } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return <StatisticSection>
        <StatTitle>{title}</StatTitle>
        <StatList> {
            stats.map(({ id, label, percentage }) =>
                <StatListItem key={id}>
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </StatListItem>
            )}
        </StatList>
    </StatisticSection>
};

Statistics.propTypes = {
    title:PropTypes.string,
    stats: PropTypes.arrayOf(
         PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
         }).isRequired,
    ).isRequired,
}
