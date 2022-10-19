import { StatisticItem } from '../Statistic/Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>

        <StatisticItem>Total: {total}</StatisticItem>
        <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
      </ul>
    </div>
  );
};
