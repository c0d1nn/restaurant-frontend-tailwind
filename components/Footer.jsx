import React from 'react'
import {AiFillGithub, AiFillInstagram, AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <div class="py-10 bg-orange-900 sm:pt-16 lg:pt-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">

                <h1 className='text-white font-bold text-xl'>quickDeli</h1>

                <div>
                    <p class="font-semibold text-white">Help</p>
                    <ul class="mt-8 space-y-4 text-gray-200">
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Q&A</a></li>
                    </ul>
                </div>

                <div>
                    <p class="font-semibold text-white">Partners</p>
                    <ul class="mt-8 space-y-4 text-gray-200">
                        <li><a href="#">Our silver partners</a></li>
                        <li><a href="#">Our platinum partners</a></li>
                    </ul>
                </div>

                <div>
                    <p class="font-semibold text-white">Join us</p>
                    <ul class="mt-8 space-y-4 text-gray-200">
                        <li><a href="#"> HR </a></li>
                        <li><a href="#"> Job Offers </a></li>
                    </ul>
                </div>
            </div>

            <div class="mt-20 md:mt-28 2xl:mt-32">
                <div class="sm:flex items-center sm:space-x-6">
                    <ul class="flex gap-5 text-white text-3xl mb-3 sm:mb-0">
                        <li><a href="#"><AiFillFacebook/></a></li>
                        <li><a href="#"><AiFillInstagram/></a></li>
                        <li><a href="#"><AiFillGithub/></a></li>
                    </ul>

                    <ul class="flex gap-6 text-gray-200">
                        <li><a href="#"> Privacy Policy </a></li>
                        <li><a href="#"> Terms & Conditions </a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer