export function Footer() {
  return (
    <>
      <footer className="mx-auto mt-auto w-full max-w-full bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a
              className="flex-none text-xl font-semibold"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
            <p className="mt-3 text-xs text-gray-600 sm:text-sm">
              © 2022 Preline.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-900">
              Product
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Pricing
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Changelog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Docs
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Download
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-900">
              Company
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  About us
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Blog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Careers
                </a>{' '}
                <span className="inline text-blue-600">— Were hiring</span>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Customers
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Newsroom
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Sitemap
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-900">
              Resources
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Community
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Help & Support
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  eBook
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Whats New
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Status
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-900">
              Developers
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Api
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Status
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  GitHub
                </a>{' '}
                <span className="inline text-blue-600">— New</span>
              </p>
            </div>

            <h4 className="mt-7 text-xs font-semibold uppercase text-gray-900">
              Industries
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Financial Services
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Education
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
