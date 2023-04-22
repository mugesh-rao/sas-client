import React from 'react'

function Features() {
  return (
    <section class="m-4 bg-blue-600">
    <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div class="col-span-1">
                <div class="p-4">
                    <h3 class="mt-2 text-blue-600 font-bold text-lg">6M + </h3>
                    <p class="text-white">Users</p>
                </div>
            </div>
            <div class="col-span-1">
                <div class="p-4 ">
                    <h3 class="mt-2 text-blue-600 font-bold text-lg">3.000 + </h3>
                    <p class="text-white">Courses available</p>
                </div>
            </div>
            <div class="col-span-1">
                <div class="p-4 ">
                    <h3 class="mt-2 text-blue-600 font-bold text-lg">8 + </h3>
                    <p class="text-white">Years of experience</p>
                </div>
            </div>
            <div class="col-span-1">
                <div class="p-4 ">
                    <h3 class="mt-2 text-blue-600 font-bold text-lg">99% </h3>
                    <p class="text-white">Happy Clients</p>
                </div>
            </div>
        </div>
    </div>
</section>  )
}

export default Features