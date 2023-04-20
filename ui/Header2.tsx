export default function Header() {
  return (
    <header className="relative mx-auto">
      <div className="flex items-center pb-2 pt-3 md:pb-3 md:pt-4">
        <div className="mr-1 flex shrink-0 items-center">
          <a
            className="rounded text-primary"
            aria-label="Go to dashboard"
            href="/"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-0.0981445 16C-0.0981438 7.16344 7.0653 -7.52254e-07 15.9019 0C22.399 5.67998e-07 27.9917 3.87258 30.4975 9.43544L9.3373 30.5956C8.42926 30.1866 7.56625 29.6953 6.75778 29.1313L19.8891 16H15.9019L4.58815 27.3137C1.69272 24.4183 -0.0981449 20.4183 -0.0981445 16Z"
                fill="currentColor"
              ></path>
              <path
                d="M31.9019 16.0055L15.9074 32C24.7396 31.997 31.8989 24.8377 31.9019 16.0055Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-grow items-center">
          <a
            className="hidden items-center rounded p-1 text-lg font-medium leading-3 text-primary transition sm:flex"
            href="/richardokonicha"
          >
            richardokonicha
          </a>
        </div>
        <div className="flex flex-none items-center">
          <details className="Menu_menu__Acgsz">
            <summary
              className="inline-flex rounded focus-ring cursor-pointer rounded-full"
              aria-haspopup="true"
            >
              <div
                title="r.e.e.c.h.e.e"
                className="relative inline-flex flex-shrink-0 rounded-full align-top"
              >
                <div className="grid">
                  <div className="col-start-1 col-end-1 row-start-1 row-end-1 flex">
                    <img
                      src="/api/avatar?name=r.e.e.c.h.e.e"
                      alt="r.e.e.c.h.e.e"
                      width="32"
                      height="32"
                    />
                  </div>
                  <div className="relative col-start-1 col-end-1 row-start-1 row-end-1 flex items-center justify-center">
                    <img src="/letters/r.svg" className="w-2 h-2" alt="" />
                  </div>
                </div>
              </div>
            </summary>
            <div className="absolute z-40 mt-1 w-60 rounded-md bg-primary shadow-lg ring-1 ring-gray-400/15 dark:shadow-black dark:ring-gray-400/20 right-0 origin-top-right">
              <ul className="py-1">
                <li>
                  <a
                    className="block px-3 py-1 text-primary hover:bg-secondary"
                    href="/settings/account"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <div>
                    <button
                      type="button"
                      className="focus-ring block w-full rounded-none px-3 py-1 text-left text-primary hover:bg-secondary"
                    >
                      Create new organization
                    </button>
                  </div>
                </li>
                <li>
                  <a
                    href="https://planetscale.com/docs"
                    className="block px-3 py-1 text-primary hover:bg-secondary"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://planetscale.com/support"
                    className="block px-3 py-1 text-primary hover:bg-secondary"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <div className="text-base font-normal">
                    <div>
                      <button
                        type="button"
                        className="focus-ring block w-full rounded-none px-3 py-1 text-left text-primary hover:bg-secondary"
                      >
                        Send feedback
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="my-sm" />
                </li>
                <li>
                  <form
                    action="https://api.planetscale.com/internal/sessions"
                    method="post"
                  >
                    <button
                      type="submit"
                      className="focus-ring block w-full rounded-none px-3 py-1 text-left text-primary hover:bg-secondary"
                    >
                      Sign out
                    </button>
                  </form>
                </li>
              </ul>
              <div className="rounded-b border-t bg-secondary px-3 py-1.5">
                <div className="focus-within-ring flex items-stretch rounded border border-secondary text-primary shadow-sm h-4">
                  <label className="mb-0 flex select-none items-center space-x-1 whitespace-nowrap border-secondary bg-secondary px-1.5 font-medium rounded-l rounded-r-none border-r">
                    <span>Theme</span>
                  </label>
                  <select className="focus-ring inline-block rounded border border-secondary bg-primary py-0 pl-1.5 pr-4 shadow-sm h-4 block h-auto w-full border-b-0 border-l-0 border-t-0 pl-2 !shadow-none !ring-0 border-r-0">
                    <option value="system">System</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                  </select>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div className="-mb-px flex space-x-3 overflow-x-auto sm:space-x-0">
        <a
          className="whitespace-nowrap border-b pb-2 pt-1 leading-none text-primary transition sm:px-2 border-blue-600 font-semibold"
          href="/richardokonicha"
        >
          Overview
        </a>
        <a
          className="whitespace-nowrap border-b pb-2 pt-1 leading-none text-primary transition sm:px-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
          href="/richardokonicha/settings"
        >
          Settings
        </a>
      </div>
    </header>
  );
}
