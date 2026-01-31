<script setup>
import DBStreckenagent1A from "../assets/DBStreckenagent1A.jpg";
import DBStreckenagent1B from "../assets/DBStreckenagent1B.jpg";
import DBStreckenagent2 from "../assets/DBStreckenagent2.jpg";
import DBStreckenagent3A from "../assets/DBStreckenagent3A.jpg";
import DBStreckenagent3B from "../assets/DBStreckenagent3B.jpg";
import DBStreckenagent3C from "../assets/DBStreckenagent3C.jpg";
import DBStreckenagent5 from "../assets/DBStreckenagent5.jpg";
import DBStreckenagent6A from "../assets/DBStreckenagent6A.jpg";
import DBStreckenagent6B from "../assets/DBStreckenagent6B.jpg";
</script>

<template>
    <div class="mb-40">
      <Header subtitle="Deutsche Bahn — 2023 — Mobimeo" title="One mobility app to combine public and shared transport"><ImageComponentFullscreen :image1=DBStreckenagent1A :image2=DBStreckenagent1B /></Header>
      <div class="space-y-24 md:space-y-28 lg:space-y-32">
          <Chapter headline="Project" text="DB Streckenagent was Germay's second most used mobility app. Our goal at Mobimeo was to provide one single app for all local transport options."/>
          <Chapter headline="Challenge" text="I took over the design of shared transport. To reach our goal we improved the function to compare and find the best available mobility option nearby."/>
          <ImageComponentFullscreen :image1=DBStreckenagent2 />
          <Chapter text="With a research mix of card sorting and rapid prototyping it became clear that users preferred a list view of available vehicles and usually decide for a mode of transport before comparing vehicles. They also want to see vehicles and stations on the map to validate the selection."/>
          <Chapter headline="Redesign for the features that matter" text="The new design for shared transport combined a list view with a map. The list view was swipable to switch between transport modes and then compare vehicles within a category on the first level. I leaned in on a layout to quickly compare and find the best option nearby directly on the home screen. More specialized features like detailed filtering options were moved into a menu to unclutter the screen and focus on the main feature." />
          <ImageComponent :image1=DBStreckenagent3A :image2=DBStreckenagent3B :image3=DBStreckenagent3C />
          <Chapter headline="Integrating bikes and stations" text="During testing I noticed that selecting a bike followed different criteria. Since shared bikes are mostly organized in stations users did not look for specific bikes but for stations with as many bikes as possible. They wanted to increase the chance of getting a bike in a good condition, as many users had bad experiences with this. I created a new design to better match their mental model."/>
          <ImageComponent :image1=DBStreckenagent6A :image2=DBStreckenagent6B />
          <Chapter text="Figma added variables and conditions shortly before I created the protoypes for bike sharing. This allowed me to create the whole setup for testing on a single working day."/>
          <ImageComponentFullscreen :image1=DBStreckenagent5 />
          <Chapter headline="My role" text="As a UI/UX designer at Mobimeo I was responsible for the experience of shared transport, closely working with an agile development team. In a design team of seven people we also collaboratively worked on a whitelable mobile app solution for public transport and the customer service software MobiSupport. The design team was lead by Christian Behrens and Sorin Oprisor."/>
      </div>
    </div>
</template>