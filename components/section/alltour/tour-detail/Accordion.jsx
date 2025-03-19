'use client';
import {
  Accordion,
  AccordionContentCustom,
  AccordionItem,
  AccordionTriggerCustom,
} from '@/components/ui/accordion-v4';

const arrAccordion = [
  {
    id: 1,
    title: 'What is included or excluded?',
    content:
      'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.',
  },
  {
    id: 2,
    title: 'What is included or excluded?',
    content:
      'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.',
  },
  {
    id: 3,
    title: 'What is included or excluded?',
    content:
      'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.',
  },
  {
    id: 4,
    title: 'What is included or excluded?',
    content:
      'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.',
  },
  {
    id: 5,
    title: 'What is included or excluded?',
    content:
      'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.',
  },
  {
    id: 6,
    title: 'What is included or excluded?',
    content:
      'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.',
  },
];

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full md:w-[42.8125rem]">
      {arrAccordion.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTriggerCustom
            className={`sub1-bold sub1-bold__mb !text-greyscaletext-30`}
          >
            {item.title}
          </AccordionTriggerCustom>
          <AccordionContentCustom
            className={
              'sub1-regular sub1-regular__mb !text-greyscaletext-40 !duration-1000 ease-in-out'
            }
          >
            {item.content}
          </AccordionContentCustom>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
