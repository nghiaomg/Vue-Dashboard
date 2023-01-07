<template>
<div class="flex-1 flex flex-col w-full bg-gray-900">
    <nav class="px-4 flex justify-between bg-white h-16 border-b-2 bg-gray-900">

        <ul class="flex items-center">
        </ul>

        <ul class="flex items-center">
            <li>
                <h1 class="pl-8 lg:pl-0 text-white">Hello, NghiaOMG</h1>
            </li>
        </ul>

        <ul class="flex items-center">

            <li class="pr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell text-white" @click="hiddenNotify">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>

            </li>
            <li class="h-10 w-10">
                <img class="h-full w-full rounded-full mx-auto" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile woman" />
            </li>

        </ul>

    </nav>
</div>

<RouterView />
</template>

<script>
export default {
    props: {
        AppName: {
            type: String
        }
    },
    data() {
        return {
            isHiddenNotify: true
        }
    },
    methods: {
        hiddenNotify() {
            this.isHiddenNotify = this.isHiddenNotify == false? true : false
            eventBus.$emit('isHiddenNotify', this.isHiddenNotify);
        }
    }
}
</script>
