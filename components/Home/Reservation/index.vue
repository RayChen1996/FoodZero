<template>
  <div class=" ">
    <div class="bg-primary-200 m-auto text-center py-7 px-4">
      <PageTitle
        title="Make a Reservation"
        sub-title="Get in touch with restaurant"
      />

      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8">
          <input
            class="input-md input bg-primary-200 border input-bordered border-[#000] rounded-none"
            type="text"
            value="16/22/2021"
          />
          <select
            class="select bg-primary-200 border-[#000] select-bordered rounded-none"
            name=""
            id=""
          >
            <option value="">6:00 pm</option>
          </select>

          <select
            class="select bg-primary-200 border-[#000] select-bordered rounded-none"
            name=""
            id=""
          >
            <option value="">2 Person</option>
          </select>
        </div>
      </div>

      <div>
        <button class="btn btn-primary bg-primary text-white rounded-none mt-6">
          Book Now
        </button>
      </div>
    </div>
  </div>
</template>
