<template>
<div>
    <span id="loading"><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span></span>
</div>
</template>
<script>
export default {
  name: 'loadingUI'
}
</script>

<style scoped>
.invisible {
  display: none;
}
span#loading {
    display: inline-block;
    white-space: nowrap;
}
span#loading span {
    display: inline-block;
    vertical-align: middle;
}
span#loading span:nth-of-type(1) {
    -webkit-animation: animation 2s ease 0s infinite;
    animation: animation 2s ease 0s infinite;
}
span#loading span:nth-of-type(2) {
    -webkit-animation: animation 2s ease 0.1s infinite;
    animation: animation 2s ease 0.1s infinite;
}
span#loading span:nth-of-type(3) {
    -webkit-animation: animation 2s ease 0.2s infinite;
    animation: animation 2s ease 0.2s infinite;
}
span#loading span:nth-of-type(4) {
    -webkit-animation: animation 2s ease 0.3s infinite;
    animation: animation 2s ease 0.3s infinite;
}
span#loading span:nth-of-type(5) {
    -webkit-animation: animation 2s ease 0.4s infinite;
    animation: animation 2s ease 0.4s infinite;
}
span#loading span:nth-of-type(6) {
    -webkit-animation: animation 2s ease 0.5s infinite;
    animation: animation 2s ease 0.5s infinite;
}
span#loading span:nth-of-type(7) {
    -webkit-animation: animation 2s ease 0.6s infinite;
    animation: animation 2s ease 0.6s infinite;
}

@-webkit-keyframes animation {
    0% {
        margin-top: 0;
    }
    5% {
        margin-top: -1em;
    }
    10% {
        margin-top: 0;
    }
    13% {
        margin-top: -0.5em;
    }
    16% {
        margin-top: 0;
    }
    18% {
        margin-top: -0.2em;
    }
    20% {
        margin-top: 0;
    }
}

@keyframes animation {
    0% {
        margin-top: 0;
    }
    5% {
        margin-top: -1em;
    }
    10% {
        margin-top: 0;
    }
    13% {
        margin-top: -0.5em;
    }
    16% {
        margin-top: 0;
    }
    18% {
        margin-top: -0.2em;
    }
    20% {
        margin-top: 0;
    }
}
</style>
