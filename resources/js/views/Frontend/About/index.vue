<template>

    <div class="page_about">
        <section class="heroimage__about">
            <div class="container">
                <h1>
                    A simple way to create<br>
                    and share a check-list
                </h1>

                <img src="/images/about_heroimage.png" alt="Monitor">
            </div>
        </section>

        
        <section class="adver">
            <div class="container">
                <ul>
                    <li>Simple interface
                        <div class="text">
                            We’ve tried to create a truly simple and convenient service for managing check-lists
                        </div>
                    </li>
                    <li>Time-saving
                        <div class="text">
                            It is not an obligatory step to sign in so that you can create and share a check-list.
                            It’s enough to create tasks and share a link with an executor.
                        </div>
                    </li>
                </ul>
            </div>

        </section>


        <section class="plans">
            <div class="container">
                <h2>Free and a Pro versions </h2>
                <div class="text">Basic Checko.me functional is accessible completely for free and without any
                    sign-in. Using Pro version you’ll receive additional check-lists managing interface.
                </div>

                <ul>
                    <li>
                        month
                    </li>
                    <li>
                        -30%
                        6 months
                    </li>
                    <li>
                        -50%
                        12 months
                    </li>
                </ul>

                <ul>
                    <li>
                        Free version
                        0 $ / month
                        <ul>
                            <li>Accessible with no registration</li>
                            <li>Public access to check-lists</li>
                            <li>Basic functional</li>
                        </ul>
                        <button class="button">ChOOSE</button>
                    </li>
                    <li>
                        Pro version 11,88 $
                        year
                        0,99 $ / month
                        <ul>
                            <li>Check-lists control panel</li>
                            <li>Notifications settings</li>
                            <li>Access permissions settings</li>
                            <li>PDF export and printing option</li>
                            <li>Pictures downloading and comments adding</li>
                            <li>dozens of additional functions and possibilities</li>
                        </ul>
                        <button class="button">ChOOSE</button>
                    </li>
                </ul>
            </div>
        </section>

        <section class="all_check-list">
            <div class="container">
                check    sheets created
                <h2>256 658</h2>
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
        components: {
            RegistrationForm
        }
    }
</script>
