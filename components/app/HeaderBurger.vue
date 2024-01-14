<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true })
</script>

<template>
    <div class="relative">
        <a class="target-burger" :class="modelValue && 'toggled'" @click="modelValue = !modelValue">
            <ul class="buns">
                <li class="bun"></li>
                <li class="bun"></li>
            </ul>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.target-burger li {
    display: block;
}

a.target-burger {
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

a.target-burger.toggled ul.buns li.bun {
    -webkit-transform: rotate(45deg) translateZ(0);
    transform: rotate(45deg) translateZ(0);
}

a.target-burger.toggled ul.buns li.bun:last-child {
    -webkit-transform: rotate(-45deg) translateZ(0);
    transform: rotate(-45deg) translateZ(0);
}

a.target-burger ul.buns {
    width: 1.25rem;
    height: 1.25rem;
    list-style: none;
    margin: -0.8125rem 0 0 -0.3125rem;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

a.target-burger ul.buns li.bun {
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    top: 65%;
    -webkit-transform: translateY(-3.75px) translateZ(0);
    transform: translateY(-3.75px) translateZ(0);
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
}

.dark a.target-burger ul.buns li.bun {
    background-color: #fff;
}

a.target-burger ul.buns li.bun:last-child {
    -webkit-transform: translateY(4.75px) translateZ(0);
    transform: translateY(4.75px) translateZ(0);
}
</style>
