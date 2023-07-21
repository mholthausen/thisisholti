export default function Data(props) {
  return <></>;
}

const GetFirstDayOfMonth = (dayOfTheWeek, month, year) => {
  const date = new Date(year, month, 1);
  date.setHours(17);
  date.setMinutes(30);
  date.setDate(date.getDate() + ((7 + dayOfTheWeek - date.getDay()) % 7));
  return date;
};

const GetFirstNextFirstDayOfTheWeek = (currentDate, day) => {
  const returnValue = GetFirstDayOfMonth(
    day,
    currentDate.getMonth(),
    currentDate.getFullYear()
  );

  if (returnValue.getDate() < currentDate.getDate()) {
    return GetFirstNextFirstDayOfTheWeek(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
      day
    );
  }

  return returnValue;
};

const getEvents = () => {
  return [
    {
      id: 1,
      title: "Sommerfest",
      date: "2023-08-26T13:00:00.000Z",
      address: "Rathenauplatz, 50674 Köln",
    },
    {
      id: 2,
      title: "RhineCleanup Day",
      date: "2023-09-09T13:00:00.000Z",
      address: "Am Molenkopf, 50735 Köln",
    },
    { id: 3, title: "Party", date: "2023-11-04T18:00:00.000Z", address: "TBA" },
    {
      id: 4,
      title: "Weihnachtsfeier",
      date: "2023-11-24T17:00:00.000Z",
      address: "Alte Wipperfürther Straße 40, 51065 Köln",
    },
  ];
};

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const wednesday = 3;

  const GetFirstNextFirstWednesday = () => {
    return GetFirstNextFirstDayOfTheWeek(new Date(), wednesday);
  };

  const event = new Date(GetFirstNextFirstWednesday());
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.write('{"next": "' + event.toISOString() + '", "events": ' + JSON.stringify(getEvents()) + '}');
  res.end();
  return {
    props: {},
  };
};
