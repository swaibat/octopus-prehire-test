import { Flex } from '../Flex';
import { ListItem } from '../ListItem';

export default function ListLoader() {
  return (
    <>
      {Array.from({ length: 10 }).map((e, i) => (
        <ListItem key={i}>
          <Flex style={{ width: '100%', alignItems: 'center' }}>
            <Flex
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Flex
                style={{
                  height: 30,
                  marginTop: 6,
                  marginBottom: 6,
                  width: Math.floor(Math.random() * (200 - 150 + 1) + 150)
                }}
                className="animate"
              />
              <Flex style={{ height: 36, width: 100 }} className="animate" />
            </Flex>
          </Flex>
        </ListItem>
      ))}
    </>
  );
}
