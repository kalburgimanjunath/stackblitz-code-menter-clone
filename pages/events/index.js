import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Widgets from '../../components/Widgets';
import Link from 'next/link';
// import { Alert } from 'flowbite-react';
const EVENTS = [
  {
    id: 1,
    event_dates: [
      { event_date: '2014-02-18T18:00:00' },
      { event_date: '2014-02-25T18:00:00' },
      { event_date: '2014-03-04T18:00:00' },
      { event_date: '2014-03-11T18:00:00' },
    ],
    neighborhood_name: 'The Loop',
    description: 'Open City hosts a weekly event in which...',
    venue_name: '1871',
    url: 'https://opengovhacknight.eventbrite.com/',
    price: 'Free',
    title: 'Open Gov Hack Night',
    state: 'IL',
    city_name: 'Hubli',
  },
  {
    id: 2,
    event_dates: [
      { event_date: '2014-02-18T18:00:00' },
      { event_date: '2014-02-25T18:00:00' },
      { event_date: '2014-03-04T18:00:00' },
      { event_date: '2014-03-11T18:00:00' },
    ],
    neighborhood_name: 'The Loop',
    description: 'Open City hosts a weekly event in which...',
    venue_name: '1871',
    url: 'https://opengovhacknight.eventbrite.com/',
    price: 'Free',
    title: 'Open Gov Hack Night',
    state: 'IL',
    city_name: 'Hubli',
  },
  {
    id: 3,
    event_dates: [
      { event_date: '2014-02-18T18:00:00' },
      { event_date: '2014-02-25T18:00:00' },
      { event_date: '2014-03-04T18:00:00' },
      { event_date: '2014-03-11T18:00:00' },
    ],
    neighborhood_name: 'The Loop',
    description: 'Open City hosts a weekly event in which...',
    venue_name: '1871',
    url: 'https://opengovhacknight.eventbrite.com/',
    price: 'Free',
    title: 'Open Gov Hack Night',
    state: 'IL',
    city_name: 'Hubli',
  },
  {
    id: 5,
    event_dates: [
      { event_date: '2014-02-18T18:00:00' },
      { event_date: '2014-02-25T18:00:00' },
      { event_date: '2014-03-04T18:00:00' },
      { event_date: '2014-03-11T18:00:00' },
    ],
    neighborhood_name: 'The Loop',
    description: 'Open City hosts a weekly event in which...',
    venue_name: '1871',
    url: 'https://opengovhacknight.eventbrite.com/',
    price: 'Free',
    title: 'Open Gov Hack Night',
    state: 'IL',
    city_name: 'Hubli',
  },
  {
    id: 6,
    event_dates: [
      { event_date: '2014-02-18T18:00:00' },
      { event_date: '2014-02-25T18:00:00' },
      { event_date: '2014-03-04T18:00:00' },
      { event_date: '2014-03-11T18:00:00' },
    ],
    neighborhood_name: 'The Loop',
    description: 'Open City hosts a weekly event in which...',
    venue_name: '1871',
    url: 'https://opengovhacknight.eventbrite.com/',
    price: 'Free',
    title: 'Open Gov Hack Night',
    state: 'IL',
    city_name: 'Hubli',
  },
  {
    id: 7,
    event_dates: [
      { event_date: '2014-02-18T18:00:00' },
      { event_date: '2014-02-25T18:00:00' },
      { event_date: '2014-03-04T18:00:00' },
      { event_date: '2014-03-11T18:00:00' },
    ],
    neighborhood_name: 'The Loop',
    description: 'Open City hosts a weekly event in which...',
    venue_name: '1871',
    url: 'https://opengovhacknight.eventbrite.com/',
    price: 'Free',
    title: 'Open Gov Hack Night',
    state: 'IL',
    city_name: 'Hubli',
  },
];
import {
  MainComponent,
  Button,
  Page,
  Navbar,
  Posts,
  Hero,
  Videos,
} from 'mynewslds-library';
import 'mynewslds-library/dist/output.css';

export default function Events() {
  return (
    <div className="container mx-auto">
      {/* <Alert color="info">Alert!</Alert> */}
      <script src="https://cdn.tailwindcss.com"></script>
      <Header />
      <div className="grid grid-cols-1 gap-4 bg-blue-50">
        {/* <div className="grid-cols-1 shadow-md">
          <Widgets title="Recently Active Members" type="members" />
          <Widgets title="Groups" type="groups" />
        </div> */}
        {/* <div className="grid-cols-2 md:grid-cols-1 gap-2">
          <div>
            <h3>Share whats there in your mind</h3>
          </div>
          <div>
            <Tabs.Group aria-label="Default tabs" style="default">
              <Tabs.Item active title="All updates">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    This is some placeholder content the
                    <span className="font-medium text-gray-800 dark:text-white">
                      Profile tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </p>
              </Tabs.Item>
              <Tabs.Item title="Connections">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    This is some placeholder content the
                    <span className="font-medium text-gray-800 dark:text-white">
                      Dashboard tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </p>
              </Tabs.Item>
              <Tabs.Item title="Groups">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    This is some placeholder content the
                    <span className="font-medium text-gray-800 dark:text-white">
                      Settings tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </p>
              </Tabs.Item>
              <Tabs.Item title="Following">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    This is some placeholder content the
                    <span className="font-medium text-gray-800 dark:text-white">
                      Settings tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </p>
              </Tabs.Item>
            </Tabs.Group>
          </div>
          <div>hello world</div>
        </div> */}
        {/* <div className="grid-cols-1">
          <Widgets title="Upcoming Community Events" />
          <Widgets title="Upcoming Meetups" />
          <Widgets title="Benefits Near Me" />
          <Widgets title="Complete Your Profile" />
        </div> */}
        <div className="flex mx-auto m-24 align-items-center">
          <Hero
            className="font-bold text-lg flex"
            image={
              'https://next-cdn.codementor.io/images/cm-events/homepage/hero-image-dkt.svg'
            }
            label="Attend and host virtual events for developers"
            subtitle="Codementor Events is a developer community and virtual events
            platform where developers learn and share new tools, technical
            concepts, and career tips."
          ></Hero>
        </div>
        <div className="grid grid-cols-1 mx-auto border-2 border-color-gray-100 shadow-md m-5 p-5">
          <h1 className="font-bold text-lg">
            Discover upcoming virtual events
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-3 ">
            {EVENTS &&
              EVENTS.map((item) => {
                return (
                  <div className="m-2 p-2 border-2 border-color-pink-100 hover:bg-gray-100 hover:border-pink-500 hover:cursor-pointer">
                    <h3>
                      <Link href={`./event/${item.id}`}>
                        {item.description + item.id}
                      </Link>
                    </h3>
                    <div className="flex text-green-600 mt-2 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                      <span className="font-bold font-size-md ">
                        Watch Recording
                      </span>
                    </div>
                    <div></div>
                  </div>
                );
              })}
          </div>
          <div className="font-bold text-color-pink-100">
            See more events ->
          </div>
          <h1 className="font-bold text-lg">
            Watch recordings of popular past events
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-3 ">
            {EVENTS &&
              EVENTS.map((item) => {
                return (
                  <div className="m-2 p-2 border-2 border-color-pink-100 hover:bg-gray-100 hover:border-pink-500 hover:cursor-pointer">
                    <h3>
                      <Link href={`./event/${item.id}`}>
                        {item.description + item.id}
                      </Link>
                    </h3>
                    <div className="flex text-green-600 mt-2 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                      <span className="font-bold font-size-md ">
                        Watch Recording
                      </span>
                    </div>
                    <div></div>
                  </div>
                );
              })}
          </div>
          <div className="font-bold text-color-pink-100">
            See more events ->
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
