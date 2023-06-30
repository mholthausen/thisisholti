export default function Data(props) {
  return (
      <></>
  )
}

const GetFirstDayOfMonth = (dayOfTheWeek, month, year) => {
  const date = new Date(year, month, 1);
  date.setHours(19);
  date.setMinutes(30);
  date.setDate(date.getDate() + ((7 + dayOfTheWeek) - date.getDay()) % 7)
  return date;
};

const GetFirstNextFirstDayOfTheWeek = (currentDate, day) => {
  const returnValue = GetFirstDayOfMonth(day, currentDate.getMonth(), currentDate.getFullYear());

  if(returnValue.getDate() < currentDate.getDate()){
      return GetFirstNextFirstDayOfTheWeek(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1), day);
  }

  return returnValue;
};

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const wednesday = 3;

  const GetFirstNextFirstWednesday = () => {
      return GetFirstNextFirstDayOfTheWeek(new Date(), wednesday);
  }

  const event = new Date(GetFirstNextFirstWednesday());
  res.setHeader("Content-Type", "application/json");
  res.write('{"next": "' + event.toISOString() + '"}');
  res.end();
  return {
      props: {},
  };
}