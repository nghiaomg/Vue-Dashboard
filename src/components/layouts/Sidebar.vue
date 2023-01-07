<template>
<span class="absolute text-3xl text-white top-5 left-4 cursor-pointer z-[10] flex" @click="isOpen">
    <i class="bi bi-list px-2 bg-gray-600 rounded-md font-medium"></i>
</span>
<div class="sm:block sidebar h-screen sm:relative fixed top-0 bottom-0 lg:left-0 p-2 z-[10] overflow-y-auto text-center bg-gray-900" :class="{'hidden' : this.isHidden}">
    <div class="text-gray-100 text-xl">
        <div class="p-2.5 mt-1 flex items-center">
            <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 class="font-bold text-gray-200 text-[15px] ml-3">{{AppName}}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg ml-28 lg:hidden" @click="isOpen" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </div>
        <div class="my-2 bg-gray-600 h-[1px]"></div>
    </div>
    <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
        <i class="bi bi-search text-sm"></i>
        <input type="text" placeholder="Search" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
    </div>
    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i class="bi bi-house-door-fill"></i>
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
    </div>
    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i class="bi bi-bookmark-fill"></i>
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
    </div>
    <div class="my-4 bg-gray-600 h-[1px]"></div>
    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onclick="dropdown()">
        <i class="bi bi-chat-left-text-fill"></i>
        <div class="flex justify-between w-full items-center">
            <span class="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
            <span class="text-sm rotate-180" id="arrow">
                <i class="bi bi-chevron-down"></i>
            </span>
        </div>
    </div>
    <div class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
        <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Social
        </h1>
        <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Personal
        </h1>
        <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Friends
        </h1>
    </div>
    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i class="bi bi-box-arrow-in-right"></i>
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
    </div>
</div>
</template>

<script>
/*
    function dropdown() {
    document.querySelector("#submenu").classList.toggle("hidden");
    document.querySelector("#arrow").classList.toggle("rotate-0");
    }
    dropdown();

    function openSidebar() {
    document.querySelector(".sidebar").classList.toggle("hidden");
    }*/
export default {
    props: {
        AppName: {
            type: String
        }
    },
    data() {
        return {
            trademark: 'Memory Admin',
            isHidden: window.innerWidth < 640? true : false
        }
    },
    methods: {
        isOpen(event) {
            this.isHidden = this.isHidden == false ? true : false;
        }
    }
}
</script>
