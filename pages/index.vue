<template>
  <div>
    <FeatureHeaderTwo :headline="config.seo.mainKeyword" :subline="config.subline" />

    <FeaturedHeader />

    <Brands />

    <WinnerProducts />

    <div class="container">
      <Products :products="products" />
    </div>

    <!-- <Advantages /> -->

    <PopularProducts />

    <SeoText :seoData="seoData" />

    <!-- <Hersteller /> -->

    <!-- <Team /> -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import products from "~/assets/data/products.json";

const seoData = config.seo.index;

export default {
  name: "IndexPage",
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
      seoData,
      config,
      products: products.slice(0, config.numberOfProductsOnStartpage),
    };
  },
  // jsonld() {
  //   return {
  //     "@context": "https://schema.org",
  //     "@graph": [
  //       {
  //         "@context": "https://schema.org",
  //         "@type": "FAQPage",
  //         "mainEntity": [
  //           {
  //             "@type": "Question",
  //             "name": "Was ist ein Schlafsack?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Ein Schlafsack ist eine Art von Bettwäsche, die dazu dient, den Körper des Benutzers während des Schlafens warm zu halten. Er besteht aus isolierenden Materialien und ist in verschiedenen Größen und Formen erhältlich."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Welche Arten von Schlafsäcken gibt es?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Es gibt verschiedene Arten von Schlafsäcken, darunter Mumienschlafsäcke, Deckenschlafsäcke, Daunenschlafsäcke, Kunstfaserschlafsäcke, 3-Jahreszeiten-Schlafsäcke und Winterschlafsäcke."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Wie wählt man die richtige Größe für einen Schlafsack aus?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Die Größe des Schlafsacks sollte der Körpergröße des Benutzers entsprechen. Es ist auch wichtig zu berücksichtigen, ob man sich im Schlafsack bewegen möchte oder nicht, und ob man zusätzliche Kleidung im Schlafsack tragen wird."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Was ist der Unterschied zwischen einem Daunen- und einem Kunstfaserschlafsack?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Daunenschlafsäcke sind in der Regel leichter und wärmer als Kunstfaserschlafsäcke. Sie sind jedoch auch teurer und können bei Feuchtigkeit an Wärmeleistung verlieren. Kunstfaserschlafsäcke sind dagegen günstiger und behalten ihre Wärmeleistung auch bei Nässe."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Wie pflegt man einen Schlafsack?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Es ist wichtig, einen Schlafsack nach jedem Gebrauch auszulüften und gelegentlich zu waschen. Wenn man ihn waschen muss, sollte man die Anweisungen des Herstellers befolgen. Es ist auch wichtig, den Schlafsack bei Lagerung trocken und nicht zu eng zusammengepackt aufzubewahren."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Kann man einen Schlafsack auch im Sommer verwenden?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Ja, es gibt auch Schlafsäcke, die speziell für den Einsatz im Sommer konzipiert sind. Diese sind in der Regel leichter und haben eine geringere Wärmeleistung als Schlafsäcke für kältere Temperaturen."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Kann man einen Schlafsack auch waschen?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Ja, in der Regel kann man einen Schlafsack waschen. Es ist jedoch wichtig, die Anweisungen des Herstellers zu befolgen, da manche Schlafsäcke spezielle Waschanforderungen haben, die beachtet werden müssen. Einige Schlafsäcke können nur in einer professionellen Reinigung gereinigt werden. Es ist auch wichtig, ein mildes Waschmittel zu verwenden und den Schlafsack bei niedriger Temperatur zu trocknen, um Schäden zu vermeiden."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Kann man einen Schlafsack auch als Decke verwenden?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Ja, es gibt Schlafsäcke, die sich öffnen lassen und als Decke verwendet werden können. Diese sind oft als 'Zipper' oder 'Zip together' Schlafsäcke bezeichnet."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Wie kann man einen Schlafsack aufrollen?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Um einen Schlafsack aufzurollen, legt man ihn flach auf den Boden und rollt ihn von einer Seite zur anderen. Danach kann man ihn in einem Packsack verstauen."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Wie warm sollte ein Schlafsack sein?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Die Wärmeleistung des Schlafsacks sollte der geplanten Umgebungstemperatur entsprechen. Für kalte Temperaturen sollte man einen Schlafsack mit einer höheren Wärmeleistung wählen. Es ist jedoch auch wichtig, nicht zu warm zu werden, da dies zu übermäßigem Schwitzen führen und den Schlafsack feucht machen kann."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Was ist eine Schlafsackhülle?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Eine Schlafsackhülle ist ein Schutzbezug für den Schlafsack, der ihn vor Schmutz und Feuchtigkeit schützt. Sie kann auch dazu beitragen, den Schlafsack länger haltbar zu machen."
  //             }
  //           },
  //           {
  //             "@type": "Question",
  //             "name": "Kann man einen Schlafsack auch mieten?",
  //             "acceptedAnswer": {
  //               "@type": "Answer",
  //               "text": "Ja, es ist möglich, einen Schlafsack zu mieten, insbesondere wenn man ihn nur für eine begrenzte Zeit benötigt oder nicht oft campen geht. Viele Outdoor-Ausrüstungsgeschäfte und Campingplätze bieten Schlafsackverleih an."
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // }
}
</script>
