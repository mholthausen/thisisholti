export default function Data(props) {
  return (
      <></>
  )
}

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const event = new Date('05 July 2023 19:30 GMT+0200');
  res.setHeader("Content-Type", "application/json");
  res.write('{"next": "' + event.toISOString() + '"}');
  res.end();
  return {
      props: {},
  };
}