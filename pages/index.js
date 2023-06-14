import { Header, Footer, Widgets } from '../components/';
// import { Alert } from 'flowbite-react';
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

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* <Alert color="info">Alert!</Alert> */}
      <script src="https://cdn.tailwindcss.com"></script>
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
            <div className="m-2 p-2 border-2 border-color-pink-100 hover:bg-gray-100 hover:border-pink-500 hover:cursor-pointer">
              <h3>Efficient iOS App Development with Bazel</h3>
              <div></div>
            </div>
            <div className="m-2 p-2 border-2 border-color-pink-100 hover:bg-gray-100 hover:border-pink-500 hover:cursor-pointer">
              <h3>The Self-Taught Programmers Path Way</h3>
              <div></div>
            </div>
            <div className="m-2 p-2 border-2 border-color-pink-100 hover:bg-gray-100 hover:border-pink-500 hover:cursor-pointer">
              <h3>Distributed Systems Architectural Patterns</h3>
              <div></div>
            </div>
          </div>
          <div className="font-bold text-color-pink-100">
            See more events ->
          </div>
          <h1 className="font-bold text-lg">
            Watch recordings of popular past events
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-3 ">
            <div className="m-2 p-2 border-2 border-color-pink-100 hover:bg-gray-100 hover:border-pink-500 hover:cursor-pointer">
              <h3>Efficient iOS App Development with Bazel</h3>
              <div></div>
            </div>
            <div className="m-2 p-2 border-2 border-color-pink-100 hover:bg-gray-100 hover:border-pink-500 hover:cursor-pointer">
              <h3>The Self-Taught Programmers Path Way</h3>
              <div></div>
            </div>
            <div className="m-2 p-2 border-2 border-color-pink-100 hover:bg-gray-100 hover:border-pink-500 hover:cursor-pointer">
              <h3>Distributed Systems Architectural Patterns</h3>
              <div></div>
            </div>
          </div>
          <div className="font-bold text-color-pink-100">
            See more events ->
          </div>
        </div>
      </div>
    </div>
  );
}
