import styled from '@emotion/styled';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component } from '~/elements/base/fc';
import { Status as StatusData } from '~/types';

interface StatusProps extends DashboardCardProps {
  data?: StatusData;
}

const CardContent = styled.div`
  display: flex;
  align-items: center;

  & span {
    display: inline-block;
    height: auto;
    opacity: 1;
    color: currentColor;
    fill: currentColor;
    font-size: var(--font-size-xl);
    margin-top: auto;
  }
`;

const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Status: Component<StatusProps> = (props) => {
  const { data, to } = props;

  if (!data) return null;
  return (
    <DashboardCard to={to}>
      <CardContent>
        <CardTexts>
          <p className={'link-text'}>Status:</p>
          <p className={'status'}>{data?.status}</p>
        </CardTexts>
        <span>{data?.emoji}</span>
      </CardContent>
    </DashboardCard>
  );
};
