import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: " What is the Lagos City High School Festival of Music & Arts?",
    answer:
      "It’s an annual event celebrating Nigeria’s youth through music, art, and creative expression, held to honor Nigeria’s Independence Day.",
  },
  {
    question: "How can my school participate?",
    answer:
      "Register your school to join in creative presentations, the parade, or as spectators.",
  },
  {
    question: "Can individuals join?",
    answer:
      "Yes, individuals can register to attend workshops or participate in art and performance sessions.",
  },
  {
    question: "What about groups?",
    answer:
      "Groups can register to showcase their collaborative projects and talents.",
  },
  {
    question: "How do I register?",
    answer:
      "Fill out the registration form above, selecting your participation type and providing the necessary details.",
  },
  {
    question: "What if I have special requests?",
    answer:
      "Specify any special needs or requests in the designated section of the form.",
  },
  {
    question: "Where can I find more information?",
    answer:
      "For more details, visit our website or contact us at [Contact Email].",
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
