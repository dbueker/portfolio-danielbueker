<script setup>
import Header from "../components/Header.vue"
import ImageComponentHeader from "../components/ImageComponentHeader.vue"
import ImageComponent from "../components/ImageComponent.vue"
import Chapter from "../components/Chapter.vue"
import HowMightWe from "../components/HowMightWe.vue"

import HEK1A from "../assets/HEK1A.jpg"
import HEK1B from "../assets/HEK1B.jpg"
import HEK2A from "../assets/HEK2A.jpg"
import HEK2B from "../assets/HEK2B.jpg"
import HEK3A from "../assets/HEK3A.jpg"
import HEK3B from "../assets/HEK3B.jpg"
</script>

<template>
    <div>
      <Header subtitle="HEK Service App" title="Digital companion for health insurance"><ImageComponentHeader :image1=HEK1A :image2=HEK1B /></Header>
      <div class="px-6">
        <div class= "mx-auto lg:max-w-screen-xl space-y-24 md:space-y-28 lg:space-y-32">
            <CaseFacts product="Mobile App" role="UX/UI Design" date="2020 - 2021" credits="deepblue networks" client="HEK - Hanseatische Krankenkasse" />
            <Chapter headline="About the Project" text="The HEK Service App provides easy access to health insurance services. It allows users to keep track of their most sensitive data and communicate with their insurance provider. As a UX Designer at deepblue networks I was responsible for creating the whole concept and user interface of the app, as well as handing it over to the external development team, taking care of the whole design process from start to finish."/>
            <Chapter headline="The Situation" text="Knowing which services are covered by your health insurance provider and how to claim them is not obvious in Germany’s public healthcare system. Lowering the barrier to access those services with an app is not only beneficial for users but also an important trait of health insurance providers when it comes to winning new clients. At deepblue networks I was tasked to design an app that serves as a gateway for exchanging information and documents between the HEK and their clients and gives access to the HEK's services."/>
            <HowMightWe problem="As a user I don't know which services my health insurance offers and have to go through a lot of bureaucracy to claim services" howMightWe="Create a userfriendly application to allow access to health insurance services and let users get in touch with the provider" solution="Improve the user's health and satisfacion with the insurance provider"/>
            <Chapter headline="Digital Companion" text="To achieve this result I focused on three main tasks: embracing personal contact between client and health insurance, easy access to digital services and creating an informative area in the app to educate users about services and delivering editorial content. The latter served to position the app as a digital companion that delivers value to the user even when he is not in direct need of using a service of the health insurance. This way the HEK is made more tangible and perceived as a constant benefit in the user's life."/>
            <ImageComponent :image1=HEK2A :image2=HEK2B />
            <Chapter headline="Encouraging exploration" text="Everybody can explore the whole app without any registration and also use some basic features while only entering their insurance number. Features that neccessarily demand a thorough identification are marked as smart features and users are educated about the value they might gain from using the respective feature. This way the app is open for exploration for existing as well as new customers and users are encouraged to check out new features without being forced to share more data than necessary." />
            <ImageComponent :image1=HEK3A :image2=HEK3B />
            <!--<Chapter headline="Be concise without being dull" text="Since users trust the company with their health data, we defined the tone of voice to be always friendly and straight to the point, regardless of the level of importance. To lighten this up, rewarding success screens and playful empty states played an important role in achieving a well rounded package and a great user experience." />-->
        </div>
      </div>
    </div>
</template>