import React from 'react'

export default function Header() {
    return (
        <div className=" bg-gray-200 grid lg:grid-cols-2 2xl:grid-cols-4">
        <div className=" xl:max-w-xl">
          <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
            <img className="h-10" src="./img/fuel-my-hustle-logo.png" alt="logo" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="./img/team.jpg"
              alt="Team"
            />
            <h1 className="mt-6 text-2xl font-bold sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              Create what you love.
              <br />
              <span className="text-yellow-500">Build for creators.</span>
            </h1>
            <p className="mt-6 text-gray-600 sm:text-xl">
             Travelling doesn't mean work should pause. Work remotely from anywhere in the world.  
            </p>
            <div className="mt-4 sm:mt-6">
              <a className="btn" href="#">
                Join Us Now
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="./img/team.jpg"
            alt="Team"
          />
        </div>
      </div>
    )
}
