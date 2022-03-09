<template>
  <div class="container flex h-full">
    <div class="rounded-md shadow-lg shadow-blue-400 p-8 bg-white m-auto">
      <div class="flex flex-col justify-center h-full">
        <h1 class="text-xl font-bold text-center">Join a room:</h1>
        <div class="my-2 flex rounded-md shadow-sm w-72 self-center">
          <input
            type="text"
            name="room-id"
            id="room-id"
            class="p-2 flex-1 block rounded-l-md border border-blue-200 focus:border-blue-400 focus:ring-blue-400"
            placeholder="Room ID"
          />
          <button type="button" class="p-2 rounded-r-md border border-blue-200">Enter</button>
        </div>
        <div class="flex my-3">
          <hr class="flex-1 mt-3"/>
          <span class="mx-1">or</span>
          <hr class="flex-1 mt-3"/>
        </div>
        <button type="button" class="p-2 rounded-md border border-blue-200 w-fit self-center">Create a new room!</button>
      </div>
    </div>
  </div>
</template>