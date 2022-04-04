import { Flex } from '../Flex';

export default function Loader() {
  return (
    <Flex className="wrapper">
      <Flex style={{ alignItems: 'center' }}>
        <Flex style={{ flexDirection: 'column' }}>
          <Flex
            style={{ marginBottom: 7, height: 29, width: 100 }}
            className="animate"
          />
          <Flex
            style={{ marginBottom: 7, height: 23, width: 200 }}
            className="animate"
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 15,
            height: 20.5,
            width: 200,
            marginLeft: 'auto'
          }}
          className="animate"
        />
      </Flex>
      <Flex style={{ height: 350, width: 700 }} className="animate" />
    </Flex>
  );
}
