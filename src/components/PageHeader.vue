<template>

<div class="container text-center">
    <div class="flex justify-center items-center mb-6">
        <span>Logo PlaceHolder</span>
    </div>

    <h1 class="text-3xl font-bold mb-2">
        <slot name="title"></slot>
    </h1>
    <p className="text-lg text-muted-foreground mb-2 leading-6 font-light">
        <slot name="description"></slot>
    </p>
</div>

</template>