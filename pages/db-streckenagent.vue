<script setup>
import Header from "../components/Header.vue"
import ImageComponentHeader from "../components/ImageComponentHeader.vue"
import ImageComponent from "../components/ImageComponent.vue"
import Chapter from "../components/Chapter.vue"
import HowMightWe from "../components/HowMightWe.vue"

import DBStreckenagent1A from "../assets/DBStreckenagent1A.jpg"
import DBStreckenagent1B from "../assets/DBStreckenagent1B.jpg"
import DBStreckenagent2 from "../assets/DBStreckenagent2.jpg"
import DBStreckenagent3A from "../assets/DBStreckenagent3A.jpg"
import DBStreckenagent3B from "../assets/DBStreckenagent3B.jpg"
import DBStreckenagent3C from "../assets/DBStreckenagent3C.jpg"
import DBStreckenagent4 from "../assets/DBStreckenagent4.jpg"
import DBStreckenagent5 from "../assets/DBStreckenagent5.jpg"
import DBStreckenagent6A from "../assets/DBStreckenagent6A.jpg"
import DBStreckenagent6B from "../assets/DBStreckenagent6B.jpg"
</script>

<template>
    <div>
      <Header subtitle="DB Streckenagent" title="Compare mobility options at your location"><ImageComponentHeader :image1=DBStreckenagent1A :image2=DBStreckenagent1B /></Header>
      <div class="px-6">
        <div class= "mx-auto lg:max-w-screen-xl space-y-24 md:space-y-28 lg:space-y-32">
            <CaseFacts product="Mobile App" role="UX/UI Design" date="2023 - ongoing" credits="Mobimeo GmbH" client="Deutsche Bahn AG" />
            <Chapter headline="About the Project" text="DB Streckenagent combines public transport and sharing providers to allow seamless transport in all regions of Germany. As a UX/UI Designer at Mobimeo one of my main areas of expertise was the flow for discovering different transport options on the map."/>
            <Chapter headline="The Situation" text="We were facing the problem that our users needed to subsequently select vehicles from the map to compare them. This pattern would sometimes make the search for a specific type of vehicle a lengthy and frustrating task. To speed up this process and enable users to quickly find a satisfying transport option we developed a list view showing vehicles and stations around the user's location."/>
            <HowMightWe problem="As a user I have no detailed overview of mobility options at my location so I need to subsequently select vehicles to compare them" howMightWe="Create a user friendly overview of available mobility options" solution="Support users to efficiently select a mobility option they are happy with"/>
            <Chapter text="Validating our first designs through moderated user tests revealed the most important information of what needs to be present in the list view. The participants also underlined the importance of being able to see the map as it contains the path to a vehicle or station and is an easy way of validating the selection."/>
            <ImageComponent :image1=DBStreckenagent2 />
            <Chapter headline="List, Map and Filters" text="Based on the results we restructured the list items to contain the most important information. For the public transport category the list item contains all lines that depart from that station. Since the number of departing lines often exceeds the width of a list item, the lines overflow the screen and users can swipe through them horizontally. This maximizes the amout of information per list item. We also emphasized the map as a tool to help users understand what they actually can see in the list and added a circle that shows the average distance that can be walked in 10 minutes. Filters have been added to the map to allow cross-category filtering." />
            <ImageComponent :image1=DBStreckenagent3A :image2=DBStreckenagent3B :image3=DBStreckenagent3C />
            <Chapter headline="Updating Behavior and Reducing Anxiety" text="When selecting a vehicle the list needs to be up to date to prevent users from running into a stale selection. Showing a skeleton loader proved as a powerful tool to tell the user that the list is now up to date to reduce anxiety. However, continously showing loading skeletons in an active list view might distract users while browsing vehicles. To solve this, we update the active list in a visually less prominent manner, simply instantly replacing stale items with valid ones. When users change category, we show a skeleton loader to indicate that the new list is up to date."/>
            <ImageComponent :image1=DBStreckenagent4 />
            <Chapter headline="Selecting Bikes" text="Bike Sharing typically consists of different bike types that are organised in large stations and also free floating vehicles. Being near to a station that includes a lot of similar bikes would quickly fill up the list with similar vehicles that have the same distance to the user, so we needed to come up with a clustering logic for bikes. To find the correct mental model for this I conducted another small round of research, this time internally. One option clustered the bikes by stations, the other one clustered by bike types. Figma added variables and conditions shortly before I created the protoypes, allowing me to create the whole setup for testing on a single day."/>
            <ImageComponent :image1=DBStreckenagent5  />
            <Chapter text="The participants showed a strong preference for the station clustering, as it resembles how bikes are organized on the street. Because the search for a specific type of bike was generally faster in the other version we included the bike types that are available at a station in the station icon which is shown in the list." />
            <ImageComponent :image1=DBStreckenagent6A :image2=DBStreckenagent6B />
        </div>
      </div>
    </div>
</template>