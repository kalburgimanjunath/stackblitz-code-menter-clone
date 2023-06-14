import Avatar from './Avatar';
import { Tabs } from 'flowbite-react';
export default function Widgets({ title, type }) {
  return (
    <div>
      <h4 className="font-bold p-2">{title}</h4>
      {type == 'members' ? (
        <div className="p-2">
          <div className="flex flex-wrap ">
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
          <div>
            <button
              className="bg-gray-200 p-2 rounded-5 hover:bg-gray-300 m-2"
              type="submit"
            >
              SEE ALL
            </button>
          </div>
        </div>
      ) : type == 'groups' ? (
        <div className="m-2">
          <Tabs.Group aria-label="Default tabs" style="default">
            <Tabs.Item active title="Newest">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <p>
                  This is some placeholder content the
                  <span className="font-medium text-gray-800 dark:text-white">
                    Profile tab's associated content
                  </span>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </p>
            </Tabs.Item>
            <Tabs.Item title="Active">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <p>
                  This is some placeholder content the
                  <span className="font-medium text-gray-800 dark:text-white">
                    Dashboard tab's associated content
                  </span>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </p>
            </Tabs.Item>
            <Tabs.Item title="Popular">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <p>
                  This is some placeholder content the
                  <span className="font-medium text-gray-800 dark:text-white">
                    Settings tab's associated content
                  </span>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </p>
            </Tabs.Item>
          </Tabs.Group>
          <div>
            <button
              className="bg-gray-200 p-2 rounded-5 hover:bg-gray-300 m-2"
              type="submit"
            >
              SEE ALL
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <hr />
    </div>
  );
}
