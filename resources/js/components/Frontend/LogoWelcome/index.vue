<template>
    <div class="logo-welcome" v-if="visible">
        <svg version="1.1" id="Ð¡Ð»Ð¾Ð¹_1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200.7 188.8" style="" xml:space="preserve">

            <g id="C">
              <path class="letter c" d="M35.3,44.2c-2.1,1.4-4.6,2.1-7.2,2.1c-7.1,0-13-5.9-13-13s5.9-13,13-13c2.8,0,5.6,0.9,7.8,2.6"></path>
            </g>

            <g id="H">
                <path class="letter h_1" id="h_x5F_1" d="M43.2,47L43.2,11"></path>
                <path class="letter h_2" id="h_x5F_2" d="M61.7,47V29.5c0-7.5-5-8.9-8-9.1c-5-0.4-9,3.6-10,5.6"></path>
            </g>

            <g id="E">
                <path class="st6 letter e" d="M91.4,42.8C89,45.4,85.6,47,81.7,47c-8.9,0-13-7.1-13-14l0,0c0-6.1,4-13,12-13c5,0,12,3,12,13h-23"></path>
            </g>

            <g id="C_2">
                <path class="letter c cw" d="M118.3,44.2c-2.1,1.4-4.6,2.1-7.2,2.1c-7.1,0-13-5.9-13-13s5.9-13,13-13c2.8,0,5.6,0.9,7.8,2.6"></path>
            </g>

            <g id="K">
                <path class="letter k_1" d="M127.7,47L127.7,11"></path>
                <path class="letter k_2" d="M127.9,36.6L145.7,21"></path>
                <path class="letter k_3" d="M134.4,32.5L148.2,46.5"></path>
            </g>

            <g id="check_x5F_1_1_">
                <path id="circle_x5F_1" class="st5 circle_1" d="M181.7,26.5c1,1.7,1.6,3.6,1.8,5.6c1,8.2-4.9,15.9-13.1,16.9s-15.8-4.9-16.8-13.2
                c-1-8.2,4.9-15.9,13.1-16.9c2.3-0.3,4.6,0,6.7,0.7"></path>
                <path id="check_x5F_1" class="st6 check_1  GnXPrTcY_9" d="M146.1,20.6L166.1,39.6L180.2,26.5L180.2,26.5L181.2,25.5"></path>
            </g>

            <g id="check_x5F_2_1_">
                <path id="circle_x5F_2" class="st5 circle_2" d="M181.7,87.5c1,1.7,1.6,3.6,1.8,5.6c1,8.2-4.9,15.9-13.1,16.9c-8.2,1-15.8-4.9-16.8-13.2
                c-1-8.2,4.9-15.9,13.1-16.9c2.3-0.3,4.6,0,6.7,0.7"></path>
                <path id="check_x5F_2" class="st6  check_2 " d="M146.1,81.6L166.1,100.6L180.2,87.5L180.2,87.5L181.2,86.5"></path>
            </g>

            <g id="check_x5F_3_1_">
                <path id="circle_x5F_3" class="st5 circle_3" d="M181.7,147.5c1,1.7,1.6,3.6,1.8,5.6c1,8.2-4.9,15.9-13.1,16.9s-15.8-4.9-16.8-13.2
                c-1-8.2,4.9-15.9,13.1-16.9c2.3-0.3,4.6,0,6.7,0.7"></path>
                <path id="check_x5F_3" class="st6 check_3" d="M146.1,141.6L166.1,160.6L180.2,147.5L180.2,147.5L181.2,146.5"></path>
            </g>
        </svg>
    </div>
</template>

<script>

    function firstEnter() {
        let status = localStorage.getItem('firstEnter');
        if (status) {
            return false
        }
        localStorage.setItem('firstEnter', 'true');
        return true;
    }

    export default {
        name: "index",
        data() {
          return {
              visible: true
          }
        },
        created() {
            this.visible = firstEnter();
            if (this.visible)  {
                setTimeout(() => {
                    this.visible = false
                }, 7000)
            }
        }
    }
</script>

<style >

</style>