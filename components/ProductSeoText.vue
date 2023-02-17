<template>
    <div v-if="seoData && seoData.seo && seoData.seo.texts">
        <div v-if="seoData && seoData.seo && seoData.seo.texts">
            <div v-for="(text, index) in seoData.seo.texts" :key="index">
                <div class="mb-3 mt-5 h5">
                    {{ text.title }}
                </div>
                <p class="mb-4">
                    {{ text.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "productSeoText",
    props: {
        seoData: Object,
    },
};
</script>
