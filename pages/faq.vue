<template>
    <div>
        <!-- Hersteller Start -->
        <div class="container-xxl py-5 category" id="hersteller">
            <div class="container">
                <div class="row g-3">
                    <div class="col-md-12">
                        <div>
                            <h1 class="text-center mb-4 mt-4">Häufig gestellte Fragen zum Thema Schlafsack</h1>
                        </div>
                        <div class="accordion" id="basicAccordion">
                            <div class="accordion-item" v-for="(item, index) in faqData" :key="index">
                                <h2 class="accordion-header" :id="'heading' + index">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#collapse' + index" aria-expanded="false"
                                        :aria-controls="'collapseOne' + index">
                                        {{ item.name }}
                                    </button>
                                </h2>
                                <div :id="'collapse' + index" class="accordion-collapse collapse"
                                    :aria-labelledby="'heading' + index" data-bs-parent="#basicAccordion">
                                    <div class="accordion-body">
                                        {{ item.acceptedAnswer.text }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hersteller End -->
    </div>
</template>

<script>
import config from "~/assets/data/config.json";
import createFAQitems from "~/helpers/createFAQitems";

const seoData = config.seo.faq;
const faqData = createFAQitems(seoData.faqs)

export default {
    name: "FaqPage",
    head: {
        title: seoData.title,
        meta: [
            {
                hid: "description",
                name: "description",
                content: seoData.metaDescription,
            },
            {
                hid: "robots",
                name: "robots",
                content: seoData.robots,
            },
        ],
    },
    data() {
        return {
            faqData,
        };
    },
    jsonld() {
        return {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": this.faqData
                }
            ]
        }
    }
}
</script>
