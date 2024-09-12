import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: " What is the Lagos City High School Festival of Music & Arts?",
    answer:
      "It’s the first edition of an annual event celebrating Nigeria’s youth through music, art, and creative expression, held to honor Nigeria’s Independence Day.",
  },
  {
    question: "How do I get the guidelines for the creative arts presentations?",
    answer:
      "Fill in your correct contact information and the guidelines would be sent to your mail or phone number.",
  },
  {
    question: "Is it compulsory to use the guidelines for the presentations and parade?",
    answer:
      "Yes it is. While we encourage originality and authenticity, we also require your adherence to the rules and guidelines for participation in the event.",
  },
  {
    question: "Can a group participate in the parade?",
    answer:
      "For this edition of the festival, parade participation has been restricted to schools only. In future events, we would work towards the inclusion of groups.",
  },
  {
    question: "Can I participate online?",
    answer:
      "Yes, you certainly can. The program would be streamed live on our social media platforms. Be sure to follow us, so you don’t miss out on the event!",
  },
  {
    question: "Is participating in the creative arts presentation or parade compulsory?",
    answer:
      "No it is not. We would be glad to receive you as attendees at the event even if you choose not to participate in the performance activities.",
  },
  // More questions...
]

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
