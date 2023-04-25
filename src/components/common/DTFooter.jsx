import React from 'react'
import { BiGitBranch, BiIntersect, BiLink, BiRightTopArrowCircle, BiTrendingDown } from 'react-icons/bi'

export const DTFooter = () => {
  return (
    
<footer className="bg-dt-white mt-[77.32px]">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 w-[30%]">
              <a href="/" className="block items-center">
                  <img src="logo.jpeg" className="w-[150px] mr-3" alt="Digital Tech Pioneers Logo" />
                  <span className="self-center text-[14.22px]">
                  We are comitted to creating the best online experience for customers visiting your site
                  </span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-dt-black uppercase dark:text-white">About Us</h2>
                  <ul className="text-dt-black text-opacity-50 font-medium ">
                      <li className="mb-4">
                          <a href="/" className="hover:underline">Portfolio</a>
                      </li>
                      <li>
                          <a href="/" className="hover:underline">Contact us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-dt-black uppercase dark:text-white">Reach Us</h2>
                  <ul className="text-dt-black text-opacity-50 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">digitaltechpioneers@gmail.com</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">+254 700463499</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="/" className="hover:underline">Digital Tech Pioneers™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-dt-black dark:hover:text-white">
                <BiTrendingDown />
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-dt-black dark:hover:text-white">
                <BiIntersect />
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-dt-black dark:hover:text-white">
                <BiRightTopArrowCircle />
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-dt-black dark:hover:text-white">
                <BiGitBranch />
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-dt-black dark:hover:text-white">
                <BiLink />
                  <span className="sr-only">Linkedin</span>
              </a>
          </div>
      </div>
    </div>
</footer>

  )
}
