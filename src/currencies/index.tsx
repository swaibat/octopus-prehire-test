import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem } from '../components/ListItem';
import { Typography } from '../components/Typography';
import { getCurrencies } from './currencySlice';
import { RootState } from '../store';
import ListLoader from '../components/Loader/ListLoader';
import { Flex } from '../components/Flex';

function Currencies() {
  const dispatch = useDispatch();
  const { data, loading, error, filterCurrencies } = useSelector(
    (state: RootState) => state.currency.currencies
  );

  useMemo(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <>
      {(filterCurrencies || data)?.map((currency, i) => (
        <Link key={i} to={`/currency/${currency.country}/${currency.code}`}>
          <ListItem>
            <Typography size="md">{currency.country}</Typography>
            <Typography size="lg" primary>
              {currency.code}
            </Typography>
          </ListItem>
        </Link>
      ))}
      {loading && <ListLoader />}
      {!!error && (
        <Flex style={{ margin: 'auto' }}>
          <Typography size="md" style={{ textTransform: 'capitalize' }}>
            {error}
          </Typography>
        </Flex>
      )}
      {!(filterCurrencies || data)?.length && (
        <Flex style={{ margin: 'auto' }}>
          <Typography size="md" style={{ textTransform: 'capitalize' }}>
            {!data?.length ? 'No currencies found' : 'No search results Found'}
          </Typography>
        </Flex>
      )}
    </>
  );
}

export default Currencies;
