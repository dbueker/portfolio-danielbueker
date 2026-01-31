<script setup>
import Lightelligence1A from "../assets/Lightelligence1A.jpg";
import Lightelligence1B from "../assets/Lightelligence1B.jpg";
import Lightelligence2A from "../assets/Lightelligence2A.jpg";
import Lightelligence2B from "../assets/Lightelligence2B.jpg";
import Lightelligence3A from "../assets/Lightelligence3A.jpg";
import Lightelligence3B from "../assets/Lightelligence3B.jpg";
</script>

<template>
    <div class="mb-40">
      <Header subtitle="OSRAM — 2019 — deepblue networks" title="Web app and design system for a scalable IoT-platform"><ImageComponentFullscreen :image1=Lightelligence1A :image2=Lightelligence1B /></Header>
        <div class="space-y-24 md:space-y-28 lg:space-y-32">
            <Chapter headline="Project" text="Lightelligence is OSRAM's platform to create custom IoT applications. With the main use case being facility management, the software combined sensors and other devices with our web app to operate smart buildings."/>
            <Chapter headline="Challenge" text="Our team was tasked with the design of components and patterns that are used by OSRAM's clients to put together their own custom IoT appclications. Because of the wide range of applications for different industries, we decided to build a scalable design system to ensure a uniform user experience."/>
            <ImageComponentFullscreen :image1=Lightelligence2A :image2=Lightelligence2B preventStacking="true"/>
            <Chapter headline="Atomic design and documentation" text="Since a scalable platform demands a lot of flexibility, an atomic design system was the ideal foundation for the product. Two factors were crucial for our success: first, an agile environment that allowed for rapid QA sessions with the external development teams. Second, our design system served as a single source of truth and was shared between designers, developers and the product owner. This enabled us to easily communicate accross barriers and timezones."/>
            <Chapter headline="Patterns for developers" text="Our user group did not only consist of facility managers but also the developers, putting together the custom applications with our components. To increase trust in the platform we emphasized previews of complex settings and a clear feedback system." />
            <ImageComponent :image1=Lightelligence3A :image2=Lightelligence3B />
            <Chapter headline="My role" text="At deepblue networks I joined a small task force, almost exclusively working on the UI and UX of Lightelligence. Together we iteratively designed the web app in close contact with our client. We maintained a large design system as a basis for our work and for the developers at OSRAM. Credits to Jan Stricker and Fabian Heussner."/>
        </div>
    </div>
</template>