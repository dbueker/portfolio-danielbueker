<script setup>
import HEK1A from "../assets/HEK1A.jpg";
import HEK1B from "../assets/HEK1B.jpg";
import HEK2A from "../assets/HEK2A.jpg";
import HEK2B from "../assets/HEK2B.jpg";
import HEK3A from "../assets/HEK3A.jpg";
import HEK3B from "../assets/HEK3B.jpg";
</script>

<template>
    <div class="mb-40">
      <Header subtitle="HEK — 2021 — deepblue networks" title="Updating a digital companion for health insurance"><ImageComponentFullscreen :image1=HEK1A :image2=HEK1B /></Header>
        <div class="space-y-24 md:space-y-28 lg:space-y-32">
            <Chapter headline="Project" text="The HEK Service App provides easy access to health insurance services. This includes communication with the HEK, transferring and tracking documents and bonus programs."/>
            <Chapter headline="Challenge" text="Knowing which services are covered by your health insurance provider and how to claim them is not obvious in Germany’s public healthcare system. Accessing those services with an app is not only beneficial for users but also an important asset of health insurance providers to win new clients. The former HEK Service App got a bit outdated. The number of services had grown considerably over the years. A new mailbox, a chat and the option to share documents were screaming for a new concept."/>
            <ImageComponent :image1=HEK2A :image2=HEK2B />
            <Chapter headline="A digital companion for everybody" text="We embraced personal contact between client and health insurance and easy access to digital services. To achieve this we restructured the app, designed a modern chat feature, mailbox access for more official communication and a document tracking feature. To meet accessibility standards for a large audience, we relied on strong contrasts and integrated native elements where possible to make the elements scalable."/>
            <Chapter text="To make user the app is explorable for everyone, regardless of users being a member of the HEK or not, our concept included a basic and a smart version of the app. In the basic version users could use the app without registering at the HEK, minus the exclusive features."/>
            <ImageComponent :image1=HEK3A :image2=HEK3B />
            <ChapterMyRole text="I joined as the UX/UI co-lead at the beginning of the project. We took care of the design process from start to finish and handed over the results to an external development team." credits="Robert Stoof, Anja Schutz"/>
        </div>
    </div>
</template>