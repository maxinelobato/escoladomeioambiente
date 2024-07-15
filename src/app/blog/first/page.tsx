import Image from 'next/image'
import Link from 'next/link'

export default function FirstBlog() {
  return (
    <>
      <div className="-top-40 mx-auto max-w-screen-xl px-4 pb-8 pt-20 sm:px-6 lg:px-2">
        <div className="gap-y-8">
          <div className="lg:col-span-2">
            <div className="py-8">
              <div className="space-y-5 lg:space-y-8">
                <Link
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline"
                  href="/blog"
                >
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Blog
                </Link>

                <h2 className="text-3xl font-bold lg:text-5xl">
                  Announcing a free plan for small teams
                </h2>

                <div className="flex items-center gap-x-5">
                  <a
                    className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800 hover:bg-gray-200 sm:px-4 sm:py-2 sm:text-sm"
                    href="#"
                  >
                    Company News
                  </a>
                  <p className="text-xs text-gray-800 sm:text-sm">
                    January 18, 2023
                  </p>
                </div>

                <p className="text-lg text-gray-800">
                  At preline, our mission has always been focused on bringing
                  openness and transparency to the design process. Weve always
                  believed that by providing a space where designers can share
                  ongoing work not only empowers them to make better products,
                  it also helps them grow.
                </p>

                <p className="text-lg text-gray-800">
                  Were proud to be a part of creating a more open culture and to
                  continue building a product that supports this vision.
                </p>

                <div className="text-center">
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                      <figure className="relative h-60 w-full">
                        <Image
                          width={500}
                          height={500}
                          loading="lazy"
                          className="absolute start-0 top-0 size-full rounded-xl object-cover"
                          src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          alt="Image Description"
                        />
                      </figure>
                      <figure className="relative h-60 w-full">
                        <Image
                          width={500}
                          height={500}
                          loading="lazy"
                          className="absolute start-0 top-0 size-full rounded-xl object-cover"
                          src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          alt="Image Description"
                        />
                      </figure>
                    </div>
                    <figure className="relative h-72 w-full sm:h-96 lg:h-full">
                      <Image
                        width={500}
                        height={500}
                        loading="lazy"
                        className="absolute start-0 top-0 size-full rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                        alt="Image Description"
                      />
                    </figure>
                  </div>

                  <span className="mt-3 block text-center text-sm text-gray-500">
                    Working process
                  </span>
                </div>

                <p className="text-lg text-gray-800">
                  As weve grown, weve seen how Preline has helped companies such
                  as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring
                  their designers closer together to create amazing things. Weve
                  also learned that when the culture of sharing is brought in
                  earlier, the better teams adapt and communicate with one
                  another.
                </p>

                <p className="text-lg text-gray-800">
                  Thats why we are excited to share that we now have a{' '}
                  <a
                    className="font-medium text-blue-600 decoration-2 hover:underline"
                    href="#"
                  >
                    free version of Preline
                  </a>
                  , which will allow individual designers, startups and other
                  small teams a chance to create a culture of openness early on.
                </p>

                <blockquote className="p-4 text-center sm:px-7">
                  <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal">
                    To say that switching to Preline has been life-changing is
                    an understatement. My business has tripled and I got my life
                    back.
                  </p>
                  <p className="mt-5 text-gray-800">Nicole Grazioso</p>
                </blockquote>

                <figure>
                  <Image
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full rounded-xl object-cover"
                    src="https://images.unsplash.com/photo-1671726203454-488ab18f7eda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Image Description"
                  />
                  <figcaption className="mt-3 text-center text-sm text-gray-500">
                    A man and a woman looking at a cell phone.
                  </figcaption>
                </figure>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">
                    Bringing the culture of sharing to everyone
                  </h3>

                  <p className="text-lg text-gray-800">
                    We know the power of sharing is real, and we want to create
                    an opportunity for everyone to try Preline and explore how
                    transformative open communication can be. Now you can have a
                    team of one or two designers and unlimited spectators (think
                    PMs, management, marketing, etc.) share work and explore the
                    design process earlier.
                  </p>
                </div>

                <ul className="list-outside list-disc space-y-5 ps-5 text-lg text-gray-800">
                  <li className="ps-2">
                    Preline allows us to collaborate in real time and is a
                    really great way for leadership on the team to stay
                    up-to-date with what everybody is working on,
                    <a
                      className="font-medium text-blue-600 decoration-2 hover:underline"
                      href="#"
                    >
                      said
                    </a>{' '}
                    Stewart Scott-Curran, Intercoms Director of Brand Design.
                  </li>
                  <li className="ps-2">
                    Preline opened a new way of sharing. Its a persistent way
                    for everyone to see and absorb each others work said David
                    Scott, Creative Director at{' '}
                    <a
                      className="font-medium text-blue-600 decoration-2 hover:underline"
                      href="#"
                    >
                      Eventbrite
                    </a>
                    .
                  </li>
                </ul>

                <p className="text-lg text-gray-800">
                  Small teams and individual designers need a space where they
                  can watch the design process unfold, both for themselves and
                  for the people they work with – no matter if its a fellow
                  designer, product manager, developer or client. Preline allows
                  you to invite more people into the process, creating a central
                  place for conversation around design. As those teams grow,
                  transparency and collaboration becomes integrated in how they
                  communicate and work together.
                </p>

                <div className="grid gap-y-5 lg:flex lg:items-center lg:justify-between lg:gap-y-0">
                  <div>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      href="#"
                    >
                      Plan
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      href="#"
                    >
                      Web development
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      href="#"
                    >
                      Free
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      href="#"
                    >
                      Team
                    </a>
                  </div>

                  <div className="flex items-center justify-end gap-x-1.5">
                    <div className="hs-tooltip inline-block">
                      <button
                        type="button"
                        className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800"
                      >
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
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        875
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 invisible absolute z-10 inline-block rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity"
                          role="tooltip"
                        >
                          Like
                        </span>
                      </button>
                    </div>

                    <div className="mx-3 block h-3 border-e border-gray-300"></div>

                    <div className="hs-tooltip inline-block">
                      <button
                        type="button"
                        className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800"
                      >
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
                          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                        </svg>
                        16
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 invisible absolute z-10 inline-block rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity"
                          role="tooltip"
                        >
                          Comment
                        </span>
                      </button>
                    </div>

                    <div className="mx-3 block h-3 border-e border-gray-300"></div>

                    <div className="hs-dropdown relative inline-flex">
                      <button
                        type="button"
                        id="blog-article-share-dropdown"
                        className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800"
                      >
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
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                          <polyline points="16 6 12 2 8 6" />
                          <line x1="12" x2="12" y1="2" y2="15" />
                        </svg>
                        Share
                      </button>
                      <div
                        className="hs-dropdown-menu duration hs-dropdown-open:opacity-100 z-10 mb-1 hidden w-56 rounded-xl bg-gray-900 p-2 opacity-0 shadow-md transition-[opacity,margin]"
                        aria-labelledby="blog-article-share-dropdown"
                      >
                        <a
                          className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          href="#"
                        >
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
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          Copy link
                        </a>
                        <div className="my-2 border-t border-gray-600"></div>
                        <a
                          className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          href="#"
                        >
                          <svg
                            className="size-4 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                          Share on Twitter
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          href="#"
                        >
                          <svg
                            className="size-4 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                          Share on Facebook
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          href="#"
                        >
                          <svg
                            className="size-4 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                          Share on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="lg:col-span-1 lg:h-full lg:w-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent">
            <div className="sticky start-0 top-0 py-8 lg:ps-8">
              <div className="group mb-8 flex items-center gap-x-3 border-b border-gray-200 pb-8">
                <a className="block flex-shrink-0" href="#">
                  <Image
                    width={500}
                    height={500}
                    loading="lazy"
                    className="size-10 rounded-full"
                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </a>

                <a className="group block grow" href="">
                  <h5 className="text-sm font-semibold text-gray-800 group-hover:text-gray-600">
                    Leyla Ludic
                  </h5>
                  <p className="text-sm text-gray-500">UI/UX enthusiast</p>
                </a>

                <div className="grow">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
                    >
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="19" x2="19" y1="8" y2="14" />
                        <line x1="22" x2="16" y1="11" y2="11" />
                      </svg>
                      Follow
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      5 Reasons to Not start a UX Designer Career in 2022/2023
                    </span>
                  </div>

                  <div className="relative size-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      width={500}
                      height={500}
                      loading="lazy"
                      className="absolute start-0 top-0 size-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>

                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      If your UX Portfolio has this 20% Well Done, it Will Give
                      You an 80% Result
                    </span>
                  </div>

                  <div className="relative size-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      width={500}
                      height={500}
                      loading="lazy"
                      className="absolute start-0 top-0 size-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>

                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                      7 Principles of Icon Design
                    </span>
                  </div>

                  <div className="relative size-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      width={500}
                      height={500}
                      loading="lazy"
                      className="absolute start-0 top-0 size-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
