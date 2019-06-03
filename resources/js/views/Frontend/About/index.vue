<template>

    <div class="page_about">
        <section class="heroimage__about">
            <div class="container">
                <h1>
                    A simple way to create<br>
                    and share a check-list
                </h1>

                <div class="image-wrapper">
                    <img src="/images/monitor.svg" alt="Monitor">


                    <div class="video">
                        <video autoplay muted>
                            <source src="/video/introduce.mp4">
                        </video>
                        <!--<canvas id="myCanvas" width="660" height="370"></canvas>-->
                    </div>
                </div>


            </div>
        </section>

        <section class="advantages">
            <div class="container">
                <ul>
                    <li>
                        <div class="title caption">
                            <span class="logo-icon">
                                <img src="/images/check_green.svg" alt="checko">
                            </span>
                            Simple interface
                        </div>
                        <div class="text">
                            We’ve tried to create a truly simple and convenient service for managing check-lists
                        </div>
                    </li>
                    <li>
                        <div class="title caption">
                            <span class="logo-icon">
                                <img src="/images/check_green.svg" alt="checko">
                            </span>
                            Time-saving
                        </div>
                        <div class="text">
                            It is not an obligatory step to sign in so that you can create and share a check-list.
                            It’s enough to create tasks and share a link with an executor.
                        </div>
                    </li>
                </ul>
            </div>
        </section>


        <section class="all_check-list">
            <div class="container">
                <div class="caption">
                    check<span class="logo-icon">
                    <img src="/images/check_green.svg" alt="checko">
                    </span> sheets created
                </div>

                <div class="amount">{{allList}}</div>
            </div>
        </section>

        <section class="form">
            <div class="container">
                <RegistrationForm></RegistrationForm>
            </div>
        </section>

    </div>

</template>

<script>
    import RegistrationForm from '../FormRegistration'

    export default {
        name: "index",
        data() {
          return {
              allList: 1
          }
        },
        components: {
            RegistrationForm
        },
        created() {
            axios.get('frontend/checklist/amountLst')
                .then((response) => {
                    this.allList = +response.data;
                    // videoPlay(videoSource);
                })
                .catch((error) => {
                    console.log(error);
            });

        }
    }
</script>
