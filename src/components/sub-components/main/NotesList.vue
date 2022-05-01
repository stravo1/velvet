<template>
    <div style="height:calc(100% - 15rem)" class="mx-2 p-3 overflow-y-scroll grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <notes-list-member-long class="row-span-2" @click="handleClick" color="red"/>
        <notes-list-member-long class="row-span-2" color="blue"/>
        <notes-list-member-long class="row-span-2" color="green"/>
        <notes-list-member-long class="row-span-2" color="neutral"/>
        <notes-list-member-long class="row-span-2" color="yellow"/>
        <notes-list-member-long class="row-span-2" color="violet"/>
        
    </div>
</template>

<script>
import NotesListMemberLong from "./NotesListMemberLong.vue";
export default {
    methods:{
        handleClick(){
            this.$router.push({name:'view'})
        }
    },
    components:{
        NotesListMemberLong,
    }
}
</script>