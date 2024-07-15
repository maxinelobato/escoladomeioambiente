export function AboutCourses() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-2 lg:py-14">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
              Collaborative tools to design better user experience
            </h2>
            <p className="mt-3 text-gray-800">
              We help businesses bring ideas to life in the digital world, by
              designing and implementing the technology tools that they need to
              win.
            </p>
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 font-medium text-blue-600"
                href="#"
              >
                Contact sales to learn more
                <svg
                  className="size-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <span className="mx-auto inline-flex size-[46px] flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm">
                <svg
                  className="size-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  Industry-leading documentation
                </h3>
                <p className="mt-1 text-gray-600">
                  Our documentation and extensive Client libraries contain
                  everything a business needs to build a custom integration in a
                  fraction of the time.
                </p>
              </div>
            </div>

            <div className="flex">
              <span className="mx-auto inline-flex size-[46px] flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm">
                <svg
                  className="size-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  Developer community support
                </h3>
                <p className="mt-1 text-gray-600">
                  We actively contribute to open-source projects—giving back to
                  the community through development, patches, and sponsorships.
                </p>
              </div>
            </div>

            <div className="flex">
              <span className="mx-auto inline-flex size-[46px] flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm">
                <svg
                  className="size-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  Simple and affordable
                </h3>
                <p className="mt-1 text-gray-600">
                  From boarding passes to movie tickets, theres pretty much
                  nothing you cant store with Preline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
