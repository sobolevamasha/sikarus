<template>
    <div class="contacts">
        <hero :title="h1" :isSmall="true" />
        <div class="grid-container">
            <v-expansion-panels flat accordion>
                <v-expansion-panel 
                v-for="(item, index) of contactItems" 
                :key="index">
                    <v-expansion-panel-header>
                        <h4>{{ item.region }}</h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul class="ml-4">
                            <li v-for="(map, index) of item.places" 
                            :key="index">
                                {{map.map}}
                            </li>
                           
                            
                        </ul>
                        <ul>
                           
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>


    </div>
</template>

<script>
import contactItems from '@/store/contact-items';
import hero from '@/components/hero.vue';
export default {
    name: "Contacts",
    components: {
        hero,

    },
    data() {
        return {
            h1: 'Контакты',
            //h4: 'Строим доверие',
            //background: require('@/assets/hero-skyline-2.jpg'),
            //video: 'https://sika.scene7.com/is/content/sika/glo-skyline-loop'
        }
    },
    computed: {
        contactItems() {
            return contactItems;
        },
        contactSubItems() {
            return contactItems.places.subitems;
        }
    }

}
</script>
