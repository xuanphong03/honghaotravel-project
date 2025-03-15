"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerCustom,
  AccordionTriggerCustomm,
} from "@/components/ui/accordion"
import { useState } from "react"

const arrAccordion = [
  {
    id:1,
    title: "What is included or excluded?",
    content:"Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    id:2,
    title: "What is included or excluded?",
    content:"Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    id:3,
    title: "What is included or excluded?",
    content:"Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    id:4,
    title: "What is included or excluded?",
    content:"Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    id:5,
    title: "What is included or excluded?",
    content:"Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    id:6,
    title: "What is included or excluded?",
    content:"Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  }
]

export function AccordionDemo() {
  const [active,setActive] = useState(null)
  return (
    <Accordion type="single" collapsible className="w-full sm:w-[42.8125rem]">
      {arrAccordion.map((item) => <AccordionItem key={item.id} value={item.id} >
        <AccordionTriggerCustom className={` `}>{ item.title}</AccordionTriggerCustom>
        <AccordionContent className={"!duration-1000 ease-in-out sub1-regular !text-greyscaletext-40"}>
          {item.content}
        </AccordionContent>
      </AccordionItem>)}
    </Accordion>
  )
}
