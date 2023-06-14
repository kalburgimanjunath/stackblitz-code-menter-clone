import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
export default function index() {
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const fetchEvents = async () => {
    const results = await fetch('/api/events')
      .then((res) => res.json())
      .then((result) => result.events);

    return setEvents(
      results &&
        results.filter((item) => {
          return item.id == id;
        })
    );
  };
  useEffect(() => {
    fetchEvents();
  });
  console.log(events);
  return <div className="container mx-auto m-24">{id}</div>;
}
