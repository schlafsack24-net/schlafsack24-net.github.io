export default function createFAQitems(faqData) {
    const faqItems = faqData.map((item, index) => {
        return {
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            },
        }
    })

    return faqItems
}


