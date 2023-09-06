<script setup>
import Header from "../components/Header.vue"
import ImageComponentFullscreen from "../components/ImageComponentFullscreen.vue"
import ImageComponent from "../components/ImageComponent.vue"
import Chapter from "../components/Chapter.vue"
import HowMightWe from "../components/HowMightWe.vue"

import Lightelligence1A from "../assets/Lightelligence1A.jpg"
import Lightelligence1B from "../assets/Lightelligence1B.jpg"
import Lightelligence2A from "../assets/Lightelligence2A.jpg"
import Lightelligence2B from "../assets/Lightelligence2B.jpg"
import Lightelligence3A from "../assets/Lightelligence3A.jpg"
import Lightelligence3B from "../assets/Lightelligence3B.jpg"
</script>

<template>
    <div>
      <Header subtitle="Lightelligence" title="Design system for a scalable IoT-platform"><ImageComponentFullscreen :image1=Lightelligence1A :image2=Lightelligence1B /></Header>
        <div class="space-y-24 md:space-y-28 lg:space-y-32">
            <CaseFacts product="Web platform" role="UI Design" date="2019 - 2020" credits="deepblue networks" client="OSRAM" />
            <Chapter headline="About the Project" text="Lightelligence is a platform to create custom IoT applications for building and facility management. Combining the software with sensors and other devices, clients are able to operate smart buildings or whole facilites and gain insights in details like energy savings or sensor lifespans. As a UI Designer at deepblue networks I contributed to building, maintaining and documenting the design system and multiple components for the platform."/>
            <Chapter headline="The Situation" text="My team at deepblue networks was tasked with the design of components that would be utilized by the clients to build their custom IoT appclications. Because of the wide range of applications for different industries, we needed to build a scalable design system with a strong visual language to ensure a uniform user experience."/>
            <HowMightWe problem="As a user I need a custom application for managing my building or facility" howMightWe="Create a scalable and modular component library" solution="Let clients easily build and use the app they desire"/>
            <Chapter headline="Atomic Design and Documentation" text="Since a scalable platform demands a lot of flexibility, an atomic design system was the ideal foundation for the product. Two factors were crucial for our success: first, we worked in a agile environment that allowed for rapid QA sessions with the external development teams. Second, collaboration was accelerated by thorough documentation of our design system and by using Abstract as a single source of truth that was shared between designers, developers and the product owner."/>
            <ImageComponentFullscreen :image1=Lightelligence2A :image2=Lightelligence2B preventStacking="true"/>
            <Chapter headline="Permission and Role Management" text="When I joined the team I was challenged with the design of the permission and role management. This feature of the platform enabled clients to establish a hierarchy inside their applications by assigning roles and permissions to their team members. I concentrated my efforts on how to build an interface that would not overwhelm the user and offer an easy way to validate the assignments during the process. The thoughtful use of cards, depth and font styles communicates a clear structure throughout the different kinds of permissions. Via a preview screen users could see a condensed presentation of only the selected permissions which made it easy for them to validate their selection." />
            <ImageComponent :image1=Lightelligence3A :image2=Lightelligence3B />
        </div>
    </div>
</template>