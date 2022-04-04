import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store';
import { Chart } from '../components/Chart';
import { Flex } from '../components/Flex';
import Loader from '../components/Loader/Loader';
import { Typography } from '../components/Typography';
import { getCurrency } from './currencySlice';

const average = (array: Array<any>) =>
  (array.reduce((a: number, b: number) => a + b) / array.length).toFixed(3);

export default function Currency() {
  const params = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.currency.currency
  );
  useMemo(
    () => params.code && dispatch(getCurrency(params.code)),
    [dispatch, params.code]
  );
  return (
    <>
      {data && (
        <>
          <Flex style={{ alignItems: 'center' }}>
            <Flex style={{ flexDirection: 'column' }}>
              <Typography size="lg">{params?.code}</Typography>
              <Typography primary style={{ fontSize: 25 }}>
                {params?.country}
              </Typography>
            </Flex>
            <Typography style={{ fontSize: 17, marginLeft: 'auto' }}>
              Average Rate: {average(data)}
            </Typography>
          </Flex>
          <Chart data={data} />
        </>
      )}
      {!!loading && <Loader />}
      {!!error && (
        <Flex style={{ margin: 'auto' }}>
          <Typography size="md" style={{ textTransform: 'capitalize' }}>
            {error}
          </Typography>
        </Flex>
      )}
    </>
  );
}
