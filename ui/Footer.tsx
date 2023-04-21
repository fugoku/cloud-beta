import React from 'react'
import navigation from '../app/assets/footerData'
import logo from "@/app/assets/goku.svg";
import { FugokuIcon } from '@/app/assets/socialIcons';


const Footer = () => {
  return (
    <>
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-32">

                    <div className="mt-8 xl:mt-0">
                        <FugokuIcon />
                        <p className="mt-4 text-base text-gray-500">
                            Making the world a better place, one deployment at a time.
                        </p>
                        <div className="flex bg-gray space-x-8 md:order-2 py-5">
                            { navigation.social.map((item) => (
                                <div key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">{ item.name }</span>
                                        {item.icon}
                                    </a>
                                </div>
                                )) 
                                }
                        
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3
                                    className="text-sm font-bold text-gray-800 tracking-wider uppercase"
                                >
                                    Solutions
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    { navigation.solutions.map((item) => (
                                        
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-500 hover:text-gray-900"
                                            >
                                                { item.name }
                                            </a>
                                        </li>
                                    )) 
                                    }
                                    { navigation.solutions.map((item) => (
                                        
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-500 hover:text-gray-900"
                                            >
                                                { item.name }
                                            </a>
                                        </li>
                                    )) 
                                    }
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3
                                    className="text-sm font-bold text-gray-800 tracking-wider uppercase"
                                >
                                    Support
                                </h3>
                                <ul className="mt-4 space-y-4">
                                { navigation.support.map((item) => (
                                        
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-500 hover:text-gray-900"
                                            >
                                                { item.name }
                                            </a>
                                        </li>
                                    )) 
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3
                                    className="text-sm font-bold text-gray-800 tracking-wider uppercase"
                                >
                                    Company
                                </h3>
                                <ul className="mt-4 space-y-4">
                                { navigation.company.map((item) => (
                                        
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-500 hover:text-gray-900"
                                            >
                                                { item.name }
                                            </a>
                                        </li>
                                    )) 
                                    }
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3
                                    className="text-sm font-bold text-gray-800 tracking-wider uppercase"
                                >
                                    Legal
                                </h3>
                                <ul className="mt-4 space-y-4">
                                { navigation.legal.map((item) => (
                                        
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-500 hover:text-gray-900"
                                            >
                                                { item.name }
                                            </a>
                                        </li>
                                    )) 
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div
                    className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between"
                >
                    
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; 2020 Workflow, Inc. All rights reserved.
                    </p>
                </div>
            </div>
	    </footer>
    </>
  )
}

export default Footer