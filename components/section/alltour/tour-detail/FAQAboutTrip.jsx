import React from 'react'
import { Accordion, AccordionDemo } from './Accordion'
import { DialogDemo } from './DialogVideo'

export default function FAQAboutTrip() {
  return (
      <div className='max-w-[87.5rem] max-md:hidden mx-auto py-[5.62remm]'>
          <h2 className='h2-bold !text-greyscaletext-80-main'>FAQ about the trip</h2>
          <div className="w-full flex justify-between  mt-12">
              <div className="w-1/2">
          <AccordionDemo /></div>
          <div className='w-[47%]'>
              <DialogDemo/>
          </div>
          </div>
    </div>
  )
}
