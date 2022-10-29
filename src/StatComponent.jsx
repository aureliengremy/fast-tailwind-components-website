import React from 'react'

const StatComponent = () => {
  return (
    <div>
        {/* <!-- Container for demo purpose --> */}
    <div class="container my-24 px-6 mx-auto">
    
      {/* <!-- Section: Design Block --> */}
      <section class="mb-32 text-gray-800 text-center lg:text-left">

    
        {/* <!-- Jumbotron --> */}
        <div class="container mx-auto xl:px-32 text-center lg:text-left">
          <div class="grid lg:grid-cols-2 flex items-center">
            <div class="mb-12 lg:mb-0">
              <div
                class="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                style={{background: `hsla(0, 0%, 100%, 0.55)`, backdropFilter: `blur(30px)`, zIndex: '1'}}
              >
                <h2 class="text-3xl font-bold mb-4 display-5">Why is it so great?</h2>
                <p class="text-gray-500 mb-12">
                  Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis
                  malesuada. Aenean gravida magna orci, non efficitur est porta id. Donec magna
                  diam.
                </p>
    
                <div class="grid md:grid-cols-3 gap-x-6">
                  <div class="mb-12 md:mb-0">
                    <h2 class="text-3xl font-bold text-dark mb-4">10%</h2>
                    <h5 class="text-lg font-medium text-gray-500 mb-0">Less sugar</h5>
                  </div>
    
                  <div class="mb-12 md:mb-0">
                    <h2 class="text-3xl font-bold text-dark mb-4">70%</h2>
                    <h5 class="text-lg font-medium text-gray-500 mb-0">More flavor</h5>
                  </div>
    
                  <div class="">
                    <h2 class="text-3xl font-bold text-dark mb-4">0%</h2>
                    <h5 class="text-lg font-medium text-gray-500 mb-0">Gluten</h5>
                  </div>
                </div>
              </div>
            </div>
    
            <div>
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/088.jpg"
                class="w-full shadow-lg rounded-lg fancy-border-radius rotate-lg-6"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
    
    </div>
    {/* <!-- Container for demo purpose --> */}</div>
  )
}

export default StatComponent