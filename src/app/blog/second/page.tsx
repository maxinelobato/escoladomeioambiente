import Image from 'next/image'

export default function SecondBlog() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg pt-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Insights
          </h2>
          <p className="mt-1 text-gray-600">
            Stay in the know with insights from industry experts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a className="group" href="#">
            <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
              <Image
                width={300}
                height={300}
                className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
              <span className="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white">
                Sponsored
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                Studio by Preline
              </h3>
              <p className="mt-3 text-gray-800">
                Produce professional, reliable streams easily leveraging
                Prelines innovative broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 decoration-2 group-hover:underline">
                Read more
                <svg
                  className="size-4 flex-shrink-0"
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
              </p>
            </div>
          </a>

          <a className="group" href="#">
            <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
              <Image
                width={300}
                height={300}
                className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                Onsite
              </h3>
              <p className="mt-3 text-gray-800">
                Optimize your in-person experience with best-in-className
                capabilities like badge printing and lead retrieval
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 decoration-2 group-hover:underline">
                Read more
                <svg
                  className="size-4 flex-shrink-0"
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
              </p>
            </div>
          </a>

          <a
            className="group relative flex min-h-60 w-full flex-col rounded-xl bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] bg-cover bg-center transition hover:shadow-lg"
            href="#"
          >
            <div className="flex-auto p-4 md:p-6">
              <h3 className="text-xl text-white/90 group-hover:text-white">
                <span className="font-bold">Preline</span> Press publishes books
                about economic and technological advancement.
              </h3>
            </div>
            <div className="p-4 pt-0 md:p-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
                Visit the site
                <svg
                  className="size-4 flex-shrink-0"
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
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
